import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.medication.DosageInstructionsText.
 */
class DosageInstructionsText {

  /**
   * Get the value (aliases string).
   * @returns {string} The string
   */
  get value() {
    return this._string;
  }

  /**
   * Set the value (aliases string).
   * This field/value is required.
   * @param {string} value - The string
   */
  set value(value) {
    this._string = value;
  }

  /**
   * Set the value (aliases string) and return 'this' for chaining.
   * This field/value is required.
   * @param {string} value - The string
   * @returns {DosageInstructionsText} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the string.
   * @returns {string} The string
   */
  get string() {
    return this._string;
  }

  /**
   * Set the string.
   * This field/value is required.
   * @param {string} string - The string
   */
  set string(string) {
    this._string = string;
  }

  /**
   * Set the string and return 'this' for chaining.
   * This field/value is required.
   * @param {string} string - The string
   * @returns {DosageInstructionsText} this.
   */
  withString(string) {
    this.string = string; return this;
  }

  /**
   * Deserializes JSON data to an instance of the DosageInstructionsText class.
   * The JSON must be valid against the DosageInstructionsText JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {DosageInstructionsText} An instance of DosageInstructionsText populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new DosageInstructionsText();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the DosageInstructionsText class to a JSON object.
   * The JSON is expected to be valid against the DosageInstructionsText JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/medication/DosageInstructionsText' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the DosageInstructionsText class to a FHIR object.
   * The FHIR is expected to be valid against the DosageInstructionsText FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the DosageInstructionsText class.
   * The FHIR must be valid against the DosageInstructionsText FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {DosageInstructionsText} An instance of DosageInstructionsText populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new DosageInstructionsText();
    if (!asExtension && fhir != null) {
      inst.value = fhir;
    }
    return inst;
  }

}
export default DosageInstructionsText;
