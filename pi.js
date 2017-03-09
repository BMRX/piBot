var fs = require('fs');
var irc = require('irc');
var config = require('./config.json');
var commandHandler = require('./modules/command-handler.js');

/*  
    -----------------------------------------------------------------------------------
     Hacked together using aripalo's irc bot : https://github.com/aripalo/node-irc-bot
    -----------------------------------------------------------------------------------
*/

var re = new RegExp(/\bpi\b/);

var client = new irc.Client(config.server, config.botName, {
    channels: config.channels
});

// Error Handler
client.addListener('error', function (message) {
    console.log('error: ', message);
});

// Channel Listener
client.addListener('message', function (from, to, text, message, who) {
//    if (text.search(re) == 0 && re.test(text) == true) {
	if( text.startsWith('pi ') ) {
		// Faster and simpler to check for than the regex above,
		// and only looks for pi at the beginning ;)
		commandHandler(client, from, to, text, message);
	}
})