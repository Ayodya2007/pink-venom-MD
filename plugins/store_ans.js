const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = (await import('@adiwajshing/baileys'))
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m) => {
let imgr = hwaifu.getRandom()
let jarot = `
*PILIHAN STORE*
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await fetch((imgr)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: jarot,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '',
           hydratedButtons: [{
             urlButton: {
               displayText: 'Store Jadibot',
               url: 'https://wa.me/62895347198105?text=assalamualaikum'
             }

           },
                {
               urlButton: {
               displayText: 'Store Sewa Bot',
               url: 'https://wa.me/62895347198105?text=assalamualaikum'
             }
           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'info']
handler.customPrefix = /^(pilihanstore|.pilihanstore)$/i
handler.command = new RegExp
handler.help = ['.pilihanstore']
export default handler