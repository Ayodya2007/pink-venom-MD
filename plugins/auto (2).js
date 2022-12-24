let handler  = async (m, { conn, usedPrefix, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw 'umm'   
let res = await pickRandom(asupan)
await conn.sendButton(m.chat, `*yum 😋*`, wm, res, [['🔄 NEXT 🔄', `/${command}`]], m)}
handler.help = ['status']
handler.tags = ['random']
handler.command = /^status$/i
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

const asupan = [
"https://i.imgur.com/WXEksN4.mp4",
"https://imgur.com/3VOuEfg.mp4",
"https://imgur.com/rbGjIBI.mp4",
"https://imgur.com/tt2gMXr.mp4",
"https://imgur.com/kR4XGKY.mp4",
"https://imgur.com/3PHv4Uu.mp4",
"https://imgur.com/4O5pLdC.mp4",
"https://imgur.com/Q6REjY0.mp4",
"https://imgur.com/5m5TDEJ.mp4",
"https://i.imgur.com/j8EHCh6.mp4",
"https://i.imgur.com/j8EHCh6.mp4",
"https://i.imgur.com/IUb17JQ.mp4",
"https://i.imgur.com/SH3tyRo.mp4",
"https://i.imgur.com/mSAFD9c.mp4",
"https://imgur.com/a/yY48lMK.mp4",
"https://imgur.com/64FWq3W.mp4",
"https://imgur.com/aZlS1bV.mp4",
"https://imgur.com/ed0X9m5.mp4",
"https://imgur.com/nDlrBug.mp4",
"https://imgur.com/3AczL5y.mp4",
"https://imgur.com/CeizCwC.mp4",
"https://imgur.com/XQNNBxg.mp4"
]

/*
"https://f.top4top.io/m_2235sxi5y1.mp4"
"https://d.top4top.io/m_2235993nu1.mp4"
*/