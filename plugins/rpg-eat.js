let handler = async (m, {
	command,
	usedPrefix,
	args
}) => {
	let user = global.db.data.users[m.sender]
	let author = global.author
	let upgrd = (args[0] || '').toLowerCase()
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const list = `
╭──『 ғᴏᴏᴅ 』
│⬡ typing command↓
│   ${usedPrefix + command } rendang
│
│⬡ 🍝 Steak   
│⬡ 🍜 Rendang 
│⬡ 🍱 Nugget
│⬡ 🍛 Seafood
│⬡ 🍣 Sushi 
│⬡ 🍢 Sate
│⬡ 🥣 Kornet
│⬡ 🍲 Bluefin
│⬡ 🥘 Moluska
│⬡ 🍤 Squidprawm
╰───────────────
`.trim()
    //try {
    if (/makan|eat/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'steak':
        if (user.stamina < 100) {
        	if (user.steak >= count * 1) {
                            user.steak -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, `Steak kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'rendang':
        if (user.stamina < 100) {
        	if (user.ayambakar >= count * 1) {
                            user.rendang -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, `Rendang kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'nugget':
        if (user.stamina < 100) {
        	if (user.oporayam >= count * 1) {
                            user.nugget -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, `Nugget kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'seafood':
        if (user.stamina < 100) {
        	if (user.rendang >= count * 1) {
                            user.seafood -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, `Seafood kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'sushi':
        if (user.stamina < 100) {
        	if (user.steak >= count * 1) {
                            user.sushi -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, `Sushi kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'sate':
        if (user.stamina < 100) {
        	if (user.gulaiayam >= count * 1) {
                            user.sate -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, `sate ayam kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'kornet':
        if (user.stamina < 100) {
        	if (user.babipanggang >= count * 1) {
                            user.kornet -= count * 1
                            user.kornet += 20 * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, `Kornet kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'bluefin':
        if (user.stamina < 100) {
        	if (user.soda >= count * 1) {
                            user.bluefin -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Glek glek glek`, m)
                            } else conn.reply(m.chat, `Bluefin kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'moluska':
        if (user.stamina < 100) {
        	if (user.vodka >= count * 1) {
                            user.moluska -= count * 1
                            user.stamina += 25 * count
                            conn.reply(m.chat, `Glek Glek Glek`, m)
                            } else conn.reply(m.chat, `Moluska kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'squidprawm':
        if (user.stamina < 100) {
        	if (user.ganja >= count * 1) {
                            user.squidprawm -= count * 1
                            user.healt += 90 * count
                            conn.reply(m.chat, `ngefly`, m)
                            } else conn.reply(m.chat, `Squidprawm kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
          default:
       await conn.sendMessage(m.chat, {
				text: list,
				footer: author,
				title: '「 *E A T I N G* 」',
				buttonText: "E A T",
				sections: [{
					title: "List Featured",
					rows: [{
					title: "Steak 🍝",
				rowId: ".eat steak",
				description: "Memakan steak +20 Stamina"
			},{
				title: "Rendang 🍜",
				rowId: ".eat rendang",
				description: "Memakan Rendang +20 Stamina"
			},{
				title: "Nugget 🍱",
				rowId: ".eat nugget",
				description: "Memakan Nugget +20 Stamina"
			},{
				title: "Seafood 🍛",
				rowId: ".eat seafood",
				description: "Memakan Seafood +20 Stamina"
			},{
				title: "Sushi 🍣",
				rowId: ".eat sushi",
				description: "Memakan Sushi +20 Stamina"
			},{
				title: "Sate 🍢",
				rowId: ".eat sateiayam",
				description: "Memakan Sate +20 Stamina"
			},{
				title: "Kornet 🥣",
				rowId: ".eat kornet",
				description: "Memakan Kornet +20 Stamina"
			},{
				title: "Bluefin 🍲",
				rowId: ".eat bluefin",
				description: "Memakan Bluefin +20 Stamina"
			},{
				title: "Moluska 🥘",
				rowId: ".eat moluska",
				description: "Memakan moluska +20 Stamina"
			},{
				title: "Squidprawm 🍤",
				rowId: ".eat squidprawm",
				description: "Meminum Squidprawm +20 Stamina"
			}
					]
				}]
			})
            }
    } else if (/p/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 'p':
         break
         default:
		return conn.reply(m.chat, list, fkontak)
         }
                            
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
            conn.reply(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*',m)
                
            }
        }
    }
}

handler.help = ['eat', 'makan']
handler.tags = ['rpg']
handler.register = true
handler.command = /^(eat|makan)$/i
export default handler