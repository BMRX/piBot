var fs = require('fs');
var config = require('../config.json');

module.exports = function (client, from, to, text, message) {
    'use strict';
	let DEBUG = true; // Usually I would share this on a global, but your code isn't suited for that
	let BOTNAME = 'pi'; // Same as above, this makes supporting things long term a pain
						// unless it's all called from the same static config as above.
	
	let tsplit = text && text.split(' ') || [];
	// Use or to make sure that you have an array if text.split fails; (or text is '');
	
	if(!( tsplit[0] && tsplit[0].toLowerCase()==BOTNAME )) {
		// We are not being talked at, always put to lowercase cause some people yell.
		// We check that the first arg exists first, then check if it is 'pi'.
		return; // We cant do more here, because fuck it
	}

	let opts = {
		from: from,	// This is incase you decide to attach user registration and shit in later
		to: to,	// This is to make the better option easier to work with.
		client: client, // See above
		command: tsplit[1].toLowerCase().trim(), // First word after pi is the command
		argstring: tsplit.slice(2).join('').toLowercase().trim(), // All words after the first two are args, we join them all up here
		argarray: tsplit.slice(2), // Here we want all args as array elements, in original case. (this is the useful bit)
	};

	// This was pointless as a function you redeclared every time then called once, before discarding.
	// Either put the function declaration out of the scope of this function (eg at the bottom)
	// Or put it inline if it's only called once.
	DEBUG && console.log( 'Checking For:', '../commands/' + opts.command + '.js' );
	if (fs.existsSync('../commands/' + opts.command + '.js')) { // Check if the command exists.
		// This is not the best option, use the commented out section below instead after updating commands.
		let output = require('./../commands/' + opts.command + '.js')(client, from, to, text, message);
		/*
		// In this we call it with the opts command as the value instead, it allows us to return the opts command after
		// Which means we can chain the same object through multiple functions.
		let output = require('./../commands/'+opts.command+'.js')(opts);
		*/

		// Honestly, I would suggest you not do this here, use this function to call the command
		// And have the commands take care of saying things.
		if (output) {
			client.say(to, output);
		}
	}
	else {
		client.say(to, "Sorry I don't know that command.");
	}
};