let handler = async (m, { conn, usedPrefix }) => {
let cos = cosply.getRandom()
conn.sendButton(m.chat, 'Random Image Cosplay', author, cos, [['Next', usedPrefix + 'cosplay']], m)
}
handler.help = ['cosplay']
handler.tags = ['anime']

handler.command = /^(cosplay)$/i

export default handler

global.cosply = [
"https://telegra.ph/file/2dc115600e24e33014a75.jpg",
"https://telegra.ph/file/c01a8e3b8f98392334a3f.jpg",
"https://telegra.ph/file/addd924d2e23b884bbb07.jpg",
"https://telegra.ph/file/b0dadfde2d28e981cd686.jpg",
"https://telegra.ph/file/f46927427c45916b0fc92.jpg",
"https://telegra.ph/file/b43fd2a71aad89838c2bf.jpg",
"https://telegra.ph/file/1c292af6ddaf84e8e4a03.jpg",
"https://telegra.ph/file/890f5f8078dc22f016f98.jpg",
"https://telegra.ph/file/63664f5958060904646ba.jpg",
"https://telegra.ph/file/18e816d20eb6701b63c1b.jpg",
"https://telegra.ph/file/79a2864d6e5892ff2ed43.jpg",
"https://telegra.ph/file/4f7bd3d39f49bc3b0beaa.jpg",
"https://telegra.ph/file/c694989b71472fcfdd797.jpg",
"https://telegra.ph/file/4bfd47de3779b299236d9.jpg",
"https://telegra.ph/file/de881a4653fcaa2e05ef3.jpg",
"https://telegra.ph/file/6e855a38b707289baf252.jpg",
"https://tinyurl.com/2xr8wdrj",
"https://tinyurl.com/2awu9kl4",
"https://tinyurl.com/23wmlpym",
"https://tinyurl.com/2c3uuava",
"https://tinyurl.com/2b89v58m",
"https://tinyurl.com/288wl4to",
"https://tinyurl.com/2abyq7qd",
"https://tinyurl.com/26vr6nyw",
"https://tinyurl.com/22tfxzvv",
"https://tinyurl.com/29q55755",
"https://tinyurl.com/25v6ty3j",
"https://tinyurl.com/2c5tpsk7",
"https://tinyurl.com/2ddwqllx",
"https://tinyurl.com/22mrv345",
"https://tinyurl.com/23juxx55",
"https://tinyurl.com/25u2n6xs",
"https://tinyurl.com/22c55x42",
"https://tinyurl.com/24sp3a8g",
"https://tinyurl.com/23je2qak",
"https://tinyurl.com/25hv3jul",
"https://tinyurl.com/2246z2s2",
"https://tinyurl.com/25pj6kc7",
"https://tinyurl.com/25ggbwex",
"https://tinyurl.com/25ucfgrl",
"https://tinyurl.com/28rguq7c",
"https://tinyurl.com/2yx88co9",
"https://tinyurl.com/22hykmxw",
"https://tinyurl.com/2xvb4q6g",
"https://tinyurl.com/2donfgt6",
"https://tinyurl.com/2cr2s9xg",
"https://tinyurl.com/2aaajfvv",
"https://tinyurl.com/28jklt4p",
"https://tinyurl.com/26xvks9x",
"https://tinyurl.com/2d3m5p7j",
"https://tinyurl.com/2bwa5qfr",
"https://tinyurl.com/2b6ewo52"
]