import pkg from '@adiwajshing/baileys'
import fs  from 'fs'

const { prepareWAMessageMedia, generateWAMessageFromContent, proto } = pkg

let handler = async (m, { conn }) => {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/night.jpg') }, { upload: conn.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "5326844927399395",
"title": `𝐏𝐢𝐧𝐤 𝐕𝐞𝐧𝐨𝐦 𝐌𝐃 | 𝐁𝐲 𝐀𝐲𝐨𝐝𝐲𝐚`,
"description": `gaktau`,
"currencyCode": "IDR",
"bodyText": `𝘼𝙮𝙤𝙙𝙮𝙖`,
"footerText": `𝙋𝙞𝙣𝙠 𝙑𝙚𝙤𝙢 𝙈𝘿`,
"priceAmount1000": "30000000",
"productImageCount": 100,
"firstImageId": 1,
"salePriceAmount1000": "30000000",
"retailerId": `Ayodya⿻ꫂ`,
"url": "wa.me/94772496127"
},
"businessOwnerJid": "62895347198105@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: m })
conn.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
handler.help = ['sewa' , 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot))$/i

export default handler