/*
    ------------------------------------------------------------------------------------------------------
     Passive Observer
     So this is supposed to be something that looks for people talking about the bot in a 
     direct/semi-direct manner.
     "Hello pi" = "Hi!"
     "I'm a big fan of pi" (random sentence that contains "pi") : {
         random roll for: common 75%, uncommon 15%, rare 10%, epic 5% 
     }
     common : normal quick replies 
     uncommon : bit more activity, possible ackowledgement of certain words?
     rare : signs of intelligence
     epic : wtf pi
    ------------------------------------------------------------------------------------------------------
*/

var reH = new RegExp(/\bhello\b/);
var reP = new RegExp(/\bpi\b/);

module.exports = function (client, from, to, text, message) {
    var opts = {
        command: String(text.split(' ')[0]),
        argument: text.substring(String(text.split(' ')[0]).length).trim()
    }
    if(opts.command && opts.argument == reH + ' ' + reP){
        client.say(to, 'Hello! ' + from + '.');
    }
}