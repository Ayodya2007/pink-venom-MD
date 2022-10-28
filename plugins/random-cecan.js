let handler = async (m, { conn }) => {
let url = 'https://betabotz-api.herokuapp.com/api/wallpaper/cecan?apikey=BetaBotz'
let weem = 'Next ? Click Di Bawah !'
conn.sendButtonImg(m.chat, url, '```➩ Random : Cecan ```', weem, '⇄ Next ⇄', '.cecan', m)
}
handler.help = ['cecan']
handler.tags = ['internet', 'random']
handler.command = /^(cecan)$/i

export default handler