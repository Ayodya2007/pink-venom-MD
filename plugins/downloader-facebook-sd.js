import fetch from 'node-fetch'
import xa from 'xfarr-api'

let handler = async (m, { conn, command, args, usedPrefix }) => {
   if (!args[0]) return m.reply('Putting *URL* Facebook..')
   if (!args[0].includes("facebook")) return m.reply(`Url is wrong..\n\n*Example:*\n${usedPrefix}fb https://www.facebook.com/juankcortavarriaoficial/videos/218237676749570/`)
 try {
    let res = await xa.downloader.facebook(args[0])
    await m.reply('Sedang di proses..')
    let cap = `${sym} *Quality :*  Low`
    await conn.sendFile(m.chat, res.sd, 'fb.mp4', cap, m)
     } catch (e) {
    m.reply(eror)
    throw e
    }
}
handler.help = ['fblow']
handler.tags = ['downloader']
handler.command = /^(fbsd|fblow)$/i

export default handler