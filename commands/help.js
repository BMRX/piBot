/*
    ---------------------------------------------------------------------------------------
     When user calls help command outputs list of available commands, not sure if public
     TODO: arguments 
      ex: pi help hello
      op: hello | pi says hello
    ---------------------------------------------------------------------------------------
*/

var fs = require('fs');
module.exports = function (client, from, to, text, message) {

  string = "";

  buildString();

    function toString() {
      return this.string;
    }

    function buildString() {

      this.string = 'The available commands are: '; //reset the string
      this.string += '\n';

      fs.readdirSync('./commands/').forEach(function (file) {
        this.string += '\n' + file.replace(/\.js$/, '');
      });
      
    }

    client.say(from, toString());
}