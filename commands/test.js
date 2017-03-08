module.exports = function (client, from, to, text, message) {
    var opts = {
        command: String(text.split(' ')[2]),
        argument: String(text.split(' ')[3])
    }

    console.log(opts);
}