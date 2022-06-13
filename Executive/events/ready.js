const moment = require('moment');
require("moment-duration-format");
let Stat = require("../models/stats");
let sunucuayar = require("../models/sunucuayar");
const client = global.client;
let conf = client.ayarlar
let yetkilisay = require("../models/yetkilisay");
let { MessageEmbed } = require("discord.js");
module.exports = async client => {
  let data = await sunucuayar.findOne({guildID: client.ayarlar.sunucuId});
  if (!data) console.log("Sunucu ayarları başarıyla yüklendi! artık kurulum yapabilirsiniz!"),await sunucuayar.updateOne({}, {guildID: client.ayarlar.sunucuId}, {upsert: true, setDefaultsOnInsert: true}).exec();

   let arr = await yetkilisay.find({})
  try {
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
    client.user.setStatus("online");
    let kanal = client.channels.cache.filter(x => x.type === "voice" && x.id === client.ayarlar.botSesID);
    setInterval(() => {
      const oynuyor = client.ayarlar.readyFooter;
      const index = Math.floor(Math.random() * (oynuyor.length));
      client.user.setActivity(`${oynuyor[index]}`, { type: "STREAMING", url: "https://www.twitch.tv/meriaz"
      });
      kanal.map(channel => {
        if (channel.id === client.ayarlar.botSesID) {
          if (channel.members.some(member => member.id === client.user.id)) return;
          if (!client.channels.cache.get(client.ayarlar.botSesID)) return;
          client.channels.cache.get(channel.id).join().then(x => console.log("Bot başarılı bir şekilde ses kanalına bağlandı")).catch(() => console.log("Bot ses kanalına bağlanırken bir sorun çıktı Lütfen Yetkileri kontrol ediniz!"));
        } else return;
      });
    }, 10000);
  } catch (err) {}

};