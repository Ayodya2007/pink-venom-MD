let handler = async (m, { conn, command, args, usedPrefix }) => {
    if (!args[0]) return m.reply('Humm.. Urlnya Mana?')
    let cap = `Hai @${m.sender.split(`@`)[0]}
Silakan Pilih Quality Di Bawah !`
    conn.sendButton(m.chat, cap, wm, [
    ['High', usedPrefix + command + 'hd ' + args[0]],
    ['Low', usedPrefix + command + 'sd ' + args[0]]
    ], fkontak, { mentions: await conn.parseMention(cap) } )
}
handler.command = /^(fb|facebook)$/i
handler.help = ['fb', 'facebook']
handler.tags = ['downloader']

export default handler