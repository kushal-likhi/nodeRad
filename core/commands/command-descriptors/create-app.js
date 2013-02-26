exports.enabled = true;

exports.getCommandName = function () {
    return "create-app";
};

exports.handler = function (args, callback) {
    if (args.length != 2) {
        "Invalid number of arguments. Syntax: create-app <appName>".toSystemErrorStream();
        callback();
    } else {
        try {
            Object.__static__("pluginManager").loadPlugin("create-app").execute(args, callback)
        } catch (c) {
            "Unable to load plugin 'create-app'".toSystemErrorStream();
            callback();
        }
    }
};