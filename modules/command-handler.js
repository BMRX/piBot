var fs = require('fs');
var config = require('../config.json');

module.exports = function (client, from, to, text, message) {

    var opts = {
        command: String(text.split(' ')[1]),
        argument: text.substring(String(text.split(' ')[0]).length).trim(),
        messageToSend: ''
    }

    function externalCommand(opts) {
            if (fs.existsSync('./commands/' + opts.command + '.js')) { // check if we have an command file
                var output = require('../commands/' + opts.command + '.js')(client, from, to, text, message);
                if (output) {
                    client.say(to, output);
                }
            } else {
                console.log("Not a command");
                return;
            }
    };

    externalCommand(opts);

};