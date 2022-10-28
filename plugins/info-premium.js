import fetch from 'node-fetch'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
  let pp = hwaifu.getRandom()
  let cap = `*❏ INFO PREMIUM*
  
Dengan mendaftar menjadi user premium anda akan mendapatkan keuntungan sebagai berikut :

1. Bisa menggunakan semua fitur
2. mendapatkan unlimited limit
3. bisa memainkan di pesan pribadi

Silahkan hubungi owner ( *.owner* ) untuk melakukan upgrade premium hanya dengan Rp. 15.000 per bulan

Invite bot ke GC kalian ? Click Button Di Bawah !
  `
await conn.sendButtonDoc(m.chat, cap, botdate, 'SewaBot', '.sewabot', fkontak, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: '© 𝐒𝐤𝐲𝐁𝗼𝐭',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: '© 𝐒𝐤𝐲𝐁𝗼𝐭',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await(await fetch(`https://telegra.ph/file/25f6fa6ec92eb68ddd6db.jpg`)).buffer(),
    thumbnailUrl: sgc,
    title: 'Sky Group'  
				}
			}
})
}
handler.help = ['infopremium']
handler.tags = ['info']
handler.command = /^(infopremiun)$/i

export default handler