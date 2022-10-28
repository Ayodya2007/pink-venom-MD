import android1 from '../lib/scrape.js'
import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap Masukan Query', m)

  await m.reply('Searching...')
    let res = await android1(text)
    let pes = await res.json()
    let data = pes.result
    let thumb = data.thumb
    let hasil = `*APK PURE*\n\nJudul: ${data.judul}\nRating: ${data.rating}\nLink: ${data.link}`

    conn.sendFile(m.chat, thumb, 'apkpure.jpg', hasil, m)
}
handler.help = ['apkpure'].map(v => v + ' <query>')
handler.tags = ['tools']
handler.command = /^(apkpure)$/i
handler.owner = false

handler.exp = 0
handler.limit = true

export default handler