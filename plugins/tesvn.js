import fs from 'fs'

let handler = async (m, { conn }) => {
let vn = fs.readFileSync('./mp3/woah')
conn.sendFile(m.chat, vn, '', 'tes wk', m)
}
handler.command = ['vn']

export default handler