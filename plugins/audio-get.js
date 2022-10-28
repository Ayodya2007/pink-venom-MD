let handler = async (m, { conn, text }) => {
   if (!text) throw 'url salah'
   m.reply('Tunggu...')
   await conn.sendFile(m.chat, text, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['audioget']
handler.tags = ['tools']
handler.command = /^(audioget)$/i

export default handler