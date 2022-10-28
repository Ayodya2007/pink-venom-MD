import fs from 'fs'

let handler = async (m, { conn }) => {
let sts = wm
conn.sendButtonDoc(m.chat, '▷ʙᴏᴛ sᴛᴀᴛᴜs◁', sts, 'Owner', '.owner', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https//wa.me/6281361281833?text=Hᴀʟᴏ+ɢᴀɴᴛᴇɴɢᴋᴜ',
    mediaType: 2, 
    description: 'wa.me/6281361281833?text=Hᴀʟᴏ+ɢᴀɴᴛᴇɴɢᴋᴜ',
    title: "Iɴɪ Fᴀᴄᴇʙᴏᴏᴋ Gᴡ!",
    body: wm,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: 'https://facebook.com/sadtime098'
     }}
  })
}
handler.command = ['ma']

export default handler