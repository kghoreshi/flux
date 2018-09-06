import BodyWeight from '../shr/vital/BodyWeight';
import FluxObservation from '../finding/FluxObservation';

class FluxBodyWeight extends FluxObservation{
    constructor(json) {
        super();
        this._observation = BodyWeight.fromJSON(json);
    }

    get value() {
        return this._observation._quantity.value;
    }

    toJSON() {
        return this._observation.toJSON();
    }
}

export default FluxBodyWeight;