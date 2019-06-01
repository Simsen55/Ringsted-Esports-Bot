const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  let bicon = message.author.avatarURL;
  let botembed = new Discord.RichEmbed()
  .setTitle('Spiller Information:')
  .addField('Spillerens Discord Navn:', message.author.username, true)
  .addField('Nuværende Server:', message.guild.name, true)
  .setColor(0xF1C40F)
  .setThumbnail(bicon)
  .setFooter('https://ringsted-esport.dk/')

  return message.channel.send(botembed);

}

module.exports.help = {
  name: "Spillerinfo"
}
