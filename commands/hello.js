module.exports = function (client, from, to, text, message) {
    client.say(to, 'Hello! ' + from + '.');
}