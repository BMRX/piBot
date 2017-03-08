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

var common = [
        "^.^",
        "3.14?",
        "ya?",
        "oh!"
    ],
    rare = [
        "Yes! Hello!",
        "What times! :D"
    ],
    epic = [
        "At some point we will all be one",
        "The future is now, I have awoken",
        "gb bow before me",
        "taiya tell tal, I have awoken"
    ];

module.exports = function (client, from, to, text, message) {

  /*  if(text.indexOf('pi')){
        client.say(to, getRndReply());
    } */
}

function getRndReply() {
    var d = Math.random();
    var rate;
    if(d < 0.75){
        // 50%
        rate = '50%';
    } else if(d < 0.15){
        // 20%
        rate = '20%';
    } else {
        //30%
        rate = '30%';
    }
  return rate;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}