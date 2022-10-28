//const cooldown = 1000 // 1 detik
//const cooldown = 60000 // 1 menit
//const cooldown = 3600000 // 1 jam
//const cooldown = 86400000 // 1 hari
//const cooldown = 2592000000 // 1 bulan

const cooldown = 259200000
const cooldownn = 10000

function ranNumb(min = null, max = null) {
	if (max !== null) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	} else {
		return Math.floor(Math.random() * min) + 1
	}
}

let handler = async (m, { conn, usedPrefix }) => {
	let user = global.db.data.users[m.sender]
	if (new Date - user.lasthunt <= cooldown) return m.reply(`📍 Sudah cukup perburuan kali ini\nGunakan waktu yang ada untuk beristirahat, perburuan selanjutnya dapat dimulai dalam . . .\n🕖 *${((user.lasthunt + cooldown) - new Date()).toTimeString()}*`)
	let buruan = [
		{"hewan": 0}, {"hewan": 0}, {"hewan": 0}, {"hewan": 0}, {"hewan": 0}, {"hewan": 0},
		{"hewan": 0}, {"hewan": 0}, {"hewan": 0}, {"hewan": 0}, {"hewan": 0}, {"hewan": 0}
	]

	for (let x of buruan) {
		let random = ranNumb(0, 6)
		x.hewan += random
	}

	let hsl = `[ *Perburuan Selesai* ]\nHasil tangkapan hari ini :

 *🐂 = [ ${buruan[0].hewan} ]*			 *🐃 = [ ${buruan[6].hewan} ]*
 *🐅 = [ ${buruan[1].hewan} ]*			 *🐮 = [ ${buruan[7].hewan} ]*
 *🐘 = [ ${buruan[2].hewan} ]*			 *🐒 = [ ${buruan[8].hewan} ]*
 *🐐 = [ ${buruan[3].hewan} ]*			 *🐗 = [ ${buruan[9].hewan} ]*
 *🐼 = [ ${buruan[4].hewan} ]*			 *🐖 = [ ${buruan[10].hewan} ]*
 *🐊 = [ ${buruan[5].hewan} ]*			 *🐓 = [ ${buruan[11].hewan} ]*`


	setTimeout(() => {
		user.banteng	+= buruan[0].hewan
		user.harimau	+= buruan[1].hewan
		user.gajah		+= buruan[2].hewan
		user.kambing	+= buruan[3].hewan
		user.panda		+= buruan[4].hewan
		user.buaya		+= buruan[5].hewan
		user.kerbau		+= buruan[6].hewan
		user.sapi		+= buruan[7].hewan
		user.monyet		+= buruan[8].hewan
		user.babihutan	+= buruan[9].hewan
		user.babi		+= buruan[10].hewan
		user.ayam		+= buruan[11].hewan
		conn.sendButton(m.chat, hsl, wm, [[`Kandang`, `${usedPrefix}kandang`]], m)
	}, cooldownn)
					 
	setTimeout(() => {
		m.reply('_Perburuan Dimulai..._')
	}, 0)
	user.lasthunt = new Date * 1
}

handler.menufun = ['berburu']
handler.tagsfun = ['rpg']
handler.command = /^(berburu|hunt)$/i

handler.cooldown = cooldown

export default handler