let handler = async (m, { usedPrefix, command, conn, text }) => {
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let cap = `𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞 𝐒𝐚𝐚𝐭 𝐈𝐧𝐢 ${totalreg} 𝐔𝐬𝐞𝐫\n𝐑𝐞𝐠𝐢𝐬𝐭𝐞𝐫 𝐒𝐚𝐚𝐭 𝐈𝐧𝐢 ${rtotalreg} 𝐔𝐬𝐞𝐫`
conn.reply(m.chat, cap, fkontak)
}
handler.help = ['database', 'user']
handler.tags = ['info']
handler.command = /^(user|database|jumlahdatabase)$/i
handler.limit = true

export default handler