import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.entity.Manufacturer.
 */
class Manufacturer {

  /**
   * Get the value (aliases organization).
   * @returns {Reference} The shr.entity.Organization reference
   */
  get value() {
    return this._organization;
  }

  /**
   * Set the value (aliases organization).
   * This field/value is required.
   * @param {Reference} value - The shr.entity.Organization reference
   */
  set value(value) {
    this._organization = value;
  }

  /**
   * Set the value (aliases organization) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The shr.entity.Organization reference
   * @returns {Manufacturer} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the shr.entity.Organization reference.
   * @returns {Reference} The shr.entity.Organization reference
   */
  get organization() {
    return this._organization;
  }

  /**
   * Set the shr.entity.Organization reference.
   * This field/value is required.
   * @param {Reference} organization - The shr.entity.Organization reference
   */
  set organization(organization) {
    this._organization = organization;
  }

  /**
   * Set the shr.entity.Organization reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} organization - The shr.entity.Organization reference
   * @returns {Manufacturer} this.
   */
  withOrganization(organization) {
    this.organization = organization; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Manufacturer class.
   * The JSON must be valid against the Manufacturer JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Manufacturer} An instance of Manufacturer populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Manufacturer();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Manufacturer class to a JSON object.
   * The JSON is expected to be valid against the Manufacturer JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/entity/Manufacturer' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the Manufacturer class to a FHIR object.
   * The FHIR is expected to be valid against the Manufacturer FHIR profile, but no validation checks are performed.
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
   * Deserializes FHIR JSON data to an instance of the Manufacturer class.
   * The FHIR must be valid against the Manufacturer FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Manufacturer} An instance of Manufacturer populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new Manufacturer();
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR('shr.entity.Organization', fhir);
    }
    return inst;
  }

}
export default Manufacturer;
