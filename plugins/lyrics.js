import { lirik } from 'hxz-api'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!teks) throw `Use example ${usedPrefix}${command} hallo`
    const res = await lirik(teks)
    let cap = `Lyrics *${teks}*


${res.lirik}`
conn.sendButtonImg(m.chat, res.thumb, cap, fetching, 'Play ' + teks, usedPrefix + 'play ' + teks, m)
}
handler.help = ['lirik'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric)$/i

export default handler