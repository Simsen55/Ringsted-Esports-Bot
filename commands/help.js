const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cmdconfig = require("../commands.json");
const version = require("../version.json");
let red = botconfig.red;

module.exports.run = async (bot, message, args) => {

  let version = '**1.0.1**';
  let advarsel = '%advarsel (@spiller) Grund';
  let report = '%report (@spiller) Grund';
  let serverinfo = '%serverinfo';
  let spillerinfo = '%spillerinfo';
  let level = '%level';
  let tempmute = '%tempmute (@spiller) tid - dette kræver permission!';
  let addrole = '%addrole (@spiller) Grund - Dette kræver permission!';
  let removerole = '%removerole (@spiller) Grund - Dette kræver permission!';
  let ban = '%ban (@spiller) Grund - Dette kræver permission!';
  let kick = '%kick (@spiller) Grund - Dette kræver permission!';
  let clear = '%clear (tilfældigt tal) - Dette kræver permission!';
  let say = '%say (Din besked) - Dette kræver permission!';

  let helpEmbed = new Discord.RichEmbed()
  .setAuthor("TIP Bot", bot.user.displayAvatarURL)
  .setTitle("Dette er help menuen \n\nDette er mine kommando'er:information_source:")
  .addBlankField()
  .setDescription(`${advarsel} \n ${report} \n ${serverinfo} \n ${spillerinfo} \n ${level} \n ${tempmute} \n ${addrole} \n ${removerole} \n ${ban} \n ${kick} \n ${say} \n ${clear} \n\n Nuværende version af botten: ${version}`)
  .setFooter(`Brug for help? Kontakt Nòn#9176`, bot.user.displayAvatarURL)
  .setColor(red)
  .setThumbnail(bot.user.avatarURL)
  .setTimestamp();

  message.channel.send(helpEmbed);
}

module.exports.help = {
  name: "help"
}
