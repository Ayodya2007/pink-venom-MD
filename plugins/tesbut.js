import fetch from 'node-fetch'

let handler = async (m, { conn }) =>{
let pp = hwaifu.getRandom()
conn.send3ButtonDoc(m.chat, 'P', botdate, 'Allmenu', '.allmenu', '𝐋𝐢𝐬𝐭𝐌𝐞𝐧𝐮', '.listmenu', '𝐃𝐚𝐬𝐛𝗼𝐚𝐫𝐝', '.db', fkontak, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: '𝙋𝙞𝙣𝙠 𝙑𝙚𝙣𝙤𝙢-𝙈𝘿',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: '𝙋𝙞𝙣𝙠 𝙑𝙚𝙣𝙤𝙢-𝙈𝘿',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await(await fetch(pp)).buffer(),
    thumbnailUrl: sgc,
    title: bottime  
				}
			}
})
}
handler.command = ['but']

export default handler