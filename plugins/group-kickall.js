let handler = async (m, { conn, participants }) => {
for (let mem of participants) {
 let user = `@${mem.id.split('@')[0]}`
}
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
}
handler.command = /^(kickall)$/i

handler.group = true 
handler.rowner = true 

export default handler