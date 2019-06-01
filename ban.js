const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  let bUser = message.guild.member(message.mentions.users.first() || message-guild.member.get(args[0]));
  if(!bUser) message.channel.send("Kan ikke finde spilleren!");
  let bReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Det har du dog ikke adgang til, selvom du har adgang til meget.");
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Den person kan ikke kickes!");

  let banEmbed = new Discord.RichEmbed()
  .setTitle("~Ban~")
  .addField("Bannet Spiller", `${bUser} Med ID: ${bUser.id}`)
  .addField("Bannet Af", `<@${message.author.id}> med ID: ${message.author.id}`)
  .addField("Bannet I kanalen", message.channel)
  .addField("Grund", bReason)
  .setColor(0xbc0000);

  let incidentchannel = message.guild.channels.find(`name`, "incident");
  if(!incidentchannel) return message.channel.send("Kunne ikke finde incident kanalen.");

  message.guild.member(bUser).ban(bReason);
  incidentchannel.send(banEmbed);

}

module.exports.help = {
  name: "ban"
}
