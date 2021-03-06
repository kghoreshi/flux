import FluxEstrogenReceptorStatus from './FluxEstrogenReceptorStatus';
import FluxHER2ReceptorStatus from './FluxHER2ReceptorStatus';
import FluxHistologicGrade from './FluxHistologicGrade';
import FluxProgesteroneReceptorStatus from './FluxProgesteroneReceptorStatus';
import FluxSolidTumorCancer from './FluxSolidTumorCancer';
import FluxTumorDimensions from '../oncology/FluxTumorDimensions';
import CancerDisorder from '../mcode/CancerDisorder';

class FluxBreastCancer extends FluxSolidTumorCancer {
    constructor(json, patientRecord) {
        super();
        this._patientRecord = patientRecord;
        this._condition = CancerDisorder.fromJSON(json);
    }

    getMostRecentERReceptorStatus() {
        return this._getMostRecentReceptorStatus(FluxEstrogenReceptorStatus);
    }

    getMostRecentPRReceptorStatus() {
        return this._getMostRecentReceptorStatus(FluxProgesteroneReceptorStatus);
    }

    getMostRecentHER2ReceptorStatus() {
        return this._getMostRecentReceptorStatus(FluxHER2ReceptorStatus);
    }

    /**
     *  function to build HPI Narrative
     *  Starts with initial summary of patient information
     *  Then details chronological history of patient's procedures, medications, and most recent progression
     */
    buildHpiNarrative(patient) {
        let hpiText = this.buildInitialPatientDiagnosisPreamble(patient);
        
        // Laterality
        if (this.laterality) {
            hpiText += ` Breast cancer diagnosed in ${this.laterality} breast.`;
        }

        // Staging
        const staging = this.getMostRecentStaging();
        if (staging && staging.stage) {
            hpiText += ` Stage ${staging.stage} ${staging.t_Stage} ${staging.n_Stage} ${staging.m_Stage} disease.`;
        }

        // Tumor Size and HistologicGrade
        const tumorSize = this.getObservationsOfType(FluxTumorDimensions);
        const histologicGrade = this.getObservationsOfType(FluxHistologicGrade);
        if (tumorSize.length > 0) {
            hpiText += ` Primary tumor size ${tumorSize[0].quantity.number} ${tumorSize[0].quantity.unit}.`;
        }
        if (histologicGrade.length > 0) {
            hpiText += ` Histological grade ${histologicGrade[0].grade}.`;
        }

        // ER, PR, HER2
        const erStatus = this.getMostRecentERReceptorStatus();
        const prStatus = this.getMostRecentPRReceptorStatus();
        const her2Status = this.getMostRecentHER2ReceptorStatus();
        if (erStatus) {
            hpiText += ` Estrogen receptor was ${erStatus.status}.`;
        }
        if (prStatus) {
            hpiText += ` Progesteron receptor was ${prStatus.status}.`;
        }
        if (her2Status) {
            hpiText += ` HER2 was ${her2Status.status}.`;
        }

        hpiText = this.buildEventNarrative(hpiText, patient, this.code);
        
        return hpiText;
    }

    toJSON() {
        return this._condition.toJSON();
    }
}

export default FluxBreastCancer;