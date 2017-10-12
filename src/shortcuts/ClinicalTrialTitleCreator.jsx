import CreatorShortcut from './CreatorShortcut';
import ClinicalTrialsList from '../clinicalTrials/ClinicalTrialsList';

export default class ClinicalTrialTitleCreator extends CreatorShortcut {
    constructor(onUpdate, obj) {
        super();
        this.clinicalTrialsList = new ClinicalTrialsList(); // TODO: Consider ways to instantiate this once for the full app
    }
    
    initialize(contextManager, trigger) {
        super.initialize(contextManager, trigger);
        this.text = trigger;
        this.parentContext = contextManager.getActiveContextOfType("#clinical trial");
        this.parentContext.addChild(this);
        if (trigger !== '#title') {
            this.setText(trigger);
            this.clearValueSelectionOptions();
        }
    }
    
    onBeforeDeleted() {
        let result = super.onBeforeDeleted();
        if (result) {
            this.parentContext.setAttributeValue("title", "", false);
            this.parentContext.removeChild(this);
        }
        return result;
    }
    
    determineText(contextManager) {
        return this.clinicalTrialsList.getAllTrials().map((trial) => {
            return { key: trial.id, context: trial.name, object: trial };
        }); 
    }
    
    setText(text) {
        if (text.startsWith('#')) {
            text = text.substring(1);
        }
        super.setText(text);
        this.parentContext.setAttributeValue("title", text, false);
    }
    
    getText() {
        return `#${this.text}`;
    }
    
    getShortcutType() {
        return "#title";
    }
    
    validateInCurrentContext(contextManager) {
        let errors = [];
        if (!contextManager.isContextOfTypeActive("#clinical trial")) {
            errors.push("Clinical Trial title invalid without #clinical trial. Use #clinical trial to add a new clinical trial enrollment to your narrative.");
            return errors;
        }
        let parentContext = contextManager.getActiveContextOfType("#clinical trial");
        if (parentContext.getAttributeValue("title").length > 0) {
            errors.push("Clinical Trial title already specified. Only one title value allowed per clinical trial enrollment.");
        }
        return errors;
    }
    
    static getStringTriggers() {
        let result = [];
        const trials = new ClinicalTrialsList().getAllTrials();
        trials.forEach((val) => {
            result.push({name: `#${val.name}`, description: `${val.description}`});
        });
        result.push({ name: "#title", description: "A distinguishing word or group of words naming an item."});
        return result;
    }
    
    static getDescription() {
        return "A distinguishing word or group of words naming an item.";
    }
    
    static getShortcutGroupName() {
        return "Clinical Trial Title";
    }
}