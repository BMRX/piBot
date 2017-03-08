/*
    ---------------------------------------------------------------------------------------
     I dunno this is a thing that listens for any sentence that contains "bmrx" in it. lol
     It can save all of these sentences to a file, it can also give them all on request.
     The commands here are not listed under "help"
    ---------------------------------------------------------------------------------------
*/
var fs = require('fs');
var config = require('../config.json');
pingString = new Array();
module.exports = function (client, from, to, text, message) {

    var opts = {
        command: String(text.split(' ')[1]),
        argument: text.substring(String(text.split(' ')[2]).length).trim(),
        messageToSend: ''
    }

    
    var reBm = new RegExp(/\bbmrx\b/);
    if (reBm.test(text) == true) {
        pingString.push(text);
    }

    var internalCommand = {}; // lookup table for internal commands

    internalCommand.save = function (opts) {
        if (from == config.admin && pingString != 0) {
            //force save of mentions
            fs.writeFile("./logs/bmrx-pings.txt", "\n" + pingString, function (err) {
                if (err) {
                    return console.log(err);
                }

                console.log("The file was saved!");
            });

        } else {
            client.say(to, "Nothing to save! :D");
        }
    };

    internalCommand.gimme = function (opts) {
        if (from == config.admin && pingString != 0) {
            console.log(pingString.length);
            for (i = 0; i < pingString.length; i++) {
                client.say(from, pingString[i]);
            }

        } else {
            client.say(to, "Nothing to gib! :D");
        }
    };

    if (typeof internalCommand[opts.command] === 'function') {
        internalCommand[opts.command](opts);
    }
}