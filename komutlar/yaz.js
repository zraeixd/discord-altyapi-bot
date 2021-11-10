const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Oluşturmam için herhangi bir komut yazmalısınız.');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  aliases: ['say', 'söyle'],
  permLevel: 0,
  kategori: 'Genel'
};

exports.help = {
  name: 'yaz',
  description: 'Oluşturulması istediğiniz komutları bota yazdırabilirsiniz.',
  usage: 'yaz [Oluşturmak istediğiniz komutu yazınız.]'
};
