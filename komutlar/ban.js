const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
let guild = message.guild.id;   
var prefix = ayarlar.prefix;

  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Bu komutu kullanabilmek için **Daha yüksek bir yetkiye** sahip olmalısın !`);
  
	let user = message.mentions.users.first() || message.client.users.cache.get(args[0]) || message.client.users.cache.find(m => m.username === args.slice(0).join(" ")) || message.author;
  let reason = args.slice(1).join(' ');
  
  if (!user) return message.channel.send(`Sunucudan yasaklamak istediğiniz kişiyi etiketlemeli veya id'sini yazmalısınız.; \`${prefix}ban @Zraei Reklam\` `);
  if (user.id === message.author.id) return message.channel.send('Kendinizi yasaklayamazsınız.');
  if (user.position > message.member.roles.highest.position) return message.channel.send(`Bu kullanıcının yetkisi maalesef seninkinden yüksek.`);
    if (!reason) reason = 'Belirtilmemiş.'
    if (!user) return message.channel.send(`Etiketlediğiniz kullanıcıyı sunucumuzda bulamadım.`)
    let member = message.guild.member(user)
    if (!member) return message.channel.send(`Etiketlediğiniz kullanıcıyı sunucumuzda bulamadım.`)

 if (!message.guild.member(user).bannable) return message.channel.send(`Bu kişiyi sunucumuzdan yasaklayamam **ya yetkisi benim yetkimden yüksektir ya da benim yetkilerimi vermedin :/`);

   if (!message.guild.member(user).bannable) return message.channel.send('Sunucudaki yetkilileri yasaklayamam!');

  message.guild.members.ban(user.id)
  message.channel.send(`<@${user.id}> **adlı kullanıcı sunucumuzdan yasaklandı!** **Sebep: \`${reason}\`**`)

};

exports.conf = {
  aliases: ['ban'],
  permLevel: 0,
  kategori: 'Moderasyon'
};

exports.help = {
  name: 'ban',
  description: 'Belirttiğiniz kişiyi sunucudan yasaklar.',
  usage: 'ban <@kullanıcı veya id> <sebep>',

};
