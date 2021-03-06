import QuestionAnswer from '../shr/finding/QuestionAnswer';
import Lang from 'lodash';

class FluxQuestionAnswer {
    constructor(json) {
        this._questionAnswer = QuestionAnswer.fromJSON(json);
    }

    get entryInfo() {
        return this._questionAnswer.entryInfo;
    }

    /*
     *  Getter for FindingTopicCode coding
     *  FindingTopicCode is a CodeableConcept and this function will return the coding value
     */
    get observationCodeCoding() {
        return this._questionAnswer.findingTopicCode.value.coding[0].code;
    }

    /*
     *  Getter for FindingTopicCode DisplayText
     *  FindingTopicCode is a CodeableConcept and this function will return the displayText value
     */
    get observationCodeDisplayText() {
        return this._questionAnswer.findingTopicCode.value.coding[0].displayText.value;
    }

    /*
     *  Getter for Members
     *  Return array of references
     */
    get members() {
        if (Lang.isUndefined(this._questionAnswer.panelMembers)) return [];
        return this._questionAnswer.panelMembers.observation;
    }

    /*
     *  Getter for value
     *  Return value(currently just true/false for answer to questions)
     */
    get value() {
        return this._questionAnswer.value;
    }

    /*
     *  Getter for author
     *  Return author
     */
    get author() {
        if (this._questionAnswer.entryInfo.recordedBy) {
            return this._questionAnswer.entryInfo.recordedBy.value;
        } 
        return null;       
    }

    get relevantTime() {
        if (this._questionAnswer.relevantTime) {
            return this._questionAnswer.relevantTime.value;
        } 
        return null;      
    }

    toJSON() {
        return this._questionAnswer.toJSON();
    }
}

export default FluxQuestionAnswer;