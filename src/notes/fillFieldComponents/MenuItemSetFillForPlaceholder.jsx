import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lang from 'lodash';
import ValueSetManager from '../../lib/ValueSetManager';
import SingleChoiceButton from '../../forms/SingleChoiceButton';

import './MenuItemSetFillForPlaceholder.css';

class MenuItemSetFillForPlaceholder extends Component {
    constructor(props) {
        super(props);
        const { category, valueSet, args } = this.props.attributeSpec.values;
        if (args && args.length > 0) {
            this._options = ValueSetManager.getValueList(category, valueSet, ...args);
        } else {
            this._options = ValueSetManager.getValueList(category, valueSet);
        }
    }

    handleOptionSelection = (e, i) => {
        e.preventDefault();
        const newValue = this._options[i].name;
        this.props.updateValue(newValue);
    }

    renderMenuItem = (option, i) => {
        const { baseValue, baseField, attributeSpec, args, value } = this.props;

        const isSelected = value === option.name;
        const menuClassName = isSelected ? 'menu-item selected' : 'menu-item';

        // Get descriptions based on the baseField and the baseValue if they're set
        let description = '';
        if (Lang.isUndefined(baseValue)) {
            description = option.description;
        } else {
            const baseValueNameLowerCase = baseValue.toLowerCase();
            const baseFieldOptions = ValueSetManager.getValueList(attributeSpec.values.category, baseField, args);
            const baseFieldOptionsLowerCase = baseFieldOptions.map(function (elem) {
                const elemCopy = Lang.clone(elem);
                elemCopy.name = elemCopy.name.toLowerCase();
                return elemCopy;
            });
            const currentBaseField = Lang.find(baseFieldOptionsLowerCase, o => o.name === baseValueNameLowerCase);
            description = currentBaseField[option.name];
        }

        if (!description) {
            return null;
        }

        if (!this.props.showDetails) {
            const marginSize = "2px";
            return (
                <SingleChoiceButton
                    key={i}
                    buttonKey={i}
                    buttonText={option.name}
                    onClick={(e) => this.handleOptionSelection(e, i)}
                    isSelected={this.props.value === this._options[i].name}
                    marginSize={marginSize}
                />
            );
        }

        return (
            <div key={i} className={menuClassName}
                onClick={(e) => this.handleOptionSelection(e, i)}>
                <div className="menu-item-name">
                    {option.name}
                </div>
                <div className="menu-item-description">
                    {description}
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div id='menu-items'>
                    {
                        this._options.map((option, i) => {
                            return this.renderMenuItem(option, i);
                        })
                    }
                </div>
            </div>
        );
    }
}

export default MenuItemSetFillForPlaceholder;

MenuItemSetFillForPlaceholder.propTypes = {
    showDetails: PropTypes.bool.isRequired,
    attributeSpec: PropTypes.object.isRequired,
    value: PropTypes.string,
    baseField: PropTypes.string,
    baseValue: PropTypes.string,
    updateValue: PropTypes.func.isRequired,
}
