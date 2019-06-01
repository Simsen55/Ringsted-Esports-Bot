const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Desvære mate, det kan du ikke!");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Kunne ikke finde den spiller, Thug.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Vælg en rolle!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Kunne ikke finde den rolle.");

  if(rMember.roles.has(gRole.id));
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Tillykke, du har fået rollen ${gRole.name}`)
  }catch(e){
    message.channel.send(`Tillykke til <@${rMember.id}>, der har fået rollen ${gRole.name}. Vi har prøvet a dm dem, men dm er låst.`)
  }
}

module.exports.help = {
  name: "addrole"
}

//Desvære mate, det kan du ikke!
//Tillykke til <@${rMember.id}>, du har fået rollen ${gRole.name}. Vi har prøvet a dm dem, men dm er låst.
