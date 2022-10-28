import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
let pp = hwaifu.getRandom()
  let stats = Object.entries(db.data.stats).map(([key, val]) => {
    let name = Array.isArray(plugins[key]?.help) ? plugins[key]?.help?.join('\n') : plugins[key]?.help || key 
    if (/exec/.test(name)) return
    return { name, ...val }
  })
  stats = stats.sort((a, b) => b.total - a.total)
  let txt = stats.slice(0, 50).map(({ name, total, last }, idx) => {
    return `(${idx + 1})
Command : *${name}*
Hit : *${total}*
Last used : *${getTime(last)}*`
}).join`\n\n`
  conn.send2ButtonDoc(m.chat, txt, author, '𝐎𝐖𝐍𝐄𝐑', '.owner', '𝐌𝐄𝐍𝐔', '.menu', fkontak, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: '© 𝐒𝐤𝐲𝐁𝗼𝐭',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: '© 𝐒𝐤𝐲𝐁𝗼𝐭',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await(await fetch(pp)).buffer(),
    thumbnailUrl: sgc,
    title: 'INFO BOT DASHBOARD'  
				}
			}
})
}
handler.help = ['dashboard']
handler.tags = ['info']
handler.command = /^(db|dashboard)$/i

export default handler 
	
export function parseMs(ms) {
  if (typeof ms !== 'number') throw 'Parameter must be filled with number'
  return {
    days: Math.trunc(ms / 86400000),
    hours: Math.trunc(ms / 3600000) % 24,
    minutes: Math.trunc(ms / 60000) % 60,
    seconds: Math.trunc(ms / 1000) % 60,
    milliseconds: Math.trunc(ms) % 1000,
    microseconds: Math.trunc(ms * 1000) % 1000,
    nanoseconds: Math.trunc(ms * 1e6) % 1000
  }
}

export function getTime(ms) {
  let now = parseMs(+new Date() - ms)
  if (now.days) return `${now.days} Hari yang lalu`
  else if (now.hours) return `${now.hours} Jam yang lalu`
  else if (now.minutes) return `${now.minutes} Menit yang lalu`
  else return `Barusan`
}