import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import ActionPerformed from '../base/ActionPerformed';

/**
 * Generated class for shr.medication.MedicationChange.
 * @extends ActionPerformed
 */
class MedicationChange extends ActionPerformed {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
  }

  /**
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {MedicationChange} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the TopicCode.
   * @returns {TopicCode} The shr.base.TopicCode
   */
  get topicCode() {
    return this._topicCode;
  }

  /**
   * Set the TopicCode.
   * This field/value is required.
   * @param {TopicCode} topicCode - The shr.base.TopicCode
   */
  set topicCode(topicCode) {
    this._topicCode = topicCode;
  }

  /**
   * Set the TopicCode and return 'this' for chaining.
   * This field/value is required.
   * @param {TopicCode} topicCode - The shr.base.TopicCode
   * @returns {MedicationChange} this.
   */
  withTopicCode(topicCode) {
    this.topicCode = topicCode; return this;
  }

  /**
   * Get the Reason array.
   * @returns {Array<Reason>} The shr.base.Reason array
   */
  get reason() {
    return this._reason;
  }

  /**
   * Set the Reason array.
   * @param {Array<Reason>} reason - The shr.base.Reason array
   */
  set reason(reason) {
    this._reason = reason;
  }

  /**
   * Set the Reason array and return 'this' for chaining.
   * @param {Array<Reason>} reason - The shr.base.Reason array
   * @returns {MedicationChange} this.
   */
  withReason(reason) {
    this.reason = reason; return this;
  }

  /**
   * Get the MedicationBeforeChange array.
   * @returns {Array<MedicationBeforeChange>} The shr.medication.MedicationBeforeChange array
   */
  get medicationBeforeChange() {
    return this._medicationBeforeChange;
  }

  /**
   * Set the MedicationBeforeChange array.
   * @param {Array<MedicationBeforeChange>} medicationBeforeChange - The shr.medication.MedicationBeforeChange array
   */
  set medicationBeforeChange(medicationBeforeChange) {
    this._medicationBeforeChange = medicationBeforeChange;
  }

  /**
   * Set the MedicationBeforeChange array and return 'this' for chaining.
   * @param {Array<MedicationBeforeChange>} medicationBeforeChange - The shr.medication.MedicationBeforeChange array
   * @returns {MedicationChange} this.
   */
  withMedicationBeforeChange(medicationBeforeChange) {
    this.medicationBeforeChange = medicationBeforeChange; return this;
  }

  /**
   * Get the MedicationAfterChange array.
   * @returns {Array<MedicationAfterChange>} The shr.medication.MedicationAfterChange array
   */
  get medicationAfterChange() {
    return this._medicationAfterChange;
  }

  /**
   * Set the MedicationAfterChange array.
   * @param {Array<MedicationAfterChange>} medicationAfterChange - The shr.medication.MedicationAfterChange array
   */
  set medicationAfterChange(medicationAfterChange) {
    this._medicationAfterChange = medicationAfterChange;
  }

  /**
   * Set the MedicationAfterChange array and return 'this' for chaining.
   * @param {Array<MedicationAfterChange>} medicationAfterChange - The shr.medication.MedicationAfterChange array
   * @returns {MedicationChange} this.
   */
  withMedicationAfterChange(medicationAfterChange) {
    this.medicationAfterChange = medicationAfterChange; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationChange class.
   * The JSON must be valid against the MedicationChange JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationChange} An instance of MedicationChange populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new MedicationChange();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the MedicationChange class to a JSON object.
   * The JSON is expected to be valid against the MedicationChange JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/medication/MedicationChange' };
    if (this.topicCode != null) {
      inst['TopicCode'] = typeof this.topicCode.toJSON === 'function' ? this.topicCode.toJSON() : this.topicCode;
    }
    if (this.category != null) {
      inst['Category'] = typeof this.category.toJSON === 'function' ? this.category.toJSON() : this.category;
    }
    if (this.patient != null) {
      inst['Patient'] = typeof this.patient.toJSON === 'function' ? this.patient.toJSON() : this.patient;
    }
    if (this.encounter != null) {
      inst['Encounter'] = typeof this.encounter.toJSON === 'function' ? this.encounter.toJSON() : this.encounter;
    }
    if (this.reason != null) {
      inst['Reason'] = this.reason.map(f => f.toJSON());
    }
    if (this.occurrenceTimeOrPeriod != null) {
      inst['OccurrenceTimeOrPeriod'] = typeof this.occurrenceTimeOrPeriod.toJSON === 'function' ? this.occurrenceTimeOrPeriod.toJSON() : this.occurrenceTimeOrPeriod;
    }
    if (this.participation != null) {
      inst['Participation'] = this.participation.map(f => f.toJSON());
    }
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
    }
    if (this.method != null) {
      inst['Method'] = typeof this.method.toJSON === 'function' ? this.method.toJSON() : this.method;
    }
    if (this.relatedRequest != null) {
      inst['RelatedRequest'] = this.relatedRequest.map(f => f.toJSON());
    }
    if (this.facility != null) {
      inst['Facility'] = typeof this.facility.toJSON === 'function' ? this.facility.toJSON() : this.facility;
    }
    if (this.outcome != null) {
      inst['Outcome'] = typeof this.outcome.toJSON === 'function' ? this.outcome.toJSON() : this.outcome;
    }
    if (this.medicationBeforeChange != null) {
      inst['MedicationBeforeChange'] = this.medicationBeforeChange.map(f => f.toJSON());
    }
    if (this.medicationAfterChange != null) {
      inst['MedicationAfterChange'] = this.medicationAfterChange.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Serializes an instance of the MedicationChange class to a FHIR object.
   * The FHIR is expected to be valid against the MedicationChange FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'DomainResource';
    if (this.topicCode != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.topicCode.toFHIR === 'function' ? this.topicCode.toFHIR(true) : this.topicCode);
    }
    if (this.category != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.category.toFHIR === 'function' ? this.category.toFHIR(true) : this.category);
    }
    if (this.patient != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.patient.toFHIR === 'function' ? this.patient.toFHIR(true) : this.patient);
    }
    if (this.encounter != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.encounter.toFHIR === 'function' ? this.encounter.toFHIR(true) : this.encounter);
    }
    if (this.reason != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.reason.toFHIR === 'function' ? this.reason.toFHIR(true) : this.reason);
    }
    if (this.occurrenceTimeOrPeriod != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.occurrenceTimeOrPeriod.toFHIR === 'function' ? this.occurrenceTimeOrPeriod.toFHIR(true) : this.occurrenceTimeOrPeriod);
    }
    if (this.participation != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.participation.toFHIR === 'function' ? this.participation.toFHIR(true) : this.participation);
    }
    if (this.status != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.status.toFHIR === 'function' ? this.status.toFHIR(true) : this.status);
    }
    if (this.method != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.method.toFHIR === 'function' ? this.method.toFHIR(true) : this.method);
    }
    if (this.relatedRequest != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.relatedRequest.toFHIR === 'function' ? this.relatedRequest.toFHIR(true) : this.relatedRequest);
    }
    if (this.facility != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.facility.toFHIR === 'function' ? this.facility.toFHIR(true) : this.facility);
    }
    if (this.outcome != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.outcome.toFHIR === 'function' ? this.outcome.toFHIR(true) : this.outcome);
    }
    if (this.medicationBeforeChange != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.medicationBeforeChange.toFHIR === 'function' ? this.medicationBeforeChange.toFHIR(true) : this.medicationBeforeChange);
    }
    if (this.medicationAfterChange != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.medicationAfterChange.toFHIR === 'function' ? this.medicationAfterChange.toFHIR(true) : this.medicationAfterChange);
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the MedicationChange class.
   * The FHIR must be valid against the MedicationChange FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {MedicationChange} An instance of MedicationChange populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new MedicationChange();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url === 'http://example.com/fhir/StructureDefinition/shr-base-TopicCode-extension');
      if (match != null) {
        inst.topicCode = createInstanceFromFHIR('shr.base.TopicCode', match, true);
      }
    }
    return inst;
  }

}
export default MedicationChange;
