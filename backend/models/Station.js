class Station {
    constructor(name, line, latitude, longitude) {
        this._name = name
        this._line = line
        this._latitude = latitude
        this._longitude = longitude
    }

    distanceEuclidean(other) {
        const xDiff = other._longitude - this._longitude
        const yDiff = other._latitude - this._latitude
        return Math.sqrt(xDiff * xDiff + yDiff * yDiff)
    }

    get name() {
        return this._name
    }
    set name(value) {
        return this._name = value;
    }
    get line() {
        return this._line
    }
    set line(value) {
        return this._line = value;
    }
    get latitude() {
        return this._latitude
    }
    set latitude(value) {
        return this._latitude = value;
    }
    get longitude() {
        return this._longitude
    }
    set longitude(value) {
        return this._longitude = value;
    }
}

module.exports = Station