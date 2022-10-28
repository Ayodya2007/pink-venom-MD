let handler = async (m, { conn }) => {
let info = `*${htki} TQTO ${htka}*

💌 Contributor Script Bot

*Script Ori :* By Aldi 
*Recode Script :* By Arifzyn
*My Project :* 01 Oktober 2022
`
const sections = [
   {
	title: `✃ THANKS TO`,
	rows: [
	    {title: "✨ Arifzyn", rowId: '.arifzyn', description: '╰►Kang Recode sc :v' },
	    {title: "✨ Kanna", rowId: '.kanna', description: '╰►Stah' },
	{title: "✨ Nurutomo", rowId: '.Nurutomo', description: '╰►Contributor' },
	{title: "✨ Adiwajshing", rowId: '.Adiwajshing', description: '╰►Contributor' },
	{title: "✨ Amirul", rowId: '.Amirul', description: '╰►Contributor' },
	{title: "✨ Elaina", rowId: '.Bochilgaming', description: '╰►Penyedia Base' },
	{title: "✨ Syahrul", rowld: '.syahrul', description: '╰► Sepuh' },
	{title: "✨ WudySoft", rowld: '.wudy', description: '╰► Sepuh' },
	]
    }, 

]

const listMessage = {
  text: info,
  footer: author,
  title: null,
  buttonText: "C E K",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['tqto', 'contributor']
handler.tags = ['info']
handler.command = /^(tqto|thanksto|contributor)$/i
handler.private = false

export default handler