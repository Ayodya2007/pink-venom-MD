let handler = async (m, { text }) => {
let name = m.pushName || conn.getName(m.sender)
let tag = `@${m.sender.split('@')[0]}`

let user = global.db.data.users[m.sender]
let afkTime = user.afk

user.afk = + new Date
user.afkReason = text
let affk = `${tag} Sedang AFK 
Alasan ${text ? ': ' + text : ''}` 
conn.reply(m.chat, affk, fkontak, { mentions: await conn.parseMention(affk) } )
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

export default handler