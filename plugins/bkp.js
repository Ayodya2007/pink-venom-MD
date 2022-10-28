let handler = async (m, { conn }) => {
 conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', 'Nih Jngn comly  ya', m)
}
handler.help = ['bkp']
handler.tags = ['hentai', 'premium']

handler.command = /^(bkp)$/i
handler.limit = 25
export default handler