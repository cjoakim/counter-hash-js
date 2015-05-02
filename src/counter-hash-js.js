// Copyright 2015, Christopher Joakim <christopher.joakim@gmail.com>
var CounterHash = (function () {
    function CounterHash() {
        this.data = [];
    }
    CounterHash.prototype.is_empty = function () {
        if (this.data.length === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    CounterHash.VERSION = '0.3.0';
    return CounterHash;
})();
exports.CounterHash = CounterHash;
