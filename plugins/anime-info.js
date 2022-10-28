import { Anime } from "@shineiichijo/marika"
const client = new Anime();

let handler = async(m, { conn, text, usedPrefix }) => {
if (!text) return m.reply('𝗘𝘅𝗮𝗺𝗽𝗹𝗲\n' + usedPrefix + 'anime Naruto')
let anime = await client.searchAnime(text)
let result = anime.data[0];
let details = `*ANIME SEARCH*

🎀 • *Title:* ${result.title}
🎋 • *Format:* ${result.type}
📈 • *Status:* ${result.status.toUpperCase().replace(/\_/g, " ")}
🍥 • *Total episodes:* ${result.episodes}
🎈 • *Duration: ${result.duration}*
✨ • *Based On:* ${result.source.toUpperCase()}
💫 • *Premiered:* ${result.aired.from}
🎗 • *Ended On:* ${result.aired.to}
🎐 • *Popularity:* ${result.popularity}
🎏 • *Favorites:* ${result.favorites}
🎇 • *Rating:* ${result.rating}
🏅 • *Rank:* ${result.rank}
♦ • *Trailer:* ${result.trailer.url}
🌐 • *URL:* ${result.url}
🎆 • *Background:* ${result.background}
❄ • *Ringkasan:* ${result.synopsis}`
conn.sendFile(m.chat, result.images, 'info.jpg', details, m)
}
handler.help = ['anime <judul>']
handler.tags = ['anime']
handler.command = /^(anime|animeinfo)$/i
// no copas dek, tetep buatan hyzer
export default handler 

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }