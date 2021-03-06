import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import PatientSearch from '../patientControl/PatientSearch'
import ConditionSelection from '../summary/ConditionSelection';

import SummaryHeader from '../summary/SummaryHeader';
import './PatientControlPanel.css';

class PatientControlPanel extends Component {
    render() {
        const { patient } = this.props;
        const login = (this.props.supportLogin) ? this.props.loginUsername : "";
        const patientConditions = this.props.patient ? this.props.patient.getConditions() : [];
        const disabledClassName = this.props.isAppBlurred ? 'content-disabled' : '';
        return (
            <div className={`patient-control-panel ${disabledClassName}`}>
                <Paper className="panel-content">
                    <Grid fluid>
                        <Row middle="xs">
                            <Col xs={3} md={2}>
                                <img src="fluxnotes_logo_color.png" height="40px" width="30px" alt="Flux Notes logo" />
                                <div className="logo-accompaniment">
                                    <span className="title"> {this.props.appTitle}</span>
                                    <span className="login">{login}</span>
                                </div>
                            </Col>

                            <Col xs={5} md={4} className="summary-header-column">
                                <SummaryHeader
                                    address={patient.getCurrentHomeAddress()}
                                    administrativeSex={patient.getGender()}
                                    age={patient.getAge()}
                                    clinicalEvent={this.props.clinicalEvent}
                                    dateOfBirth={patient.getDateOfBirth()}
                                    layout={this.props.layout}
                                    mrn={patient.getMRN()}
                                    patientConditions={patientConditions}
                                    patientName={patient.getName()}
                                    photo={patient.getMostRecentPhoto()}
                                    possibleClinicalEvents={this.props.possibleClinicalEvents}
                                    setCondition={this.props.setCondition}
                                    setLayout={this.props.setLayout}
                                />
                            </Col>

                            <Col xs={6} md={6}>
                                <Row bottom="xs" className="vertical-divider">
                                    <Col xs={12} md={6}>
                                        <div id="condition-selection-container">
                                            <ConditionSelection
                                                conditions={patientConditions}
                                                setCondition={this.props.setCondition}
                                            />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <PatientSearch
                                            highlightedSearchSuggestion={this.props.highlightedSearchSuggestion}
                                            moveTargetedDataPanelToSubsection={this.props.moveTargetedDataPanelToSubsection}
                                            patient={this.props.patient}
                                            setSearchSelectedItem={this.props.setSearchSelectedItem}
                                            searchIndex={this.props.searchIndex}
                                            setSearchSuggestions={this.props.setSearchSuggestions}
                                            setHighlightedSearchSuggestion={this.props.setHighlightedSearchSuggestion}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

PatientControlPanel.propTypes = {
    appTitle: PropTypes.string.isRequired,
    clinicalEvent: PropTypes.string.isRequired,
    isAppBlurred: PropTypes.bool,
    layout: PropTypes.string,
    patient: PropTypes.object.isRequired,
    possibleClinicalEvents: PropTypes.array.isRequired,
    setCondition: PropTypes.func.isRequired,
    setLayout: PropTypes.func.isRequired,
    setSearchSelectedItem: PropTypes.func.isRequired,
    supportLogin: PropTypes.bool.isRequired,
    searchIndex: PropTypes.object.isRequired,
    setSearchSuggestions: PropTypes.func,
};

export default PatientControlPanel;
