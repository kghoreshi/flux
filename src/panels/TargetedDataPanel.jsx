import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import TargetedDataSubpanel from '../summary/TargetedDataSubpanel';
import Minimap from '../lib/react-minimap/react-minimap.js';
import '../lib/react-minimap/react-minimap.css'
import './TargetedDataPanel.css';

export default class TargetedDataPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sectionsToDisplay: []
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.targetedDataPanelSize !== this.props.targetedDataPanelSize) {
            this.forceUpdate();
        }
    }

    doneEditingMinimap = () => {
        // const conditionMetadata = this.getConditionMetadata();
        let { sectionsToDisplay } = this.state;

        sectionsToDisplay = sectionsToDisplay.filter((section) => {
            const preferenceManagerVisibleSettings = this.props.preferenceManager.getPreference('visibleSections');
            let currentSectionVisible = true;
            if (!_.isNull(preferenceManagerVisibleSettings) && !_.isUndefined(preferenceManagerVisibleSettings[section.name])) {
                currentSectionVisible = preferenceManagerVisibleSettings[section.name];
            }

            return currentSectionVisible;
        });
        this.setState({ sectionsToDisplay });
    }

    startEditingMinimap = () => {
        const conditionMetadata = this.getConditionMetadata();
        const allSections = conditionMetadata.sections;
        this.setState({ sectionsToDisplay: allSections });
    }

    moveToSection(sectionName) {
        return this.minimap.moveToSection(sectionName);
    }

    moveToSubsection(sectionName, subsectionName) {
        if (this.minimap) {
            return this.minimap.moveToSubsection(sectionName, subsectionName);
        }
    }

    moveToSubsectionFromSearch(suggestion) {
        this.moveToSubsection(suggestion.section, suggestion.subsection);
    }
    
    getConditionMetadata() {
        const { loginUser } = this.props;
        const summaryMetadata = this.props.summaryMetadata.getMetadata();
        const condition = this.props.appState.condition;
        let codeSystem, code, conditionMetadata = null;

        if (condition != null) {
            codeSystem = condition.codeSystem;
            code = condition.code;
            const conditionType = `${codeSystem}/${code}`;
            const userType = `${loginUser.getRoleType()}/${loginUser.getRole()}/${loginUser.getSpecialty()}`;
            conditionMetadata = summaryMetadata[userType + "/" + conditionType];
            if (conditionMetadata == null) {
                conditionMetadata = summaryMetadata[conditionType];
            }
        }

        if (condition == null || conditionMetadata == null) {
            conditionMetadata = summaryMetadata["default"];
        }

        return conditionMetadata;
    }

    reorderSections = (oldIndex, newIndex) => {
        const { sectionsToDisplay } = this.state;

        // Out of bounds, can't move section up or down
        if (newIndex < 0 || newIndex >= sectionsToDisplay.length) return;

        const movedSection = sectionsToDisplay.find((_, index) => index === oldIndex);
        const remainingSections = sectionsToDisplay.filter((_, index) => index !== oldIndex);

        const newSectionsToDisplay = [
            ...remainingSections.slice(0, newIndex),
            movedSection,
            ...remainingSections.slice(newIndex)
        ];

        newSectionsToDisplay.forEach((section, i) => section.index = i);

        this.setState({
            sectionsToDisplay: newSectionsToDisplay,
        });
    }

    render () {
        // The css data attribute associated with the minimap
        const minimapAttribute = 'data-test-summary-section';
        const shortTitleAttribute = 'data-minimap-short-title';
        const conditionMetadata = this.getConditionMetadata();

        let sectionsToDisplay = this.state.sectionsToDisplay;
        if (sectionsToDisplay.length === 0) {
            sectionsToDisplay = conditionMetadata.sections.filter((section) => {
                const preferenceManagerVisibleSettings = this.props.preferenceManager.getPreference('visibleSections');
                let currentSectionVisible = true;
                if (!_.isNull(preferenceManagerVisibleSettings) && !_.isUndefined(preferenceManagerVisibleSettings[section.name])) {
                    currentSectionVisible = preferenceManagerVisibleSettings[section.name];
                }

                return currentSectionVisible;
            });

            // Assign each section their index
            sectionsToDisplay.forEach((section, i) => {
                section.index = i;
            });
        }

        if (conditionMetadata && conditionMetadata.sections.length > 1) {
            return (
                <div className="targeted-data-panel">
                    <Minimap
                        selector={`[${minimapAttribute}]`}
                        className="fitted-panel"
                        titleAttribute={minimapAttribute}
                        shortTitleAttribute={shortTitleAttribute}
                        width={80}
                        isFullHeight={true}
                        ref={(minimap) => { this.minimap = minimap; }}
                        preferenceManager={this.props.preferenceManager}
                        doneEditingMinimap={this.doneEditingMinimap}
                        startEditingMinimap={this.startEditingMinimap}
                        reorderSections={this.reorderSections}
                    >
                        <div id="summary-subpanel">
                            <div className="summary-section">
                                <TargetedDataSubpanel
                                    actions={this.props.actions}
                                    forceRefresh={this.props.forceRefresh}
                                    allowItemClick={this.props.isNoteViewerEditable}
                                    clinicalEvent={this.props.appState.clinicalEvent}
                                    condition={this.props.appState.condition}
                                    isWide={this.props.isWide}
                                    loginUser={this.props.loginUser}
                                    preferenceManager={this.props.preferenceManager}
                                    patient={this.props.appState.patient} 
                                    setForceRefresh={this.props.setForceRefresh}                                                              
                                    conditionMetadata={conditionMetadata}
                                    sectionsToDisplay={sectionsToDisplay}
                                    searchIndex={this.props.searchIndex}
                                    moveToSubsectionFromSearch={this.moveToSubsectionFromSearch.bind(this)}
                                    />
                            </div>
                        </div>
                    </Minimap>
                </div>
            );    
        } else {
            return (
                <div className="targeted-data-panel">
                    <div id="summary-subpanel">
                        <div className="summary-section">
                            <TargetedDataSubpanel
                                className="targeted-data-subpanel-no-minimap"
                                actions={this.props.actions}
                                forceRefresh={this.props.forceRefresh}
                                allowItemClick={this.props.isNoteViewerEditable}
                                clinicalEvent={this.props.appState.clinicalEvent}
                                condition={this.props.appState.condition}
                                isWide={this.props.isWide}
                                loginUser={this.props.loginUser}
                                preferenceManager={this.props.preferenceManager}
                                patient={this.props.appState.patient} 
                                setForceRefresh={this.props.setForceRefresh}                                                              
                                conditionMetadata={conditionMetadata}
                                sectionsToDisplay={sectionsToDisplay}
                                searchIndex={this.props.searchIndex}
                                moveToSubsectionFromSearch={this.moveToSubsectionFromSearch.bind(this)}
                                />
                        </div>
                    </div>
                </div>
            );    
        }
    }
}

TargetedDataPanel.proptypes = {
    actions: PropTypes.array.isRequired,
    appState: PropTypes.shape({
        patient: PropTypes.object.isRequired,
        clinicalEvent: PropTypes.object.isRequired,
        condition: PropTypes.object,
    }).isRequired,
    forceRefresh: PropTypes.bool,
    isNoteViewerEditable: PropTypes.bool.isRequired,
    isTargetedDataSubpanelVisible: PropTypes.bool,
    isWide: PropTypes.bool.isRequired,
    loginUser: PropTypes.object.isRequired,
    preferenceManager: PropTypes.object.isRequired,
    summaryMetadata: PropTypes.object.isRequired,
    setForceRefresh: PropTypes.func.isRequired,
    targetedDataPanelSize: PropTypes.string.isRequired,
    searchIndex: PropTypes.object.isRequired,
}
