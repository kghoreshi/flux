import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.simple.OptionalChoiceValueEntry.
 */
class OptionalChoiceValueEntry {

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
   * @returns {OptionalChoiceValueEntry} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the choice value; one of: integer, string.
   * @returns {(integer|string)} The choice value; one of: integer, string
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: integer, string.
   * @param {(integer|string)} value - The choice value; one of: integer, string
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: integer, string and return 'this' for chaining.
   * @param {(integer|string)} value - The choice value; one of: integer, string
   * @returns {OptionalChoiceValueEntry} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the OptionalChoiceValueEntry class.
   * The JSON must be valid against the OptionalChoiceValueEntry JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {OptionalChoiceValueEntry} An instance of OptionalChoiceValueEntry populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new OptionalChoiceValueEntry();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the OptionalChoiceValueEntry class to a JSON object.
   * The JSON is expected to be valid against the OptionalChoiceValueEntry JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/simple/OptionalChoiceValueEntry' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the OptionalChoiceValueEntry class to a FHIR object.
   * The FHIR is expected to be valid against the OptionalChoiceValueEntry FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    return inst;
  }
}
export default OptionalChoiceValueEntry;