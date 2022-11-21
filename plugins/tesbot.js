let handler = async (m, { conn }) => {
let url = 'https://telegra.ph/file/5ed441891f87194bfee69.jpg'
conn.sendButtonLoc(m.chat, url, 'Tes', wm, 'MENU', '.menu', m)
}
handler.command = ['Sc3']

export default handler