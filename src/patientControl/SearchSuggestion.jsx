import React from 'react';
import PropTypes from 'prop-types';
// import FontAwesome from 'react-fontawesome';
import { MenuItem } from 'material-ui/Menu';
import './SearchSuggestion.css';


class SearchSuggestion extends React.Component {
    openNote = (note) => { 
        this.props.setFullAppState('searchSelectedItem', note);
        this.props.selectItem('');
    }

    render() { 
        const { suggestion, index, itemProps, highlightedIndex, selectedItem } = this.props;
        const isHighlighted = highlightedIndex === index;
        const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;

        const fullSnapshot = suggestion.contentSnapshot;
        const inputValue = suggestion.inputValue;
        // Lowercase versions for index finding
        const fullSnapshotLowerCase = fullSnapshot.toLowerCase();
        const inputValueLowerCase = inputValue.toLowerCase();
        const indexOfMatch = fullSnapshotLowerCase.indexOf(inputValueLowerCase);
        // Slice original copies for highlighting
        const preText = fullSnapshot.slice(0, indexOfMatch);
        const highlightedText = fullSnapshot.slice(indexOfMatch, preText.length + inputValue.length)
        const postText = fullSnapshot.slice(preText.length + inputValue.length, fullSnapshot.length);
        
        let suggestionText = '';
        // highlight inputValue
        if(suggestion.matchedOn === "contentSnapshot") { 
            suggestionText = (
                <div className="suggestion-text">
                    <span>{preText}</span>
                    <span className="highlightedInputValue">{highlightedText}</span>
                    <span>{postText}</span>
                </div>
            )
        } else { 
            suggestionText = (
                <span className="suggestion-text">{suggestion.contentSnapshot}</span> 
            );
        }

        return (
            <MenuItem
                {...itemProps}
                selected={isHighlighted}
                component="div"
                onClick={() => this.openNote(suggestion.note)}
                style={{
                    fontWeight: isSelected ? 500 : 400,
                    height: "100%",
                }}
            >
                <div className="suggestion-label">
                    <span className={"label-content " + (suggestion.matchedOn === "date" ? "highlightedInputValue" : "")}>{suggestion.date}</span>
                    <span className={"label-content " + (suggestion.matchedOn === "subject" ? "highlightedInputValue" : "")}>{suggestion.subject}</span>
                    <span className={"label-content " + (suggestion.matchedOn === "hospital" ? "highlightedInputValue" : "")}>{suggestion.hospital}</span>
                </div> 
                <span className="dividing-line"></span>
                {suggestionText} 
            </MenuItem>
        );
    }
}

SearchSuggestion.propTypes = {
    highlightedIndex: PropTypes.number,
    index: PropTypes.number,
    itemProps: PropTypes.object,
    selectedItem: PropTypes.string,
    selectItem: PropTypes.func.isRequired,
    suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired,
    setFullAppState: PropTypes.func.isRequired,
};

export default SearchSuggestion;