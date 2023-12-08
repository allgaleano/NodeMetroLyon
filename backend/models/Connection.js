class Connection {
    constructor(destination, time) {
        this._destination = destination
        this._time = time
    }

    get destination() {
        return this._destination
    }
    set destination(value) {
        return this._destination = value
    }
    get time() {
        return this._time
    }
    set time(value) {
        return this._time = value
    }
}

module.exports = Connection