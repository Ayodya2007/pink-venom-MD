import fs from 'fs'
import fetch from 'node-fetch'

function runtime(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " Day \n" : " Days \n") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " Hour \n" : " Hours \n") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " Minute \n" : " Minutes \n") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " Second" : " Seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

let handler = async (m, { conn, args, command }) => {
   let name = await conn.getName(m.sender)
   let imgr = fla.getRandom()
	let muptime = runtime(process.uptime()).trim()
	let pp = imgr + muptime
   let cap = `Bot Uptime Info 

Hai ${name} Gimana Kabar Mu ? 
Apakah Baik ?`
conn.sendButtonDoc(m.chat, cap, author, 'Menu', '.menu', fkontak, {
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
    thumbnail: await(await fetch(pp)).buffer(),
    thumbnailUrl: sgc,
    title: 'Info Runtime'  
				}
			}
})
}
handler.help = ['um']
handler.tags = ['info']
handler.command = ['rttes']

export default handler