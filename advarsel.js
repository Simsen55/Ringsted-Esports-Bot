const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Det kan du ikke!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find them yo");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Plat eller Krone?");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
});

  let warnEmbed = new Discord.RichEmbed()
  .setTitle("Advarsler")
  .setAuthor(message.author.username)
  .addField("Advared Spiller", wUser.id)
  .addField("Advared I Kanalen", message.channel)
  .addField("Antal Advarsler", warns[wUser.id].warns)
  .addField("Grund", reason)
  .setColor(0xF1C40F);

  let warnchannel = message.guild.channels.find(`name`, "incident");
  if(!warnchannel) return message.reply("Kunne ikke finde kanalen?");

  warnchannel.send(warnEmbed);

  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole) return message.reply("You should create that role dude.");

    let mutetime = "10s";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> er blevet midlertidigt muted`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> er blevet unmuted.`)
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 3){
    message.guild.member(wUser).ban(reason);
    message.reply(`<@${wUser.id}> er blevet banned.`)
  }

}

module.exports.help = {
  name: "warn"
}
