'use strict';

var Logdown = require('logdown');
var format  = require('util').format;

var Logup = function(prefix) {
    this._logger = new Logdown({prefix: prefix || ''});
};

function values(args) {
    var result = [];

    for (var key in args) {
        result.push(args[key]);
    }

    return result;
}

Logup.prototype.info = function() {
    return this._logger.info(format.apply(null, values(arguments)));
};

Logup.prototype.error = function() {
    return this._logger.error(format.apply(null, values(arguments)));
};

Logup.prototype.log = function() {
    return this._logger.log(format.apply(null, values(arguments)));
};

module.exports = Logup;
