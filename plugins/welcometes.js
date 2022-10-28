import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
let imgr = hwaifu.getRandom()
let pp = global.welcom
let nihpp = await conn.resize(imgr, 250, 280)
let cap = `Selamat Datang ${conn.getName(m.sender)}\nMoga Bentah Ya`
conn.sendButton(m.chat, cap, wm, Buffer.alloc(0), [['TES', 'TES'], ['TES', 'TES']], fkontak, { mimetype: "text/rtf", fileName: ucapan, pageCount: 90000, fileLength: 90000, seconds: 90000, jpegThumbnail: nihpp, contextInfo: {
          externalAdReply :{
          showAdAttribution: true,
    mediaUrl: "https://facebook.com",
    mediaType: 2,
    description: "WATERMAR", 
    title: "Tap Join Group Official",
    body: "ya",
    thumbnail: await (await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
handler.command = ['wel']

export default handler