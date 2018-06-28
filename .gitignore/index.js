const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.login(process.env.TOKEN);

bot.on('ready', function() {
    bot.user.setGame("Ready :)")
    console.log("Connected");
    
module.exports.run = async (bot, message, args) => {

    Let msg = ready message.channel.send("Ready");
    ready msg.react("✅");
    ready msg.react("❎");
    
}
});
