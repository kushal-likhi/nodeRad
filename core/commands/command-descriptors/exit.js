exports.enabled = true;

exports.getCommandName = function () {
    return "exit";
};

exports.handler = function (args, callback) {
    if (args.length > 1) {
        "Invalid Arguments for Exit command.".toSystemErrorStream();
    } else {
        "Bye Bye!".toSystemStatusStream();
        process.exit();
    }
    callback();
};