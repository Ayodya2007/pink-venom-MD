import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, args }) => {
   if (!args[0]) throw `Imput Url Parameter`
   let res = await fetch(`https://malesin.xyz/mediafire?url=${args[0]}`)
   let f = await res.json()
   let { filename, filesize, uploadAt, mimetype, ext, filetype, link } = f.result
   let cap = ` *[ File Info ]*

◈▻ *Name :* ${filename}
◈▻ *Size :* ${filesize}
◈▻ *Upload :* ${uploadAt}
◈▻ *MimeType :* ${mimetype}
◈▻ *Ext :* ${ext}
◈▻ *Type :* ${filetype}`
m.reply(cap)
await conn.sendFile(m.chat, link, filename, '', m, null, { mimetype: ext, asDocument: true })
}
handler.help = ['mediafire2'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire2|mf2)$/i

handler.limit = true

export default handler