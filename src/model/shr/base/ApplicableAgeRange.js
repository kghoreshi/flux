import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.base.ApplicableAgeRange.
 */
class ApplicableAgeRange {

  /**
   * Get the value (aliases range).
   * @returns {Range} The shr.core.Range
   */
  get value() {
    return this._range;
  }

  /**
   * Set the value (aliases range).
   * This field/value is required.
   * @param {Range} value - The shr.core.Range
   */
  set value(value) {
    this._range = value;
  }

  /**
   * Set the value (aliases range) and return 'this' for chaining.
   * This field/value is required.
   * @param {Range} value - The shr.core.Range
   * @returns {ApplicableAgeRange} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Range.
   * @returns {Range} The shr.core.Range
   */
  get range() {
    return this._range;
  }

  /**
   * Set the Range.
   * This field/value is required.
   * @param {Range} range - The shr.core.Range
   */
  set range(range) {
    this._range = range;
  }

  /**
   * Set the Range and return 'this' for chaining.
   * This field/value is required.
   * @param {Range} range - The shr.core.Range
   * @returns {ApplicableAgeRange} this.
   */
  withRange(range) {
    this.range = range; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ApplicableAgeRange class.
   * The JSON must be valid against the ApplicableAgeRange JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ApplicableAgeRange} An instance of ApplicableAgeRange populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new ApplicableAgeRange();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ApplicableAgeRange class to a JSON object.
   * The JSON is expected to be valid against the ApplicableAgeRange JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/base/ApplicableAgeRange' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the ApplicableAgeRange class to a FHIR object.
   * The FHIR is expected to be valid against the ApplicableAgeRange FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-base-ApplicableAgeRange-extension';
      inst['valueRange'] = this.value;
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ApplicableAgeRange class.
   * The FHIR must be valid against the ApplicableAgeRange FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ApplicableAgeRange} An instance of ApplicableAgeRange populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new ApplicableAgeRange();
    if (asExtension) {
      inst.value = fhir['valueRange'];
    }
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR('shr.core.Range', fhir);
    }
    return inst;
  }

}
export default ApplicableAgeRange;
