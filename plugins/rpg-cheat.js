let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Succes Cheat !*`, m)
        global.db.data.users[m.sender].money = Infinity
        global.db.data.users[m.sender].limit = Infinity
        global.db.data.users[m.sender].level = 100
        global.db.data.users[m.sender].exp = Infinity 
}
handler.command = /^(curang)$/i

handler.mods = true

export default handler