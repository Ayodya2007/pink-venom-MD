import { smsg } from './lib/simple.js'
import { format } from 'util'
import { fileURLToPath } from 'url'
import path, { join } from 'path'
import { unwatchFile, watchFile } from 'fs'
import chalk from 'chalk'
import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'

/**
 * @type {import('@adiwajshing/baileys')}
 */
const { proto } = (await import('@adiwajshing/baileys')).default
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

/**
 * Handle messages upsert
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['messages.upsert']} groupsUpdate 
 */
 
export async function handler(chatUpdate) {
    this.msgqueque = this.msgqueque || []
    if (!chatUpdate)
        return
    this.pushMessage(chatUpdate.messages).catch(console.error)
    let m = chatUpdate.messages[chatUpdate.messages.length - 1]
    
    global.img = 'https://telegra.ph/file/e4a2f4339da8a32ad20a1.jpg' 
    
    if (!m)
        return
    if (global.db.data == null)
        await global.loadDatabase()
    try {
        m = smsg(this, m) || m
        if (!m)
            return
        m.exp = 0
        m.limit = false
        try {
            // TODO: use loop to insert data instead of this
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object')
                global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.exp))
                    user.exp = 0
                if (!isNumber(user.limit))
                    user.limit = 10
                if (!isNumber(user.lastclaim))
                    user.lastclaim = 0
                if (!isNumber(user.pasangan))
                    user.pasangan = ''
                if (!('registered' in user))
                    user.registered = false
                if (!user.registered) {
                    if (!('name' in user))
                        user.name = m.name
                    if (!isNumber(user.age))
                        user.age = -1
                    if (!isNumber(user.regTime))
                        user.regTime = -1
                }
                if (!isNumber(user.afk))
                    user.afk = -1
                if (!('afkReason' in user))
                    user.afkReason = ''
                if (!('banned' in user))
                    user.banned = false
                if (!('acc' in user))
                    user.acc = false
                if (!isNumber(user.warn))
                    user.warn = 0
                if (!isNumber(user.level))
                    user.level = 0
                if (!('role' in user))
                    user.role = 'Beginner'
                if (!('autolevelup' in user))
                    user.autolevelup = true

                if (!isNumber(user.money))
                    user.money = 0
                if (!isNumber(user.balance))
                    user.balance = 0 
                if (!isNumber(user.atm))
                    user.atm = 0
                if (!isNumber(user.health))
                    user.health = 100
                if (!isNumber(user.potion))
                    user.potion = 0
                if (!isNumber(user.trash))
                    user.trash = 0
                if (!isNumber(user.wood))
                    user.wood = 0
                if (!isNumber(user.rock))
                    user.rock = 0
                if (!isNumber(user.string))
                    user.string = 0
                if (!isNumber(user.petFood))
                    user.petFood = 0
                if (!isNumber(user.stamina))
                    user.stamina = 0

                if (!isNumber(user.emerald))
                    user.emerald = 0
                if (!isNumber(user.diamond))
                    user.diamond = 0
                if (!isNumber(user.gold))
                    user.gold = 0
                if (!isNumber(user.iron))
                    user.iron = 0
                if (!isNumber(user.upgrader))
                    user.upgrader = 0

                if (!isNumber(user.common))
                    user.common = 0
                if (!isNumber(user.uncommon))
                    user.uncommon = 0
                if (!isNumber(user.mythic))
                    user.mythic = 0
                if (!isNumber(user.legendary))
                    user.legendary = 0
                if (!isNumber(user.superior))
                    user.superior = 0
                if (!isNumber(user.pet))
                    user.pet = 0

                if (!isNumber(user.horse))
                    user.horse = 0
                if (!isNumber(user.horseexp))
                    user.horseexp = 0
                if (!isNumber(user.cat))
                    user.cat = 0
                if (!isNumber(user.catexp))
                    user.catexp = 0
                if (!isNumber(user.fox))
                    user.fox = 0
                if (!isNumber(user.foxhexp))
                    user.foxexp = 0
                if (!isNumber(user.dog))
                    user.dog = 0
                if (!isNumber(user.dogexp))
                    user.dogexp = 0
                if (!isNumber(user.robo))
                    user.robo = 0
                if (!isNumber(user.roboxp))
                    user.roboxp = 0
                    
                if (!isNumber(user.banteng))
                    user.banteng = 0
                if (!isNumber(user.harimau))
                    user.harimau = 0
                if (!isNumber(user.gajah))
                    user.gajah = 0
                if (!isNumber(user.kambing))
                    user.kambing = 0
                if (!isNumber(user.panda))
                    user.panda = 0
                if (!isNumber(user.buaya)) 
                    user.buaya = 0
                if (!isNumber(user.kerbau))
                    user.kerbau = 0
                if (!isNumber(user.sapi))
                    user.sapi = 0
                if (!isNumber(user.monyet))
                    user.monyet = 0
                if (!isNumber(user.babihutan))
                    user.babihutan = 0
                if (!isNumber(user.babi))
                    user.babi = 0
                if (!isNumber(user.ayam))
                    user.ayam = 0

                if (!isNumber(user.horselastfeed))
                    user.horselastfeed = 0
                if (!isNumber(user.catlastfeed))
                    user.catlastfeed = 0
                if (!isNumber(user.foxlastfeed))
                    user.foxlastfeed = 0
                if (!isNumber(user.doglastfeed))
                    user.doglastfeed = 0

                if (!isNumber(user.armor))
                    user.armor = 0
                if (!isNumber(user.armordurability))
                    user.armordurability = 0
                if (!isNumber(user.sword))
                    user.sword = 0
                if (!isNumber(user.bow))
                    user.bow = 0
                if (!isNumber(user.sworddurability))
                    user.sworddurability = 0
                if (!isNumber(user.pickaxe))
                    user.pickaxe = 0
                if (!isNumber(user.pickaxedurability))
                    user.pickaxedurability = 0
                if (!isNumber(user.fishingrod))
                    user.fishingrod = 0
                if (!isNumber(user.fishingroddurability))
                    user.fishingroddurability = 0

                if (!isNumber(user.lastclaim))
                    user.lastclaim = 0
                if (!isNumber(user.lastadventure))
                    user.lastadventure = 0
                if (!isNumber(user.lastduel))
                    user.lastduel = 0
                if (!isNumber(user.lastrob))
                    user.lastrob = 0
                if (!isNumber(user.lastfishing))
                    user.lastfishing = 0
                if (!isNumber(user.lastmasak))
                    user.lastmasak = 0
                if (!isNumber(user.lastdungeon))
                    user.lastdungeon = 0
                if (!isNumber(user.lastduel))
                    user.lastduel = 0
                if (!isNumber(user.lastmining))
                    user.lastmining = 0
                if (!isNumber(user.lasthunt))
                    user.lasthunt = 0
                if (!isNumber(user.lastweekly))
                    user.lastweekly = 0
                if (!isNumber(user.lastmonthly))
                    user.lastmonthly = 0
                if (!isNumber(user.lastbunga))
                    user.lastbunga = 0
                if (!isNumber(user.note))
                    user.note = 0
                    
                if (!isNumber(user.bibitmangga))
					          user.bibitmangga = 0
				        if (!isNumber(user.bibitapel))
					          user.bibitapel = 0
				        if (!isNumber(user.bibitpisang))
					          user.bibitpisang = 0
				        if (!isNumber(user.bibitjeruk))
					          user.bibitjeruk = 0
				        if (!isNumber(user.bibitanggur))
					          user.bibitanggur = 0
				        if (!isNumber(user.mangga))
					          user.mangga = 0
				        if (!isNumber(user.apel))
					          user.apel = 0
				        if (!isNumber(user.pisang))
					          user.pisang = 0
				        if (!isNumber(user.jeruk))
					          user.jeruk = 0
				        if (!isNumber(user.anggur))
					          user.anggur = 0
                 
                if (!isNumber(user.orca))
                    user.orca = 0
                if (!isNumber(user.paus))
                    user.paus = 0
                if (!isNumber(user.lumba))
                    	user.lumba = 0
                if (!isNumber(user.hiu))
                    user.hiu = 0
                if (!isNumber(user.ikan))
                    user.ikan = 0
                if (!isNumber(user.lele))
                    user.lele = 0
                if (!isNumber(user.bawal))
                    user.bawal = 0
                if (!isNumber(user.nila))
                    user.nila = 0
                if (!isNumber(user.kepiting))
                    user.kepiting = 0
                if (!isNumber(user.lobster))
                    user.lobster = 0
                if (!isNumber(user.gurita))
                    user.gurita = 0
                if (!isNumber(user.cumi))
                    user.cumi = 0
                if (!isNumber(user.udang))
                    user.udang = 0
                    
                
				        if (!isNumber(user.masak))
					          user.masak = 0
				        if (!isNumber(user.masakrole))
					          user.masakrole = 0
				        if (!isNumber(user.masakexp))
					          user.masakexp = 0
				        if (!isNumber(user.masaklevel))
					          user.masaklevel = 0

				         if (!isNumber(user.bawang))
					        user.bawang = 0
				        if (!isNumber(user.cabai))
					        user.cabai = 0
				        if (!isNumber(user.kemiri))
					        user.kemiri = 0
				        if (!isNumber(user.jahe))
					        user.jahe = 0
				        if (!isNumber(user.saus))
					        user.saus = 0
				        if (!isNumber(user.asam))
					        user.asam = 0

				        if (!isNumber(user.steak))
					          user.steak = 0
				        if (!isNumber(user.sate))
					          user.sate = 0
				        if (!isNumber(user.rendang))
					          user.rendang = 0
			        	if (!isNumber(user.kornet))
					          user.kornet = 0
				        if (!isNumber(user.nugget))
				          	user.nugget = 0
			         	if (!isNumber(user.bluefin))
				           	user.bluefin = 0
				        if (!isNumber(user.seafood))
				          	user.seafood = 0
				        if (!isNumber(user.sushi))
					          user.sushi = 0
				        if (!isNumber(user.moluska))
					          user.moluska = 0
			        	if (!isNumber(user.squidprawm))
				           	user.squidprawm = 0
				           	
                if (!isNumber(user.premium))
                    user.premium = false
                if (!isNumber(user.premiumTime))
                    user.premiumTime = 0
                if (!isNumber(user.limitjoin))
                    user.limitjoin = 0
            } else
                global.db.data.users[m.sender] = {
                    exp: 0,
                    limit: 10,
                    lastclaim: 0,
                    registered: false,
                    name: m.name,
                    pasangan: '',
                    age: -1,
                    regTime: -1,
                    afk: -1,
                    afkReason: '',
                    banned: false,
                    acc: false,
                    warn: 0,
                    level: 0,
                    role: 'Beginner',
                    autolevelup: true,
                    money: 0,
                    balance: 0,
                    atm: 0,
                    health: 100,
                    potion: 10,
                    trash: 0,
                    wood: 0,
                    rock: 0,
                    string: 0,

                    emerald: 0,
                    diamond: 0,
                    gold: 0,
                    iron: 0,
                    upgrader: 0,
                    stamina: 0,

                    common: 0,
                    uncommon: 0,
                    mythic: 0,
                    legendary: 0,
                    superior: 0,
                    pet: 0,

                    horse: 0,
                    horseexp: 0,
                    cat: 0,
                    catngexp: 0,
                    fox: 0,
                    foxexp: 0,
                    dog: 0,
                    dogexp: 0,
                    
                    banteng: 0,
                    harimau: 0, 
                    gajah: 0,
                    kambing: 0,
                    panda: 0, 
                    buaya: 0,
                    kerbau: 0,
                    sapi: 0,
                    money: 0, 
                    babihutan: 0,
                    babi: 0,
                    ayam: 0,

                    horselastfeed: 0,
                    catlastfeed: 0,
                    foxlastfeed: 0,
                    doglastfeed: 0,

                    armor: 0,
                    bow: 0,
                    armordurability: 0,
                    sword: 0,
                    sworddurability: 0,
                    pickaxe: 0,
                    pickaxedurability: 0,
                    fishingrod: 0,
                    fishingroddurability: 0,

                    lastclaim: 0,
                    lastadventure: 0,
                    lastduel: 0,
                    lastrob: 0,
                    lastfishing: 0,
                    lastmasak: 0, 
                    lastdungeon: 0,
                    lastduel: 0,
                    lastmining: 0,
                    lasthunt: 0,
                    lastweekly: 0,
                    lastmonthly: 0,
                    lastbunga: 0,
                    note: 0,
                    
                    bibitmangga: 0,
					          bibitapel: 0,
					          bibitpisang: 0,
					          bibitjeruk: 0,
					          bibitanggur: 0,
					          mangga: 0,
					          apel: 0,
					          pisang: 0,
					          jeruk: 0,
					          anggur: 0,
					
                    orca: 0,
                    paus: 0,
                    lumba: 0,
                    hiu: 0,
                    ikan: 0,
                    lele: 0,
                    bawal: 0,
                    nila: 0,
                    kepiting: 0,
                    lobster: 0,
				           	gurita: 0,
			          		cumi: 0,
				          	udang: 0,
                    

					          masak: 0,
					          masakrole: 0,
					          masakexp: 0,
					          masaklevel: 0,

					          bawang: 0,
					          cabai: 0,
					          kemiri: 0,
					          jahe: 0,
					          saus: 0,
					          asam: 0,

					          steak: 0,
					          sate: 0,
					          rendang: 0,
					          kornet: 0,
					          nugget: 0,
					          bluefin: 0,
					          seafood: 0,
					          sushi: 0,
					          moluska: 0,
					          squidprawm: 0,      
					                        
                    premium: false,
                    premiumTime: 0,
                    limitjoin: 0,
                }
            let chat = global.db.data.chats[m.chat]
            if (typeof chat !== 'object')
                global.db.data.chats[m.chat] = {}
            if (chat) {
                if (!('isBanned' in chat))
                    chat.isBanned = false
                if (!('welcome' in chat))
                    chat.welcome = true
                if (!('detect' in chat))
                    chat.detect = false
                if (!('sWelcome' in chat))
                    chat.sWelcome = ''
                if (!('sBye' in chat))
                    chat.sBye = ''
                if (!('sPromote' in chat))
                    chat.sPromote = ''
                if (!('sDemote' in chat))
                    chat.sDemote = ''
                if (!('delete' in chat))
                    chat.delete = true
                if (!('antiLink' in chat))
                    chat.antiLink = true
                if (!('viewonce' in chat))
                    chat.viewonce = false
                if (!('antiBadword' in chat)) 
                    chat.antiBadword = false
                if (!('simi' in chat))
                    chat.simi = false
                if (!('game' in chat))
                    chat.game = false 
                if (!('nsfw' in chat))
                    chat.nsfw = false
                if (!('premnsfw' in chat))
                    chat.premnsfw = false
                if (!isNumber(chat.expired))
                    chat.expired = 0
            } else
                global.db.data.chats[m.chat] = {
                    isBanned: false,
                    welcome: true,
                    detect: false,
                    sWelcome: '',
                    sBye: '',
                    sPromote: '',
                    sDemote: '',
                    delete: true,
                    antiLink: true,
                    viewonce: false,
                    antiBadword: true,
                    simi: false,
                    expired: 0,
                    game: false,
                    nsfw: false,
                    premnsfw: false,
                }
            let settings = global.db.data.settings[this.user.jid]
            if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
            if (settings) {
                if (!('self' in settings)) settings.self = false
                if (!('autoread' in settings)) settings.autoread = true
                if (!('restrict' in settings)) settings.restrict = true
                if (!('jadibot' in settings)) settings.jadibot = false
                if (!('autorestart' in settings)) settings.autorestart = true
                if (!('restartDB' in settings)) settings.restartDB = 0
            } else global.db.data.settings[this.user.jid] = {
                self: false,
                autoread: true,
                jadibot: false,
                restrict: true,
                autorestart: true,
                restartDB: 0
            }
        } catch (e) {
            console.error(e)
        }
        if (opts['nyimak'])
            return
        if (!m.fromMe && opts['self'])
            return
        if (opts['pconly'] && m.chat.endsWith('g.us'))
            return
        if (opts['gconly'] && !m.chat.endsWith('g.us') && !m.fromMe)
            return conn.reply(m.chat, 'Bot Sedang Dalam Mode Khusus GGonly\nMasuk Gc Biar Bisa Pake\n[ Link ]\nhttps://chat.whatsapp.com/KS51Xw91eju8HTv5owtV1z', fkontak)
        if (opts['swonly'] && m.chat !== 'status@broadcast')
            return
        if (typeof m.text !== 'string')
            m.text = ''

        const isROwner = [conn.decodeJid(global.conn.user.id), ...global.owner.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isOwner = isROwner || m.fromMe
        const isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPrems = isROwner || db.data.users[m.sender].premiumTime > 0

        if (opts['queque'] && m.text && !(isMods || isPrems)) {
            let queque = this.msgqueque, time = 1000 * 5
            const previousID = queque[queque.length - 1]
            queque.push(m.id || m.key.id)
            setInterval(async function () {
                if (queque.indexOf(previousID) === -1) clearInterval(this)
                await delay(time)
            }, time)
        }

        if (m.isBaileys)
            return
        m.exp += Math.ceil(Math.random() * 10)

        let usedPrefix
        let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

        const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch(_ => null)) : {}) || {}
        const participants = (m.isGroup ? groupMetadata.participants : []) || []
        const user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender) : {}) || {} // User Data
        const bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data
        const isRAdmin = user?.admin == 'superadmin' || false
        const isAdmin = isRAdmin || user?.admin == 'admin' || false // Is User Admin?
        const isBotAdmin = bot?.admin || false // Are you Admin?

        const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins')
        for (let name in global.plugins) {
            let plugin = global.plugins[name]
            if (!plugin)
                continue
            if (plugin.disabled)
                continue
            const __filename = join(___dirname, name)
            if (typeof plugin.all === 'function') {
                try {
                    await plugin.all.call(this, m, {
                        chatUpdate,
                        __dirname: ___dirname,
                        __filename
                    })
                } catch (e) {
                    // if (typeof e === 'string') continue
                    console.error(e)
                    for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                            m.reply(`*Plugin:* ${name}\n*Sender:* ${m.sender}\n*Chat:* ${m.chat}\n*Command:* ${m.text}\n\n\`\`\`${format(e)}\`\`\``.trim(), data.jid)
                    }
                }
            }
            if (!opts['restrict'])
                if (plugin.tags && plugin.tags.includes('admin')) {
                    // global.dfail('restrict', m, this)
                    continue
                }
            const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
            let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
            let match = (_prefix instanceof RegExp ? // RegExp Mode?
                [[_prefix.exec(m.text), _prefix]] :
                Array.isArray(_prefix) ? // Array?
                    _prefix.map(p => {
                        let re = p instanceof RegExp ? // RegExp in Array?
                            p :
                            new RegExp(str2Regex(p))
                        return [re.exec(m.text), re]
                    }) :
                    typeof _prefix === 'string' ? // String?
                        [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
                        [[[], new RegExp]]
            ).find(p => p[1])
            if (typeof plugin.before === 'function') {
                if (await plugin.before.call(this, m, {
                    match,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }))
                    continue
            }
            if (typeof plugin !== 'function')
                continue
            if ((usedPrefix = (match[0] || '')[0])) {
                let noPrefix = m.text.replace(usedPrefix, '')
                let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
                args = args || []
                let _args = noPrefix.trim().split` `.slice(1)
                let text = _args.join` `
                
                command = (command || '').toLowerCase()
                let fail = plugin.fail || global.dfail // When failed
                let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
                    plugin.command.test(command) :
                    Array.isArray(plugin.command) ? // Array?
                        plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                            cmd.test(command) :
                            cmd === command
                        ) :
                        typeof plugin.command === 'string' ? // String?
                            plugin.command === command :
                            false

                if (!isAccept)
                    continue
                m.plugin = name
                if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
                    let chat = global.db.data.chats[m.chat]
                    let user = global.db.data.users[m.sender]
                    if (name != 'owner-unbanchat.js' && name != 'owner-exec.js' && name != 'owner-exec2.js' && name != 'tool-delete.js' && chat?.isBanned)
                        return // Except this
                    if (name != 'owner-unbanuser.js' && user?.banned)
                        return
                }
                if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
                    fail('owner', m, this)
                    continue
                }
                if (plugin.rowner && !isROwner) { // Real Owner
                    fail('rowner', m, this)
                    continue
                }
                if (plugin.owner && !isOwner) { // Number Owner
                    fail('owner', m, this)
                    continue
                }
                if (plugin.mods && !isMods) { // Moderator
                    fail('mods', m, this)
                    continue
                }
                if (plugin.premium && !isPrems) { // Premium
                    fail('premium', m, this)
                    continue
                }
                if (plugin.group && !m.isGroup) { // Group Only
                    fail('group', m, this)
                    continue
                } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
                    fail('botAdmin', m, this)
                    continue
                } else if (plugin.admin && !isAdmin) { // User Admin
                    fail('admin', m, this)
                    continue
                }
                if (plugin.private && m.isGroup) { // Private Chat Only
                    fail('private', m, this)
                    continue
                }
                if (plugin.register == true && _user.registered == false) { // Butuh daftar?
                    fail('unreg', m, this)
                    continue
                }
                m.isCommand = true
                let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command
                if (xp > 200)
                    m.reply('Ngecit -_-') // Hehehe
                else
                    m.exp += xp
                if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
                    this.reply(m.chat, `[❗] Limit kau abis dek, beli melalui *${usedPrefix}buy limit*`, m)
                    continue // Limit habis
                }
                if (plugin.level > _user.level) {
                    this.reply(m.chat, `[💬] Diperlukan level ${plugin.level} untuk menggunakan perintah ini\n*Level mu:* ${_user.level} 📊`, m)
                    continue // If the level has not been reached
                }
                let extra = {
                    match,
                    usedPrefix,
                    noPrefix,
                    _args,
                    args,
                    command,
                    text,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }
                try {
                    await plugin.call(this, m, extra)
                    if (!isPrems)
                        m.limit = m.limit || plugin.limit || false
                } catch (e) {
                    // Error occured
                    m.error = e
                    console.error(e)
                    if (e) {
                        let text = format(e)
                        for (let key of Object.values(global.APIKeys))
                            text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
                        if (e.name)
                            for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                                let data = (await conn.onWhatsApp(jid))[0] || {}
                                if (data.exists)
                                    m.reply(`*🗂️ Plugin:* ${m.plugin}\n*👤 Sender:* ${m.sender}\n*💬 Chat:* ${m.chat}\n*💻 Command:* ${usedPrefix}${command} ${args.join(' ')}\n📄 *Error Logs:*\n\n\`\`\`${text}\`\`\``.trim(), data.jid)
                            }
                        m.reply(text)
                    }
                } finally {
                    // m.reply(util.format(_user))
                    if (typeof plugin.after === 'function') {
                        try {
                            await plugin.after.call(this, m, extra)
                        } catch (e) {
                            console.error(e)
                        }
                    }
                    if (m.limit)
                        m.reply(+m.limit + ' ʟɪᴍɪᴛ ᴛᴇʀᴘᴀᴋᴀɪ ✔️')
                }
                break
            }
        }
    } catch (e) {
        console.error(e)
    } finally {
        if (opts['queque'] && m.text) {
            const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
            if (quequeIndex !== -1)
                this.msgqueque.splice(quequeIndex, 1)
        }
        //console.log(global.db.data.users[m.sender])
        let user, stats = global.db.data.stats
        if (m) {
            if (m.sender && (user = global.db.data.users[m.sender])) {
                user.exp += m.exp
                user.limit -= m.limit * 1
            }

            let stat
            if (m.plugin) {
                let now = +new Date
                if (m.plugin in stats) {
                    stat = stats[m.plugin]
                    if (!isNumber(stat.total))
                        stat.total = 1
                    if (!isNumber(stat.success))
                        stat.success = m.error != null ? 0 : 1
                    if (!isNumber(stat.last))
                        stat.last = now
                    if (!isNumber(stat.lastSuccess))
                        stat.lastSuccess = m.error != null ? 0 : now
                } else
                    stat = stats[m.plugin] = {
                        total: 1,
                        success: m.error != null ? 0 : 1,
                        last: now,
                        lastSuccess: m.error != null ? 0 : now
                    }
                stat.total += 1
                stat.last = now
                if (m.error == null) {
                    stat.success += 1
                    stat.lastSuccess = now
                }
            }
        }
        
       if (m.isCommand && !db.data.settings[this.user.jid].self) {
       await this.sendPresenceUpdate('composing', m.chat)
       }

        try {
            if (!opts['noprint']) await (await import(`./lib/print.js`)).default(m, this)
        } catch (e) {
            console.log(m, m.quoted, e)
        }
        if (opts['autoread'])
            await this.readMessages([m.key]).catch(() => { })
    }
}

/**
 * Handle groups participants update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['group-participants.update']} groupsUpdate 
 */
export async function participantsUpdate({ id, participants, action }) {
    if (opts['self'])
        return
    // if (id in conn.chats) return // First login will spam
    if (this.isInit)
        return
    if (global.db.data == null)
        await loadDatabase()
    let chat = global.db.data.chats[id] || {}
    let text = ''
    switch (action) {
                case 'add':
        case 'remove':
            if (chat.welcome) {
                let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata
                for (let user of participants) {
                    let pp = 'https://telegra.ph/file/2d06f0936842064f6b3bb.png'
                    try {
                        pp = await this.profilePictureUrl(user, 'image')
                    } catch (e) {
                    } finally {
                        text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user').replace('@subject', await this.getName(id)).replace('@desc', groupMetadata.desc?.toString() || 'unknow') :
                            (chat.sBye || this.bye || conn.bye || 'Bye @user')).replace(/@user/g, '@' + user.split`@`[0])
                        let wel = API('males', '/welcome2', {
                                profile: pp,
                                username: await this.getName(user),
                                background: 'https://telegra.ph/file/7f827ca45c833542777f0.jpg',
                                groupname: await this.getName(id),
                                membercount: groupMetadata.participants.length
                            })
                            let lea = API('males', '/goodbye2', {
                                profile: pp,
                                username: await this.getName(user),
                                background: 'https://telegra.ph/file/7f827ca45c833542777f0.jpg',
                                groupname: await this.getName(id),
                                membercount: groupMetadata.participants.length
                            })
                            
 /* conn.sendButtonDoc(id, wm, text, action == 'add' ? 'ᴡᴇʟᴄᴏᴍᴇ' : 'sᴀʏᴏɴᴀʀᴀᴀ', action === 'add' ? '.intro' : 'Aʟᴅɪ X Aɪsʏᴀʜ', fkontak, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://instagram/b4c00t4an_s3l3b',
    mediaType: 2, 
    description: sgc,
    title: 'Hᴀʟᴏ Nɢᴀʙ',
    body: wm,
    thumbnail: await(await fetch(action === 'add' ? wel : lea)).buffer(),
    sourceUrl: sgc
     }}
  })*/
  let welcom = 'https://telegra.ph/file/35f17bb371d308504bc46.jpg'

  let godbye = 'https://telegra.ph/file/b44e48066aed4fb7ad291.jpg'
  conn.sendButtonDoc(id, text, author, action == 'add' ? 'ᴡᴇʟᴄᴏᴍᴇ' : 'sᴀʏᴏɴᴀʀᴀᴀ', action === 'add' ? '.intro' : 'Aʟᴅɪ X Aɪsʏᴀʜ', fkontak, { contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: '© 𝐒𝐤𝐲𝐁𝗼𝐭',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: '© 𝐒𝐤𝐲𝐁𝗼𝐭',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await(await fetch(action === 'add' ? wel : lea)).buffer(),
    thumbnailUrl: sgc,
    title: '𝑾𝒆𝒍𝒄𝒐𝒎𝒆 𝑵𝒆𝒘 𝑴𝒆𝒎𝒃𝒆𝒓'  
				}
			}
})
  
                    }
                }
            }
            break
        case 'promote':
            text = (chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```')
        case 'demote':
            if (!text)
                text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```')
            text = text.replace('@user', '@' + participants[0].split('@')[0])
            if (chat.detect)
                this.sendMessage(id, { text, mentions: this.parseMention(text) })
/*let flaaa2 = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']
conn.sendButtonImg(id, `${pickRandom(flaaa2)}` + `Congratulation ` + '@user', 'Sᴇʟᴀᴍᴀᴛ Nᴀɪᴋ Jᴀʙᴀᴛᴀɴ', text, mentions: this.parseMention(text), { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://facebook.com/sadtime098',
    mediaType: 2, 
    description: sgc,
    title: "Jᴀɴɢᴀɴ Lᴜᴘᴀ Mᴀɴᴅɪ!!",
    body: wm,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: sgc
     }}
  })*/
            break
    }
}

/**
 * Handle groups update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['groups.update']} groupsUpdate 
 */
export async function groupsUpdate(groupsUpdate) {
    if (opts['self'])
        return
    for (const groupUpdate of groupsUpdate) {
        const id = groupUpdate.id
        if (!id) continue
        let chats = global.db.data.chats[id], text = ''
        if (!chats?.detect) continue
        if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || '```Description has been changed to```\n@desc').replace('@desc', groupUpdate.desc)
        if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || '```Subject has been changed to```\n@subject').replace('@subject', groupUpdate.subject)
        if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || '```Icon has been changed to```').replace('@icon', groupUpdate.icon)
        if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || '```Group link has been changed to```\n@revoke').replace('@revoke', groupUpdate.revoke)
        if (!text) continue
        await this.sendMessage(id, { text, mentions: this.parseMention(text) })
    }
}

export async function deleteUpdate(message) {
    try {
        const { fromMe, id, participant } = message
        if (fromMe)
            return
        let msg = this.serializeM(this.loadMessage(id))
        if (!msg)
            return
        let chat = global.db.data.chats[msg.chat] || {}
        if (chat.delete)
            return
        await this.reply(msg.chat, `
Terdeteksi @${participant.split`@`[0]} telah menghapus pesan
Untuk mematikan fitur ini, ketik
*.enable delete*
`.trim(), msg, {
            mentions: [participant]
        })
        this.copyNForward(msg.chat, msg).catch(e => console.log(e, msg))
    } catch (e) {
        console.error(e)
    }
}

global.dfail = (type, m, conn) => {
const fgclink = {
           "key": {
               "fromMe": false,
               "participant": "0@s.whatsapp.net",
               "remoteJid": "0@s.whatsapp.net"
           },
           "message": {
               "groupInviteMessage": {
                   "groupJid": "6282127487538-1625305606@g.us",
                   "inviteCode": "null",
                   "groupName": "Halo", 
                   "caption": wm, 
                   'jpegThumbnail': fs.readFileSync('./media/ok.jpg')
               }
           }
       }
       let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
    let rown = {
        rowner: 'Printah ini hanya di gunakan oleh *Developer BOT* !'}[type]
  if (rown) return conn.sendButtonDocAccess(m.chat, ucapan() + tag + '\n' + rown, 'Only Developer', 'Owner', '.owner', m, adReply)

        
let own = {
owner: 'Printah ini hanya di gunakan oleh *Owner* !'}[type]
  if (own) return conn.sendButtonDocAccess(m.chat, ucapan() + tag + '\n' + own, 'Only OWNER', 'Owner', '.owner', m, adReply)

let mod = {
mods: 'Printah ini hanya di gunakan oleh *Moderator BOT* !'}[type]
  if (mod) return conn.sendButtonDocAccess(m.chat, ucapan() + tag + '\n' + mod, 'Only Moderator', 'MENU', '.menu', m, adReply)
let prm = {
        premium: 'Printah ini hanya di gunakan oleh member *Premium* !'}[type]
  if (prm) return conn.sendButtonDocAccess(m.chat, ucapan() + tag + '\n' + prm, 'Only Premium', 'Beli Prem', '.sewa', m, adReply)

let gc = {
        group: 'Printah ini hanya dapat di gunakan di dalam *Group* !'
        }[type]
  if (gc) return conn.sendButtonDocAccess(m.chat, ucapan() + tag + '\n' + gc, 'Only Group', 'MENU', '.menu', m, adReply)

let msg = {
        private: 'Printah ini hanya dapat di gunakan di *Private Chat !*',
        admin: 'Printah ini hanya di gunakan oleh *Admin* !',
        botAdmin: 'Printah ini hanya di gunakan ketika bot menjadi *Admin Group* !',
        restrict: 'Restrict belum di nyalakan di chat ini !'}[type]
  /*  if (msg) return conn.sendButtonDoc(m.chat, msg, wm, 'Menu', '.menu', fgclink)*/
  if (msg) return conn.sendButtonDocAccess(m.chat, ucapan() + tag + '\n' + msg, wm, 'MENU', '.menu', m, adReply)
  
  
    let msgg = {
    	unreg: 'ʜᴀʟʟᴏ ᴋᴀᴋ 👋\nᴀɴᴅᴀ ʜᴀʀᴜs ᴍᴇɴᴅᴀғᴛᴀʀ ᴋᴇ ᴅᴀᴛᴀʙᴀsᴇ ʙᴏᴛ ᴅᴜʟᴜ sᴇʙᴇʟᴜᴍ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ғɪᴛᴜʀ ɪɴɪ\n\n➞ ᴋʟɪᴄᴋ ᴛᴏᴍʙᴏʟ ᴅɪʙᴀᴡᴀʜ ᴜɴᴛᴜᴋ ᴍᴇɴᴅᴀғᴛᴀʀ ᴋᴇ ᴅᴀᴛᴀʙᴀsᴇ ʙᴏᴛ'
}[type]
if (msgg) return conn.sendButtonDocAccess(m.chat, ucapan() + tag + '\n' + msgg, 'Silahkan Verifikasi', '❮ ᴠᴇʀɪғʏ ❯', '.verify', m, adReply)
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak 🌇"
  }
  if (time >= 18) {
    res = "Malam Kak 🌙"
  }
  return res
}
function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
     }
let file = global.__filename(import.meta.url, true)
watchFile(file, async () => {
    unwatchFile(file)
    console.log(chalk.redBright("Update 'handler.js'"))
    if (global.reloadHandler) console.log(await global.reloadHandler())
})