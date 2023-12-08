class Connection {
    constructor(destination, time, line) {
        this._destination = destination
        this._time = time
        this.line = line
    }

    get destination() {
        return this._destination
    }
    set destination(value) {
        return this._destination = value
    }
    get line() {
        return this._line
    }
    set line(value) {
        return this._line = value
    }
    get time() {
        return this._time
    }
    set time(value) {
        return this._time = value
    }
}

module.exports = Connection