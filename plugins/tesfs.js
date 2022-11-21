import fs from 'fs'

let handler = async (m, { conn }) => {
let sts = wm
conn.sendButtonDoc(m.chat, '▷ʙᴏᴛ sᴛᴀᴛᴜs◁', sts, 'Owner', '.owner', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https//wa.me/94772496127?text=Hᴀʟᴏ+bro',
    mediaType: 2, 
    description: 'wa.me/94772496127?text=Hᴀʟᴏ+bro',
    title: "Fᴀᴄᴇʙᴏᴏᴋ Prank!",
    body: wm,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: 'https://facebook.com/Ayodyaaaaaa9999'
     }}
  })
}
handler.command = ['ma']

export default handler