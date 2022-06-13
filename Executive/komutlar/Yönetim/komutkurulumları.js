const { MessageEmbed, Discord } = require("discord.js");
const conf = client.ayarlar
let mongoose = require("mongoose");
let sunucuayar = require("../../models/sunucuayar");
module.exports.run = async (client, message, args, durum, kanal) => {
	if (!message.guild) return;

  
    if (durum) {
  let data = await sunucuayar.findOne({guildID: message.guild.id});
            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTimestamp()
            .setFooter(client.ayarlar.footer)
            .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
            .setDescription(``)
            .addField("\`\`\`Mute Komut Paneli\`\`\`", `
Mute Limit: **${data.MUTELimit}**
Mute Kanal: <#${data.MUTEChannel}>
Yetkililer: ${data.MUTEAuthorized.map(x => `<@&${x}>`)}`)
            .addField("\`\`\`Vmute Komut Paneli\`\`\`", `
VMute Limit: **${data.VMuteLimit}**
VMute Kanal: <#${data.VMUTEChannel}>
Yetkililer: ${data.VMUTEAuthorized.map(x => `<@&${x}>`)}`)
            .addField("\`\`\`Jail Komut Paneli\`\`\`", `
Jail Limit: **${data.JAILLimit}**
Jail Kanal: <#${data.JAILChannel}>
Yetkililer: ${data.JAILAuthorized.map(x => `<@&${x}>`)}`)
            .addField("\`\`\`Reklam Komut Paneli\`\`\`", `
Reklam Limit: **${data.REKLAMLimit}**
Reklam Kanal: <#${data.REKLAMChannel}>
Yetkililer: ${data.REKLAMAuthorized.map(x => `<@&${x}>`)}`)
            .addField("\`\`\`Ban Komut Paneli\`\`\`", `
Ban Limit: **${data.BANLimit}**
Ban Kanal: <#${data.BANChannel}>
Yetkililer: ${data.BANAuthorized.map(x => `<@&${x}>`)}`)
            .addField("\`\`\`Register Komut Paneli\`\`\`", `
Kayıt Kanal: <#${data.REGISTER}>
Yetkililer: ${data.REGISTERAuthorized.map(x => `<@&${x}>`)}`)
message.channel.send(embed)

    } else return;

}
exports.conf = {aliases: ["komutkurulum","meribak"]}
exports.help = {name: 'kkurulum'}
