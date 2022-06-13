const {
    MessageEmbed,
    Discord
    } = require("discord.js");
    const conf = client.ayarlar;
    let mongoose = require("mongoose");
    let sunucuayar = require("../../models/sunucuayar");
    module.exports.run = async (client, message, args, durum, kanal) => {
    if (!message.guild) return;
    
    if (message.member.permissions.has(8) || durum) {
    let data = await sunucuayar.findOne({});
    let sunucuTAG = data.TAG;
    let Meriaz1 = await message.guild.members.cache.filter(member => member.user.username.includes(sunucuTAG)).size;
    let sesli = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.filter(member => !member.user.bot).size).reduce((a, b) => a + b);
    let bot = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.filter(member => member.user.bot).size).reduce((a, b) => a + b);
    let embed = new MessageEmbed()
    .setColor("BLACK")
    .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setFooter(`Meriask ❤️`, message.guild.iconURL({ dynamic: true })).setTimestamp().setColor("RANDOM")
    .setDescription(`${client.emojis.cache.find(x => x.name === "meri_sessay")} Şu anda toplam **${sesli}** (**+${bot} bot**) kişi seslide.
    ${client.emojis.cache.find(x => x.name === "meri_usersay")} Sunucuda **${message.guild.memberCount}** adet üye var (**${message.guild.members.cache.filter(member => member.presence.status !== "offline").size}** Aktif)
    ${client.emojis.cache.find(x => x.name === "meri_tagsay")} Toplamda **${Meriaz1}** kişi tagımızı alarak bizi desteklemiş.
    ${client.emojis.cache.find(x => x.name === "meri_boostsay")} Toplamda **${message.guild.premiumSubscriptionCount}** adet boost basılmış! ve Sunucu **${message.guild.premiumTier}** seviye`);
    message.channel.send(embed)
    }
    }
    exports.conf = {
    aliases: ["sunucusay", "merisay", "Say"]
    };
    exports.help = {
    name: 'say'
    };
    