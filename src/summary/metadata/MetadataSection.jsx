import EncounterPerformed from '../model/shr/encounter/EncounterPerformed';
import moment from 'moment';

export default class MetadataSection {
    getMetadata(preferencesManager, condition, roleType, role, specialty) {
        return null;
    }

    getKeyToxicityAndUnsignedFromCodes(patient, currentConditionEntry, codes) {
        const tox = currentConditionEntry.getToxicitiesByCodes(codes);
        let val, unsigned, source;
        if (tox.length > 0) {
            val = tox[0].adverseEventGrade;
            unsigned = patient.isUnsigned(tox[0]);
            source = this.determineSource(patient, tox[0]);
        } else {
            val = 'None';
            unsigned = false;
            source = null;
        }
        return [val, unsigned, source];
    }

    determineSource = (patient, entry) => {
        if (entry.sourceClinicalNoteReference) {
            return {
                entryId: entry.entryInfo.entryId,
                note: entry.sourceClinicalNoteReference,
            };
        }
        let result = "";
        if (entry.author && entry.informant && entry.author === entry.informant) {
            result += "Recorded and informed by " + entry.author;
        } else {
            if (entry.author) result += "Recorded by " + entry.author;
            if (entry.informant) result += (result.length > 0 ? " b" : "B") + "ased on information from " + entry.informant;
        }
        if (entry.relatedEncounterReference) {
            const relatedEncounter = patient.getEntryFromReference(entry.relatedEncounterReference);
            if (relatedEncounter instanceof EncounterPerformed) {
                result += (result.length > 0 ? " f" : "F") + "rom encounter on " + new moment(relatedEncounter.actionContext.occurrenceTimeOrPeriod.timePeriod.timePeriodStart.value, 'D MMM YYY HH:mm Z').format('D MMM YYY hh:mm a');
            } else {
                result += (result.length > 0 ? " f" : "F") + "rom encounter on " + new moment(relatedEncounter.expectedPerformanceTime, 'D MMM YYY HH:mm Z').format('D MMM YYY hh:mm a');
            }
        } else if (entry.creationTime) {
            result += (result.length > 0 ? " o" : "O") + "n " + entry.creationTime.format('D MMM YYY hh:mm a');
        } else if (entry.diagnosisDate) {
            result += (result.length > 0 ? " c" : "C") + "linically recognized on " + new moment(entry.diagnosisDate, 'D MMM YYYY').format('D MMM YYYY');
        }

        return result;
    }
}