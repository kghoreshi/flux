import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.core.SampledData.
 */
class SampledData {

  /**
   * Get the Text.
   * @returns {Text} The shr.core.Text
   */
  get text() {
    return this._text;
  }

  /**
   * Set the Text.
   * This field/value is required.
   * @param {Text} text - The shr.core.Text
   */
  set text(text) {
    this._text = text;
  }

  /**
   * Set the Text and return 'this' for chaining.
   * This field/value is required.
   * @param {Text} text - The shr.core.Text
   * @returns {SampledData} this.
   */
  withText(text) {
    this.text = text; return this;
  }

  /**
   * Get the Origin.
   * @returns {Origin} The shr.core.Origin
   */
  get origin() {
    return this._origin;
  }

  /**
   * Set the Origin.
   * This field/value is required.
   * @param {Origin} origin - The shr.core.Origin
   */
  set origin(origin) {
    this._origin = origin;
  }

  /**
   * Set the Origin and return 'this' for chaining.
   * This field/value is required.
   * @param {Origin} origin - The shr.core.Origin
   * @returns {SampledData} this.
   */
  withOrigin(origin) {
    this.origin = origin; return this;
  }

  /**
   * Get the MillisecondsBetweenSamples.
   * @returns {MillisecondsBetweenSamples} The shr.core.MillisecondsBetweenSamples
   */
  get millisecondsBetweenSamples() {
    return this._millisecondsBetweenSamples;
  }

  /**
   * Set the MillisecondsBetweenSamples.
   * This field/value is required.
   * @param {MillisecondsBetweenSamples} millisecondsBetweenSamples - The shr.core.MillisecondsBetweenSamples
   */
  set millisecondsBetweenSamples(millisecondsBetweenSamples) {
    this._millisecondsBetweenSamples = millisecondsBetweenSamples;
  }

  /**
   * Set the MillisecondsBetweenSamples and return 'this' for chaining.
   * This field/value is required.
   * @param {MillisecondsBetweenSamples} millisecondsBetweenSamples - The shr.core.MillisecondsBetweenSamples
   * @returns {SampledData} this.
   */
  withMillisecondsBetweenSamples(millisecondsBetweenSamples) {
    this.millisecondsBetweenSamples = millisecondsBetweenSamples; return this;
  }

  /**
   * Get the CorrectionFactor.
   * @returns {CorrectionFactor} The shr.core.CorrectionFactor
   */
  get correctionFactor() {
    return this._correctionFactor;
  }

  /**
   * Set the CorrectionFactor.
   * @param {CorrectionFactor} correctionFactor - The shr.core.CorrectionFactor
   */
  set correctionFactor(correctionFactor) {
    this._correctionFactor = correctionFactor;
  }

  /**
   * Set the CorrectionFactor and return 'this' for chaining.
   * @param {CorrectionFactor} correctionFactor - The shr.core.CorrectionFactor
   * @returns {SampledData} this.
   */
  withCorrectionFactor(correctionFactor) {
    this.correctionFactor = correctionFactor; return this;
  }

  /**
   * Get the LowerLimit.
   * @returns {LowerLimit} The shr.core.LowerLimit
   */
  get lowerLimit() {
    return this._lowerLimit;
  }

  /**
   * Set the LowerLimit.
   * @param {LowerLimit} lowerLimit - The shr.core.LowerLimit
   */
  set lowerLimit(lowerLimit) {
    this._lowerLimit = lowerLimit;
  }

  /**
   * Set the LowerLimit and return 'this' for chaining.
   * @param {LowerLimit} lowerLimit - The shr.core.LowerLimit
   * @returns {SampledData} this.
   */
  withLowerLimit(lowerLimit) {
    this.lowerLimit = lowerLimit; return this;
  }

  /**
   * Get the UpperLimit.
   * @returns {UpperLimit} The shr.core.UpperLimit
   */
  get upperLimit() {
    return this._upperLimit;
  }

  /**
   * Set the UpperLimit.
   * @param {UpperLimit} upperLimit - The shr.core.UpperLimit
   */
  set upperLimit(upperLimit) {
    this._upperLimit = upperLimit;
  }

  /**
   * Set the UpperLimit and return 'this' for chaining.
   * @param {UpperLimit} upperLimit - The shr.core.UpperLimit
   * @returns {SampledData} this.
   */
  withUpperLimit(upperLimit) {
    this.upperLimit = upperLimit; return this;
  }

  /**
   * Get the Dimensions.
   * @returns {Dimensions} The shr.core.Dimensions
   */
  get dimensions() {
    return this._dimensions;
  }

  /**
   * Set the Dimensions.
   * This field/value is required.
   * @param {Dimensions} dimensions - The shr.core.Dimensions
   */
  set dimensions(dimensions) {
    this._dimensions = dimensions;
  }

  /**
   * Set the Dimensions and return 'this' for chaining.
   * This field/value is required.
   * @param {Dimensions} dimensions - The shr.core.Dimensions
   * @returns {SampledData} this.
   */
  withDimensions(dimensions) {
    this.dimensions = dimensions; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SampledData class.
   * The JSON must be valid against the SampledData JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SampledData} An instance of SampledData populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new SampledData();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the SampledData class to a JSON object.
   * The JSON is expected to be valid against the SampledData JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/core/SampledData' } };
    if (this.text != null) {
      inst['Text'] = typeof this.text.toJSON === 'function' ? this.text.toJSON() : this.text;
    }
    if (this.origin != null) {
      inst['Origin'] = typeof this.origin.toJSON === 'function' ? this.origin.toJSON() : this.origin;
    }
    if (this.millisecondsBetweenSamples != null) {
      inst['MillisecondsBetweenSamples'] = typeof this.millisecondsBetweenSamples.toJSON === 'function' ? this.millisecondsBetweenSamples.toJSON() : this.millisecondsBetweenSamples;
    }
    if (this.correctionFactor != null) {
      inst['CorrectionFactor'] = typeof this.correctionFactor.toJSON === 'function' ? this.correctionFactor.toJSON() : this.correctionFactor;
    }
    if (this.lowerLimit != null) {
      inst['LowerLimit'] = typeof this.lowerLimit.toJSON === 'function' ? this.lowerLimit.toJSON() : this.lowerLimit;
    }
    if (this.upperLimit != null) {
      inst['UpperLimit'] = typeof this.upperLimit.toJSON === 'function' ? this.upperLimit.toJSON() : this.upperLimit;
    }
    if (this.dimensions != null) {
      inst['Dimensions'] = typeof this.dimensions.toJSON === 'function' ? this.dimensions.toJSON() : this.dimensions;
    }
    return inst;
  }

  /**
   * Serializes an instance of the SampledData class to a FHIR object.
   * The FHIR is expected to be valid against the SampledData FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (this.origin != null) {
      inst['origin'] = typeof this.origin.toFHIR === 'function' ? this.origin.toFHIR() : this.origin;
    }
    if (this.millisecondsBetweenSamples != null) {
      inst['period'] = typeof this.millisecondsBetweenSamples.toFHIR === 'function' ? this.millisecondsBetweenSamples.toFHIR() : this.millisecondsBetweenSamples;
    }
    if (this.correctionFactor != null) {
      inst['factor'] = typeof this.correctionFactor.toFHIR === 'function' ? this.correctionFactor.toFHIR() : this.correctionFactor;
    }
    if (this.lowerLimit != null) {
      inst['lowerLimit'] = typeof this.lowerLimit.toFHIR === 'function' ? this.lowerLimit.toFHIR() : this.lowerLimit;
    }
    if (this.upperLimit != null) {
      inst['upperLimit'] = typeof this.upperLimit.toFHIR === 'function' ? this.upperLimit.toFHIR() : this.upperLimit;
    }
    if (this.dimensions != null) {
      inst['dimensions'] = typeof this.dimensions.toFHIR === 'function' ? this.dimensions.toFHIR() : this.dimensions;
    }
    if (this.text != null) {
      inst['data'] = typeof this.text.toFHIR === 'function' ? this.text.toFHIR() : this.text;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the SampledData class.
   * The FHIR must be valid against the SampledData FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {SampledData} An instance of SampledData populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new SampledData();
    if (fhir['origin'] != null) {
      inst.origin = createInstanceFromFHIR('shr.core.Origin', fhir['origin']);
    }
    if (fhir['period'] != null) {
      inst.millisecondsBetweenSamples = createInstanceFromFHIR('shr.core.MillisecondsBetweenSamples', fhir['period']);
    }
    if (fhir['factor'] != null) {
      inst.correctionFactor = createInstanceFromFHIR('shr.core.CorrectionFactor', fhir['factor']);
    }
    if (fhir['lowerLimit'] != null) {
      inst.lowerLimit = createInstanceFromFHIR('shr.core.LowerLimit', fhir['lowerLimit']);
    }
    if (fhir['upperLimit'] != null) {
      inst.upperLimit = createInstanceFromFHIR('shr.core.UpperLimit', fhir['upperLimit']);
    }
    if (fhir['dimensions'] != null) {
      inst.dimensions = createInstanceFromFHIR('shr.core.Dimensions', fhir['dimensions']);
    }
    if (fhir['data'] != null) {
      inst.text = createInstanceFromFHIR('shr.core.Text', fhir['data']);
    }
    return inst;
  }

}
export default SampledData;
