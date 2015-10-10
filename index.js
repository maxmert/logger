'use strict';

var Logdown = require('logdown');
var format  = require('util').format;

var Logup = function(prefix) {
    this._logger = new Logdown({prefix: prefix || ''});
    this.messages = [];
};

function values(args) {
    var result = [];

    for (var key in args) {
        result.push(args[key]);
    }

    return result;
}

function getMessage() {
    var message = format.apply(null, values(arguments));
    this.messages.push(message);

    return message;
}

Logup.prototype.clear = function() {
    this.messages = [];
};

Logup.prototype.info = function() {
    return this._logger.info(getMessage.apply(this, arguments));
};

Logup.prototype.warn = function() {
    return this._logger.warn(getMessage.apply(this, arguments));
};

Logup.prototype.error = function() {
    return this._logger.error(getMessage.apply(this, arguments));
};

Logup.prototype.log = function() {
    return this._logger.log(getMessage.apply(this, arguments));
};

module.exports = Logup;
