import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.core.Status.
 */
class Status {

  /**
   * Get the choice value; one of: code, shr.core.Coding, shr.core.CodeableConcept.
   * @returns {(code|Coding|CodeableConcept)} The choice value; one of: code, shr.core.Coding, shr.core.CodeableConcept
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: code, shr.core.Coding, shr.core.CodeableConcept.
   * This field/value is required.
   * @param {(code|Coding|CodeableConcept)} value - The choice value; one of: code, shr.core.Coding, shr.core.CodeableConcept
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: code, shr.core.Coding, shr.core.CodeableConcept and return 'this' for chaining.
   * This field/value is required.
   * @param {(code|Coding|CodeableConcept)} value - The choice value; one of: code, shr.core.Coding, shr.core.CodeableConcept
   * @returns {Status} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Status class.
   * The JSON must be valid against the Status JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Status} An instance of Status populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Status();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Status class to a JSON object.
   * The JSON is expected to be valid against the Status JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/core/Status' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the Status class to a FHIR object.
   * The FHIR is expected to be valid against the Status FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-core-Status-extension';
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Status class.
   * The FHIR must be valid against the Status FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Status} An instance of Status populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new Status();
    if (asExtension) {
    }
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR(null, fhir);
    }
    return inst;
  }

}
export default Status;
