const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  var version = '1.0.1';
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setTitle("Server Information")
  .addField("Server Navn", message.guild.name, true)
  .addField("Total antal af medlemmer", message.guild.memberCount, true)
  .addField('Version:', version, true)
  .setColor(0xF1C40F)
  .setThumbnail(sicon)
  .setFooter('https://ringsted-esport.dk/')

  return message.channel.send(serverembed);

}

module.exports.help = {
  name: "serverinfo"
}
