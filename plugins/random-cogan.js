let handler = async (m, { conn }) => {
let url = 'https://betabotz-api.herokuapp.com/api/wallpaper/cogan?apikey=BetaBotz'
let weem = 'Next ? Click Di Bawah !'
conn.sendButtonImg(m.chat, url, '```➩ Random : Cecan ```', weem, '⇄ Next ⇄', '.cecan', m)
}
handler.help = ['cogan']
handler.tags = ['internet', 'random']
handler.command = /^(cogan)$/i

export default handler