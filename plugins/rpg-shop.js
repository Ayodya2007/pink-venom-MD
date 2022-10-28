const items = {
    buy: {
        limit: {
          money: 1000,
        },
        potion: {
          money: 1250,
        },
        trash: {
          money: 4,
        },
        wood: {
          money: 700
        },
        rock: {
          money: 850
        },
        string: {
          money: 400
        },
        iron: { 
        	money: 3000
        },
        petFood: {
          money: 25000
        },
        bawang: {
          money: 150
        },
        cabai: {
          money: 150
        },
        bibitapel: {
			    money: 150,
		    },
	    	bibitanggur: {
			    money: 200,
		    },
		    bibitmangga: {
			    money: 250,
		    },
		    bibitpisang: {
			    money: 50,
		    },
		    bibitjeruk: {
			    money: 300,
			  },
        emerald: {
          money: 199538
        },
        diamond: {
           money: 299538
        }
    },
    sell: {
        potion: {
            money: 125,
        },
        trash: {
            money: 2,
        },
        banteng: {
		      	money: 9900,
		    },
        harimau: {
            money: 16200,
		    },
	    	gajah: {
  	    		money: 14400,
	    	},
    		kambing: {
		       	money: 10800,
    		},
		    panda: {
       			money: 18000,
    		},
    		buaya: {
		      	money: 4500,
	    	},
    		kerbau: {
		  	    money: 8100,
	    	},
	    	sapi: {
	    	  	money: 9000,
		    },
		    monyet: {
			      money: 4500,
		    },
		    babihutan: {
			      money: 3600,
		    },
	    	babi: {
			      money: 7200,
		    },
		    ayam: {
			      money: 2700,
		    },
		    orca: {
			      money: 18000,
		    },
	    	paus: {
			      money: 40500,
	    	},
		    lumba: {
			      money: 4500,
	     	},
		    hiu: {
			      money: 4050,
		    },
	    	ikan: {
			      money: 2250,
		    },
		    lele: {
		       	money: 2700,
		    },
		    bawal: {
			      money: 3150,
		    }, 
		    nila: {
			      money: 2700,
			  },
        wood: {
            money: 600
        },
        rock: {
            money: 750
        },
        string: {
            money: 300
        },
        iron: {
            money: 2500
        },
        gold: {
            money: 4700
        },
        diamond: {
            money: 9000
        },
        emerald: {
            money: 15000
        }
    }
}

let handler = async (m, { command, usedPrefix, args }) => {
    let user = global.db.data.users[m.sender]
    const listItems = Object.fromEntries(Object.entries(items[command.toLowerCase()]).filter(([v]) => v && v in user))
    const info = `
Use Format *${usedPrefix}${command} [crate] [count]*
Usage example: *${usedPrefix}${command} potion 10*
    
📍Items list: 
${Object.keys(listItems).map((v) => {
        let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
        return `${global.rpg.emoticon(v)}${v} | ${listItems[v][paymentMethod]} ${global.rpg.emoticon(paymentMethod)}${paymentMethod}`.trim()
    }).join('\n')}
`.trim()
    const item = (args[0] || '').toLowerCase()
    const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
    if (!listItems[item]) return m.reply(info)
    if (command.toLowerCase() == 'buy') {
        let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
        if (user[paymentMethod] < listItems[item][paymentMethod] * total) return m.reply(`Anda tidak memiliki cukup ${global.rpg.emoticon(paymentMethod)}${paymentMethod} untuk membeli *${total}* ${global.rpg.emoticon(item)}${item}. Anda membutuhkan *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* lagi ${paymentMethod} untuk dapat membeli`)
        user[paymentMethod] -= listItems[item][paymentMethod] * total
        user[item] += total
        return m.reply(`Anda membeli *${total}* ${global.rpg.emoticon(item)}${item}`)
    } else {
        if (user[item] < total) return m.reply(`You don't have enough *${global.rpg.emoticon(item)}${item}* to sell, you only have ${user[item]} items`)
        user[item] -= total
        user.money += listItems[item].money * total
        return m.reply(`Anda menjual *${total}* ${global.rpg.emoticon(item)}${item}`)
    }
}

handler.help = ['buy', 'sell'].map(v => v + ' [item] [count]')
handler.tags = ['rpg']
handler.command = /^(buy|sell)$/i

handler.disabled = false

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}