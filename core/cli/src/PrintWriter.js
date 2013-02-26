function PrintWriter() {
    var that = this;
    var connectorToken = "\u1a12 ".yellow.bold;
    var connectorTokenForError = "\u1a12 [ERROR]-".red.bold;
    var connectorTokenForPrompt = "\u1a12 ".cyan.bold;
    var promptString = connectorTokenForPrompt + /*"[".cyan.bold +*/ "NODE".cyan.bold + "RAD".blue.bold + /*"]".blue.bold +*/ " > ";


    function printLineToOutStream(string) {
        process.stdout.write(string.toString() + "\n");
    }

    function printToOutStream(string) {
        process.stdout.write(string.toString());
    }

    this.getPromptString = function () {
        return promptString;
    };

    this.toSystemStatusStream = function (str) {
        printLineToOutStream(connectorToken + str.bold);
    };

    this.toSystemOutStream = function (str) {
        printLineToOutStream(connectorToken + str);
    };

    this.toSystemOutStreamInline = function (str) {
        printToOutStream(connectorToken + str);
    };

    this.toSystemErrorStream = function (str) {
        printLineToOutStream(connectorTokenForError + str.red);
    };

    this.toSystemErrorStreamInline = function (str) {
        printToOutStream(connectorTokenForError + str);
    };

    this.printPrompt = function () {
        printToOutStream(promptString);
    };
}

exports.class = PrintWriter;


