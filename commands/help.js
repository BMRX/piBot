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