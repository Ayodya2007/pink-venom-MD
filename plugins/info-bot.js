import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
import { join } from 'path'
import fetch from 'node-fetch'
import { promises } from 'fs'
import moment from 'moment-timezone'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
    let pp = 'https://telegra.ph/file/cb1200170c98fea692b9a.jpg'
    let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
    let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let old = performance.now()
  let neww = performance.now()
  let speed = neww - old
  let cap = `*––––––『 BOT INFO 』––––––*
${readMore}
🤖 ɴᴀᴍᴇ: Pink Venom MD
🧩 ᴠᴇʀsɪᴏɴ: v1.0.0
📚 ʟɪʙʀᴀʀʏ: Simple Bot WhatsApp By Ayodya 

⏳ ᴜᴩᴛɪᴍᴇ: ${uptime}
📈 ᴅᴀᴛᴀʙᴀsᴇ: ${totalreg}

📅 ᴅᴀᴛᴇ: ${date}
⌚ ᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +5:30﹚

💻 sᴇʀᴠᴇʀ ɪɴғᴏ :
⮕ ᴩɪɴɢ: ${speed} ᴍs
⮕ ʀᴀᴍ: ${format(totalmem() - freemem())} / ${format(totalmem())}

💬 ᴡʜᴀᴛsᴀᴩᴩ sᴛᴀᴛᴜs :
⮕ ${groupsIn.length} - Group Chats
⮕ ${groupsIn.length} - Groups Joined
⮕ ${groupsIn.length - groupsIn.length} - Groups Left
⮕ ${chats.length - groupsIn.length} - Personal Chats
⮕ ${chats.length} - Total Chats
`
await conn.sendButtonDoc(m.chat, cap, botdate, 'Owner', usedPrefix + 'owner', fkontak, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: '𝙋𝙞𝙣𝙠 𝙑𝙚𝙣𝙤𝙢-𝙈𝘿',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: '𝙋𝙞𝙣𝙠 𝙑𝙚𝙣𝙤𝙢-𝙈𝘿',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await(await fetch(pp)).buffer(),
    thumbnailUrl: sgc,
    title: '☰ ━━━ ❨ INFO BOT ❩ ━━┄┈ ☰'
				}
			}
})
}
handler.help = ['botinfo']
handler.tags = ['info']
handler.command = /^(botinfo|infobot)$/i

export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}