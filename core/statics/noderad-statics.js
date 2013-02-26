exports.initialize = function () {
    (function () {
        var statics = {};
        Object.prototype.__static__ = function (name, val) {
            if (typeof(val) == 'undefined') {
                return statics[name];
            } else {
                statics[name] = val;
            }
        };
    })();
};


