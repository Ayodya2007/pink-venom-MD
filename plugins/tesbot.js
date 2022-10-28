let handler = async (m, { conn }) => {
let url = 'https://telegra.ph/file/e9a57a13260e919a231aa.png'
conn.sendButtonLoc(m.chat, url, 'Tes', wm, 'MENU', '.menu', m)
}
handler.command = ['tesbot']

export default handler