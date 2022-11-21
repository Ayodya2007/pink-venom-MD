let handler = async (m, { conn, command, args, usedPrefix }) => {
    if (!args[0]) return m.reply('𝗲𝗿𝗿𝗼𝗿 ❨404❩')
    let cap = `Hai @${m.sender.split(`@`)[0]}
Silakan Pilih Di Bawah !`
    conn.sendButton(m.chat, cap, author, [
    ['❮❮ 𝗩𝗶𝗱𝗲𝗼 ❯❯', usedPrefix + 'ytv ' + args[0]],
    ['❮❮ 𝗔𝘂𝗱𝗶𝗼 ❯❯', usedPrefix + 'yta ' + args[0]]
    ], m, { mentions: await conn.parseMention(cap) } )
}
handler.command = /^(ytplay)$/i
handler.help = ['ytplay']
handler.tags = ['downloader']

export default handler