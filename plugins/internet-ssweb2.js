Import fetch from 'node-fetch'

let handler = async (m, { conn, command, text }) => {
   if (!text) return conn.reply(m.chat, 'Masukkan Linknya Kak', m)
   let img = `https://api.lolhuman.xyz/api/ssweb?apikey=${global.lolkey}&url=${text}`
  await m.reply('_𝚃𝚞𝚗𝚐𝚐𝚞 𝚂𝚎𝚋𝚎𝚗𝚝𝚊𝚛⏲️_')
   await conn.sendFile(m.chat, img, 'sswe.jpg', `${text}`, m)
}
handler.help = ['ssweb2']
handler.tags = ['internet']
handler.command = /^(ssweb2)$/i

 export default handler