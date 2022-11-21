let handler = async (m, { conn }) => {
let info = `*${htki} TQTO ${htka}*

Hi 👋 my Friend,,,, 
im the creater of the Pink Venom MD wa bot..
if error...say me

*Script Ori :* By Ayodya
*Recode Script :* Dont recoad sc
*My Project :*  2022 November 16
`
const sections = [
   {
	title: `✃ THANKS TO`,
	rows: [
	    {title: "✨ ayodya", rowId: '.ayodya', description: '╰►bot creater' },
	{title: "✨ Nurutomo", rowId: '.Nurutomo', description: '╰►Contributor' },
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