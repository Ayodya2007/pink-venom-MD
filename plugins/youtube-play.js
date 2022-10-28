import fetch from 'node-fetch'
import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
try {
  if (!text) throw `Use example ${usedPrefix}${command} gustixa`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  let urll = 'https://www.youtube.com/watch?v=' + videoId
  let ytLink = `https://yt-downloader.akkun3704.repl.co/?url=${urll}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
  let pla = `*${htki} Play ${text} ${htka}*

📌 *Title:* ${title}
⏲️ *Published:* ${publishedTime}
⌚ *Duration:* ${durationH}
👁️ *Views:* ${viewH}
📔 *Description:* ${description}
  `
  await conn.sendButton(m.chat, pla, '🔗 Url : ' + urll, thumbnail, [
    ['🎶 Audio', `${usedPrefix}yta ${urll} yes`],
    ['🎥 Video', `${usedPrefix}ytv ${urll} yes`],
], m)
} catch (e) {
m.reply(eror)
throw e
}

}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader', 'limitmenu']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = true
handler.register = true

export default handler

async function shortUrl(url) {
  url = encodeURIComponent(url)
  let res = await fetch(`https://is.gd/create.php?format=simple&url=${url}`)
  if (!res.ok) throw false
  return await res.text()
}