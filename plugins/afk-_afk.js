export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        let kon = `Kamu berhenti AFK${user.afkReason ? ' \nsetelah : ' + user.afkReason : ''}
*Selama :* ${(new Date - user.afk).toTimeString()}`
        conn.sendButtonDoc(m.chat, kon, wm, 'Hai Bang','Ya', fkontak)
        user.afk = -1
        user.afkReason = ''
    }
    
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        let tol = `Jangan tag dia!
  Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
  Selama ${(new Date - afkTime).toTimeString()}`
        conn.sendButtonDoc(m.chat, tol, wm, 'Maaf Bang','Ya', fkontak)
    }
    return true
}