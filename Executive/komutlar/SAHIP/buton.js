const disbut = require("discord-buttons");
module.exports.run = async (client, message, args, durum, kanal) => {
    if (!client.ayarlar.sahip.some(x => x == message.author.id)) return;

let film = new disbut.MessageButton().setStyle('gray').setLabel('📺 Film İzleyicisi!').setID('film')
let etkinlik = new disbut.MessageButton().setStyle('blurple').setLabel('🎉 Etkinlik Katılımcısı!').setID('etkinlik')
let cekilis = new disbut.MessageButton().setStyle('red').setLabel('🎁 Çekiliş Katılımcısı!').setID('cekilis')

message.channel.send(`${client.emojis.cache.find(x => x.name === "meri_yildiz")} Hepinize merhabalar **${message.guild.name}** Sunucuya girdiğinizden itibaren <@&965179493377540166> & <@&965179494237364274> & <@&965656562259603567> rolleri üzerinize verildi! Bu rolleri kaldırmak için uygun butonlara tıklamanız yeterli olacaktır!\n
:tada: **Etkinlik Katılımcısı =** \`Sunucu içerisi olan Konser, Oyun vb. etkinliklerden bildirim almak için gerekli rol!\`\n
:gift: **Çekiliş Katılımcısı =** \`Sunucu içerisi olan Nitro, Spotify, Exen vb. çekilişlerden bildirim almak için gerekli rol!\`\n
:tv: **Film İzleyicisi =** \`Sunucu içerisi olan Film, Film Geceleri, Netflix Yayınları etkinliklerden bildirim almak için gerekli rol!\`\n
\`\`\`Unutmayın! Kayıtlı kayıtsız herkes bu kanalı görebilmekte! @everyone && @here gibi bildirimleri kullanmıyoruz! Eğer bu çekiliş ve etkinliklerden haberdar olmak istiyorsanız aşağıdaki butonlardan rollerinizi alabilir, bildirim almak istemiyorsanız butonlara tıklayarak bırakabilirsiniz!\`\`\`

`

, {
    buttons: [cekilis,etkinlik,film]
})



}
let config = {
    "etkinlik": "965179493377540166",
    "cekilis": "965179494237364274",
    "film": "965656562259603567",
}
client.on('clickButton', async (button) => {
    if (button.id === 'etkinlik') {
        if (button.clicker.member.roles.cache.get(config.etkinlik)) {
            await button.clicker.member.roles.remove(config.etkinlik);await button.reply.think(true);await button.reply.edit("Rollerin Düzenlendi.")
        } else {
            await button.clicker.member.roles.add(config.etkinlik);await button.reply.think(true);await button.reply.edit("Rollerin Düzenlendi.")
        }
    }
    if (button.id === 'cekilis') {
        if (button.clicker.member.roles.cache.get(config.cekilis)) {
            await button.clicker.member.roles.remove(config.cekilis);await button.reply.think(true);await button.reply.edit("Rollerin Düzenlendi.")
        } else {
            await button.clicker.member.roles.add(config.cekilis);await button.reply.think(true);await button.reply.edit("Rollerin Düzenlendi.")
        }
  
    }
    if (button.id === 'film') {
        if (button.clicker.member.roles.cache.get(config.film)) {
            await button.clicker.member.roles.remove(config.film);await button.reply.think(true);await button.reply.edit("Rollerin Düzenlendi.")
        } else {
            await button.clicker.member.roles.add(config.film);await button.reply.think(true);await button.reply.edit("Rollerin Düzenlendi.")
        }
  
    }
   
    });
exports.conf = {
    aliases: []
}
exports.help = {
    name: 'meributon'
}