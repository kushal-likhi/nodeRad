function InputStream() {
    var that = this;
    var readline = require("readline");
    var inputDataEventHandlers = {};
    this.addInputReceivedHandler = function (id, handler) {
        inputDataEventHandlers[id] = handler;
    };

    var rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout,
        completer:function (line, callback) {
            var commands = Object.keys(Object.__static__("nodeRadCommands"));
            var hits = commands.filter(function (c) {
                return c.indexOf(line) == 0
            });
            callback(null, [
                hits.length ? hits : commands, line
            ]);
        }
    });
    rl.setPrompt(Object.__static__("printWriter").getPromptString(), 12);

    rl.on('line', function (cmd) {
        for (var key in inputDataEventHandlers) {
            if (inputDataEventHandlers.hasOwnProperty(key)) {
                try {
                    inputDataEventHandlers[key](cmd, function () {
                        rl.prompt();
                    });
                } catch (c) {
                    c.toString().toSystemErrorStream();
                }
            }
        }
    });
    this.showPrompt = function () {
        rl.prompt();
    };
}

exports.class = InputStream;