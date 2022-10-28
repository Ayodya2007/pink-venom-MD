import { cat } from '@sefinek/random-animals'

let handler = async (m, { conn }) => {
let res = await cat()
conn.sendFile(m.chat, res.message, '', '', m)
}
handler.command = ['cat']

export default handler