import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import NonLaboratoryObservation from './NonLaboratoryObservation';

/**
 * Generated class for shr.base.SimpleNonLaboratoryObservation.
 * @extends NonLaboratoryObservation
 */
class SimpleNonLaboratoryObservation extends NonLaboratoryObservation {

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
   * @returns {SimpleNonLaboratoryObservation} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the NonIndependentFinding array.
   * @returns {Array<NonIndependentFinding>} The shr.base.NonIndependentFinding array
   */
  get nonIndependentFinding() {
    return this._nonIndependentFinding;
  }

  /**
   * Set the NonIndependentFinding array.
   * @param {Array<NonIndependentFinding>} nonIndependentFinding - The shr.base.NonIndependentFinding array
   */
  set nonIndependentFinding(nonIndependentFinding) {
    this._nonIndependentFinding = nonIndependentFinding;
  }

  /**
   * Set the NonIndependentFinding array and return 'this' for chaining.
   * @param {Array<NonIndependentFinding>} nonIndependentFinding - The shr.base.NonIndependentFinding array
   * @returns {SimpleNonLaboratoryObservation} this.
   */
  withNonIndependentFinding(nonIndependentFinding) {
    this.nonIndependentFinding = nonIndependentFinding; return this;
  }

  /**
   * Get the PanelMembers.
   * @returns {PanelMembers} The shr.base.PanelMembers
   */
  get panelMembers() {
    return this._panelMembers;
  }

  /**
   * Set the PanelMembers.
   * @param {PanelMembers} panelMembers - The shr.base.PanelMembers
   */
  set panelMembers(panelMembers) {
    this._panelMembers = panelMembers;
  }

  /**
   * Set the PanelMembers and return 'this' for chaining.
   * @param {PanelMembers} panelMembers - The shr.base.PanelMembers
   * @returns {SimpleNonLaboratoryObservation} this.
   */
  withPanelMembers(panelMembers) {
    this.panelMembers = panelMembers; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SimpleNonLaboratoryObservation class.
   * The JSON must be valid against the SimpleNonLaboratoryObservation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SimpleNonLaboratoryObservation} An instance of SimpleNonLaboratoryObservation populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new SimpleNonLaboratoryObservation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the SimpleNonLaboratoryObservation class to a JSON object.
   * The JSON is expected to be valid against the SimpleNonLaboratoryObservation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/base/SimpleNonLaboratoryObservation' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.findingTopicCode != null) {
      inst['FindingTopicCode'] = typeof this.findingTopicCode.toJSON === 'function' ? this.findingTopicCode.toJSON() : this.findingTopicCode;
    }
    if (this.exceptionValue != null) {
      inst['ExceptionValue'] = typeof this.exceptionValue.toJSON === 'function' ? this.exceptionValue.toJSON() : this.exceptionValue;
    }
    if (this.referenceRange != null) {
      inst['ReferenceRange'] = typeof this.referenceRange.toJSON === 'function' ? this.referenceRange.toJSON() : this.referenceRange;
    }
    if (this.patient != null) {
      inst['Patient'] = typeof this.patient.toJSON === 'function' ? this.patient.toJSON() : this.patient;
    }
    if (this.encounter != null) {
      inst['Encounter'] = typeof this.encounter.toJSON === 'function' ? this.encounter.toJSON() : this.encounter;
    }
    if (this.findingStatus != null) {
      inst['FindingStatus'] = typeof this.findingStatus.toJSON === 'function' ? this.findingStatus.toJSON() : this.findingStatus;
    }
    if (this.specificFocusOfFinding != null) {
      inst['SpecificFocusOfFinding'] = typeof this.specificFocusOfFinding.toJSON === 'function' ? this.specificFocusOfFinding.toJSON() : this.specificFocusOfFinding;
    }
    if (this.findingMethod != null) {
      inst['FindingMethod'] = typeof this.findingMethod.toJSON === 'function' ? this.findingMethod.toJSON() : this.findingMethod;
    }
    if (this.relevantTime != null) {
      inst['RelevantTime'] = typeof this.relevantTime.toJSON === 'function' ? this.relevantTime.toJSON() : this.relevantTime;
    }
    if (this.nonIndependentFinding != null) {
      inst['NonIndependentFinding'] = this.nonIndependentFinding.map(f => f.toJSON());
    }
    if (this.deltaFlag != null) {
      inst['DeltaFlag'] = typeof this.deltaFlag.toJSON === 'function' ? this.deltaFlag.toJSON() : this.deltaFlag;
    }
    if (this.category != null) {
      inst['Category'] = this.category.map(f => f.toJSON());
    }
    if (this.anatomicalLocation != null) {
      inst['AnatomicalLocation'] = typeof this.anatomicalLocation.toJSON === 'function' ? this.anatomicalLocation.toJSON() : this.anatomicalLocation;
    }
    if (this.commentOrDescription != null) {
      inst['CommentOrDescription'] = typeof this.commentOrDescription.toJSON === 'function' ? this.commentOrDescription.toJSON() : this.commentOrDescription;
    }
    if (this.interpretation != null) {
      inst['Interpretation'] = typeof this.interpretation.toJSON === 'function' ? this.interpretation.toJSON() : this.interpretation;
    }
    if (this.device != null) {
      inst['Device'] = typeof this.device.toJSON === 'function' ? this.device.toJSON() : this.device;
    }
    if (this.specimen != null) {
      inst['Specimen'] = typeof this.specimen.toJSON === 'function' ? this.specimen.toJSON() : this.specimen;
    }
    if (this.media != null) {
      inst['Media'] = this.media.map(f => f.toJSON());
    }
    if (this.panelMembers != null) {
      inst['PanelMembers'] = typeof this.panelMembers.toJSON === 'function' ? this.panelMembers.toJSON() : this.panelMembers;
    }
    return inst;
  }

  /**
   * Serializes an instance of the SimpleNonLaboratoryObservation class to a FHIR object.
   * The FHIR is expected to be valid against the SimpleNonLaboratoryObservation FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Observation';
    if (this.deltaFlag != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.deltaFlag.toFHIR === 'function' ? this.deltaFlag.toFHIR(true) : this.deltaFlag);
    }
    if (this.specificFocusOfFinding != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.specificFocusOfFinding.toFHIR === 'function' ? this.specificFocusOfFinding.toFHIR(true) : this.specificFocusOfFinding);
    }
    if (this.media != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.media.toFHIR === 'function' ? this.media.toFHIR(true) : this.media);
    }
    if (this.findingStatus != null) {
      inst['status'] = typeof this.findingStatus.toFHIR === 'function' ? this.findingStatus.toFHIR() : this.findingStatus;
    }
    if (this.category != null) {
      inst['category'] = inst['category'] || [];
      inst['category'] = inst['category'].concat(this.category.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.findingTopicCode != null) {
      inst['code'] = typeof this.findingTopicCode.toFHIR === 'function' ? this.findingTopicCode.toFHIR() : this.findingTopicCode;
    }
    if (this.patient != null) {
      inst['subject'] = typeof this.patient.toFHIR === 'function' ? this.patient.toFHIR() : this.patient;
    }
    if (this.encounter != null) {
      inst['context'] = typeof this.encounter.toFHIR === 'function' ? this.encounter.toFHIR() : this.encounter;
    }
    if (this.relevantTime != null) {
      inst['effective[x]'] = typeof this.relevantTime.toFHIR === 'function' ? this.relevantTime.toFHIR() : this.relevantTime;
    }
    if (this.exceptionValue != null) {
      inst['dataAbsentReason'] = typeof this.exceptionValue.toFHIR === 'function' ? this.exceptionValue.toFHIR() : this.exceptionValue;
    }
    if (this.interpretation != null) {
      inst['interpretation'] = typeof this.interpretation.toFHIR === 'function' ? this.interpretation.toFHIR() : this.interpretation;
    }
    if (this.commentOrDescription != null) {
      inst['comment'] = typeof this.commentOrDescription.toFHIR === 'function' ? this.commentOrDescription.toFHIR() : this.commentOrDescription;
    }
    if (this.anatomicalLocation != null && this.anatomicalLocation.anatomicalLocationOrLandmarkCode != null) {
      inst['bodySite'] = typeof this.anatomicalLocation.anatomicalLocationOrLandmarkCode.toFHIR === 'function' ? this.anatomicalLocation.anatomicalLocationOrLandmarkCode.toFHIR() : this.anatomicalLocation.anatomicalLocationOrLandmarkCode;
    }
    if (this.findingMethod != null) {
      inst['method'] = typeof this.findingMethod.toFHIR === 'function' ? this.findingMethod.toFHIR() : this.findingMethod;
    }
    if (this.specimen != null) {
      inst['specimen'] = typeof this.specimen.toFHIR === 'function' ? this.specimen.toFHIR() : this.specimen;
    }
    if (this.device != null) {
      inst['device'] = typeof this.device.toFHIR === 'function' ? this.device.toFHIR() : this.device;
    }
    if (this.referenceRange != null) {
      inst['referenceRange'] = typeof this.referenceRange.toFHIR === 'function' ? this.referenceRange.toFHIR() : this.referenceRange;
    }
    if (this.referenceRange != null && this.referenceRange.range != null && this.referenceRange.range.lowerBound != null) {
      if (inst['referenceRange'] === undefined) {
        inst['referenceRange'] = {};
      }
      inst['referenceRange']['low'] = typeof this.referenceRange.range.lowerBound.toFHIR === 'function' ? this.referenceRange.range.lowerBound.toFHIR() : this.referenceRange.range.lowerBound;
    }
    if (this.referenceRange != null && this.referenceRange.range != null && this.referenceRange.range.upperBound != null) {
      if (inst['referenceRange'] === undefined) {
        inst['referenceRange'] = {};
      }
      inst['referenceRange']['high'] = typeof this.referenceRange.range.upperBound.toFHIR === 'function' ? this.referenceRange.range.upperBound.toFHIR() : this.referenceRange.range.upperBound;
    }
    if (this.referenceRange != null && this.referenceRange.type != null) {
      if (inst['referenceRange'] === undefined) {
        inst['referenceRange'] = {};
      }
      inst['referenceRange']['type'] = typeof this.referenceRange.type.toFHIR === 'function' ? this.referenceRange.type.toFHIR() : this.referenceRange.type;
    }
    if (this.referenceRange != null && this.referenceRange.applicableSubpopulation != null) {
      if (inst['referenceRange'] === undefined) {
        inst['referenceRange'] = {};
      }
      inst['referenceRange']['appliesTo'] = typeof this.referenceRange.applicableSubpopulation.toFHIR === 'function' ? this.referenceRange.applicableSubpopulation.toFHIR() : this.referenceRange.applicableSubpopulation;
    }
    if (this.referenceRange != null && this.referenceRange.applicableAgeRange != null) {
      if (inst['referenceRange'] === undefined) {
        inst['referenceRange'] = {};
      }
      inst['referenceRange']['age'] = typeof this.referenceRange.applicableAgeRange.toFHIR === 'function' ? this.referenceRange.applicableAgeRange.toFHIR() : this.referenceRange.applicableAgeRange;
    }
    if (this.panelMembers != null) {
      inst['related'] = typeof this.panelMembers.toFHIR === 'function' ? this.panelMembers.toFHIR() : this.panelMembers;
    }
    if (this.panelMembers != null && this.panelMembers.observation != null) {
      if (inst['related'] === undefined) {
        inst['related'] = {};
      }
      inst['related']['target'] = typeof this.panelMembers.observation.toFHIR === 'function' ? this.panelMembers.observation.toFHIR() : this.panelMembers.observation;
    }
    if (this.nonIndependentFinding != null) {
      inst['component'] = inst['component'] || [];
      inst['component'] = inst['component'].concat(this.nonIndependentFinding.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.nonIndependentFinding != null && this.nonIndependentFinding.findingTopicCode != null) {
      if (inst['component'] === undefined) {
        inst['component'] = {};
      }
      inst['component']['code'] = inst['component']['code'] || [];
      inst['component']['code'] = inst['component']['code'].concat(this.nonIndependentFinding.findingTopicCode.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.nonIndependentFinding != null && this.nonIndependentFinding.quantity != null) {
      if (inst['component'] === undefined) {
        inst['component'] = {};
      }
      inst['component']['value[x]'] = inst['component']['value[x]'] || [];
      inst['component']['value[x]'] = inst['component']['value[x]'].concat(this.nonIndependentFinding.quantity.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.nonIndependentFinding != null && this.nonIndependentFinding.exceptionValue != null) {
      if (inst['component'] === undefined) {
        inst['component'] = {};
      }
      inst['component']['dataAbsentReason'] = inst['component']['dataAbsentReason'] || [];
      inst['component']['dataAbsentReason'] = inst['component']['dataAbsentReason'].concat(this.nonIndependentFinding.exceptionValue.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.nonIndependentFinding != null && this.nonIndependentFinding.referenceRange != null) {
      if (inst['component'] === undefined) {
        inst['component'] = {};
      }
      inst['component']['referenceRange'] = inst['component']['referenceRange'] || [];
      inst['component']['referenceRange'] = inst['component']['referenceRange'].concat(this.nonIndependentFinding.referenceRange.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the SimpleNonLaboratoryObservation class.
   * The FHIR must be valid against the SimpleNonLaboratoryObservation FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {SimpleNonLaboratoryObservation} An instance of SimpleNonLaboratoryObservation populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new SimpleNonLaboratoryObservation();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url === 'http://hl7.org/fhir/StructureDefinition/observation-delta');
      if (match != null) {
        inst.deltaFlag = createInstanceFromFHIR('shr.base.DeltaFlag', match, true);
      }
    }
    if (fhir['status'] != null) {
      inst.findingStatus = createInstanceFromFHIR('shr.base.FindingStatus', fhir['status']);
    }
    if (fhir['category'] != null) {
      inst.category = inst.category || [];
      inst.category = inst.category.concat(fhir['category'].map(f => createInstanceFromFHIR('shr.core.Category', f)));
    }
    if (fhir['code'] != null) {
      inst.findingTopicCode = createInstanceFromFHIR('shr.base.FindingTopicCode', fhir['code']);
    }
    if (fhir['subject'] != null) {
      inst.patient = createInstanceFromFHIR('shr.entity.Patient', fhir['subject']);
    }
    if (fhir['context'] != null) {
      inst.encounter = createInstanceFromFHIR('shr.encounter.Encounter', fhir['context']);
    }
    if (fhir['effectiveDateTime'] != null) {
      inst.relevantTime = createInstanceFromFHIR('shr.base.RelevantTime', fhir['effectiveDateTime']);
    }
    if (fhir['effectivePeriod'] != null) {
      inst.relevantTime = createInstanceFromFHIR('shr.base.RelevantTime', fhir['effectivePeriod']);
    }
    if (fhir['valueQuantity'] != null) {
      inst.value = createInstanceFromFHIR('shr.core.Quantity', fhir['valueQuantity']);
    }
    if (fhir['valueCodeableConcept'] != null) {
      inst.value = createInstanceFromFHIR('shr.core.CodeableConcept', fhir['valueCodeableConcept']);
    }
    if (fhir['valueRange'] != null) {
      inst.value = createInstanceFromFHIR('shr.core.Range', fhir['valueRange']);
    }
    if (fhir['valueRatio'] != null) {
      inst.value = createInstanceFromFHIR('shr.core.Ratio', fhir['valueRatio']);
    }
    if (fhir['valuePeriod'] != null) {
      inst.value = createInstanceFromFHIR('shr.core.TimePeriod', fhir['valuePeriod']);
    }
    if (fhir['dataAbsentReason'] != null) {
      inst.exceptionValue = createInstanceFromFHIR('shr.base.ExceptionValue', fhir['dataAbsentReason']);
    }
    if (fhir['interpretation'] != null) {
      inst.interpretation = createInstanceFromFHIR('shr.base.Interpretation', fhir['interpretation']);
    }
    if (fhir['comment'] != null) {
      inst.commentOrDescription = createInstanceFromFHIR('shr.core.CommentOrDescription', fhir['comment']);
    }
    if (fhir['bodySite'] != null) {
      if (inst.anatomicalLocation === null) {
        inst.anatomicalLocation = createInstanceFromFHIR('shr.core.AnatomicalLocation', {});
      }
      inst.anatomicalLocation.anatomicalLocationOrLandmarkCode = createInstanceFromFHIR('shr.core.AnatomicalLocationOrLandmarkCode', fhir['bodySite']);
    }
    if (fhir['method'] != null) {
      inst.findingMethod = createInstanceFromFHIR('shr.base.FindingMethod', fhir['method']);
    }
    if (fhir['device'] != null) {
      inst.device = createInstanceFromFHIR('shr.entity.Device', fhir['device']);
    }
    if (fhir['referenceRange'] != null) {
      inst.referenceRange = createInstanceFromFHIR('shr.base.ReferenceRange', fhir['referenceRange']);
    }
    if (fhir['referenceRange'] != null && fhir['referenceRange']['low'] != null) {
      if (inst.referenceRange === null) {
        inst.referenceRange = createInstanceFromFHIR('shr.base.ReferenceRange', {});
      }
      if (inst.referenceRange.range === null) {
        inst.referenceRange.range = createInstanceFromFHIR('shr.core.Range', {});
      }
      inst.referenceRange.range.lowerBound = createInstanceFromFHIR('shr.core.LowerBound', fhir['referenceRange']['low']);
    }
    if (fhir['referenceRange'] != null && fhir['referenceRange']['high'] != null) {
      if (inst.referenceRange === null) {
        inst.referenceRange = createInstanceFromFHIR('shr.base.ReferenceRange', {});
      }
      if (inst.referenceRange.range === null) {
        inst.referenceRange.range = createInstanceFromFHIR('shr.core.Range', {});
      }
      inst.referenceRange.range.upperBound = createInstanceFromFHIR('shr.core.UpperBound', fhir['referenceRange']['high']);
    }
    if (fhir['referenceRange'] != null && fhir['referenceRange']['type'] != null) {
      if (inst.referenceRange === null) {
        inst.referenceRange = createInstanceFromFHIR('shr.base.ReferenceRange', {});
      }
      inst.referenceRange.type = createInstanceFromFHIR('shr.core.Type', fhir['referenceRange']['type']);
    }
    if (fhir['referenceRange'] != null && fhir['referenceRange']['appliesTo'] != null) {
      if (inst.referenceRange === null) {
        inst.referenceRange = createInstanceFromFHIR('shr.base.ReferenceRange', {});
      }
      inst.referenceRange.applicableSubpopulation = createInstanceFromFHIR('shr.base.ApplicableSubpopulation', fhir['referenceRange']['appliesTo']);
    }
    if (fhir['referenceRange'] != null && fhir['referenceRange']['age'] != null) {
      if (inst.referenceRange === null) {
        inst.referenceRange = createInstanceFromFHIR('shr.base.ReferenceRange', {});
      }
      inst.referenceRange.applicableAgeRange = createInstanceFromFHIR('shr.base.ApplicableAgeRange', fhir['referenceRange']['age']);
    }
    return inst;
  }

}
export default SimpleNonLaboratoryObservation;
