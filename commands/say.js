module.exports = (client, message, arguments) => {
    let text = arguments.join(' ');
    if(!text) return message.channel.send('Debes escribir un mensaje');
    message.channel.send(text);
}