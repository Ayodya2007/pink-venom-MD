let handler = async(m, { groupMetadata, command, conn, text, usedPrefix }) => {
	if (!Number(text)) throw 'Masukkan Angka'
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
    let name = await conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    let aa = global.db.data.users[a]
    let hmsil1 = text

let hsl = `*@${a.split`@`[0]}* Kamu mendapatkan seweran dari @${m.sender.split`@`[0]} sebesar *${hmsil1}* `
user.money -= hmsil1
aa.money += hmsil1

conn.reply(m.chat, hsl, fkontak ,{ mentions: await conn.parseMention(hsl) })
}
handler.help = ['sawer']
handler.tags = ['rpg']
handler.command = /^(sawer|nyawer)$/i
handler.group = true
export default handler