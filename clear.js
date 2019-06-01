const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Uh ha uh ha!");
  if(!args[0]) return message.channel.send("Uh ha uh ha!");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Slettet ${args[0]} beskeder.`).then(msg => msg.delete(5000));
  });

}

module.exports.help = {
  name: "clear"
}
