import hx from 'hxz-api'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
   if (!text) throw `Masukan query !`
   let res = await hx.pinterest(text)
   await conn.sendFile(m.chat, res.getRandom(), '', text, m)
}
handler.command = ['pint']

export default handler