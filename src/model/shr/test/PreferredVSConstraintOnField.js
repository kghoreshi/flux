import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.test.PreferredVSConstraintOnField.
 */
class PreferredVSConstraintOnField {

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
   * @returns {PreferredVSConstraintOnField} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the CodedThing.
   * @returns {CodedThing} The shr.test.CodedThing
   */
  get codedThing() {
    return this._codedThing;
  }

  /**
   * Set the CodedThing.
   * @param {CodedThing} codedThing - The shr.test.CodedThing
   */
  set codedThing(codedThing) {
    this._codedThing = codedThing;
  }

  /**
   * Set the CodedThing and return 'this' for chaining.
   * @param {CodedThing} codedThing - The shr.test.CodedThing
   * @returns {PreferredVSConstraintOnField} this.
   */
  withCodedThing(codedThing) {
    this.codedThing = codedThing; return this;
  }

  /**
   * Deserializes JSON data to an instance of the PreferredVSConstraintOnField class.
   * The JSON must be valid against the PreferredVSConstraintOnField JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PreferredVSConstraintOnField} An instance of PreferredVSConstraintOnField populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new PreferredVSConstraintOnField();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the PreferredVSConstraintOnField class to a JSON object.
   * The JSON is expected to be valid against the PreferredVSConstraintOnField JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/test/PreferredVSConstraintOnField' };
    if (this.codedThing != null) {
      inst['CodedThing'] = typeof this.codedThing.toJSON === 'function' ? this.codedThing.toJSON() : this.codedThing;
    }
    return inst;
  }
  /**
   * Serializes an instance of the PreferredVSConstraintOnField class to a FHIR object.
   * The FHIR is expected to be valid against the PreferredVSConstraintOnField FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    if (this.codedThing != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.codedThing.toFHIR(true));
    }
    return inst;
  }
}
export default PreferredVSConstraintOnField;