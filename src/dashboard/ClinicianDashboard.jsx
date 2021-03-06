import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TargetedDataPanel from '../panels/TargetedDataPanel';
import NotesPanel from '../panels/NotesPanel';
import './ClinicianDashboard.css';

export default class ClinicianDashboard extends Component {
    constructor() {
        super();
        
        this.state = {
            targetedDataPanelSize: "default",
            notesPanelSize: "default"
        };
    }

    // Performs any initialization that needs to happen when the component mounts, specifically:
    // - Set layout to the task's default if there's a task and no layout to start.
    componentWillMount = () => {
        const currentClinicalEvent = this.props.appState.clinicalEvent;
        const currentLayout = this.props.appState.layout;

        if (!currentLayout && currentClinicalEvent) {
            this.changeLayoutBasedOnClinicalEvent(currentClinicalEvent);
            this.noteViewerBasedOnClinicalEvent(currentClinicalEvent);
            this.noteEditableBasedOnClinicalEvent(currentClinicalEvent);
        } else if (currentLayout && currentClinicalEvent) {
            this.initializePanelSizesBasedOnLayout(currentLayout);
        }
    }

    // Performs any updates based on changes to the state, specifically:
    // - Updates the layout when the task changes.
    componentWillReceiveProps = (nextProps) => {
        // If the clinical event has changed, update the layout and if the note editor should be viewable and editable
        // based on the clinical event
        if (nextProps.appState.clinicalEvent !== this.props.appState.clinicalEvent) {
            this.changeLayoutBasedOnClinicalEvent(nextProps.appState.clinicalEvent);
            this.noteViewerBasedOnClinicalEvent(nextProps.appState.clinicalEvent);
            this.noteEditableBasedOnClinicalEvent(nextProps.appState.clinicalEvent);
        }
        if (nextProps.appState.layout !== this.props.appState.layout) {
            this.initializePanelSizesBasedOnLayout(nextProps.appState.layout)
        }
    }

    // Updates the layout value based on the current clinical event
    changeLayoutBasedOnClinicalEvent = (clinicalEvent) => {
        switch (clinicalEvent) {
            case "pre-encounter":
                this.props.setLayout("right-collapsed");
                break;
            case "encounter":
                this.props.setLayout("left-collapsed");
                break;
            case "post-encounter":
                this.props.setLayout("split");
                break;
            default:
                this.props.setLayout('');
        }
    }

    // Based on a currentLayout, set a default panel size
    initializePanelSizesBasedOnLayout = (currentLayout) => {
        let newTargetedDataPanelSize = "";
        let newNotesPanelSize = "";
        switch (currentLayout) {
            case "left-collapsed":
                newTargetedDataPanelSize = "25%";
                newNotesPanelSize = "75%";
                break;
            case "right-collapsed":
                newTargetedDataPanelSize = "75%";
                newNotesPanelSize = "25%";
                break;
            case "split":
                newTargetedDataPanelSize = "40%";
                newNotesPanelSize = "60%";
                break;
            default:
                newTargetedDataPanelSize = "40%";
                newNotesPanelSize = "60%";
        }

        this.setState({
            "targetedDataPanelSize": newTargetedDataPanelSize,
            "notesPanelSize": newNotesPanelSize,
        });
    }

    // Based on currentClinicalEvent, determines if a note should be viewed
    noteViewerBasedOnClinicalEvent = (currentClinicalEvent) => {
        switch (currentClinicalEvent) {
            case "pre-encounter":
                this.props.setNoteViewerVisible(false);
                break;
            case "encounter":
                this.props.setNoteViewerVisible(true);
                break;
            case "post-encounter":
                this.props.setNoteViewerVisible(true);
                break;
            default:
                console.warn(`The task provided, ${currentClinicalEvent}, does not have a defined noteViewerBasedOnClinicalEvent value.`);
                this.props.setNoteViewerVisible(false);
                return;
        }
    }

    // Based on currentClinicalEvent, determines if a note should be editable
    noteEditableBasedOnClinicalEvent = (currentClinicalEvent) => {
        switch (currentClinicalEvent) {
            case "pre-encounter":
                this.props.setNoteViewerEditable(false);
                break;
            case "encounter":
                this.props.setNoteViewerEditable(true);
                break;
            case "post-encounter":
                this.props.setNoteViewerEditable(true);
                break;
            default:
                console.warn(`The task provided, ${currentClinicalEvent}, does not have a defined noteEditableBasedOnClinicalEvent value.`);
                this.props.setNoteViewerEditable(false);
                return;
        }
    }

    // Based on currentLayout, determines if the targetedDataSubpanel should be visible.
    isTargetedDataSubpanelVisible = (currentLayout) => {
        switch (currentLayout) {
            case "left-collapsed":
                return false;
            case "right-collapsed":
                return true;
            case "split":
                return true;
            default:
                // console.warn(`The layout provided, ${currentLayout}, does not have a defined isTargetedDataSubpanelVisibile value.`);
                return true;
        }
    }

    moveTargetedDataPanelToSection = (sectionName) => {
        return this.targetedDataPanel.moveToSection(sectionName);
    }

    moveTargetedDataPanelToSubsection = (sectionName, subsectionName) => {
        return this.targetedDataPanel.moveToSubsection(sectionName, subsectionName);
    }

    insertStructuredPhraseInCurrentNote = (data, source) => {
        return this.notesPanel.insertStructuredPhraseInCurrentNote(data, source);
    }

    render() {
        const currentLayout = this.props.appState.layout;
        const isNoteViewerVisible = this.props.appState.isNoteViewerVisible;
        const isNoteViewerEditable = this.props.appState.isNoteViewerEditable;

        const targetedDataPanelStyles = {
            "width": this.state.targetedDataPanelSize,
            "WebkitTransition": "width .5s", /* Safari */
            "transition": "width .5s",
        };
        const notesPanelStyles = {
            "width": this.state.notesPanelSize,
            "WebkitTransition": "width .5s", /* Safari */
            "transition": "width .5s",
        };

        const isTargetedDataSubpanelVisible = this.isTargetedDataSubpanelVisible(currentLayout);
        const isTargetedDataPanelWide = (parseFloat(this.state.targetedDataPanelSize) > 60);

        return (
            <div id="clinician-dashboard-content" style={{display: "flex"}}>
                <div className="right-border-box" style={targetedDataPanelStyles}>
                    <TargetedDataPanel
                        actions={this.props.actions}
                        appState={this.props.appState}
                        forceRefresh={this.props.forceRefresh}
                        highlightedSearchSuggestion={this.props.highlightedSearchSuggestion}
                        isAppBlurred={this.props.isAppBlurred}
                        isNoteViewerEditable={isNoteViewerEditable}
                        isTargetedDataSubpanelVisible={isTargetedDataSubpanelVisible}
                        isWide={isTargetedDataPanelWide}
                        loginUser={this.props.loginUser}
                        preferenceManager={this.props.preferenceManager}
                        ref={(tdp) => { this.targetedDataPanel = tdp; }}
                        summaryMetadata={this.props.summaryMetadata}
                        setForceRefresh={this.props.setForceRefresh}
                        searchIndex={this.props.searchIndex}
                        searchSuggestions={this.props.searchSuggestions}
                        setAppBlur={this.props.setAppBlur}
                        setHighlightedSearchSuggestion={this.props.setHighlightedSearchSuggestion}
                        targetedDataPanelSize={this.state.targetedDataPanelSize}
                    />
                </div>
                <div style={notesPanelStyles}>
                    <NotesPanel
                        contextManager={this.props.contextManager}
                        currentViewMode={this.props.appState.clinicalEvent}
                        dataAccess={this.props.dataAccess}
                        errors={this.props.appState.errors}
                        handleSummaryItemSelected={this.props.handleSummaryItemSelected}
                        highlightedSearchSuggestion={this.props.highlightedSearchSuggestion}
                        isAppBlurred={this.props.isAppBlurred}
                        isNoteViewerEditable={isNoteViewerEditable}
                        isNoteViewerVisible={isNoteViewerVisible}
                        itemInserted={this.props.itemInserted}
                        loginUsername={this.props.loginUser.getUserName()}
                        newCurrentShortcut={this.props.newCurrentShortcut}
                        noteClosed={this.props.appState.noteClosed}
                        openClinicalNote={this.props.appState.openClinicalNote}
                        openSourceNoteEntryId={this.props.openSourceNoteEntryId}
                        patient={this.props.appState.patient}
                        ref={(np) => { this.notesPanel = np; }}
                        searchIndex={this.props.searchIndex}
                        searchSelectedItem={this.props.searchSelectedItem}
                        searchSuggestions={this.props.searchSuggestions}
                        setForceRefresh={this.props.setForceRefresh}
                        setFullAppStateWithCallback={this.props.setFullAppStateWithCallback}
                        setHighlightedSearchSuggestion={this.props.setHighlightedSearchSuggestion}
                        setLayout={this.props.setLayout}
                        setNoteClosed={this.props.setNoteClosed}
                        setNoteViewerEditable={this.props.setNoteViewerEditable}
                        setNoteViewerVisible={this.props.setNoteViewerVisible}
                        setOpenClinicalNote={this.props.setOpenClinicalNote}
                        setOpenSourceNoteEntryId={this.props.setOpenSourceNoteEntryId}
                        setSearchSelectedItem={this.props.setSearchSelectedItem}
                        shortcutManager={this.props.shortcutManager}
                        structuredFieldMapManager={this.props.structuredFieldMapManager}
                        summaryItemToInsert={this.props.appState.summaryItemToInsert}
                        summaryItemToInsertSource={this.props.appState.summaryItemToInsertSource}
                        updateErrors={this.props.updateErrors}
                    />
                </div>
            </div>
        );
    }
}

ClinicianDashboard.propTypes = {
    actions: PropTypes.array.isRequired,
    appState: PropTypes.object.isRequired,
    contextManager: PropTypes.object.isRequired,
    dataAccess: PropTypes.object.isRequired,
    forceRefresh: PropTypes.bool,
    handleSummaryItemSelected: PropTypes.func.isRequired,
    highlightedSearchSuggestion: PropTypes.object,
    isAppBlurred: PropTypes.bool,
    itemInserted: PropTypes.func.isRequired,
    loginUser: PropTypes.object.isRequired,
    preferenceManager: PropTypes.object.isRequired,
    newCurrentShortcut: PropTypes.func.isRequired,
    onContextUpdate: PropTypes.func.isRequired,
    openSourceNoteEntryId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    possibleClinicalEvents: PropTypes.array.isRequired,
    searchSelectedItem: PropTypes.object,
    setAppBlur: PropTypes.func,
    setForceRefresh: PropTypes.func.isRequired,
    setFullAppStateWithCallback: PropTypes.func.isRequired,
    setLayout: PropTypes.func.isRequired,
    setNoteClosed: PropTypes.func.isRequired,
    setNoteViewerEditable: PropTypes.func.isRequired,
    setNoteViewerVisible: PropTypes.func.isRequired,
    setOpenClinicalNote: PropTypes.func.isRequired,
    setOpenSourceNotEntryId: PropTypes.func,
    setSearchSelectedItem: PropTypes.func.isRequired,
    shortcutManager: PropTypes.object.isRequired,
    structuredFieldMapManager: PropTypes.object,
    summaryMetadata: PropTypes.object.isRequired,
    updateErrors: PropTypes.func.isRequired,
    searchIndex: PropTypes.object.isRequired,
    searchSuggestions: PropTypes.array
};
