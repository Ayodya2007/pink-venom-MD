let handler =  m => m.reply(` ❰ 𝙋𝙞𝙣𝙠 𝙑𝙚𝙣𝙤𝙢 𝙈𝙙 ❱
http://wa.me/94772496127
`.trim()) // Add yourself if you want
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
