/**
 * noderad
 * Author: kushal
 * Date: 10/2/13
 * Time: 6:41 PM
 */

var nodeRadCore = require("./core");

nodeRadCore.initialize();

"Initializing NodeRad".toSystemStatusStream();

nodeRadCore.loadSystemModules();
//Todo init modules here

"Welcome To NodeRad".yellow.toSystemOutStream();

nodeRadCore.enablePrompt();


