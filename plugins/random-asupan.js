let handler = async (m, { conn, usedPrefix, command, args }) => {
if (!args[0]) { 
const sections = [
   {
	title: "Random Asupan",
	rows: [
	    {title: "cecan", rowId: usedPrefix + 'asupan cecan', description: '➩ Random Asupan Cecan' },
	    {title: "hijaber", rowId: usedPrefix + 'asupan hijaber', description: '➩ Random Asupan Hijaber' },
	    {title: "random asupan", rowId: usedPrefix + 'asupan asupan', description: '➩ Random Asupan' },
	    {title: "rikagusriani", rowId: usedPrefix + 'asupan rikagusriani', description: '➩ Random Asupan rikagusriani' },
	    {title: "santuy", rowId: usedPrefix + 'asupan santuy', description: '➩ Random Asupan santuy' },
	    {title: "ukhty", rowId: usedPrefix + 'asupan ukhty', description: '➩ Random Asupan ukhty' },
	    {title: "bocil", rowId: usedPrefix + 'asupan bocil', description: '➩ Random Asupan Bocil' },
	    {title: "gheayubi", rowId: usedPrefix + 'asupan gheayubi', description: '➩ Random Asupan gheayubi' },
	    {title: "euni", rowId: usedPrefix + 'asupan euni', description: '➩ Random Asupan euni' },
	]
    },
]

const listMessage = {
  text: 'Silahkan Pilih Asupan Di Bawah !',
  footer: author,
  title: `${htki} Asupan ${htka}`,
  buttonText: "Click Here To Select Asupan",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: fkontak })
}
let url = `https://betabotz-api.herokuapp.com/api/asupan/${args[0]}?apikey=BetaBotz`
let weem = 'Next ? Click Di Bawah !'
if(args[0]) await conn.sendButton(m.chat, `_➩ Random Asupan > ${args[0]}_`, weem, url, [['⇄ Next ⇄', `${usedPrefix + command}`]], m)
}
handler.help = ['asupan']
handler.tags = ['internet', 'random']
handler.command = /^(asupan)$/i

handler.limit = true

export default handler