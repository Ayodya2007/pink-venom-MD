import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, args }) => {
   if (!args[0]) return m.reply(`Masukan Url TikTok !`)
   let rest = await fetch(`https://malesin.xyz/tiktok?url=${args[0]}`)
   let res = await rest.json()
   let { title, author, video, audio, videoWM } = res
   let kon = `☰ ━━━ ❨ TikTok No WaterMark ❩ ━━┄┈ ☰
   
${sym} *Author :* ${author}
${sym} *Title :* ${title}`
m.reply(wait)
await conn.sendButtonVid(m.chat, video, kon, global.author, 'Watermark', usedPrefix + 'get ' + videoWM, m)
}
handler.help = ['tiktoknowm', 'ttnowm']
handler.tags = ['downloader']
handler.command = /^(ttnowm|tiktoknowm)$/i

export default handler