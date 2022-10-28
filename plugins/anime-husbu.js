import fetch from 'node-fetch'

let handler = async (m, { conn, command, usedPrefix }) => {
	let url = await fetch(`https://restapi.frteam.xyz/husbu?&apikey=Arifzyn19`)
	let res = await url.json()
	let cap = `_${sym} Random Picture_ :> ${command}`
	conn.sendButtonImg(m.chat, res.url, cap, sym2 + ' Charater Name : ' + res.nama, 'Next', usedPrefix + 'husbu', m)
}
handler.command = /^(husbu)$/i
handler.tags = ['anime']
handler.help = ['husbu']
handler.limit = true
export default handler