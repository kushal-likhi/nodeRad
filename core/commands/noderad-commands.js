var fs = require("fs");

exports.registerCommands = function () {
    addCommandsToProcessor();
    registerProcessor();
};

function addCommandsToProcessor() {
    Object.__static__("nodeRadCommands", {});
    var path = require("path").join(__dirname, "/command-descriptors");
    var files = fs.readdirSync(path);
    files.forEach(function (file) {
        var commandModule = require("./command-descriptors/" + file.toString());
        if (Boolean(commandModule) && Boolean(commandModule.enabled)) {
            Object.__static__("nodeRadCommands").__defineGetter__(commandModule.getCommandName(), commandModule.handler);
        }
    });
}

function registerProcessor() {
    Object.__static__("commandProcessor", function (input, callback) {
        var args = input.trim().split(/ +/);
        if (Boolean(Object.__static__("nodeRadCommands").__lookupGetter__(args[0]))) {
            Object.__static__("nodeRadCommands").__lookupGetter__(args[0]).apply(this, [args, callback]);
        } else {
            "Invalid command".toSystemErrorStream();
            callback();
        }
    });
}