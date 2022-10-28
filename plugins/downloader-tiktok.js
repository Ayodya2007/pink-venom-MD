import xa from 'xfarr-api'

let handler = async (m, { conn, usedPrefix, command, args }) => {

   if (!args[0]) throw `Imput Url TikTok`
   let res = await xa.downloader.tiktok(args[0])
  m.reply(wait)
  await conn.sendFile(m.chat, res.media[0].url, '', `${sym} *Title :* ${res.title}\n\n © 𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝑩𝒚 ${res.author}`, m)
}
handler.help = ['tiktok <url>']
handler.tags = ['downloader']

handler.command = /^(tiktok|tt)$/i
handler.limit = true

export default handler