module.exports.operate = async ({client, msg, author, member, auth}, Discord = require("discord.js")) => {
    if ((!author.roles.cache.some(r => auth.Perms.Yonetim.includes(r.id))) && (!author.permissions.has("ADMINISTRATOR"))) return;
  if (!member) return client.message(client.noMember(msg), msg.channel.id, 6500);
      await member.roles.add(auth.Perms.Vip);
    msg.react(client.react("duztik"));
     client.message({embed: { 
      author: { name: msg.member.user.tag, icon_url:  msg.member.user.displayAvatarURL({dynamic:true}) }, 
      description: `${author} yetkili tarafından ${member} adlı üyeye başarıyla <@&${auth.Perms.Vip}> rolü verilmiştir.`,
      color: client.renk[Math.floor(Math.random() * client.renk.length)]}}, auth.Logs.AbilityLog); 
  };

  module.exports.help = {
    name: "vip",
    alias: ["elite"]
  };