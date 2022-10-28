import xa from 'xfarr-api'

let handler = async (m, { conn, usedPrefix, command, text }) => {
   if (!text) throw `Masukan url !`
   let res = await xa.downloader.cocofun(text)
   let cap = `*Caption :* ${res.caption}
*Play :* ${res.play}
*Like :* ${res.like}
*Share :* ${res.share}
*Duration :* ${res.duration}`
await conn.sendButtonVid(m.chat, res.no_watermark, cap, author, 'Watermark', usedPrefix + 'get ' + res.watermark, m)
}
handler.help = ['cocofun']
handler.tags = ['downloader']
handler.command = /^(cocofun)$/i

export default handler