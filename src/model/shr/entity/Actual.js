import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.Actual.
 */
class Actual {

  /**
   * Get the value (aliases boolean).
   * @returns {boolean} The boolean
   */
  get value() {
    return this._boolean;
  }

  /**
   * Set the value (aliases boolean).
   * This field/value is required.
   * @param {boolean} value - The boolean
   */
  set value(value) {
    this._boolean = value;
  }

  /**
   * Set the value (aliases boolean) and return 'this' for chaining.
   * This field/value is required.
   * @param {boolean} value - The boolean
   * @returns {Actual} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the boolean.
   * @returns {boolean} The boolean
   */
  get boolean() {
    return this._boolean;
  }

  /**
   * Set the boolean.
   * This field/value is required.
   * @param {boolean} boolean - The boolean
   */
  set boolean(boolean) {
    this._boolean = boolean;
  }

  /**
   * Set the boolean and return 'this' for chaining.
   * This field/value is required.
   * @param {boolean} boolean - The boolean
   * @returns {Actual} this.
   */
  withBoolean(boolean) {
    this.boolean = boolean; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Actual class.
   * The JSON must be valid against the Actual JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Actual} An instance of Actual populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Actual();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Actual class to a JSON object.
   * The JSON is expected to be valid against the Actual JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/entity/Actual' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the Actual class to a FHIR object.
   * The FHIR is expected to be valid against the Actual FHIR profile, but no validation checks are performed.
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
   * Deserializes FHIR JSON data to an instance of the Actual class.
   * The FHIR must be valid against the Actual FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Actual} An instance of Actual populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new Actual();
    if (!asExtension && fhir != null) {
      inst.value = fhir;
    }
    return inst;
  }

}
export default Actual;
