import fs from 'fs'
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text, usedPrefix, command }) => {
let doc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ayodya`,jpegThumbnail: fs.readFileSync(`./thumbnail.jpg`)
}}}
let cap = `Tes Doang`
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
	"liveLocationMessage": {
						"degreesLatitude": 3.6129532,
						"degreesLongitude": 98.8073234,
						"caption": cap,
						"sequenceNumber": "1657997490287001",
						"jpegThumbnail": fs.readFileSync(`./thumbnail.jpg`),
}
}), { userJid: m.chat, quoted: fkontak })
conn.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
}

handler.command = /^(bot)$/i
handler.limit = true
export default handler