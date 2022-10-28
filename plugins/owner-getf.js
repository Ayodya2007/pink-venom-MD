import { readFileSync } from 'fs'

let handler = async (m, { conn, text }) => {
if (!text) throw `Masukan nama file !`
let file = readFileSync(`./${text}`)
conn.sendMessage(m.chat, { document: file, mimetype: 'application/json', fileName: text }, { quoted: m })
}
handler.command = ['getf']

handler.mod = true 

export default handler