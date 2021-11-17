const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = async (bot, message, args) => {
var prefix = ayarlar.prefix;             
    
  if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send(`Bu komutu kullanabilmek için gerekli izine sahip değilsiniz! [ Gereken Yetki -> **Üyeleri At** ]`);
  
	let user = message.mentions.users.first() || message.client.users.cache.get(args[0]) || message.client.users.cache.find(m => m.username === args.slice(0).join(" ")) || message.author;
  let reason = args.slice(1).join(' ');
  
  if (message.mentions.users.size < 1) return message.channel.send(`Sunucudan atmam için istediğiniz kullanıcıyı etiketlemelisiniz; \`${prefix}at @Zraei Uyarı\` `);
  if (user.id === message.author.id) return message.channel.send('Kendini atamazsın.');
if (user.position > message.member.roles.highest.position) return message.channel.send(`Bu kullanıcının yetkisi senin yetkinden yüksek olduğu için işlem yapamıyorum.`);
			    if (!reason) reason = 'Belirtilmemiş.'
    if (!user) return message.channel.send(`Etiketlediğiniz kullanıcıyı sunucumuzda bulamadım.`)
    let member = message.guild.member(user)
    if (!member) return message.channel.send(`Etiketlediğiniz kullanıcıyı sunucumuzda bulamadım.`)

 if (!message.guild.member(user).bannable) return message.channel.send(`Bu kişiyi sunucumuzdan atamıyorum çünkü benden yüksek yetkisi var veya benim gerekli yetkilerimi vermediniz.`);

   if (!message.guild.member(user).bannable) return message.channel.send('Sunucumuzda ki yetkilileri atamam!');
    message.guild.member(user).kick(reason);
message.channel.send(`<@${user.id}> **Adlı kullanıcı sunucumuzdan atıldı!** **Sebep: \`${reason}\``)


};

exports.conf = {
  aliases: ['at'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'kick',
  description: 'Belirttiğiniz kişiyi sunucumuzdan atar.',
  usage: 'kick <@kullanıcı> <sebep>',
 
};
