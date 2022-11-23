import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 Pink Venom-Md Bot Cooded By O.G.ayodya✨」*

*Thanks For Using Pink Venom-md Bot*


*Sc* 94772496127   Don't call me

*Come ib for sc*


*Only testing*


*SUBSCRIBE YOUTUBE CHANNEL✨🍿👻*


*https://www.youtube.com/c/AYOMODZZZX*



*Save Owner Number For Status Views And Say Done 🤤🤤🤤✨👻🍿*

*wa.me/94772496127*


*Ayodya Xo*


*94772496127*


*Galle, Sri lanka*


*MOST FAMOUS PERSON ON WHATSAPP WORLD 👻🤤🤤🤤🤤✨😩*


*Come IB 🤍  👑*


*https://wa.me/94772496127<*

*Pink Venom-MD WHATSAPP BOT CODED BY Ayodya Vichakshana 🍫*



*ALL CREADITS TO O.G.ayodya   ✨ 😬*


`.trim()
  m.reply(caption)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i


export default handler 
