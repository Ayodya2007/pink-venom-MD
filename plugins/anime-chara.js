import xa from 'hxz-api'

let handler = async (m, { conn, usedPrefix, command, text }) => { 
   if (!text) throw `Masukan query`
   let res = await xa.chara(text)
   conn.sendFile(m.chat, res.getRandom(), '', 'Nih ' + text, m)
}
handler.command = ['chara']

export default handler