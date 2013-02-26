/**
 * noderad
 * Author: kushal
 * Date: 10/2/13
 * Time: 8:50 PM
 */

var nodeRadStatics = require("./statics");
var nodeRadCli = require("./cli");
var nodeRadCommands = require("./commands");

exports.initialize = function () {
    nodeRadStatics.initialize();
    nodeRadCli.initialize();
};

exports.loadSystemModules = function () {
    nodeRadCommands.registerCommands();
};

exports.enablePrompt = function () {
    nodeRadCli.showPrompt();
    nodeRadCli.registerInputReceivedHandler(function (text, prompt) {
        if (text != "" && text != "\n") {
            Object.__static__('commandProcessor')(text.replace(/\n/g, ''), function () {
                prompt();
            });
        } else prompt();
    });
};
