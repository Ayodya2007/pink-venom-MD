let handler = async (m, { conn, text, match,
                        usedPrefix,
                        noPrefix,
                        _args,
                        args,
                        command,
                        participants,
                        groupMetadata,
                        user,
                        bot,
                        q,
                        quoted,
                        ftroli,
                        fcontact,
                        isROwner,
                        isOwner,
                        isAdmin,
                        isBotAdmin,
                        isPrems }) => {
                        	
if(!m.quoted) throw "reply pesan"
conn.sendFile(m.chat, await m.quoted.download(), m.quoted.text, m.quoted.text, m, false, { mentions: participants.map(v => v.id)})
}

handler.help = ['totag']
handler.tags = ['group']
handler.command = /^(totag)$/i

handler.mods = true

export default handler