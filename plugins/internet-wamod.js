import { WAModsSearch } from 'dhn-api'

let handler = async (m, { conn, usedPrefix, command, text }) => {
   if (!text) throw `Masukan query WhatsApp mod !!`
   try {
      let ress = await WAModsSearch(text)
      let cap = `Hasil Pencarian Dari ${text}\n\n`
   for (let res of ress) {
       cap += `Apk Name : ${res.apk_name}
Apk Url : ${res.apk_url}
Description : ${res.apk_desc}`

cap += '\n' + '––––––––––––––––––––––––' + '\n'
    }
  m.reply(cap)
	} catch (e) {
		console.error(e);
		throw e;
	}
}
handler.help = ['wamod', 'whatsappmod']
handler.tags = ['internet', 'search']
handler.command = /^(wamod|whatsappmod)$/i

export default handler