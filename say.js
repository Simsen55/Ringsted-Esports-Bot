const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Uh ha uh ha!");
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(botmessage);

}

module.exports.help = {
  name: "say"
}
