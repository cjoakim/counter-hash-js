(function() {
  var CounterHash, root;

  CounterHash = (function() {
    function CounterHash(dir) {
      this.values = {};
    }

    CounterHash.prototype.value = function(key) {
      var n;
      n = this.values[key];
      if (n) {
        return n;
      } else {
        return 0;
      }
    };

    CounterHash.prototype.sum = function() {
      var key, keys, total, _i, _len;
      total = 0;
      keys = Object.getOwnPropertyNames(this.values);
      for (_i = 0, _len = keys.length; _i < _len; _i++) {
        key = keys[_i];
        total = total + this.value(key);
      }
      return total;
    };

    CounterHash.prototype.increment = function(key) {
      var n;
      if (key) {
        n = this.values[key];
        if (n) {
          return this.values[key] = n + 1;
        } else {
          return this.values[key] = 1;
        }
      }
    };

    CounterHash.prototype.decrement = function(key) {
      var n;
      if (key) {
        n = this.values[key];
        if (n) {
          return this.values[key] = n - 1;
        } else {
          return this.values[key] = -1;
        }
      }
    };

    CounterHash.prototype.add = function(key, x) {
      var n;
      if (key && x) {
        n = this.values[key];
        if (n) {
          return this.values[key] = n + x;
        } else {
          return this.values[key] = x;
        }
      }
    };

    CounterHash.prototype.subtract = function(key, x) {
      var n;
      if (key && x) {
        n = this.values[key];
        if (n) {
          return this.values[key] = n - x;
        } else {
          return this.values[key] = x;
        }
      }
    };

    CounterHash.prototype.sorted_keys = function() {
      var key, keys, list, _i, _len;
      list = [];
      keys = Object.getOwnPropertyNames(this.values);
      for (_i = 0, _len = keys.length; _i < _len; _i++) {
        key = keys[_i];
        list.push(key);
      }
      return list.sort();
    };

    return CounterHash;

  })();

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.CounterHash = CounterHash;

}).call(this);
