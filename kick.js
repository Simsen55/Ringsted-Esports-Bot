const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  let kUser = message.guild.member(message.mentions.users.first() || message-guild.member.get(args[0]));
  if(!kUser) message.channel.send("Kan ikke finde spilleren!");
  let kReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Det har du dog ikke adgang til, selvom du har adgang til meget.");
  if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Den person kan ikke kickes!");

  let kickEmbed = new Discord.RichEmbed()
  .setTitle("~Kick~")
  .addField("Kicked Spiller", `${kUser} Med ID: ${kUser.id}`)
  .addField("Kicked Af", `<@${message.author.id}> med ID: ${message.author.id}`)
  .addField("Kicked I kanalen", message.channel)
  .addField("Grund", kReason)
  .setColor(0xF1C40F);

  let kickChannel = message.guild.channels.find(`name`, "incident");
  if(!kickChannel) return message.channel.send("Kunne ikke finde incident kanalen.");

  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickEmbed);

}

module.exports.help = {
  name: "kick"
}
