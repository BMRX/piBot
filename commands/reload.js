var config = require('../config.json');
var clearModuleCaches = require('../modules/clear-module-caches.js');

module.exports = function (client, from, to, text, message) {
    if (from == config.admin) {
            client.say(to, clearModuleCaches());
        } else {
            client.say(to, 'Nuuuuuu');
        }
}