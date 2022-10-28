import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, args, text }) => {
let imgr = fla.getRandom()
if (!args[0]) {
let caption = `${htki} List Cerpen ${htka}

➩ remaja
➩ anak 
➩ misteri 
➩ cinta 
➩ budaya
➩ romantis 
➩ galau
➩ gokil
➩ inspiratif 
➩ kehidupan 
➩ sastra 
➩ jepang 
➩ korea
➩ keluarga 
➩ persahabatan 
➩ kristen 
➩ ramadhan
➩ liburan 
➩ lingkungan 
➩ mengharukan 
➩ motivasi 
➩ perjuangan 
➩ nasihat
➩ pendidikan 
➩ petualangan

Contoh :
${usedPrefix + command} <Type>
${usedPrefix + command} remaja`
await conn.sendFile(m.chat, imgr + 'List Cerpen', 'cerpen.jpg', caption, m)
}
let res = await fetch(`https://betabotz-api.herokuapp.com/api/story/cerpen?type=${args[0]}&apikey=BetaBotz`)
let anu = await res.json()
let p = anu.result
let cap = `☰ ━━━ ❨ Cerpen ❩ ━━┄┈ ☰

◈ *Title :* ${p.title}
◈ *Author:* ${p.author}
◈ *Kategori :* ${p.kategori}
◈ *Lolos :* ${p.lolos}

◎ *Cerpen :* 
    ➥ ${p.cerita}
`
await conn.sendButton(m.chat, cap, `Cerita Pendek ${args[0]}`, imgr + 'Random Cerpen', [
          ['⇄ Back To Menu ⇄', '.menu']
], m)
}
handler.help = ['cerpen']
handler.tags = ['internet', 'random']
handler.command = /^(cerpen)$/i

export default handler