var fs = require('fs');
var irc = require('irc');
// var jsonObj = JSON.parse(fs.readFileSync('data.json', 'utf8'));

var timer;

var listening = true;

var rndReplies = ["3.14?", "Ya hi!", ":D"];

var re = new RegExp(/\bpi\b/);

var config = {
    channels: ["#HimBot"],
    server: "irc.us.gamesurge.net",
    botName: "Raspberry"
};

var bot = new irc.Client(config.server, config.botName, {
    channels: config.channels
});

//Channel listener, need to change so that pi can ignore users instead of channel
if (listening == true) {
    bot.addListener('message', function (from, to, text, message, who) {
        if (text.search(re) == 0 && re.test(text) == true) {
            bot.say(to, "hai :D");
            spamTimer(5);
        }
    })
}

//Debug listener :D and Master commands
bot.addListener('message', function (from, to, text, message, who) {
    console.log(from + ': ' + text);
    console.log(re.test(text));
})

function spamTimer(secs) {
    if (secs > 0) {
        secs--;
        listening = false;
        console.log(secs);
        timer = setTimeout(function () {
            spamTimer(secs);
        }, 1000);
    } else if (secs <= 0) {
        listening = true;
    }
}