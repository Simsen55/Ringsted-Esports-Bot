const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  let rUser = message.guild.member(message.mentions.users.first() || message-guild.member.get(args[0]));
  if(!rUser) return message.channel.send("Kan ikke finde spilleren.");
  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  .setTitle("Reports")
  .addField("Reported Spiller", `${rUser} Med ID: ${rUser.id}`)
  .addField("Reported Af", `${message.author} Med ID: ${message.author.id}`)
  .addField("Text Kanal", message.channel)
  .addField("Grund", reason)
  .setColor(0xF1C40F);

  let reportschannel = message.guild.channels.find(`name`, "reports");
  if(!reportschannel) return message.channel.send("Kunne ikke finde report kanalen");

  message.delete().catch(O_o=>{});
  reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "report"
}
