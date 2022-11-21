import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `*Usage : ${usedPrefix + command} likee_url_video*\n\nExample :\n${usedPrefix + command} https://likee.video/@vicky_marpaung/video/7006676628722311449`
	if (!(text.includes('http://') || text.includes('https://'))) throw `url invalid, please input a valid url. Try with add http:// or https://`
	try {
		let anu = await fetch(`https://api.akuari.my.id/downloader/likeedl?link=${text}`)
		let json = await anu.json()
		let ini_txt = `${json.hasil.title}`
		conn.sendButton(m.chat, ini_txt, packname + ' - ' + author, json.hasil.watermark, [
			[`► No WM`, `${usedPrefix}likeenowm ${text}`]
		], m)
	} catch (e) {
		console.log(e)
		m.reply(`Invalid likee url.`)
	}
}

handler.help = ['likeewm']
handler.tags = ['downloader']
handler.command = /^likrrwm?$/i

handler.exp = 0
handler.limit = false
handler.register = false

export default handler