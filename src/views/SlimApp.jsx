import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import NavBar from '../nav/NavBar';
import FormList from '../forms/FormList';
import ShortcutViewer from '../viewer/ShortcutViewer';
import ShortcutManager from '../shortcuts/ShortcutManager';
import Lang from 'lodash'
import './SlimApp.css';

class SlimApp extends Component {
    constructor(props) {
        super(props);

        this.shortcuts = [ "#progression", "#toxicity" ];
        this.shortcutManager = new ShortcutManager(this.shortcuts);

        this.state = {
            currentShortcut: null
        };
    }

    /* 
     * Change the current shortcut to be the new type of shortcut  
     */
    changeShortcut = (shortcutType) => {
        const newShortcut = (Lang.isNull(shortcutType)) ? null : this.shortcutManager.createShortcut("#" + shortcutType.toLowerCase(), this.handleShortcutUpdate);
        this.setState({
            currentShortcut: newShortcut
        });
    }

    /* 
     * When updating the shortcut, make sure to setState with the new value
     */
    handleShortcutUpdate = (s) => {
        (s !== "") && this.setState({currentShortcut: s});
    }

    render() {
        return (
                <div className="SlimApp">
                    <NavBar title="Flux Notes Lite" supportLogin={false}/>
                    <Grid className="SlimApp-content" fluid>
                        <div id="forms-panel">
                            <Row center="xs">
                                <Col className="no-padding" xs={3}>
                                    {/*No need for formsearch right now*/}
                                    {/*<FormSearch />*/}
                                    <FormList
                                        shortcuts={['About Flux Notes Lite', 'Progression', 'Toxicity']}
                                        currentShortcut={this.state.currentShortcut}
                                        changeShortcut={this.changeShortcut}
                                    />
                                </Col>
                                <Col className="no-padding" xs={9}>
                                    <ShortcutViewer
                                        currentShortcut={this.state.currentShortcut}
                                        onShortcutUpdate={this.handleShortcutUpdate}
                                    />
                                </Col>
                            </Row>
                        </div>
                    </Grid>
                </div>
        );
    }
}

export default SlimApp;
