let handler = async (m, { conn, usedPrefix }) => {
let user = global.db.data.users[m.sender]
let buah = `${htki} GUDANG BUAH @${m.sender.split`@`[0]} ${htka}

🍌 ${user.pisang} Pisang
🍇 ${user.anggur} Anggur 
🥭 ${user.mangga} Mangga
🍊 ${user.jeruk} Jeruk
🍎 ${user.apel} Apel

Gunakan Command ${usedPrefix}sell Untuk Menjual Buah !`
conn.reply(m.chat, buah, fkontak ,{ mentions: await conn.parseMention(buah) })
}
handler.help = ['buah']
handler.tags = ['rpg']
handler.command = /^(buah|listbuah)$/i

export default handler