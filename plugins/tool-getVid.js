import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
if (!text) throw `Masukan url !`
conn.sendFile(m.chat, await (await fetch(text)).buffer(), '', 'Nih', m)
}
handler.help = ['getvid']
handler.tags = ['tool']
handler.command = /^(getvid|vidget)$/i

export default handler