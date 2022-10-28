import fetch from 'node-fetch'
let handler = async function (m, { text, isPrems, isOwner }) {
	let user = global.db.data.users[m.sender]
    if (!text) throw '_Ingin Cari Apa_'
    await m.reply(global.wait)
  let res = await fetch('https://ardhixsquerpants.herokuapp.com/api/kuso?q=' + encodeURIComponent(text))
  let anj = await res.json()
  const raku =  `*JUDUL :* "${anj.title}"\n\n*info:* ${anj.info}\n\n*SINOPSIS :* ${anj.sinopsis}\n\n*LINK DOWNLOADS:* ${anj.link_dl}`
     conn.sendFile(m.chat, anj.thumb, 'image.jpg', raku, m)
}
handler.help = ['kusonime <judul>']
handler.tags = ['anime']
handler.command = /^kusonime$/i
handler.group = false
handler.limit = true
export default handler