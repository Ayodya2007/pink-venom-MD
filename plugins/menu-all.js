import { promises, readFileSync } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'

let tags = {
  'main': 'Main',
  'rpg': 'RolePlay Games',
  'xp': 'Exp & Limit',
  'jadian': 'Jadian',
  'sticker': 'Sticker',
  'edukasi': 'Edukasi',
  'quran': 'Al Quran',
  'tools': 'Tools',
  'kerang': 'Kerang Ajaib',
  'primbon': 'Primbon',
  'fun': 'Fun',
  'game': 'Game',
  'quotes': 'Quotes',
  'anime': 'Anime', 
  'audio': 'Audio',
  'maker': 'Maker',
  'downloader': 'Downloader',
  'internet': 'Internet',
  'random': 'Random',
  'nsfw': 'Nsfw',
  'nulis': 'MagerNulis & Logo',
  'anonymous': 'Anonymous Chat',
  'database': 'Database',
  'admin': 'Admin',
  'group': 'Group',
  'vote': 'Voting',
  'absen': 'Absen',
  'premium': 'Premium',
  'advanced': 'Advanced',
  'info': 'Info',
  'owner': 'Owner',
  'jadibot': 'Jadi Bot',
  'host': 'Host',
  'Baileys': 'Baileys',
  'nocategory': 'No Category',
}
let emot = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚜', '⚝', '⚚', '♪'])}`
let rus = JSON.parse(readFileSync('./json/emoji.json'))
let emm = rus.emoji
const defaultMenu = {
  before: `
╭─────═[ INFO USER ]═─────⋆
│╭───────────────···
┴│☂︎ *Name:* %name
⬡│☂︎ *Limit:* %limit
⬡│☂︎ *Money:* %money
⬡│☂︎ *Role:* %role
⬡│☂︎ *Level:* %level 
⬡│☂︎ *Xp:* %exp
┬│☂︎ *Total Xp:* %totalexp
│╰────────────────···
┠─────═[ TODAY ]═─────⋆
│╭────────────────···
┴│    *${ucapan} %name!*
⬡│☂︎ *Tanggal:* %week %weton
⬡│☂︎ *Date:* %date
⬡│☂︎ *Tanggal Islam:* %dateIslamic
┬│☂︎ *Waktu:* %time
│╰────────────────···
┠─────═[ INFO BOT ]═─────⋆
│╭────────────────···
┴│☂︎ *Nama Bot:* SkyBot 
⬡│☂︎ *Mode:* Public
⬡│☂︎ *Prefix:* [ *%_p* ]
⬡│☂︎ *Baileys:* Multi Device
⬡│☂︎ *Platform:* %platform
⬡│☂︎ *Type:* Node.Js
⬡│☂︎ *Uptime:* %muptime
┬│☂︎ *Database:* %rtotalreg dari %totalreg
│╰────────────────···
╰──────────═┅═──────────

⃝▣──「 *INFO CMD* 」───⬣
│ *Ⓟ* = Premium
│ *Ⓛ* = Limit
▣────────────⬣
%readmore
`.trimStart(),
  header: '⃝▣──「 %category 」───⬣',
  body: '│〆 %cmd %isPremium %islimit',
  footer: '▣───────────⬣\n',
  after: `${cmenua}`,
}
let handler = async (m, { conn, groupMetadata, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let { premium, exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let prems = `${premium ? "Premium" : "Bukan user premium"}`
    let name = await conn.getName(who)
    let pepe = hwaifu.getRandom()
    let emott = emot
    let tagg = `@${m.sender.split(`@`)[0]}`
    let pp = await conn.profilePictureUrl(who).catch(_ => './src/avatar_contact.png')
    if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: false,
        money: 0,
        pasangan: "",
      }
     }
     let math = max - xp
     let res = JSON.parse(readFileSync('./json/emoji.json'))
     let em = res.emoji
    let totalfeatures = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '🅛' : '')
                .replace(/%isPremium/g, menu.premium ? '🅟' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, totalfeatures, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role, ucapan,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    global.ftroli = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 9999999999999,
                            status: 1,
                            surface : 1,
                            message: 'Arifzyn',
                            orderTitle: 'MENU',
                            thumbnail: await (await fetch('https://telegra.ph/file/3911d7aaaa8733314f70f.png')).buffer(),
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
await conn.sendButtonDoc(m.chat, text.trim(), author, '𝐎𝐰𝐧𝐞𝐫', '.owner', fkontak, {
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
    thumbnail: await(await fetch(hwaifu.getRandom())).buffer(),
    thumbnailUrl: sgc,
    title: '𝐀𝐋𝐋 𝐌𝐄𝐍𝐔 𝐁𝐎𝐓'  
				}
			}
})
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}

handler.command = /^(allmenu)$/i

handler.exp = 3

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }