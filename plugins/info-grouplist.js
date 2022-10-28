import moment from 'moment-timezone'

let handler = async (m, { conn }) => {
	let grup = Object.keys(await conn.groupFetchAllParticipating())
	let txt = `*Daftar Grup Chat*\n\nTotal Grup: *${grup.length}*\n\n`
	for (let i of grup) {
		const data = await conn.groupMetadata(i)
		const botAdmin = data.participants.filter(v => v.id == conn.user.jid)[0].admin
		const dbnya = db.data.chats[i]
		const expired = `${dbnya ? (dbnya.expired - new Date() * 1).toTimeString() : 'Tidak terdaftar di database!'}`
		txt += `*Nama:* ${data.subject}\n*Owner:* ${data.owner !== undefined ? '@' + data.owner.split('@')[0] : 'Ndak Tau🗿'}\n*ID:* ${data.id}\n*Dibuat:* ${moment(data.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Total Member:* ${data.participants.length}\n*Expired:* ${expired}\n*Bot Admin:* ${botAdmin ? 'Admin' : botAdmin === 'superadmin' ? 'Pembuat Grup!' : 'Bukan Admin'}\n\n   –——————————————————\n\n`
	}
	conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
}
handler.help = ['listgroup', 'listgc']
handler.tags = ['info']
handler.command = /^(listgc|listgrup|listgroup|gruplist|grouplist|gclist)$/i

export default handler


function msToDate(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, '*Days*', h, '*Hours*', m, '*Minute*', s, '*Second*'].map(v => v.toString().padStart(2, 0)).join('')
}