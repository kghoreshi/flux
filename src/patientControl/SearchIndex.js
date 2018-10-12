import Lang from 'lodash';
import elasticlunr from 'elasticlunr';

function escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

class SearchIndex {
    constructor() {
        this._searchableData = [];
        elasticlunr.clearStopWords();
        this._index = elasticlunr(function() {
            this.addField('section');
            this.addField('subsection');
            this.addField('valueTitle');
            this.addField('value');
            this.setRef('id');
            this.saveDocument(true);
        });
    }

    get searchableData() {
        return Lang.uniqWith(this._searchableData, Lang.isEqual);
    }

    addSearchableData(data) {
        const existingDocument = this._index.documentStore.getDoc(data.id);
        if (Lang.isNull(existingDocument) || !Lang.isEqual(data, existingDocument)) {
            this._index.addDoc({...data});
        }
    }

    removeDataBySection(section) {
        for(let id in this._index.documentStore.docs) {
            if (this._index.documentStore.getDoc(id).section === section) {
                this.removeDataByRef(id);
            }
        }
    }

    removeDataByRef(ref) {
        this._index.removeDocByRef(ref);
    }

    hasDocument(ref) {
        return this._index.documentStore.hasDoc(ref);
    }

    search(query) {
        let suggestions = [];
        let openNoteSuggestions = [];
        this._index.search(query, {
            fields: {
                valueTitle: {
                    expand: true
                },
                value: {
                    expand: true
                }
            }
        }).forEach(result => {
            let doc = this._index.documentStore.getDoc(result.ref);
            doc.score = result.score;
            // Search the content of the open note
            if (doc.section === "Open Note" && doc.valueTitle === "Content") {
                const regex = new RegExp(escapeRegExp(query), "gim");
                let contentMatches = regex.exec(doc.value);
                while (contentMatches ) {
                    let tempDoc = Lang.cloneDeep(doc);
                    tempDoc.indices = [contentMatches.index, contentMatches.index + query.length - 1];
                    openNoteSuggestions.push(tempDoc);
                    contentMatches = regex.exec(doc.value);
                }
            } else {
                suggestions.push(doc);
            }
        });
        // Present open note suggestions first, then regular suggestions
        return openNoteSuggestions.concat(suggestions);
    }
}

export default SearchIndex;