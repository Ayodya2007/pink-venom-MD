import fetch from 'node-fetch'
import xa from 'xfarr-api'

let handler = async (m, { conn, command, args, usedPrefix }) => {
   if (!args[0]) return m.reply('Putting *URL* Facebook..')
    if (!args[0].includes("facebook")) return m.reply(`Url is wrong..\n\n*Example:*\n${usedPrefix}fb https://www.facebook.com/juankcortavarriaoficial/videos/218237676749570/`)
    let res = await xa.downloader.facebook(args[0])
    await m.reply('Sedang file.')
    let cap = `${sym} *Quality :* High`
    await conn.sendFile(m.chat, res.hd, 'fb.mp4', cap, m)
}
handler.help = ['fbhigh']
handler.tags = ['downloader']
handler.command = /^(fbhd|fbhigh)$/i

export default handler