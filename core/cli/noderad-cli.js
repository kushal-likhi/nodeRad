var PrintWriter = require("./src/PrintWriter").class;
var InputStream = require("./src/InputStream").class;

exports.initialize = function () {
    initializeColorsModule();
    initializeOutStream();
    exportWriters();
    exportReaders();
};

exports.registerInputReceivedHandler = function (handler) {
    Object.__static__("inputStream").addInputReceivedHandler("NodeRad-command-received", handler);
};

exports.showPrompt = function () {
    Object.__static__("inputStream").showPrompt();
};

function initializeColorsModule() {
    return require("colors");
}

function initializeOutStream() {
    Object.__static__("printWriter", new PrintWriter());
}

function exportWriters() {
    String.prototype.__defineGetter__("toSystemStatusStream", function () {
        var that = this;
        return function () {
            Object.__static__("printWriter").toSystemStatusStream(that);
        };
    });
    String.prototype.__defineGetter__("toSystemOutStream", function () {
        var that = this;
        return function () {
            Object.__static__("printWriter").toSystemOutStream(that);
        };
    });
    String.prototype.__defineGetter__("toSystemOutStreamInline", function () {
        var that = this;
        return function () {
            Object.__static__("printWriter").toSystemOutStreamInline(that);
        };
    });
    String.prototype.__defineGetter__("toSystemErrorStream", function () {
        var that = this;
        return function () {
            Object.__static__("printWriter").toSystemErrorStream(that);
        };
    });
    String.prototype.__defineGetter__("toSystemErrorStreamInline", function () {
        var that = this;
        return function () {
            Object.__static__("printWriter").toSystemErrorStreamInline(that);
        };
    });
}

function exportReaders() {
    Object.__static__("inputStream", new InputStream());
}
