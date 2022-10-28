let handler = async (m, { conn }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let user = global.db.data.users[who]
let cap  = `━━━ ❨ *Dompet @${who.split(`@`)[0]}* ❩ ━━━

*🌌 ▥ 𝑳𝒊𝒎𝒊𝒕 :* ${user.limit}
*💷 ▥ 𝑩𝒂𝒍𝒂𝒏𝒄𝒆 :* ${user.balance}
*💵 ▥ 𝑴𝒐𝒏𝒆𝒚 :* ${user.money}
*✨ ▥ 𝑬𝒙𝒑 :* ${user.exp}`
conn.sendButton(m.chat, cap, wm, [['Bank', '.bank']], fkontak, { mentions: await conn.parseMention(cap) })
}
handler.help = ['dompet', 'limit']
handler.tags = ['rpg']
handler.command = /^(dompet|limit)$/i

export default handler

function isNumber(x = 0) {
  x = parseInt(x)
  return !isNaN(x) && typeof x == 'number'
}