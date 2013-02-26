function InputStream() {
    var that = this;
    var readline = require("readline");
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    var inputDataEventHandlers = {};
    this.addInputReceivedHandler = function (id, handler) {
        inputDataEventHandlers[id] = handler;
    };

    process.stdin.on('data', function (keyPressed) {
        var code = 0;
        for(var i = 0 ; i<keyPressed.length; i++){
            code += keyPressed.charCodeAt(i);
        }
        if (keyPressed === '\u0003') {
            process.exit();
        }
        if (code == 183 || code == 184) {
            console.log("Up or down")
        } else if (keyPressed.charCodeAt(0) != 27) {
            for (var key in inputDataEventHandlers) {
                if (inputDataEventHandlers.hasOwnProperty(key)) {
                    try {
                        inputDataEventHandlers[key](text);
                    } catch (c) {
                        c.toString().toSystemErrorStream();
                    }
                }
            }
        }
    });

}

exports.class = InputStream;



var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What do you think of node.js? ", function(answer) {
    // TODO: Log the answer in a database
    console.log("Thank you for your valuable feedback:", answer);

    rl.close();
});


