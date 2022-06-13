const { MessageEmbed, Discord } = require("discord.js");
const conf = client.ayarlar
let mongoose = require("mongoose");
let sunucuayar = require("../../models/sunucuayar");
let otokayit = require("../../models/otokayit");
module.exports.run = async (client, message, args, durum, kanal) => {
	if (!message.guild) return;
    
	let data = await sunucuayar.findOne({})
    let tag = data.TAG;
    let tag2 = data.TAG2;
    let unRegisterRol = data.UNREGISTER;
    if (await client.permAyar(message.author.id, message.guild.id, "jail") || durum || message.member.roles.cache.get("768977391963209729")) { 
    let target = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!target) return message.reply("Lütfen bir kullanıcı etiketleyiniz!");
    if (target.id === message.author.id) return message.react(client.emojis.cache.find(x => x.name === "meri_iptal"))
    if (message.member.roles.highest.position <= target.roles.highest.position) return message.reply(`Belirttiğin kişi senden üstün veya onunla aynı yetkidesin!`);
    if (target.roles.cache.get(data.EnAltYetkiliRol) && !message.member.permissions.has(8)) return message.reply("Yetkililer birbirine ceza-i işlem uygulayamazlar.");
    otokayit.deleteOne({userID: target.id}).exec();
        target.setNickname(`${target.user.username.includes(tag) ? tag : tag2 ? tag2 : tag} İsim | Yaş`)
    target.roles.set(unRegisterRol).then(x => message.react(client.emojis.cache.find(x => x.name === "meri_tik"))).catch(y => message.react(client.emojis.cache.find(x => x.name === "meri_iptal")));
	} else return;
}
exports.conf = {aliases: ["unregister", "kayitsiz"]}
exports.help = {name: 'kayıtsız'}
