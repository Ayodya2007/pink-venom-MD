let handler = async (m, { conn, usedPrefix }) => {
	let user = global.db.data.users[m.sender]
	let cap = `*━━━ ❨ Kandang Buruan ❩ ━━┄┈*

=> *Berikut Kandang :*  @${m.sender.split`@`[0]}

${sym} *🐂 = [ ${user.banteng} ] banteng*
${sym} *🐅 = [ ${user.harimau} ] harimau*
${sym} *🐘 = [ ${user.gajah} ] gajah*
${sym} *🐐 = [ ${user.kambing} ] kambing*
${sym} *🐼 = [ ${user.panda} ] panda*
${sym} *🐊 = [ ${user.buaya} ] buaya*
${sym} *🐃 = [ ${user.kerbau} ] kerbau*
${sym} *🐮 = [ ${user.sapi} ] sapi*
${sym} *🐒 = [ ${user.monyet} ] monyet*
${sym} *🐗 = [ ${user.babihutan} ] babihutan*
${sym} *🐖 = [ ${user.babi} ] babi*
${sym} *🐓 = [ ${user.ayam} ] ayam*

Gunakan *${usedPrefix}sell* untuk dijual atau *${usedPrefix}cook* untuk dijadikan bahan masakan.`

	conn.reply(m.chat, cap, m, { mentions: await conn.parseMention(cap) } )
}

handler.help = ['kandang']
handler.tags = ['rpg']
handler.command = /^(kandang)$/i

export default handler