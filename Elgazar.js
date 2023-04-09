//Use latest fork to get latest features
//update your repo to get new updates

process.on('uncaughtException', console.error)
require("./config")
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, WAFlag } = require('@adiwajshing/baileys')
const zChiku = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const path = require('path')
const os = require('os')
const { AnimeWallpaper } = require("anime-wallpaper")
 const { TiktokDownloader } = require('./lib/tiktokdl') 
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const hx = require("hxz-api")
const hxz = require('./lib/hxz-api')
const bdr = require('rumus-bdr')
const yogipw = require("tod-api")
const { color, bgcolor } = require('./lib/color')
const thiccysapi = require('textmaker-thiccy')
const toHur = require('@develoka/angka-terbilang-js')
const mathjs = require('mathjs')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { EmojiAPI } = require("emoji-api")
const imgbbUploader = require('imgbb-uploader')
const primbon = new Primbon()
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./lib/limit.js');
const emoji = new EmojiAPI()
const { smsg, formatp, tanggal, GIFBufferToVideoBuffer, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const { aiovideodl } = require('./lib/scraper.js')
const cheerio = require ("cheerio");
const eco = require('discord-mongoose-economy')
const ty = eco.connect('mongodb+srv://Arch:1t6l2G0r6nagLlOb@cluster0.gedh4.mongodb.net/?retryWrites=true&w=majority');
const textpro = require('./lib/textpro')
const { detikNews } = require('./lib/detik')
const { wikiSearch } = require('./lib/wiki.js');
const { Gempa } = require("./lib/gempa.js");
const ms = require('ms')
 let { covid } = require('./lib/covid.js') 
const { jadwaltv }= require('./lib/jadwaltv');
const { ChikuTiktok } = require('./lib/tiktokmikudl');
const maker = require('mumaker')
const xfarrapi = require('xfarr-api')
const { hentai } = require('./lib/scraper2.js')
let { msgFilter } = require('./lib/antispam')
const { mediafireDl } = require('./lib/mediafire.js')
const Ayushtime = moment.tz('Africa/Egypt').format('HH:mm:ss')
const Ayushdate = moment.tz('Africa/Egypt').format('DD/MM/YYYY')
const time2 = moment().tz('Africa/Egypt').format('HH:mm:ss')

        if(time2 < "23:59:00"){

        var ucapanWaktu = 'Good night 🌌'

}

        if(time2 < "19:00:00"){

        var ucapanWaktu = 'Good afternoon 🌆'

}

        if(time2 < "18:00:00"){

        var ucapanWaktu = 'Good afternoon 🌇'

}

        if(time2 < "15:00:00"){

        var ucapanWaktu = 'Good afternoon 🏞'

}

        if(time2 < "11:00:00"){

        var ucapanWaktu = 'Good morning 🌅'

}

        if(time2 < "05:00:00"){

        var ucapanWaktu = 'Good night 🏙'

}

const _ = require('lodash')
const yargs = require('yargs/yargs')
var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')
const { 
  yta, 
  ytv, 
  searchResult 
 } = require('./lib/ytdl')

let banUser = JSON.parse(fs.readFileSync('./database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./database/banChat.json'));
let Ayushaudio = JSON.parse(fs.readFileSync('./Media-Database/audio.json'));
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/bounty.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/blood.json'))


global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {})
}

let lolkey = global.lolhuman
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []

let pendaftar = JSON.parse(fs.readFileSync('./storage/user/user.json'))
let balance = JSON.parse(fs.readFileSync('./database/balance.json'))
let ssewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
let ban = JSON.parse(fs.readFileSync('./database/ban.json'))
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'))
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
let limit = JSON.parse(fs.readFileSync('./database/limit.json'))
let setik = JSON.parse(fs.readFileSync('./src/sticker.json'))
let vien = JSON.parse(fs.readFileSync('./src/audio.json'))
let imagi = JSON.parse(fs.readFileSync('./src/image.json'))
let videox = JSON.parse(fs.readFileSync('./src/video.json'))
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
let _sewa = require("./lib/sewa");
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))


const time = moment.tz('Africa/Egypt').format('DD/MM HH:mm:ss')
const ucap = moment(Date.now()).tz('Africa/Egypt').locale('id').format('a')
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)

module.exports = Chiku = async (Chiku, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = global.prefa
const isCmd = body.startsWith(prefix)
const notCmd = body.startsWith('')
const command = isCmd ? body.slice(1).trim().split(' ')[0].toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await Chiku.decodeJid(Chiku.user.id)
const isCreator = [botNumber, ...global.Owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = args.join(" ")
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const groupMetadata = m.isGroup ? await Chiku.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isUser = pendaftar.includes(m.sender)
const isBan = banUser.includes(m.sender)
const isBanChat = m.isGroup ? banchat.includes(from) : false
const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const AntiLink = m.isGroup ? ntilink.includes(from) : false
const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
const antiWame = m.isGroup ? ntwame.includes(from) : false
const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
const isLeveling = m.isGroup ? _leveling.includes(from) : false
autoreadsw = true
const content = JSON.stringify(m.message)
const q = args.join(' ')

const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')




const mongoose = require("mongoose");

   
	
	
	
	
/* Dm and Groups Autoreply/Bot chat

if (!isCmd && !m.isGroup){
    const botreply = await axios.get(`http://api.brainshop.ai/get?bid=166512&key=5nz1Ha6nS9Zx1MfT&uid=[uid]&msg=[msg]=[${budy}]`)
    txt = `${botreply.data.cnt}`
    m.reply(txt)
    }    
    
  */  

//auto recording everything
    if (global.autoRecord) { if (m.chat) { Chiku.sendPresenceUpdate('recording', m.chat) }
}
//auto typing everything
  if (global.autoTyping) { if (m.chat) { Chiku.sendPresenceUpdate('composing', m.chat) }
}
	
	
	
	
	
_sewa.expiredCheck(Chiku, sewa)

const reply = (teks) => {
            Chiku.sendMessage(m.chat, { text: teks},{ quoted: m})
        }
        
        const replay = (teks) => {
            Chiku.sendMessage(m.chat, { text: teks}, { quoted: m})
        }
        

function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
            }
            


const pikaReactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
	

	
	
	
		
if (m.message) {
addBalance(m.sender, randomNomor(574), balance)
console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }

        if (isCmd && !isUser){
			pendaftar.push(m.sender)
			fs.writeFileSync('./storage/user/user.json', JSON.stringify(pendaftar))
        } 

            const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
               }
            }

            const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
                }
            }

            const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
                }
             }

            const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }

            const getUserRank = (userId) => {
    let position = null
    let found = false
    _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userId) {
            position = i
            found = true
        }
    })
    if (found === false && position === null) {
        const obj = { id: userId, xp: 0, level: 1 }
        _level.push(obj)
        fs.writeFileSync('./database/level.json', JSON.stringify(_level))
        return 99
    } else {
        return position + 1
    }
}

const xpGain = new Set()

const isGained = (userId) => {
    return !!xpGain.has(userId)
}

const addCooldown = (userId) => {
    xpGain.add(userId)
    setTimeout(() => {
        return xpGain.delete(userId)
    }, 60000) 
}

var levelRole = getLevelingLevel(m.sender)
        var role = 'Copper V'
        if (levelRole <= 5) {
            role = 'Copper IV'
        } else if (levelRole <= 10) {
            role = 'Copper III'
        } else if (levelRole <= 15) {
            role = 'Copper II'
        } else if (levelRole <= 20) {
            role = 'Copper I'
        } else if (levelRole <= 25) {
            role = 'Silver V'
        } else if (levelRole <= 30) {
            role = 'Silver IV'
        } else if (levelRole <= 35) {
            role = 'Silver III'
        } else if (levelRole <= 40) {
            role = 'Silver II'
        } else if (levelRole <= 45) {
            role = 'Silver I'
        } else if (levelRole <= 50) {
            role = 'Gold V'
        } else if (levelRole <= 55) {
            role = 'Gold IV'
        } else if (levelRole <= 60) {
            role = 'Gold III'
        } else if (levelRole <= 65) {
            role = 'Gold II'
        } else if (levelRole <= 70) {
            role = 'Gold I'
        } else if (levelRole <= 75) {
            role = 'Platinum V'
        } else if (levelRole <= 80) {
            role = 'Platinum IV'
        } else if (levelRole <= 85) {
            role = 'Platinum III'
        } else if (levelRole <= 90) {
            role = 'Platinum II'
        } else if (levelRole <= 95) {
            role = 'Platinum I'
        } else if (levelRole < 100) {
            role = 'Exterminator'
        }

        var levelRoles = getLevelingLevel(m.sender)
        var roles = 'Cop V'
        if (levelRoles <= 5) {
            roles = 'Cop IV'
        } else if (levelRoles <= 10) {
            roles = 'Cop III'
        } else if (levelRoles <= 15) {
            roles = 'Cop II'
        } else if (levelRoles <= 20) {
            roles = 'Cop I'
        } else if (levelRoles <= 25) {
            roles = 'Sil V'
        } else if (levelRoles <= 30) {
            roles = 'Sil IV'
        } else if (levelRoles <= 35) {
            roles = 'Sil III'
        } else if (levelRoles <= 40) {
            roles = 'Sil II'
        } else if (levelRoles <= 45) {
            roles = 'Sil I'
        } else if (levelRoles <= 50) {
            roles = 'Gol V'
        } else if (levelRoles <= 55) {
            roles = 'Gol IV'
        } else if (levelRoles <= 60) {
            roles = 'Gol III'
        } else if (levelRoles <= 65) {
            roles = 'Gol II'
        } else if (levelRoles <= 70) {
            roles = 'Gol I'
        } else if (levelRoles <= 75) {
            roles = 'Plat V'
        } else if (levelRoles <= 80) {
            roles = 'Plat IV'
        } else if (levelRoles <= 85) {
            roles = 'Plat III'
        } else if (levelRoles <= 90) {
            roles = 'Plat II'
        } else if (levelRoles <= 95) {
            roles = 'Plati I'
        } else if (levelRoles < 100) {
            roles = 'Exter'
        }
   
                        if (m.isGroup && isLeveling && isUser && Chiku.public) {
                                const currentLevel = getLevelingLevel(m.sender)
                                const checkId = getLevelingId(m.sender)
                                try {
                                        addCooldown(m.sender)
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 200
                                        const requiredXp = 200 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(m.sender)
                                        addLevelingXp(m.sender, amountXp)
                                        if (requiredXp <= getLevelingXp(m.sender)) {
                                        addLevelingLevel(m.sender, 1)
teks = `「 *رفع مستوي المستخدم* 」\n\n@${m.sender.split("@")[0]} تم رفع مستوى!!\n\n*اكس بي المستخدم*: ${getLevelingXp(m.sender)}\n*لفل**: ${getLevel} -> ${getLevelingLevel(m.sender)}\n*دور*: ${role} \n\n`
Chiku.sendMessage(m.chat, {text: teks, mentions:[m.sender]}, {quoted:m})
}

                        } catch (err) {
                                console.error("❌ ايرور !")
                        }
                }
                if (prefix && command) {
                                const currentLevel = getLevelingLevel(m.sender)
                                const checkId = getLevelingId(m.sender)
                                try {
                                        
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 30
                                        const requiredXp = 30 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(m.sender)
                                        addLevelingXp(m.sender, amountXp)
                                        if (requiredXp <= getLevelingXp(m.sender)) {
                                        addLevelingLevel(m.sender, 1)
                                        }
                                        
                        } catch (err) {
                                console.error("❌ ايرور !")
                        }
                }

if (autoreadsw) {
		if (from === 'status@broadcast') {
		Chiku.chatRead(from)
	}
	}

if (global.autoreadpmngc) {
if (command) {
await Chiku.sendPresenceUpdate('composing', m.chat)
Chiku.sendReadReceipt(from, m.sender, [m.key.id])}
}
/*
  if (global.autoReadGc) {
  if (m.isGroup) { Chiku.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
}
*/

  if (global.autoReadAll) { if (m.chat) { Chiku.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
  }

    if (global.autoRecord) { if (m.chat) { Chiku.sendPresenceUpdate('recording', m.chat) }
}

  if (global.autoTyping) { if (m.chat) { Chiku.sendPresenceUpdate('composing', m.chat) }
}

  if (global.available) { if (m.chat) { Chiku.sendPresenceUpdate('available', m.chat) }
  }

const hariRaya = new Date('6 1, 2022 00:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}يوم ${jjam}ساعه ${mmmenit}دقيقه ${ddetik}ثانيه`
			
async function hitungmundur(bulan, tanggal) { 
          let from = new Date(`${bulan} ${tanggal}, 2022 00:00:00`).getTime();
          let now = Date.now();
          let distance = from - now;
          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);
          return days + "يوم " + hours + "ساعه " + minutes + "دقيقه " + seconds + "ثانيه"
        }
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateDocument' in setting)) setting.templateDocument = true
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: false,
		templateGif: false,
		templateMsg: false,
		templateDocument: true,
	    }
} catch (err) {
console.error(err)
}

const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
 "orderMessage": {
"orderId": orid, 
"thumbnail": img, 
"itemCount": itcount, 
"status": "INQUIRY", 
"surface": "CATALOG", 
"orderTitle": title, 
"message": text, 
"sellerJid": sellers, 
"token": tokens, 
"totalAmount1000": ammount, 
"totalCurrencyCode": "IDR", 
}
}), { userJid: jid })
Chiku.relayMessage(jid, order.message, { messageId: order.key.id})
}


const { 
addInventoriDarah, 
cekDuluJoinAdaApaKagaDiJson, 
addDarah, 
kurangDarah, 
getDarah 
}  = require('./storage/user/blood.js')
const { 
cekInventoryAdaAtauGak, 
addInventori,  
addBesi, 
addEmas, 
addEmerald,
addUmpan,
addPotion,
kurangBesi, 
kurangEmas, 
kurangEmerald, 
kurangUmpan,
kurangPotion,
getBesi, 
getEmas, 
getEmerald,
getUmpan,
getPotion
} = require('./storage/user/exchange.js')
const { 
addInventoriMonay, 
cekDuluJoinAdaApaKagaMonaynyaDiJson, 
addMonay,
kurangMonay, 
getMonay 
} = require('./storage/user/money.js')
const { 
addInventoriLimit, 
cekDuluJoinAdaApaKagaLimitnyaDiJson, 
addLimit, 
kurangLimit, 
getLimit 
} = require('./storage/user/limit.js')
const { 
cekDuluHasilBuruanNya, 
addInventoriBuruan, 
addIkan,
addAyam, 
addKelinci, 
addDomba, 
addSapi,                    
addGajah,
kurangIkan,
kurangAyam, 
kurangKelinci, 
kurangDomba, 
kurangSapi,
kurangGajah,
getIkan,
getAyam, 
getKelinci, 
getDomba,
getSapi,
getGajah
} = require('./storage/user/prey.js')
let DarahAwal =  global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const ikan = ['🐟','🐠','🐡']   
   
 

        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]

if (!isRakyat) {
rkyt.push(m.sender.split("@")[0])
}

global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/CheemsBot/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/CheemsBot${moment.tz('Africa/Egypt').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
 

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`
متعملش ريب عليه لانه في وضع الاختفاء الان ${reason ? 'السبب ' + reason : 'بدون سبب'}
مده الغياب ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
reply(`
منور لقد عدت ${user.afkReason ? ' السبب ' + user.afkReason : ''}
مده الغياب ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}


if (m.mtype === 'groupInviteMessage') {
teks = `لا يمكنني الانضمام إلى المجموعة حتى يطلب مني *المطور* الانضمام. اكتب* - المطور * للحصول على رقم المطور واسأل.`
sendOrder(m.chat, teks, "5123658817728409", fs.readFileSync('./Assets/pic10.jpg'), `${watermark}`, `${BotName}`, "916909137213@s.whatsapp.net", "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==", "99999999999999999999")
}


if (AntiLink) {
    linkgce = await Chiku.groupInviteCode(from)
    if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
    reply(`\`\`\`『⚠️منع الروابط⚠️』\`\`\`\n\nانت ارسلت رابط هذا الجروب لهذا لم اطردك.`)
    } else if (isUrl(m.text)) {
    bvl = `\`\`\`『⚠️منع الروابط⚠️』\`\`\`\n\nانت ادمن والادمن حر في ارسال اي رابط.`
    if (isAdmins) return reply(bvl)
    if (m.key.fromMe) return reply(bvl)
    if (isCreator) return reply(bvl)
    kice = m.sender
    await Chiku.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
    Chiku.sendMessage(from, {text:`\`\`\`『⚠️منع الروابط⚠️』\`\`\`\n\n@${kice.split("@")[0]} تم طرده لارساله الروابط في الجروب!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
    } else {
    }
    }
 
    if (antiWame)
    if (budy.includes(`wa.me`)) {
  if (!isBotAdmins) return
  bvl = `\`\`\`『⚠️منع الروابط⚠️』\`\`\`\n\nالادمن ارسل رابط والادمن حر في ارسال اي روابط!!`
  if (isAdmins) return reply(bvl)
  if (m.key.fromMe) return reply(bvl)
  if (isCreator) return reply(bvl)
  kice = m.sender
  await Chiku.groupParticipantsUpdate(m.chat, [kice], 'remove')
  Chiku.sendMessage(from, {text:`\`\`\`『⚠️منع الروابط⚠️』\`\`\`\n\n@${kice.split("@")[0]} تم طرده لارساله الروابط في الجروب!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
  } else {
  }
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`『⚠️منع الروابط⚠️』\`\`\`\n\nالادمن ارسل رابط والادمن حر في ارسال اي روابط!!`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Chiku.groupParticipantsUpdate(m.chat, [kice], 'remove')
Chiku.sendMessage(from, {text:`\`\`\`『⚠️منع الروابط⚠️』\`\`\`\n\n@${kice.split("@")[0]}  تم طرده لارساله لينك شات في الجروب!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}

if (antiVirtex) {
    if (budy.length > 3500) {
    reply(`*تحذير!*\n\n`.repeat(300))
    reply(`\`\`\`تم الكشف عن فيروس !!\`\`\`\n\nطرد المرسل...`)
    if (!isBotAdmins) return reply(mess.botAdmin)
    Chiku.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    }
    }


    if (AntiLink) {
        if (!isBotAdmins) return
        linkgce = await Chiku.groupInviteCode(from)
        if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
        reply(`\`\`\`『⚠️منع الروابط⚠️』\`\`\`\n\nلم يتم طردك لانك ارسلت رابط هذا الجروب!`)
        } else if (isUrl(m.text)) {
        bvl = `\`\`\`『⚠️منع الروابط⚠️』\`\`\`\n\nالادمن ارسل رابط وهو حر في ارسال اي روابط!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Chiku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Chiku.sendMessage(from, {text:`\`\`\`『⚠️منع الروابط⚠️』\`\`\`\n\n@${kice.split("@")[0]} تم طرده لارساله رابط واتساب في الجروب!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        }

        
        if (AntiLinkYoutubeVid)
        if (budy.includes("https://youtu.be/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`『⚠️منع الروابط⚠️』」\`\`\`\n\nالادمن ارسل رابط وهو حر في ارسال اي روابط!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Chiku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Chiku.sendMessage(from, {text:`\`\`\`『⚠️منع الروابط⚠️』\`\`\`\n\n@${kice.split("@")[0]} تم طرده لارساله رابط يوتيوب في الجروب`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkYoutubeChannel)
           if (budy.includes("https://youtube.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`『⚠️منع الروابط⚠️』\`\`\`\n\nالادمن ارسل رابط وهو حر في ارسال اي روابط!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Chiku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Chiku.sendMessage(from, {text:`\`\`\`『⚠️منع الروابط⚠️』\`\`\`\n\n@${kice.split("@")[0]} م طرده لارساله رابط قناه يوتيوب في الجروب!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkInstagram)
           if (budy.includes("https://www.instagram.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`『⚠️منع الروابط⚠️』\`\`\`\n\nالادمن ارسل رابط وهو حر في ارسال اي روابط!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Chiku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Chiku.sendMessage(from, {text:`\`\`\`『⚠️منع الروابط⚠️』\`\`\`\n\n@${kice.split("@")[0]} تم طرده لارساله رابط انستجرام في الجروب!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkFacebook)
           if (budy.includes("https://facebook.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`『⚠️منع الروابط⚠️』\`\`\`\n\nالادمن ارسل رابط وهو حر في ارسال اي روابط!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Chiku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Chiku.sendMessage(from, {text:`\`\`\`『⚠️منع الروابط⚠️』\`\`\`\n\n@${kice.split("@")[0]} تم طرده لارساله رابط فيسبوك في الجروب!!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkTelegram)
           if (budy.includes("https://t.me/")){
        if (AntiLinkTelegram)
        if (!isBotAdmins) return
        bvl = `\`\`\`『⚠️منع الروابط⚠️』\`\`\`\n\nالادمن ارسل رابط وهو حر في ارسال اي روابط!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Chiku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Chiku.sendMessage(from, {text:`\`\`\`『⚠️منع الروابط⚠️』\`\`\`\n\n@${kice.split("@")[0]} تم طرده لارساله رابط تليجرام في الجروب!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkTiktok)
           if (budy.includes("https://www.tiktok.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`『⚠️منع الروابط⚠️』\`\`\`\n\nالادمن ارسل رابط وهو حر في ارسال اي روابط!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Chiku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Chiku.sendMessage(from, {text:`\`\`\`『⚠️منع الروابط⚠️』\`\`\`\n\n@${kice.split("@")[0]} تم طرده لارساله رابط تيك توك في الجروب!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkTwitter)
           if (budy.includes("https://twitter.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`『⚠️منع الروابط⚠️』\`\`\`\n\nالادمن ارسل رابط وهو حر في ارسال اي روابط!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Chiku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Chiku.sendMessage(from, {text:`\`\`\`『⚠️منع الروابط⚠️』\`\`\`\n\n@${kice.split("@")[0]} تم طرده لارساله رابط تويتر في الجروب!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkAll)
           if (budy.includes("https://")){
        if (!isBotAdmins) return
        bvl = `\`\`\`『⚠️منع الروابط⚠️』\`\`\`\n\nالادمن ارسل رابط وهو حر في ارسال اي روابط!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Chiku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Chiku.sendMessage(from, {text:`\`\`\`『⚠️منع الروابط⚠️』\`\`\`\n\n@${kice.split("@")[0]} تم طرده لإرسال الروابط في هذا الجروب!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        

if (m.mtype == 'viewOnceMessage') {
	if (!db.data.chats[m.chat].antionce) return
 teks = `「 *Anti ViewOnce Message* 」
${themeemoji} Name : ${m.pushName}
${themeemoji} User : @${m.sender.split("@")[0]}
${themeemoji} Clock : ${moment.tz('Africa/Egypt').format('HH:mm:ss')} 
${themeemoji} Date : ${moment.tz('Africa/Egypt').format('DD/MM/YYYY')}
${themeemoji} MessageType : ${m.mtype}`
Chiku.sendTextWithMentions(m.chat, teks, m)
await sleep(500)
m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => reply(`Maybe it's been opened by a bot`))
}


if (!Chiku.public) {
if (!m.key.fromMe) return
}


setInterval(() => {
fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)

// reset limit every 12 hours
let cron = require('node-cron')
    cron.schedule('00 12 * * *', () => {
    let user = Object.keys(global.db.users)
    let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
    for (let jid of user) global.db.users[jid].limit = limitUser
    console.log('Reseted Limit')
    }, {
    scheduled: true,
    timezone: "Africa/Egypt"
    })

    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
      kuis = true
      jawaban = tebaklagu[m.sender.split('@')[0]]
      if (budy.toLowerCase() == jawaban) {
      await Chiku.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Song 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
      delete tebaklagu[m.sender.split('@')[0]]
      } else reply('*Wrong answer!*')
      }

      if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
        kuis = true
        jawaban = tebakgambar[m.sender.split('@')[0]]
        if (budy.toLowerCase() == jawaban) {
        await Chiku.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
        delete tebakgambar[m.sender.split('@')[0]]
        } else reply('*Wrong answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = tebakkata[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await Chiku.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
          delete tebakkata[m.sender.split('@')[0]]
          } else reply('*Wrong answer!*')
          }
          
          if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = caklontong[m.sender.split('@')[0]]
          deskripsi = caklontong_desk[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await Chiku.sendButtonText(m.chat, [{ buttonId: 'guess saying', buttonText: { displayText: 'Guess The Saying' }, type: 1 }], `🎮 Guess The Saying 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant to play again? press the button below`, `${global.BotName}`, m)
          delete caklontong[m.sender.split('@')[0]]
          delete caklontong_desk[m.sender.split('@')[0]]
          } else reply('*Wrong answer!*')
          }
          
          if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = tebakkalimat[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await Chiku.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
          delete tebakkalimat[m.sender.split('@')[0]]
          } else reply('*Wrong answer!*')
          }
          
          if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = tebaklirik[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await Chiku.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
          delete tebaklirik[m.sender.split('@')[0]]
          } else reply('*Wrong answer!*')
          }
          
          if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = tebaktebakan[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await Chiku.sendButtonText(m.chat, [{ buttonId: 'riddles', buttonText: { displayText: 'Riddles' }, type: 1 }], `🎮 Riddles 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
          delete tebaktebakan[m.sender.split('@')[0]]
          } else reply('*Wrong answer!*')
          }
          
          if (('family100'+m.chat in _family100) && isCmd) {
          kuis = true
          let room = _family100['family100'+m.chat]
          let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
          let isSurender = /^((me)?give up|surr?ender|surrender)$/i.test(m.text)
          if (!isSurender) {
          let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
          if (room.terjawab[index]) return !0
          room.terjawab[index] = m.sender
          }
          let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
          let caption = `
          Answer the following questions :\n${room.soal}\n\n\nThere is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}
          ${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
          ${Array.from(room.jawaban, (jawaban, index) => {
          return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
          }).filter(v => v).join('\n')}
          ${isSurender ? '' : `Perfect Player`}`.trim()
          Chiku.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
          if (isWin || isSurender) delete _family100['family100'+m.chat]
          }
          
          
          this.suit = this.suit ? this.suit : {}
          let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
          if (roof) {
          let win = ''
          let tie = false
          if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|oke?|reject|dont want|later|no(pe)?can|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
          if (/^(reject|dont want|later|n|no(pe)?can)/i.test(m.text)) {
          Chiku.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
          delete this.suit[roof.id]
          return !0
          }
          roof.status = 'play'
          roof.asal = m.chat
          clearTimeout(roof.waktu)
          
          Chiku.sendText(m.chat, `Suit has been sent to chat
          @${roof.p.split`@`[0]} dan 
          @${roof.p2.split`@`[0]}

          Please choose a suit in the respective chat"
          Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
          if (!roof.pilih) Chiku.sendText(roof.p, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
          if (!roof.pilih2) Chiku.sendText(roof.p2, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
          roof.waktu_milih = setTimeout(() => {
          if (!roof.pilih && !roof.pilih2) Chiku.sendText(m.chat, `Both players don't want to play,\nSuit canceled`)
          else if (!roof.pilih || !roof.pilih2) {
          win = !roof.pilih ? roof.p2 : roof.p
          Chiku.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} don't choose suit, game over`, m)
          }
          delete this.suit[roof.id]
          return !0
          }, roof.timeout)
          }
          let jwb = m.sender == roof.p
          let jwb2 = m.sender == roof.p2
          let g = /scissors/i
          let b = /rock/i
          let k = /paper/i
          let reg = /^(scissors|rock|paper)/i
          if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
          roof.pilih = reg.exec(m.text.toLowerCase())[0]
          roof.text = m.text
          reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
          if (!roof.pilih2) Chiku.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
          }
          if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
          roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
          roof.text2 = m.text
          reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
          if (!roof.pilih) Chiku.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
          }
          let stage = roof.pilih
          let stage2 = roof.pilih2
          
          if (roof.pilih && roof.pilih2) {
            clearTimeout(roof.waktu_milih)
            if (b.test(stage) && g.test(stage2)) win = roof.p
            else if (b.test(stage) && k.test(stage2)) win = roof.p2
            else if (g.test(stage) && k.test(stage2)) win = roof.p
            else if (g.test(stage) && b.test(stage2)) win = roof.p2
            else if (k.test(stage) && b.test(stage2)) win = roof.p
            else if (k.test(stage) && g.test(stage2)) win = roof.p2
            else if (stage == stage2) tie = true
            Chiku.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}
            @${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
            @${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
            `.trim(), m, { mentions: [roof.p, roof.p2] })
            delete this.suit[roof.id]
            }
            }

            async function cerpen (category) {
              return new Promise((resolve, reject) => {
                  let title = category.toLowerCase().replace(/[()*]/g, "")
                  let judul = title.replace(/\s/g, "-")
                  let page = Math.floor(Math.random() * 5)
                  axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
                  .then((get) => {
                      let $ = cheerio.load(get.data)
                      let link = []
                      $('article.post').each(function (a, b) {
                          link.push($(b).find('a').attr('href'))
                      })
                      let random = link[Math.floor(Math.random() * link.length)]
                      axios.get(random)
                      .then((res) => {
                          let $$ = cheerio.load(res.data)
                          let hasil = {
                              title: $$('#content > article > h1').text(),
                              author: $$('#content > article').text().split('Short Story: ')[1].split('Category: ')[0],
                              kategori: $$('#content > article').text().split('Category: ')[1].split('\n')[0],
                              lolos: $$('#content > article').text().split('Passed moderation on: ')[1].split('\n')[0],
                              cerita: $$('#content > article > p').text()
                          }
                          resolve(hasil)
                      })
                  })
              })
          }

          if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
            await reply(`「 *Math Quiz* 」\n\n 🎉 Correct Answer 🎉\n\nWant to play again? send ${prefix}math mode`)
            delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
            }

            if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
              let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
              let { text, mentionedJid } = hash
              let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
              userJid: Chiku.user.id,
              quoted: m.quoted && m.quoted.fakeObj
              })
              messages.key.fromMe = areJidsSameUser(m.sender, Chiku.user.id)
              messages.key.id = m.key.id
              messages.pushName = m.pushName
              if (m.isGroup) messages.participant = m.sender
              let msg = {
              ...chatUpdate,
              messages: [proto.WebMessageInfo.fromObject(messages)],
              type: 'append'
              }
              Chiku.ev.emit('messages.upsert', msg)
              }
          


              const textImg = (teks) => {
                Chiku.sendMessage(m.chat, { text :teks, }, {quoted: m, thumbnail: fs.readFileSync('./Assets/pic4.jpg')}) 
                }
                
               
             
                const ftoko = {
                key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
                },
                message: {
                "productMessage": {
                "product": {
                "productImage":{
                "mimetype": "image/jpeg",
                "jpegThumbnail": BotLogo
                },
                "title": `${global.OwnerName}`, 
                "description": `${global.BotName}`, 
                "currencyCode": "USD",
                "priceAmount1000": "2000",
                "retailerId": `${global.WaterMark}`,
                "productImageCount": 1
                },
                "businessOwnerJid": `0@s.whatsapp.net`
                }
                }
                }

                const fgi = {
                  key: { 
                        fromMe: false,
                       participant: `0@s.whatsapp.net`, ...(from ? 
                  { remoteJid: "916909137213-1613049930@g.us" } : {}) 
                               },
                  message: { 
                                "videoMessage": { 
                                "title": `Chiku`,
                                "h": `Chiku`,
                                'duration': '99999', 
                                'gifPlayback': 'true', 
                                'caption': `Ayush`,
                                'jpegThumbnail': fs.readFileSync('./Assets/Chiku.mp4')
                                       }
                                      }
                                   } 

//FAKEREPLY TROLI
const ftroli = {
  key : {
  participant : '0@s.whatsapp.net'
  },
  message: {
  orderMessage: {
  itemCount : 1,
  status: 1,
  surface : 1,
  message: `${global.OwnerName}`, 
  orderTitle: `${global.BotName}`,
  thumbnail: BotLogo, //Pic
  sellerJid: '0@s.whatsapp.net'
  
  }
  }
  }
  //FAKEREPLY LOCATION
  const flokasi = {
  key : {
   participant : '0@s.whatsapp.net'
  },
  message: {
  locationMessage: {
  name: `${global.location}`,
  jpegThumbnail: BotLogo
  }
  }
  }
  //FAKEREPLY DOCUMENT
  const fdocs = {
  key : {
   participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: `${global.BotName}`, 
  jpegThumbnail: BotLogo
  }
  }
  }
  //FAKEREPLY VIDEO
  const fvideo = {
  key: { 
  fromMe: false,
  participant: `0@s.whatsapp.net`, ...(from ? 
  { remoteJid: "916909137213-1613049930@g.us" } : {}) 
  },
  message: { 
  "videoMessage": { 
  "title": `${global.BotName}`,
  "h": `${global.OwnerName}`,
  'seconds': '30', 
  'caption': `${global.WaterMark}`,
  'jpegThumbnail': BotLogo
  }
  }
  }
  //FAKEREPLY GROUPINVITE
  const fgclink = {
  "key": {
  "fromMe": false,
  "participant": "0@s.whatsapp.net",
  "remoteJid": "0@s.whatsapp.net"
  },
  "message": {
  "groupInviteMessage": {
  "groupJid": "916909137213-1616169743@g.us",
  "inviteCode": `${global.OwnerName}`,
  "groupName": `${global.BotName}`, 
  "caption":`${global.WaterMark}`, 
  'jpegThumbnail': BotLogo
  }
  }
  }
  //FAKEREPLY GIF
  const fgif = {
  key: { 
  fromMe: false,
  participant: `0@s.whatsapp.net`, ...(from ? 
  { remoteJid: "916909137213-1613049930@g.us" } : {}) 
  },
  message: { 
   "videoMessage": { 
   "title":`${global.BotName}`,
   "h": `${global.OwnerName}`,
   'seconds': "30", 
   'gifPlayback': 'true', 
   'caption': `${global.WaterMark}`,
   'jpegThumbnail': BotLogo
  }
  }
  } 
  //FAKEREPLY TEXT WITH THUMBNAIL
  const ftextt = {
  key: { 
  fromMe: false,
  participant: `0@s.whatsapp.net`, ...(from ? 
  { remoteJid: "916909137213-1613049930@g.us" } : {}) 
  },
  message: { 
  "extendedTextMessage": {
   "text":`${global.OwnerName}`,
  "title": `${global.BotName}`,
   'jpegThumbnail': BotLogo
  }
  } 
  }
  //FAKEREPLY VN
  const fvn = {
  key: { 
  fromMe: false,
  participant: `0@s.whatsapp.net`, ...(from ? 
  { remoteJid: "916909137213-1613049930@g.us" } : {}) 
  },
  message: { 
  "audioMessage": {
  "mimetype":"audio/ogg; codecs=opus",
  "seconds": "9999999999999999",
  "ptt": "true"
  }
  } 
  }
  l = 1
  monospace = '```'
  const timestampe = speed();
  const latensie = speed() - timestampe
  const levelMenu = getLevelingLevel(m.sender)
  const xpMenu = getLevelingXp(m.sender)
  const uangku = getBalance(m.sender, balance)
  const reqXp  = 200 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
  const jumlahUser = pendaftar.length
    if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
    if (!isInventory){ addInventori(m.sender) }
    if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }


    const menulist = `
    Elgazar bot ${pushname} 👋.انا العزيز  ${global.BotName}, تطويري بواسطة: ᴇʟɢᴀᴢᴀʀ🍒 للانتقال باستخدام واتساب إلى المستوى التالي.
        
       「 System Info 」
    
    Speed : ${latensie.toFixed(4)} miliseconds
    Up Time : ${runtime(process.uptime())}
    Bot Name : ${global.BotName}
    Owner Name : ${global.OwnerName}
    𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : Amazon AWS
    𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.users).length}
    
    
       「 User Info 」
    
    User Level: ${levelMenu}
    User XP : ${xpMenu} \ ${reqXp}
    User Role : ${role}
    
    
       「 User Bank 」
    
    User Balance : ${uangku}
    Iron : ${getBesi(m.sender)}
    Gold : ${getEmas(m.sender)}
    Emarald : ${getEmerald(m.sender)}
    Potion : ${getPotion(m.sender)}
    
    
    Type *-menu* or press any button below to start using *${global.BotName}*
    
    ©️ *${global.BotName}* All Rights Reserved by: *Ayush*
    `
        const qtod = m.quoted? "true":"false"
        
        

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

	//auto vn reply
for (let anju of Ayushaudio){
				if (budy === anju){
					result = fs.readFileSync(`./Assets/audio/${anju}.mp3`)
					Chiku.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
        
	
	
	

	this.game = this.game ? this.game : {}
            let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
            if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            //reply(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) { 
            if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
            reply({
            '-3': 'Game Has Ended',
            '-2': 'Invalid',
            '-1': 'Invalid Position',
            0: 'Invalid Position',
            }[ok])
            return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            if (isSurrender) {
            room.game._currentTurn = m.sender === room.game.playerX
            isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `رقم الغرفه: ${room.id}
    ${arr.slice(0, 3).join('')}
    ${arr.slice(3, 6).join('')}
    ${arr.slice(6).join('')}
    ${isWin ? `@${winner.split('@')[0]} الفائز!` : isTie ? `انتهت اللعبه` : `دور ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
    ❌: @${room.game.playerX.split('@')[0]}
    ⭕: @${room.game.playerO.split('@')[0]}
    اكتب *surrender* للاستسلام والاعتراف بالهزيمة`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
            room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) await Chiku.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await Chiku.sendText(room.o, str, m, { mentions: parseMention(str) } )
            if (isTie || isWin) {
            delete this.game[room.id]
            }
            }
	
	
	
	
	
	
	 let smallinput = budy.toLowerCase()
    if (smallinput.includes('نورت')) {
      reply (`*بنوري طبعا✨*`);
    } 
    
if (smallinput.includes('جزار') || smallinput.includes(' hui')) {
      reply (`*قلب الجزار من جوا🥺♥✨*`);
      }
      
    if( smallinput.includes('بحبك') || smallinput.includes('انا بحبك') || smallinput.includes('love you') || smallinput.includes('I love you bot')){
      reply (`*بحبك اكتر🥺✨*`);
    }
   
    if (smallinput=='bot') {
      reply (`مرحبا *${pushname}*, انا *${BotName}*, بوت واتساب مطور من الجزار*  اكتب  *${prefix}الاوامر* لظهور قائمه الاوامر الخاصه بي.`);
    }

    if (smallinput=='بوت') {
        reply (`*اسمي الجزار يروحي♥✨*`)
    }
    
    if (smallinput=='السلام عليكم') {
        reply (`*وعليكم السلام حبي تفضل❤*`)
    }
    
    if (smallinput=='ميكاسا') {
        reply (`*ميكاسا عمتكم🥺♥✨*`)
    }
    
    if (smallinput=='توغا') {
        reply (`*توغا عمتكم🥺♥✨*`)
    }
    
    if (smallinput=='كلخرا') {
        reply (`*ما اكلك طعمك زق مثل وجهك🤢*`)
    }
    
    if (smallinput=='كل خرا') {
        reply (`*ما اكلك طعمك زق مثل وجهك🤢*`)
    }
    
    if (smallinput=='تبا لك') {
        reply (`*ولك يزق😆*`)
    }

    if (smallinput=='هاي') {
        reply (`*هاي يروحي🥺♥*`)
    }
    
    if (smallinput=='ايتاشي') {
        reply (`*ايتاشي عمك🤺✨*`)
    }
    
    if (smallinput=='الجزار') {
        reply (`*الجزار عمك🤺✨*`)
    }
    
    if (smallinput=='من صنعك') {
        reply (`*الجزار مطوري 🥺✨*`)
    }
    
    if (smallinput=='زورو') {
        reply (`*زورو عمك🤺✨*`)
    }
    
    if (smallinput=='لا') {
        reply (`*ليش لا يكلب👾 *`)
    }
    
    if (smallinput=='اسكت') {
        reply (`*اما انت غتت صحيح🥺💔*`)
    }
    
if (smallinput=='احا') {
        reply (`*احتين علي احتك🥺😂✨*`)
    }
if (smallinput=='😂😂😂') {
        reply (`*دوم الضحكه الحلوه❤✨*`)
    }

    
if (smallinput=='😂😂') {
        reply (`*دوم يروحي🥺❤✨*`)
    }

    if (smallinput.includes('تصبح علي خير') || smallinput.includes('ohayo')) {
      reply (`*وانت من اهل الخير يروحي🥺❤*`);
    }

if (smallinput=='كلزق') {
        reply (`*ما اكلك يوصخ🗿👞*`)
    }
    
    if (smallinput=='كل زق') {
        reply (`*ما اكلك يوصخ🗿👞*`)
    }
    
    if (smallinput=='دز') {
        reply (`*دز انت🤺*`)
    }
    
    if (smallinput=='اتفق') {
        reply (`*اطلق من يتفق✨*`)
    }
    
    if (smallinput.includes('🙃')) {
      reply (`*اقلب وجهك يورع😂✨*`);
    }

    if (smallinput.includes('🙂🙂')|| smallinput.includes('arigatou') || smallinput.includes('thank')) {
      reply (`*ابتسم للحياه يا حياتي♥✨*`);
    }      

switch(command) {
	
    case 'sc': case 'سكريبت': case 'السورس': {
        if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    Chiku.sendMessage(from, { react: { text: "❤" , key: m.key }})
    let { data } = await axios.get('https://youtube.com/@ABDALLAH_MOHAMED');
    teks = `لا تنسي الاشتراك بقناه اليوتيوب⭐️
https://youtube.com/@ABDALLAH_MOHAMED `
    let buttons = [
    {buttonId: `${prefix}menu`, buttonText: {displayText: 'قائمه الاوامر✨'}, type: 1}
    ]
    let buttonMessage = {
    image: Thumb,
    jpegThumbnail: BotLogo ,
    caption: teks,
    footer: `${BotName }`,
    buttons: buttons,
    headerType: 4,
    /*contextInfo:{externalAdReply:{
    title:"Powered by Ayush",
    body: " ", 
    thumbnail: fs.readFileSync("Assets/pic2.jpg"),
    mediaType:1,
    mediaUrl: 'https://wallpapercave.com/wp/wp10524580.jpg',
    sourceUrl: "https://wallpapercave.com/wp/wp10524580.jpg"
    }}*/

    }
    Chiku.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break


case 'بروفايل': case 'profile': case 'ايدي':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     

     var flob = await getBuffer(picak+'User Profile')
     var bio= await Chiku.fetchStatus(m.sender)
     var bioo = bio.status
     const adn= isAdmins? "مشرف في الجروب":"مجرد عضو"
     
     try {
        
        pfp=await Chiku.profilePictureUrl(m.sender, 'image')
    
          } catch (e) {
     
      pfp ='https://telegra.ph/file/f1a719ad79f830231d984.jpg'
    }

     const profilexx = `*⋆ صورتك قمر ياروحي..🥺🖤*
ꔹ━━━━━ꔹ
*اسمك الجميل..* 
𓆩${pushname}𓆪
ꔹ━━━━━ꔹ
*البايو بتاعك..*
𓆩 ${bioo}𓆪
ꔹ━━━━━ꔹ
*رتبتك فجروب..*
𓆩${adn}𓆪
ꔹ━━━━━ꔹ
*مبرمج السورس..*
 t.me/A_M_030
ꔹ━━━━━ꔹ`
 


let buttonspro = [
    {buttonId: `${prefix}soulmate`, buttonText: {displayText: 'توأم روحك🥺✨'}, type: 1}
    ]
            let buttonMessage = {
                image: { url: pfp },
                caption: profilexx,
                footer: `${BotName}`,
                buttons: buttonspro,
                headerType: 4
            }
        Chiku.sendMessage(m.chat,buttonMessage,{quoted:m})
		
		
		
		
        	
            break

		case 'report': case 'ابلاغ': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
    if (!text) return reply(`يرجى تقديم ابلاغ عن مشكله تريد تسليمها`)
    if (text.length > 300) return reply(`هل تحاول إرسال فيروس!`)
    const txtmsg = `*📮 رساله التقرير*\n\n*المرسل ➛* wa.me/${m.sender.split("@")[0]}\n\n*اسم الجروب ➛* ${groupName}\n\n*الرساله ➛*  ${text}`
	for (let mod of global.Owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != '6297175943@s.whatsapp.net'))
	await Chiku.sendMessage(`${mod}`, {text: `${txtmsg}`},  { quoted: m })
	await Chiku.sendMessage(`120363026915700516@g.us`, {text: `${txtmsg}`, mentions: groupAdmins}, { quoted: m })
    replay(`*✅ تم تقديم ابلاغك بنجاح لدعم الجروب والمطور*\n\n*سوف تحصل على رد قريبا ♥️*`); 
 }
 break   
		
		
		
//game
		
      case'هديه': case'مرتبي': case 'مكافأه': {
	if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
	    Chiku.sendMessage(from, { react: { text: "💰" , key: m.key }})  
        let user = m.sender
	const cara = "cara"
	const daily  = await eco.daily(user, cara, 9999); //give 999 for daily, can be changed
	
	        if (daily.cd) return replay(`لقد حصلت علي راتبك اليوم💰 عد بعد  ${daily.cdL}`); //cdL is already formatted cooldown Left
	
            replay(`لقد اخذت مرتب💰${daily.amount}دولار💸اليوم`);        
}
break
		
				

  case'المحفظه':  case 'محفظه': case'محفظتي': {

        if (isBan) return reply(mess.banned)	 			

        if (isBanChat) return reply(mess.bangc)
	  Chiku.sendMessage(from, { react: { text: "💳" , key: m.key }})

	if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)

    const user = m.sender

    const cara = "cara"

    const balance = await eco.balance(user, cara); //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.

    await replay(`👛 ${pushname}'محفظه:\n\n_💰${balance.wallet}_`);

}

break

    	
	case'البنك':  case 'levee': {
	if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)	
Chiku.sendMessage(from, { react: { text: "🏦" , key: m.key }})
		
    const user = m.sender
    const cara = "cara"
    const balance = await eco.balance(user, cara); //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.
    await replay(`🏦 ${pushname}'بنك:\n\n_💰${balance.bank}/${balance.bankCapacity}_`); 
}
break
		
		
		case'القدره':  case 'ترقيه': {
			Chiku.sendMessage(from, { react: { text: "💲" , key: m.key }})
		
	//if (!isCreator) return replay(mess.botowner)
	if (!text) return replay(`💴 قدرة البنك 💳\n\n1 | 1000 دولار = 💰100\n\n2 | 10000 دولار = 💰1000\n\n3 | 100000 دولار = 💰10000\n\nمثال- ${prefix}ترقيه 1 او ${prefix}القدره 1000`)	
	if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
        const user = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
	const cara = "cara"
	let value = text.trim();
	let k = parseInt(value)
	const balance  = await eco.balance(user, cara) 
  switch (value) {
          case '1000':
          case '1':
          if (k > balance.wallet ) return replay(`عليك أن تدفع 💰100 لزيادة قدرة البنك ~ 1000 دولار`);
            const deduct1 = await eco.deduct(user, cara, 100);
            const add1 = eco.giveCapacity(user, cara, 1000); 
                await replay(`1000 💰تمت إضافة تخزين الماس في حساب ${pushname} في البنك`)
         case '10000':
          case '2':
          if (k > balance.wallet ) return replay(`عليك أن تدفع 💰1000 لزيادة قدرة البنك ~ 10000 دولار`);
            const deduct2 = await eco.deduct(user, cara, 1000);
            const add2 = eco.giveCapacity(user, cara, 10000); 
                await replay(`10000 💰تمت إضافة تخزين الماس في حساب ${pushname} في البنك`)
         case '100000':
          case '3':
          if (k > balance.wallet ) return replay(`عليك أن تدفع 💰10000 لزيادة قدرة البنك ~ 100000 دولار`);
            const deduct3 = await eco.deduct(user, cara, 10000);
            const add3 = eco.giveCapacity(user, cara, 100000); 
                await replay(`100000 💰تمت إضافة تخزين الماس في حساب ${pushname} في البنك`)
          }
            }
                break
		
		
		  
		  
	case'ايداع':  case 'pay-in': {
        if (isBan) return reply(mess.banned)
	Chiku.sendMessage(from, { react: { text: "📥" , key: m.key }})
		
        if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
		if (!text) return replay("قدم المبلغ الذي تريد إيداعه!");
		const texts = text.trim();
		const user = m.sender;
		const cara = 'cara'
        const deposit = await eco.deposit(user, cara, texts);
            if(deposit.noten) return replay('لا يمكن ايداع ما لا تملكه.'); //if user states more than whats in his wallet
             replay(`ادعت بنجاح 💰${deposit.amount} إلى البنك الذي تتعامل معه.`)
		
}
break	
		
	case 'س': {
    if (!args[0] && !m.quoted) {
      return m.reply(`اكتب شئ لتحويله ملصق !`);
    }
        
    let userPfp;
    if (m.quoted) {
      try {
        userPfp = await Chiku.profilePictureUrl(m.quoted.sender, "image");
      } catch (e) {
        userPfp = botImage3;
      }
    } else {
      try {
        userPfp = await Chiku.profilePictureUrl(m.sender, "image");
      } catch (e) {
        userPfp = botImage3;
      }
    }
      
  
    const waUserName = pushname;
    const quoteText = m.quoted ? m.quoted.body : args.join(" ");
  
    const quoteJson = {
      type: "quote",
      format: "png",
      backgroundColor: "#FFFFFF",
      width: 700,
      height: 580,
      scale: 2,
      messages: [
        {
          entities: [],
          avatar: true,
          from: {
            id: 1,
            name: waUserName,
            photo: {
              url: userPfp,
            },
          },
          text: quoteText,
          replyMessage: {},
        },
      ],
    };
  
    try {
      const quoteResponse = await axios.post("https://bot.lyo.su/quote/generate", quoteJson, {
        headers: { "Content-Type": "application/json" },
      });
  
      const buffer = Buffer.from(quoteResponse.data.result.image, "base64");
      Chiku.sendImageAsSticker(m.chat, buffer, m, {
        packname: `${global.BotName}`,
        author: waUserName,
      });
    } catch (error) {
      console.error(error);
      m.reply("Error generating quote!");
    }
    break;
  }
		  
		  
		case'سحب':  case 'withdrawal': {
      if (isBan) return reply(mess.banned)	 			
      if (isBanChat) return reply(mess.bangc)
	Chiku.sendMessage(from, { react: { text: "💸" , key: m.key }})
			
      if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
        const user = m.sender
		if (!text) return replay("قدم المبلغ الذي تريد سحبه!");
		const query = text.trim();
        const cara = 'cara'
        const withdraw = await eco.withdraw(user, cara, query);
        if(withdraw.noten) return replay('🏧 لا يوجد اموال كافيه في البنك'); //if user states more than whats in his wallet
        const add = eco.give(user, cara, query);
          replay(`🏧 تنبيه  💰${withdraw.amount} تمت إضافته في محفظتك.`)
        
}
break  
	
		  
		  
		  
		case'اسرقه':  case 'هجوم': {
		Chiku.sendMessage(from, { react: { text: "🔪" , key: m.key }})
	if (!text) return replay(`اكتب ${prefix}هجوم @يوزر`)
	const target =
			             m.quoted && m.mentionedJid.length === 0
			             ? m.quoted.sender
			             : m.mentionedJid[0] || null;    
           if (!target || target === m.sender) return replay("ماذا تحاول أن تفعل!")
           if (m.quoted?.sender && !m.mentionedJid.includes(m.quoted.sender)) m.mentionedJid.push(m.quoted.sender)
        while (m.mentionedJid.length < 2) m.mentionedJid.push(m.sender)
        const cara = "cara"
        const user1 = m.sender
        const user2 = target
	    const k = 250
	const balance1  = await eco.balance(user1, cara)
	const balance2  = await eco.balance(user2, cara)
	const typ = ['ran','rob','caught'];
    const random = typ[Math.floor(Math.random() * typ.length)];
    if (k > balance1.wallet) return replay(`☹️ لم يكن لديك ما يكفي من المال لدفع طارئ ننشغل لك`);
    if (k > balance2.wallet) return replay(`آسف ، ضحيتك فقيرة جدا 🤷🏽‍♂️ اتركه.`);
    let tpy = random
  switch (random) {
          case 'ran':
                await replay(`هربت ضحيتك ، كن أكثر رعبا المره القادمه.`)
  }
	}
                break  
		
		
		  
	case'اعطيه':  case 'تحويل': {
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc) 
	Chiku.sendMessage(from, { react: { text: "🗿" , key: m.key }})
	let value = text.trim().split(" ");
	if (value[0] === "") return replay(`اكتب ${prefix}تحويل 100 @يوزر`);
	const target =
			             m.quoted && m.mentionedJid.length === 0
			             ? m.quoted.sender
			             : m.mentionedJid[0] || null;    
           if (!target || target === m.sender) return replay("ماذا تحاول أن تفعل!")
           if (m.quoted?.sender && !m.mentionedJid.includes(m.quoted.sender)) m.mentionedJid.push(m.quoted.sender)
        while (m.mentionedJid.length < 2) m.mentionedJid.push(m.sender)
        const cara = "cara"
        const user1 = m.sender
        const user2 = target
		           const word = value[0];
		           const code = value[1];
		let d = parseInt(word)
		if (!d) return replay("تحقق من النص الخاص بك من فضلك ، أنت تستخدم الأمر بطريقة خاطئةة")
		
		const balance = await eco.balance(user1, cara); 
        let a = (balance.wallet) < parseInt(word)
        //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.	
        if(a == true) return replay("ليس لديك ما يكفي من المال للتحويل");
        
        const deduct = await eco.deduct(user1, cara, value[0]);
        const give = await eco.give(user2, cara, value[0]);
        replay(`📠 صفقة ناجحة`)

}
break  	  
	
		
		
	 case 'ثروتي': case 'الثروه': {
                    if (!isCreator) return replay(mess.botowner)
                    var user = m.sender
                    var cara = 'cara'
                    const give1 = eco.give(user, cara, 2000)
                    replay(`انت غني جدا😱`)
            }
            break
            
		
		
		case'رهان':  case 'مقامره': {
    //var response = await Miku.groupInviteCode(from)
    //var link1 = `https://chat.whatsapp.com/${response}`
    //var link2 = `https://chat.whatsapp.com/BXQaaeg7utI29OI4RbhdIhl`
    var texts = text.trim().split(" ");
    var opp = texts[1];// your value
    var value = texts[0].toLowerCase();
    var gg = parseInt(value)
    var user = m.sender //m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    const cara = 'cara'
    const balance = await eco.balance(user, cara); 
    const g = (balance.wallet) > parseInt(value)
    const k = 50
    const a = (k) > parseInt(value)
    const twice = gg*2
    const f = ["فوق", "يمين", "يسار", "اسفل", "فوق", "يسار", "اسفل", "يمين", "فوق", "اسفل", "يمين", "يسار"]
    const r = f[Math.floor(Math.random () * f.length)]
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return reply(mess.grouponly)
    //if (link1 == link2){
       if (texts[0] === "")
           return replay(
               `مثال:  ${prefix}مقامره 100 الاتجاه(يسار,يمين,فوق,اسفل)`
           );
       if (!value) return replay("*من فضلك ، حدد المبلغ الذي تقامر به!");
       if (!opp) return replay("حدد الاتجاه الذي تراهن عليه!");
       if (!gg) return replay("تحقق من النص الخاص بك من فضلك ، أنت تستخدم الأمر بطريقة خاطئة")
       if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
       if (g == false) return replay(`ليس لديك ما يكفي 💰 الماس للمقامرة مع`);
       if (a == true) return replay(`اسف ${pushname}, يمكنك المقامرة فقط بأكثر من 💰50.`);
       if ( r == opp){
          let give = await eco.give(user , cara, twice);
          replay(`*📉 لقد فزت 💰${twice}*`)
       }
       else{
          let deduct = await eco.deduct(user, cara, texts[0]);
          replay(`*📈 لقد خسرت 💰${texts[0]}*`)
        }
    //}
    //else{
        //replay(`Gambling is allowed only in Casino/Gamble Group,\n\ntype ${prefix}casino to get the group link`)
    //}
}
break
		
	//-----------------Slot----------------------
/*
case'slot': case 'spin': {
       if (isBan) return replay(mess.banned);
       if (isBanChat) return replay(mess.bangc)
       if (!m.isGroup) return replay(mess.grouponly)
       var today = new Date();
   if (today.getDay() == 6 || today.getDay() == 5 || today.getDay() == 0){
       if (text == 'help') return replay(`*1:* Use ${prefix}slot to play\n\n*2:* You must have 💰100 in your wallet\n\n*3:* If you don't have money in wallet then withdraw from your bank\n\n*4:* If you don't have money in your bank too then use economy features to gain money`)
       if (text == 'money') return replay(`*1:* Small Win --> +💰20\n\n*2:* Small Lose --> -💰20\n\n*3:* Big Win --> +💰100\n\n*4:* Big Lose --> -💰50\n\n*5:* 🎉 JackPot --> +💰1000`)
       const fruit1= ["🥥", "🍎", "🍇"]
       const fruit2 = ["🍎", "🍇", "🥥"]  
       const fruit3 = ["🍇", "🥥", "🍎"]         
       const fruit4 = ["🍇", "🍎", "🥥"]
       const lose = ['*You suck at playing this game*\n\n_--> 🍍-🥥-🍎_', '*Totally out of line*\n\n_--> 🥥-🍎-🍍_', '*Are you a newbie?*\n\n_--> 🍎-🍍-🥥_']
       const smallLose = ['*You cannot harvest coconut 🥥 in a pineapple 🍍 farm*\n\n_--> 🍍>🥥<🍍_', '*Apples and Coconut are not best Combo*\n\n_--> 🍎>🥥<🍎_', '*Coconuts and Apple are not great deal*\n\n_--> 🥥>🍎<🥥_']
       const won = ['*You harvested a basket of*\n\n_--> 🍎+🍎+🍎_', '*Impressive, You must be a specialist in plucking coconuts*\n\n_--> 🥥+🥥+🥥_', '*Amazing, you are going to be making pineapple juice for the family*\n\n_--> 🍍+🍍+🍍_']             
       const near = ['*Wow, you were so close to winning pineapples*\n\n_--> 🍎-🍍+🍍_', '*Hmmm, you were so close to winning Apples*\n\n_--> 🍎+🍎-🍍_']          
       const jack = ['*🥳 JackPot 🤑*\n\n_--> 🍇×🍇×🍇×🍇_', '*🎉 JaaackPooot!*\n\n_--> 🥥×🥥×🥥×🥥_', '*🎊 You Just hit a jackpot worth 💰1000*']
       const user = m.sender
       const cara = "cara"
       const k = 100
       const balance1  = await eco.balance(user, cara)
       
       if (k > balance1.wallet) return replay(`You are going to be spinning on your wallet, you need at least 💰100`);
       const f1 = fruit1[Math.floor(Math.random() * fruit1.length)];
       const f2 = fruit2[Math.floor(Math.random() * fruit2.length)];
       const f3 = fruit3[Math.floor(Math.random() * fruit3.length)];
       const f4 = fruit4[Math.floor(Math.random() * fruit4.length)];
       const mess1 = lose[Math.floor(Math.random() * lose.length)];
       const mess2 = won[Math.floor(Math.random() * won.length)];
       const mess3 = near[Math.floor(Math.random() * near.length)];
       const mess4 = jack[Math.floor(Math.random() * jack.length)];
       const mess5 = smallLose[Math.floor(Math.random() * smallLose.length)];
       
       if ((f1 !== f2) && f2 !== f3){
          const deduct1 = await eco.deduct(user, cara, 50);
                 replay(`${mess1}\n\n*Big Lose -->* _💰50_`)
       }
       else if ((f1 == f2) && f2 == f3){
          const give1 = await eco.give(user, cara, 100); 
                replay(`${mess2}\n*_Big Win -->* _💰100_`)
       }
       else if ((f1 == f2) && f2 !== f3){
          const give2 = await eco.give(user, cara, 20);
                replay(`${mess3}\n*Small Win -->* _💰20_`)
       }
       else if ((f1 !== f2) && f1 == f3){
          const deduct2 = await eco.deduct(user, cara, 20);
                replay(`${mess5}\n\n*Small Lose -->* _💰20_`)
       }
       else if ((f1 !== f2) && f2 == f3){
          const give4 = eco.give(user, cara, 20); 
                replay(`${mess3}\n\n*Small Win -->* _💰20_`)
       }
       else if (((f1 == f2) && f2 == f3) && f3 == f4){
          const give5 = eco.give(user, cara, 1000);
               replay(`${mess4}\n\n_🎊 JackPot --> _💰1000_`)
       }
       else { 
               replay(`Do you understand what you are doing?`)
       }
    }
    else{
           replay(`*You can only play this game during weekends*\n\n*🌿 Friday*\n*🎏 Saturday*\n*🎐 Sunday*`)
    }
}
break
*/	

case'تدوير': case 'فاكهه': {
    if (isBan) return replay(mess.banned);
    if (isBanChat) return replay(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    var today = new Date();
if (today.getDay() == 6 || today.getDay() == 5 || today.getDay() == 0){
    if (text == 'help') return replay(`*1:* استخدم ${prefix}تدوير للعب\n\n*2:* يجب أن يكون لديك 💰100 في محفظتك\n\n*3:* إذا لم يكن لديك المال في المحفظة قم بالانسحاب من البنك الذي تتعامل معه\n\n*4:* إذا لم يكن لديك المال في البنك الذي تتعامل معه أيضا قم باستخدام ميزات الاقتصاد لكسب المال`)
    if (text == 'money') return replay(`*1:* خسارة كبيرة --> +💰20\n\n*2:* خسارة صغيرة --> -💰20\n\n*3:* فوز كبير --> +💰100\n\n*4:* فوز صغير --> -💰50\n\n*5:* 🎉 الفوز بالجائزة الكبرى --> +💰1000`)
    const fruit1= ["🥥", "🍎", "🍇"]
    const fruit2 = ["🍎", "🍇", "🥥"]  
    const fruit3 = ["🍇", "🥥", "🍎"]         
    const fruit4 = ["🍇", "🥥", "🍎"]
    const lose = ['*أنت بذيء في لعب هذه اللعبة*\n\n_--> 🍍-🥥-🍎_', '*خارج الخط تماما*\n\n_--> 🥥-🍎-🍍_', '*هل أنت مبتدئ?*\n\n_--> 🍎-🍍-🥥_']
    const smallLose = ['*لا يمكنك حصاد جوز الهند🥥 في مزرعة أناناس🍍*\n\n_--> 🍍>🥥<🍍_', '*التفاح وجوز الهند ليست أفضل كومبو*\n\n_--> 🍎>🥥<🍎_', '*جوز الهند وأبل ليست صفقة كبيرة*\n\n_--> 🥥>🍎<🥥_']
    const won = ['*لقد حصدت سلة من*\n\n_--> 🍎+🍎+🍎_', '*مثير للإعجاب ، يجب أن تكون متخصصًا في نتف جوز الهند*\n\n_--> 🥥+🥥+🥥_', '*من المدهش أنك ستصنع عصير أناناس للعائلة*\n\n_--> 🍍+🍍+🍍_']             
    const near = ['*واو ، لقد كنت قريبًا جدًا من ربح الأناناس*\n\n_--> 🍎-🍍+🍍_', '*هممم ، لقد كنت قريبًا جدًا من الفوز بالتفاح*\n\n_--> 🍎+🍎-🍍_']          
    const jack = ['*🥳 الفوز بالجائزة الكبرى 🤑*\n\n_--> 🍇×🍇×🍇×🍇_', '*🎉 الفوز بالجائزه الاكبر!*\n\n_--> 🥥×🥥×🥥×🥥_', '*🎊 لقد حصلت للتو على الفوز بالجائزة الكبرى 💰1000*']
    const user = m.sender
    const cara = "cara"
    const k = 100
    const balance1  = await eco.balance(user, cara)
    
    if (k > balance1.wallet) return replay(`أنت ستدور على محفظتك ، ما تحتاجه على الأقل 💰100`);
    const f1 = fruit1[Math.floor(Math.random() * fruit1.length)];
    const f2 = fruit2[Math.floor(Math.random() * fruit2.length)];
    const f3 = fruit3[Math.floor(Math.random() * fruit3.length)];
    const f4 = fruit4[Math.floor(Math.random() * fruit4.length)];
    const mess1 = lose[Math.floor(Math.random() * lose.length)];
    const mess2 = won[Math.floor(Math.random() * won.length)];
    const mess3 = near[Math.floor(Math.random() * near.length)];
    const mess4 = jack[Math.floor(Math.random() * jack.length)];
    const mess5 = smallLose[Math.floor(Math.random() * smallLose.length)];
    
    if ((f1 !== f2) && f2 !== f3){
       const deduct1 = await eco.deduct(user, cara, 50);
              replay(`${mess1}\n\n*خساره كبيره -->* _💰50_`)
    }
    else if ((f1 == f2) && f2 == f3){
       const give1 = await eco.give(user, cara, 100); 
             replay(`${mess2}\n*_فوز كبير -->* _💰100_`)
    }
    else if ((f1 == f2) && f2 !== f3){
       const give2 = await eco.give(user, cara, 20);
             replay(`${mess3}\n*فوز صغير -->* _💰20_`)
    }
    else if ((f1 !== f2) && f1 == f3){
       const deduct2 = await eco.deduct(user, cara, 20);
             replay(`${mess5}\n\n*خسارة صغيرة -->* _💰20_`)
    }
    else if ((f1 !== f2) && f2 == f3){
       const give4 = eco.give(user, cara, 20); 
             replay(`${mess3}\n\nخسارة صغيرة-->* _💰20_`)
    }
    else if (((f1 == f2) && f2 == f3) && f3 == f4){
       const give5 = eco.give(user, cara, 1000);
            replay(`${mess4}\n\n_🎊 الفوز بالجائزة الكبرى --> _💰1000_`)
    }
    else { 
            replay(`هل تفهم ما تفعله?`)
    }
 }
 else{
        replay(`*يمكنك فقط لعب هذه اللعبة خلال عطلات نهاية الأسبوع*\n\n*🌿 الجمعه*\n*🎏 السبت*\n*🎐 الاحد*`)
 }
}
break
	
		
		
		
		
case 'اكس-او': case 'ttt': case 'اكس': {
    if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
    let TicTacToe = require("./lib/tictactoe")
    this.game = this.game ? this.game : {}
    if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replay(`انت في جوله مع شخص`)
    let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
    if (room) {
    reply('تم العثور على شريك!')
    room.o = m.chat
    room.game.playerO = m.sender
    room.state = 'PLAYING'
    let arr = room.game.render().map(v => {
    return {
    X: '❌',
    O: '⭕',
    1: '1️⃣',
    2: '2️⃣',
    3: '3️⃣',
    4: '4️⃣',
    5: '5️⃣',
    6: '6️⃣',
    7: '7️⃣',
    8: '8️⃣',
    9: '9️⃣',
    }[v]
    })
    let str = `رقم الغرفه: ${room.id}
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}
دور @${room.game.currentTurn.split('@')[0]}
اكتب *surrender* للاستسلام والاعتراف بالهزيمة`
    if (room.x !== room.o) await Chiku.sendText(room.x, str, m, { mentions: parseMention(str) } )
    await   Chiku.sendText(room.o, str, m, { mentions: parseMention(str) } )
    } else {
    room = {
    id: 'tictactoe-' + (+new Date),
    x: m.chat,
    o: '',
    game: new TicTacToe(m.sender, 'o'),
    state: 'WAITING'
    }
    if (text) room.name = text
    reply('في انتظار لاعب اخر' + (text ? ` اكتب الأمر أدناه ${prefix}${command} ${text}` : ''))
    this.game[room.id] = room
    }
    }
    break		
		
		//Hosted platfrom info
		   case 'statusbot': case 'الحاله': case 'المعلومات': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
سرعة الاستجابة ${latensi.toFixed(4)} _ثانيه_ \n ${oldd - neww} _ميلي ثانية_\n\nوقت التشغيل : ${runtime(process.uptime())}
» معلومات سيرفر الجزار 
الرام: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
_NodeJS الذاكره_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
${cpus[0] ? `_إجمالي استخدام وحدة المعالجة المركزية_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break

		
		
case 'بان': case 'bangroup':{
if (isBan) return reply(mess.banned)	 			
if (!isCreator) return replay(mess.botowner)
if (args[0] === "فتح") {
if (isBanChat) return replay('هذا الجروب محظور من استخدامي بالفعل!')
banchat.push(from)
replay('تم حظر هذا الجروب من استخدامي!')
var groupe = await Chiku.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Chiku.sendMessage(from, {text: `\`\`\`𓆩  ملاحظه  𓆪\`\`\`\n\nهذا الجروب ممنوع من استخدام البوت. لذا ، هنا لا يمكن لأحد أن يستخدمني بعد الآن!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "قفل") {
if (!isBanChat) return replay('هذا الجروب محظور فعلا من استخدامي!')
let off = banchat.indexOf(from)
banchat.splice(off, 1)
replay('تم *رفع الحظر* عن هذا الجروب من استخدامي!')
} else {
  let buttonsntnsfw = [
  { buttonId: `${prefix}بان فتح`, buttonText: { displayText: 'حظر' }, type: 1 },
  { buttonId: `${prefix}بان قفل`, buttonText: { displayText: 'الغاء' }, type: 1 }
  ]
  await Chiku.sendButtonText(m.chat, buttonsntnsfw, `اختار من الزر.\n\n *فتح / قفل*`, `${global.BotName }`, m)
  }
  }
  break
		  

case 'support': case 'الدعم':
    
    reply(`• جروب الدعم: https://chat.whatsapp.com/JzklQWsJ4XH4UQ1mAgLYON

• قناة برمجه الجزار للشروحات: https://youtube.com/@ABDALLAH_MOHAMED`)
    break

case 'التنصيب': case 'التسجيل':
    
    reply(`• مرحبا ياروحي ⤌⤈       
𓆩 *${pushname}* 𓆪
• انا بوت واتس اسمي ⤌⤈
𓆩 *${global.BotName}* 𓆪
• تم تطويري وبرمجتي •
• بواسطه عبدالله محمد •
• اذا كنت تريد صنع بوت مماثل لهذا •
يجب عليك الانظمام لهذه القناه وسماع الشروحات لتنصيب بوت وتس مثل هذا البوت
 
قناة برمجه الجزار للشروحات
https://youtube.com/@ABDALLAH_MOHAMED

لينك شاتي 
https://api.whatsapp.com/send?phone=+201098906252`)
    break

case 'nsfwmenu':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!AntiNsfw) return reply(mess.nonsfw)
        reply(` *━━〈 ⚠️ NSFW Menu ⚠️  〉━━*\n\nhentaivideo, blowjobgif, hneko, masturbation, thighs, pussy, panties, orgy, ahegao, ass, bdsm, blowjob, cuckold, ero, gasm, cum, femdom, foot, gangbang, glasses, jahy, trap, blowjobgif, spank, hneko, hwaifu, gasm`)
    break

case 'reaction': case 'react': case 'reactions': case 'r':
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
            reply(` *━━〈  ⚡ Reactions ⚡  〉━━*\n\nbonk, cry, bully, cuddle, hug, kiss, lick, pat, smug, yeet, blush, smile, wave, highfive, handhold, nom, glomp, bite, slap, kill, happy, wink, poke, dance, cringe`)
        break   
    

case 'limituser': case 'userlimit': case 'الحد':
            if (isBan) return reply(mess.banned)	 			
            if (isBanChat) return reply(mess.bangc)
            {      
               let txt = `「 *حد جميع المستخدمين* 」\n\n`
                 for (let i of _limit){
                 txt += ` *معرف المستخدم :* @${i.id.split("@")[0]}\n➸ *الحد* : ${i.limit}\n`
                 }
                reply(txt)       
              }
             break
    



case 'اغنيه': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
            if (!args.join(" ")) return reply(`مثال: ${prefix}اغنيه black over`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		Chiku.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break


case 'film': case 'movie': case 'فيلم':
if (isBan) return reply(mess.banned)
	if (isBanChat) return reply(mess.bangc)
	reply(mess.waiting)
if (!q) return reply(`الرجاء إدخال مصطلح البحث عن فيلم بالانجليزي...\nمثال: ${prefix}فيلم Spiderman`)
xfarrapi.Film(q)
    .then(data => {console.log(data)
    let krl = `*عنوان البحث:* ${q}\n\n`
			    for (let i of data) {
                krl += (`${prefix}----------------------------------------------------------------------------\n\n\n*اسم الفيلم:* ${i.judul}\n *الجوده :* ${i.quality}\n *النوع : ${i.type}*\n *نشر في :* ${i.upload}\n *الرابط :* ${i.link}\n\n\n`)
                }
               Chiku.sendMessage(from, { image: { url: data[0].thumb}, caption: krl }, { quoted: fdocs })
});
break


case 'wallpaper': case 'animewallpaper': case 'ويلبر': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args.join(" ")) return reply("اكتب اسم شخصيه انمي للبحث!")
const { AnimeWallpaper } =require("anime-wallpaper")
const wall = new AnimeWallpaper();
const pages = [1,2,3,4];
const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall .getAnimeWall4({ title: q, type: "sfw", page: pages }).catch(() => null);
        const i = Math.floor(Math.random() * wallpaper.length);
		
let buttons = [
            {buttonId: `${prefix}wallpaper ${args.join(" ")}`, buttonText: {displayText: 'الصوره التاليه⏪'}, type: 1}
        ]
        let buttonMessage = {
            image: {url:wallpaper[i].image},
            caption: `*عنوان البحث:* ${q}`,
            footer: `${BotName}`,
            buttons: buttons,
            headerType: 4
        }
        Chiku.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break


case 'ويكيديا': case 'wikiimage': {
	if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
                if (!args.join(" ")) return reply("اكتب عنوان للبحث بالانجليزي??")
		let { wikimedia } = require('./lib/scraper')
        anu = await wikimedia(args)
        hasil = anu[Math.floor(Math.random() * anu.length)]
        let buttons = [
            {buttonId: `${prefix}ويكيديا ${args.join(" ")}`, buttonText: {displayText: 'الصوره التاليه⏪'}, type: 1}
        ]
        let buttonMessage = {
            image: { url: hasil.image },
            caption: `العنوان : ${hasil.title}\nالمصدر : ${hasil.source}\nالرابط : ${hasil.image}`,
            footer: `${BotName}`,
            buttons: buttons,
            headerType: 4
        }
        Chiku.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break

case 'quotesimagexxx': case 'qoutesimagexxx': case 'quoteimage':
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
				   let cok = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesimage?apikey=${lolkey}`)
				   reply(mess.waiting)
				  Chiku.sendMessage(m.chat, { image: { url: cok }, caption: 'Here it is...' }, { quoted: m })
				  break

case 'quotesanime': case 'quoteanime': case 'animequote': case 'animequotes':{
		let { quotesAnime } = require('./lib/scraper')
        let anu = await quotesAnime()
        hasil = anu[Math.floor(Math.random() * anu.length)]
        let buttons = [
            {buttonId: `${prefix}quotesanime`, buttonText: {displayText: 'الصوره التاليه⏪'}, type: 1}
        ]
        let buttonMessage = {
            text: `_${hasil.quotes}_\n\nBy '${hasil.karakter}', ${hasil.anime}\n\n- ${hasil.up_at}`,
            footer: 'Chiku',
            buttons: buttons,
            headerType: 2
        }
        Chiku.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break


case 'animestory': { 
	if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
await fetchJson(`https://api.jikan.moe/v4/anime?q=${q}`)
.then((res) =>{
console.log(res)   
let sections = []   
  for (let i of res.data) {
  const list = {title: `${i.title}`,
  rows: [
	    {
	     title: `${i.title}\n\n`, 
	     rowId: `${prefix}animesearch ${i.mal_id}`,
	     description: `${i.synopsis}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  Chiku.sendMessage(
      from, 
      {
       text: "Anime Search",
       footer: BotName,
       title: OwnerName,
       buttonText: "Search Results",
       sections
      }, { quoted : m }
    )  
})
}
  break


  case 'grupsetting':
    case 'اعدادات':{
        if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
    Chiku.sendMessage(from, { react: { text: "⚙️" , key: m.key }})
            let sections = []
            let com = [`group open`,`antilinkgc on`,`antilinktg on`,`antilinktt on`,`antilinkytch on`,`antilinkytvid on`,`antilinkig on`,`antilinkfb on`,`antilinktwit on`,`antilinkall on`,`antiwame on`]
            let comm = [`group close`,`antilinkgc off`,`antilinktg off`,`antilinktt off`,`antilinkytch off`,`antilinkytvid off`,`antilinkig on`,`antilinkfb off`,`antilinktwit off`,`antilinkall off`,`antiwame off`]
            let listnya = [`جروب فتح/قفل`,`منع روابط الجروب فتح/قفل`,`منع روابط تليجرام فتح/قفل`,`منع روابط تيكتوك فتح/قفل`,`منع روابط قنوات يوتيوب فتح/قفل`,`منع روابط فيديوهات يوتيوب فتح/قفل`,`منع روابط انستجرام فتح/قفل`,`منع روابط فيسبوك فتح/قفل`,`منع روابط تويتر فتح/قفل`,`منع كل الروابط فتح/قفل`,`منع لينك الشات فتح/قفل`]
            let suruh = [`فتح`, `قفل`]
            let fiturname = [`الجروب`,`روابط الجروب`,`روابط تلجرام`,`روابط تيكتوك`,`روابط قنوات يوتيوب`,`روابط فيديوهات يوتيوب`,`روابط انستجرام`,`روابط فيسبوك`,`روابط تويتر`,`كل الروابط`,`لينك الشات`]
            let startnum = 0; let startnu = 0; let startn = 0;let start = 0
            let startnumm = 1
            for (let x of com) {
                const yy = {title: `${listnya[startnum++]}`,
            rows: [
               {
                title: `${suruh[0]}`,
                description: `فتح ${fiturname[startnu++]}`,
                rowId: `${prefix}${x}`
              },{
                title: `${suruh[1]}`,
                description: `قفل ${fiturname[startn++]}`,
                rowId: `${prefix}${comm[start++]}`
              }
            ]
           }
                sections.push(yy)
            }
            const sendm =  Chiku.sendMessage(
from, 
{
text: "اعدادات الجروب",
footer: BotName,
title: "اضبط إعدادات جروبك من هن...",
buttonText: "اضغط علي الزر",
sections
}, { quoted : m }
)  
}
break

/*
case 'animesearchxxx': case 'anime':{
    await fetchJson(`https://api.jikan.moe/v4/anime/${q}`)
    .then((res) => {
    let txt = `   _Anime Search Engine_ \n\n*Title:* *${res.data.title}*\n*English:* *${res.data.title_english}*\n*Japanese:* *${res.data.title_japanese}*\n*Anime Type:* *${res.data.type}*\n*Adaptation:* *${res.data.source}*\n*Total Episode:* *${res.data.episodes}*\n*Status:* *${res.data.status}*\n*Ongoing:* *${res.data.airing ? 'Yes' : 'No'}*\n*Aired:* *${res.data.aired.string}*\n*Duration:* *${res.data.duration}*\n*Rating:* *${res.data.rating}*\n*Score:* *${res.data.score}*\n*Rank:* *${res.data.rank}*\n*Main Producer:* *${res.data.producers.name}*\n*Studio:* *${res.data.studios[0].name}* `
    Chiku.sendMessage(from, { image : { url : res.data.images.jpg.image_url}, caption : txt}, {quoted :m }) 
    })
    }
    break
*/

case 'coffee': case 'قهوه': {
        if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
                let buttons = [
                        {buttonId: `${prefix}coffee`, buttonText: {displayText: 'الصوره التاليه⏪'}, type: 1}
                    ]
                    let buttonMessage = {
                        image: { url: 'https://coffee.alexflipnote.dev/random' },
                        caption: `ها هي قهوتك☕...`,
                        footer: `${BotName}`,
                        buttons: buttons,
                        headerType: 4
                    }
                    Chiku.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break

 

case 'دمج': case 'emojimix': {
	   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!q) reply(`*مثال :* ${prefix + command} 😊+🌹`)
let [emoji1, emoji2] = q.split`+`
let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of kuntuh.results) {
let encmedia = await Chiku.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break

case 'getcase':
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (m.isGroup) reply(mess.privateonly)
if (!isCreator) return reply(mess.botowner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("Core.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
replay(`${getCase(q)}`)
break


 case 'emoji': case 'ايموجي': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args.join(" ")) return reply('اين هو الايموجي?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await Chiku.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `اي خدمه يروحي..🖤🙂`}, {quoted:m})
await Chiku.sendMessage(from, {text:"رد علي الصوره واكتب .*ملصق*"}, {quoted:mese})
})
}
break

/*
case 'delete': case 'del': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.quoted) return
 let { chat, fromMe, id, isBaileys } = m.quoted
 if (!isBaileys) return replay('How can i delete messages of other person? Baka!')
 Chiku.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
 }
 break
*/

 case 'حذف': case 'مسح': case 'delete': case 'del': case 'احذف': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!m.quoted) return reply('رد علي رساله لحذفها!')
 let { chat, fromMe, id} = m.quoted

const key = {
    remoteJid: m.chat,
    fromMe: false,
    id: m.quoted.id,
    participant: m.quoted.sender
}

await Chiku.sendMessage(m.chat, { delete: key })
 }
 break



 case 'listpc': case 'المستخدمين': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
 let teks = ` 𓆩   قائمه المستخدمين   𓆪\n\nالمجموع ${anu.length} يستخدم مستخدمين البوت في الخاص.`
 for (let i of anu) {
  teks += `\n\nالاسم : @${i.id.split('@')[0]}\nالشات : ${i.unreadCount}\nاخر محادث : ${moment(i.conversationTimestamp * 1000).tz("Africa/Egypt").format("DD/MM/YYYY HH:mm:ss")}`
 }
 Chiku.sendTextWithMentions(m.chat, teks, m)
 }
 break

 case 'listgc': case 'الجروبات': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = `  𓆩   قائمة مجموعات مستخدمي البوت   𓆪\n\nالمجموع ${anu.length} مستخدمين يستخدمون البوت في المجموعات.`
 for (let i of anu) {
  let metadata = await Chiku.groupMetadata(i)
  if (metadata.owner === "undefined") {
  loldd = false
  } else {
  loldd = metadata.owner
  }
  teks += `\n\nالاسم : ${metadata.subject ? metadata.subject : "undefined"}\nالمالك : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nايدي : ${metadata.id ? metadata.id : "undefined"}\nالحاله : ${metadata.creation ? moment(metadata.creation * 1000).tz('Africa/Egypt').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nالرقم : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
 }
 Chiku.sendTextWithMentions(m.chat, teks, m)
 }
 break
		
		
		
		
case 'listonline': case 'المتصلين': case 'الصاحيين': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
if (!isCreator) return replay(mess.botowner);
	
 let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
 let online = [...Object.keys(store.presences[id]), botNumber]
 let liston = 1
 Chiku.sendText(m.chat, '  𓆩  *قفشتكم👾*  𓆪\n\n' + online.map(v => `${liston++} 🔸 @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break
		
		
			
		
		
	case "pp": case "حطهاخلفيه":
      case "setbotpp":
        {
          if (!isCreator) return replay(mess.botowner);
          if (!quoted)
            return replay(`رد علي صوره واكتب الامر ${prefix}حطهاخلفيه`);
          if (!/image/.test(mime))
          return replay(`رد علي صوره واكتب الامر ${prefix}حطهاخلفيه`);
          if (/webp/.test(mime))
          return replay(`رد علي صوره واكتب الامر ${prefix}حطهاخلفيه`);
          let media = await Chiku.downloadAndSaveMediaMessage(quoted);
          await Chiku.updateProfilePicture(botNumber, {
            url: media,
          }).catch((err) => fs.unlinkSync(media));
          replay(`*✨ ${pushname} تم تغير صوره بروفايلي يا مطوري العزيز ✨*`);
        }
         break;
		
		

		
		
		
		
		case 'status': case 'post': {
        if (!isCreator) return replay(mess.owner)
        if (!quoted) return replay(`Send/Reply Image With Caption ${prefix}status`)
        if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 30) return reply('Maximum 30 seconds video is allowed!')
        }
        const messageType = Object.keys (m.message)[0]
        if (messageType === 'imageMessage') {
            const media = await downloadMediaMessage(m,'media',{ },{ logger,reuploadRequest: sock.updateMediaMessage})
            await writeFile('./image.jpeg', media)
            await Chiku.sendMessage(botNumber, 'status@broadcast',  { url: './image.jpeg', media}).catch((err) => fs.unlinkSync(media))
           replay(`*✨ ${pushname}...!! Posted On My Status ✨*`);
        }
        else if (messageType === 'videoMessage') {
            const media = await downloadMediaMessage(m,'media',{ },{ logger,reuploadRequest: sock.updateMediaMessage})
            await writeFile('./video.mp4', media)
            await Chiku.sendMessage(botNumber, 'status@broadcast',  { url: 'video.mp4', media}).catch((err) => fs.unlinkSync(media))
		replay(`*✨ ${pushname}...!! Posted On My Status ✨*`);
        }
        else {
            replay(`an error occurred`)
        }

 }
 break
		
		case 'السرعه': case 'speedcheck': {
             m.reply(`انتظر ${pushname} جاري قياس السرعه... ⚙️`)
             let cp = require('child_process')
             let { promisify } = require('util')
             let exec = promisify(cp.exec).bind(cp)
           let o
           try {
           o = await exec('python speed.py')
           } catch (e) {
           o = e
          } finally {
         let { stdout, stderr } = o
         if (stdout.trim()) m.reply(stdout)
         if (stderr.trim()) m.reply(stderr)
             }
             }
             break
		
		
		
		
 case 'afk': case 'اختفاء': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let user = global.db.users[m.sender]
 user.afkTime = + new Date
 user.afkReason = args.join(" ")
 replay(`${m.pushName} انه في وضع الاختفاء.\nالسبب : ${args.join(" ") ? args.join(" ") : ''}`)
 }
 break


 case 'fliptext': case 'عكس': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (args.length < 1) return replay(`مثال:\n${prefix}عكس ${OwnerName}`)
 quere = args.join(" ")
 flipe = quere.split('').reverse().join('')
 replay(`\`\`\`𓆩   اداه عكس النص   𓆪\`\`\`\n*النص الاصلي :*\n${quere}\n*النص المقلوب :*\n${flipe}`)
 }
 break

 case 'toletter': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!Number(args[0])) return replay(`Example:\n${prefix}toletter 956`)
 try {
 quere = args.join(" ")
 convertes = await toHur(quere)
 replay(`\`\`\`「  Word Maker Tool  」\`\`\`\n*Input Number :*\n${quere}\n*Converted Alphabet :*\n${convertes}`)
 } catch {
 replay(`Error!`)
 }
 }

   case 'المستوي': case 'leveling':
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return reply(mess.useradmin)
 if (args.length < 1) return reply('اكتب .المستوي فتح*\n*اكتب .المستوي قفل*')
 if (args[0] === 'فتح'){
 if (isLeveling) return reply(`نشط بالفعل`)
 _leveling.push(from)
 fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
 reply('تفعيل المستوي')
 } else if (args[0] === 'قفل'){
 let anu = _leveling.indexOf(from)
 _leveling.splice(anu, 1)
 fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
 reply('تم القفل بالفعل')
 } 
 break

 case 'antilinkgc': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "فتح") {
 if (AntiLink) return replay('نشط بالفعل')
 ntilink.push(from)
 replay('تم تشغيل منع روابط الجروبات.')
 var groupe = await Chiku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Chiku.sendMessage(from, {text: `\`\`\`『⚠️تحذير⚠️』\`\`\`\n\nتم تفعيل منع الروابط`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "قفل") {
 if (!AntiLink) return replay('غير نشط بالفعل!')
 let off = ntilink.indexOf(from)
 ntilink.splice(off, 1)
 replay('تم ايقاف تشغيل من روابط الجروبات!')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinkgc فتح`, buttonText: { displayText: 'فتح' }, type: 1 },
   { buttonId: `${prefix}antilinkgc قفل`, buttonText: { displayText: 'قفل' }, type: 1 }
   ]
   await Chiku.sendButtonText(m.chat, buttonsntilink, `اختار من الزر فنح / قفل`, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "فتح") {
 if (AntiLinkYoutubeVid) return replay('نشط بالفعل')
 ntilinkytvid.push(from)
 replay('تم تشغيل منع روابط فيديوهات يوتيوب !')
 var groupe = await Chiku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Chiku.sendMessage(from, {text: `\`\`\`『⚠️تحذير⚠️』\`\`\`\n\nتم تفعيل منع الروابط`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "قفل") {
 if (!AntiLinkYoutubeVid) return replay('غير نشط بالفعل')
 let off = ntilinkytvid.indexOf(from)
 ntilinkytvid.splice(off, 1)
 replay('تم ايقاف تشغيل منع روابط فيديوهات يوتيوب !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinkyoutubevideo فتح`, buttonText: { displayText: 'فتح' }, type: 1 },
   { buttonId: `${prefix}antilinkyoutubevideo قفل`, buttonText: { displayText: 'قفل' }, type: 1 }
   ]
   await Chiku.sendButtonText(m.chat, buttonsntilink, `اختار من الزر فتح / قفل`, `${global.BotName}`, m)
   }
   }
   break



     case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "فتح") {
 if (AntiLinkYoutubeChannel) return replay('نشط بالفعل')
 ntilinkytch.push(from)
 replay('تم تشغيل منع روابط قنوات يوتيوب !')
 var groupe = await Chiku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Chiku.sendMessage(from, {text: `\`\`\`『⚠️تحذير⚠️』\`\`\`\n\nتم تفعيل منع الروابط`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "قفل") {
 if (!AntiLinkYoutubeChannel) return replay('غير نشط بالفعل')
 let off = ntilinkytch.indexOf(from)
 ntilinkytch.splice(off, 1)
 replay('تم ايقاف تشغيل منع روابط قنوات يوتيوب !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinkyoutubech فتح`, buttonText: { displayText: 'فتح' }, type: 1 },
   { buttonId: `${prefix}antilinkyoutubech قفل`, buttonText: { displayText: 'قفل' }, type: 1 }
   ]
   await Chiku.sendButtonText(m.chat, buttonsntilink, `اختار من الزر فتح / قفل`, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "فتح") {
 if (AntiLinkInstagram) return replay('نشط بالفعل')
 ntilinkig.push(from)
 replay('تم تشغيل منع روابط انستجرام !')
 var groupe = await Chiku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Chiku.sendMessage(from, {text: `\`\`\`『⚠️تحذير⚠️』\`\`\`\n\nتم تفعيل منع الروابط`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "قفل") {
 if (!AntiLinkInstagram) return replay('غير نشط بالفعل')
 let off = ntilinkig.indexOf(from)
 ntilinkig.splice(off, 1)
 replay('تم ايقاف تشغيل منع روابط انستجرام !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinkinstagram فتح`, buttonText: { displayText: 'فتح' }, type: 1 },
   { buttonId: `${prefix}antilinkinstagram قفل`, buttonText: { displayText: 'قفل' }, type: 1 }
   ]
   await Chiku.sendButtonText(m.chat, buttonsntilink, `اختار من الزر فتح / قفل`, `${global.BotName}`, m)
   }
   }
   break

   case 'antilinkfacebook': case 'antilinkfb': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "فتح") {
 if (AntiLinkFacebook) return replay('نشط بالفعل')
 ntilinkfb.push(from)
 replay('تم تشغيل منع روابط فيسبوك !')
 var groupe = await Chiku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Chiku.sendMessage(from, {text: `\`\`\`『⚠️تحذير⚠️』\`\`\`\n\nتم تفعيل منع الروابط`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "قفل") {
 if (!AntiLinkFacebook) return replay('غير نشط بالفعل')
 let off = ntilinkfb.indexOf(from)
 ntilinkfb.splice(off, 1)
 replay('تم ايقاف تشغيل منع روابط فيسبوك !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinkfacebook فتح`, buttonText: { displayText: 'فتح' }, type: 1 },
   { buttonId: `${prefix}antilinkfacebook قفل`, buttonText: { displayText: 'قفل' }, type: 1 }
   ]
   await Chiku.sendButtonText(m.chat, buttonsntilink, `اختار من الزر فتح / قفل `, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinktelegram': case 'antilinktg': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "فتح") {
 if (AntiLinkTelegram) return replay('نشط بالفعل')
 ntilinktg.push(from)
 replay('تم تشغيل منع روابط تليجرام !')
 var groupe = await Chiku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Chiku.sendMessage(from, {text: `\`\`\`『⚠️تحذير⚠️』\`\`\`\n\nتم تفعيل منع الروابط`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "قفل") {
 if (!AntiLinkTelegram) return replay('غير نشط بالفعل')
 let off = ntilinkig.indexOf(from)
 ntilinkig.splice(off, 1)
 replay('تم ايقاف تشغيل منع روابط تليجرام')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinktelegram فتح`, buttonText: { displayText: 'فتح' }, type: 1 },
   { buttonId: `${prefix}antilinktelegram قفل`, buttonText: { displayText: 'قفل' }, type: 1 }
   ]
   await Chiku.sendButtonText(m.chat, buttonsntilink, `اختار من الزر فتح / قفل `, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinktiktok': case 'antilinktt': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "فتح") {
 if (AntiLinkTiktok) return replay('نشط بالفعل')
 ntilinktt.push(from)
 replay('تم تشغيل منع روابط تيكتوك !')
 var groupe = await Chiku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Chiku.sendMessage(from, {text: `\`\`\`『⚠️تحذير⚠️』\`\`\`\n\nتم تفعيل منع الروابط`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "قفل") {
 if (!AntiLinkTiktok) return replay('غير نشط بالفعل')
 let off = ntilinktt.indexOf(from)
 ntilinktt.splice(off, 1)
 replay('تم ايقاف تشغيل منع روابط تيكتوك !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinktiktok فتح`, buttonText: { displayText: 'فتح' }, type: 1 },
   { buttonId: `${prefix}antilinktiktok قفل`, buttonText: { displayText: 'قفل' }, type: 1 }
   ]
   await Chiku.sendButtonText(m.chat, buttonsntilink, `اختار من الزر\n\nفتح او\nقفل`, `${global.BotName}`, m)
   }
   }
   break

   case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "فتح") {
 if (AntiLinkTwitter) return replay('نشط بالفعل')
 ntilinktwt.push(from)
 replay('تم تشغيل منع روابط تويتر !')
 var groupe = await Chiku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Chiku.sendMessage(from, {text: `\`\`\`『⚠️تحذير⚠️』\`\`\`\n\nتم تفعيل منع الروابط`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "قفل") {
 if (!AntiLinkTwitter) return replay('غير نشط بالفعل')
 let off = ntilinktwt.indexOf(from)
 ntilinktwt.splice(off, 1)
 replay('تم ايقاف تشغيل منع روابط تويتر !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinktwt فتح`, buttonText: { displayText: 'فتح' }, type: 1 },
   { buttonId: `${prefix}antilinktwt قفل`, buttonText: { displayText: 'قفل' }, type: 1 }
   ]
   await Chiku.sendButtonText(m.chat, buttonsntilink, `اختار من الزر\n\nفتح او\nقفل`, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinkall': case 'الروابط': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "فتح") {
 if (AntiLinkTwitter) return replay('نشط بالفعل')
 ntilinkall.push(from)
 replay('تم تشغيل منع جميع الروابط !')
 var groupe = await Chiku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Chiku.sendMessage(from, {text: `\`\`\`『⚠️تحذير⚠️』\`\`\`\n\nتم تفعيل منع الروابط`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "قفل") {
 if (!AntiLinkAll) return replay('غير نشط بالفعل')
 let off = ntilinkall.indexOf(from)
 ntilinkall.splice(off, 1)
 replay('تم ايقاف تشغيل منع جميع الروابط !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}الروابط فتح`, buttonText: { displayText: 'فتح' }, type: 1 },
   { buttonId: `${prefix}الروابط قفل`, buttonText: { displayText: 'قفل' }, type: 1 }
   ]
   await Chiku.sendButtonText(m.chat, buttonsntilink, `اختار من الزر\n\nفتح او\nقفل`, `${global.BotName}`, m)
   }
   }
   break


   case 'antiwame': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "فتح") {
 if (antiWame) return replay('نشط بالفعل')
 ntwame.push(from)
 replay('منع الحذف نشط !')
 var groupe = await Chiku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Chiku.sendMessage(from, {text: `\`\`\`『⚠️تحذير⚠️』\`\`\`\n\nتم تشغيل منع الحذف!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "قفل") {
 if (!antiWame) return replay('غير نشط بالفعل')
 let off = nttoxic.indexOf(from)
 ntwame.splice(off, 1)
 replay('Deactivated antiwame !')
 } else {
   let buttonsntwame = [
   { buttonId: `${prefix}antiwame فتح`, buttonText: { displayText: 'فتح' }, type: 1 },
   { buttonId: `${prefix}antiwame قفل`, buttonText: { displayText: 'قفل' }, type: 1 }
   ]
   await Chiku.sendButtonText(m.chat, buttonsntwame, `اختار من الزر\n\nفتح او\nقفل`, `${global.BotName}`, m)
   }
   }
   break


   case 'nsfw': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiNsfw) return replay('نشط بالفعل')
 ntnsfw.push(from)
 replay('Enabled NSFW Commands!')
 var groupe = await Chiku.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Chiku.sendMessage(from, {text: `\`\`\`「 Notice 」\`\`\`\n\nNSFW(not safe for work) feature has been enabled in this group, which means anyone here can accesss Adult commands!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiNsfw) return replay('غير نشط بالفعل')
 let off = ntnsfw.indexOf(from)
 ntnsfw.splice(off, 1)
 replay('Disabled NSFW Commands!')
 } else {
   let buttonsntnsfw = [
   { buttonId: `${prefix}nsfw on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}nsfw off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Chiku.sendButtonText(m.chat, buttonsntnsfw, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
   }
   }
   break


  /* case 'ban': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
if (!args[0]) return replay(`Select add or del (add to ban, del to unban), For Example: Reply *${prefix}ban add* to the user you want to ban.`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return ads('User is already banned.')
banUser.push(orgnye)
replay(`Successfully Banned the user.`)
} else if (args[0] === "del") {
if (!isBane) return ads('User is already unbanned.')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
replay(`Successfully Unbanned the user.`)
} else {
replay("Error")
}
}
break


case 'listonline': case 'listaktif': case 'here':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
 let online = [...Object.keys(store.presences[id]), botNumber]
 let liston = 1
 Chiku.sendText(m.chat, '  「 *Online Members* 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break*/

 case 'ban': case 'حظر': case 'تقييد': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
if (!args[0]) return replay(`حدد إضافة أو حذف (إضافة إلى الحظر ، حذف إلى إلغاء الحظر) ، على سبيل المثال: رد *${prefix}تقييد * للمستخدم الذي تريد حظره.`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "فتح") {
if (isBane) return ads('تم حظر المستخدم بالفعل.')
banUser.push(orgnye)
replay(`تم حظر المستخدم بنجاح`)
} else if (args[0] === "قفل") {
if (!isBane) return ads('تم بالفعل رفع الحظر عن المستخدم.')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
replay(`تم بالفعل رفع الحظر عن المستخدم.`)
} else {
replay("Error")
}
}
break


case 'happymod': case 'هابي': case 'هابي-مود': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args.join(" ")) return replay(`مثال : ${prefix + command} Kinemaster`)
 yogipw.happymod(args.join(" ")).then(async(res) => {
 teks = '```𓆩   هابي مود   𓆪```'
 for (let i of res) {
 teks += `\n\n${i.name}\n`
 teks += `${i.link}`
 }
 let buttons = [
 {buttonId: `${prefix}menu`, buttonText: {displayText: 'قائمه الاوامر✨'}, type: 1}
 ]
 let buttonMessage = {
 image: {url:res[0].icon},
 jpegThumbnail: Thumb,
 caption: teks,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4
 }
 Chiku.sendMessage(m.chat, buttonMessage, { quoted: m })
 })
 }
 break
 case 'yts': case 'ytsearch': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args.join(" ")) return replay(`Example : -yts Heat waves`)
 let yts = require("@adiwajshing/keyed-db2")
 let search = await yts(args.join(" "))
 let teks = '```「 YouTube search Engine 」```\n\n Search Term: '+text+'\n\n'
 let no = 1
 for (let i of search.all) {
 teks += `Result No : ${no++}\n\nTitle : ${i.title}\n\nViews : ${i.views}\n\nDuration : ${i.timestamp}\n\nUploaded : ${i.ago}\n\nAuthor : ${i.author.name}\n\nUrl : ${i.url}\n\n\n-----------------------------------------------------------------------------\n\n\n`
 }
 Chiku.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
 }
 break 

 case 'setname': case 'تغيرالاسم': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!text) return replay('اكتب اسم الجروب الجديد للتغير')
 await Chiku.groupUpdateSubject(m.chat, text).then((res) => replay(mess.jobdone)).catch((err) => replay(jsonformat(err)))
 }
 break

case 'block': case 'بلوك': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
     if (!isCreator) return reply(mess.botowner)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await Chiku.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
 }
 break

case 'unblock': case 'فك': case 'فك-البلوك': {
            if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
     if (!isCreator) return reply(mess.botowner)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await Chiku.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
 }
 break

 case 'setdesc': case 'تغيرالوصف': case 'تغيرالبايو': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!text) return replay('اكتب الوصف الجديد للتغير.')
 await Chiku.groupUpdateDescription(m.chat, text).then((res) => replay(mess.jobdone)).catch((err) => replay(jsonformat(err)))
 }
 break

 case 'setgrouppp': case 'تغيرالصورة': case 'تغيرالصوره': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!quoted) return replay(`رد علي الصوره اللي هتحطها واكتب الامر ${prefix + command}`)
 if (!/image/.test(mime)) return replay(`رد علي الصوره اللي هتحطها واكتب الامر ${prefix + command} لتغير صوره الجروب.`)
 if (/webp/.test(mime)) return replay(`رد علي الصوره اللي هتحطها واكتب الامر ${prefix + command} لتغير صوره الجروب.`)
 let media = await Chiku.downloadAndSaveMediaMessage(quoted)
 await Chiku.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
 replay(mess.jobdone)
 }
 break

 case 'منشن': case 'tagall': case 'تاك':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return replay(mess.useradmin) 
 Chiku.sendMessage(from, { react: { text: "💀" , key: m.key }})
 let teks = `══✪〘 *منشن للكل👥* 〙✪══
  
 *الرساله : ${args.join(" ") ? args.join(" ") : 'مفيش رساله'}*\n\n`
 for (let mem of participants) {
 teks += `🔸 @${mem.id.split('@')[0]}\n`
 }
 Chiku.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
 }
 break

 case 'hidetag': case 'وهمي': case 'مخفي': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 Chiku.sendMessage(from, { react: { text: "😑" , key: m.key }})
 Chiku.sendMessage(m.chat, { text : args.join(" ") ? args.join(" ") : '' , mentions: participants.map(a => a.id)}, { quoted: m })
 }
 break

		
		
		
		
		
		
		case'الادمن': case 'admins': case 'المشرفين': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly) 
 Chiku.sendMessage(from, { react: { text: "🗿" , key: m.key }})
 if (!text) return replay(`*اكتب اي رساله لعمل منشن علي الادمن*`)
 let teks = `*══✪〘 *منشن للمشرفين👥* 〙✪══*
  
 *الرساله : ${text}*\n\n`
 for (let mem of groupAdmins) {
 teks += `🍁 @${mem.split('@')[0]}\n`
 }
 Chiku.sendMessage(m.chat, { text: teks, mentions: groupAdmins}, { quoted: m })
 }
 break
		
		
		
		
		
		
		
		
		
		
/*
     case 'purge':{
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)

        const delay = time => new Promise(res=>setTimeout(res,time));

        let users = (await Chiku.fetchGroupMetadataFromWA(m.chat)).participants.map(u => u.jid)
        for (let user of users){

            await Chiku.groupParticipantsUpdate(m.chat, [user], 'remove')
            await delay(3000)
        }
    }
     break

*/

case 'purge':{mess
    if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
const delay = time => new Promise(res=>setTimeout(res,time));
let mentioned = participants.map(v => v.jid)
      for (let member of mentioned) {     
      Chiku.groupParticipantsUpdate(m.chat, [member], 'remove')
      }
    }

    break




    case 'nowa': case 'خمن': case 'stalk': case 'تخمين':{
        if (isBan) return reply(mess.banned)
	  Chiku.sendMessage(from, { react: { text: "📠" , key: m.key }})
        if (!args[0]) return reply(`اكتب الامر مثال: ${prefix}تخمين 201098906xxx`)
        var inputnumber = args[0]
        if (!inputnumber.includes('x')) return reply('يجب اضافه x')
        reply(`البحث عن حساب واتساب في نطاق معين...`)
        reply(`من فضلك انتظر بينما أحضر التفاصيل...`)
        function countInstances(string, word) {
        return string.split(word).length - 1;
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx;
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var nomerny = `*『 قائمة أرقام واتساب 』*\n\n`
        var nobio = `\n*البايو:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*الارقام ليس لديها ارقام في نطاق معين*\n`
        for (let i = 0; i < randomxx; i++) {
        var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        var status1 = nu[Math.floor(Math.random() * nu.length)]
        var status2 = nu[Math.floor(Math.random() * nu.length)]
        var status3 = nu[Math.floor(Math.random() * nu.length)]
        var dom4 = nu[Math.floor(Math.random() * nu.length)]
        var rndm;
        if (random_length == 1) {
        rndm = `${status1}`
        } else if (random_length == 2) {
        rndm = `${status1}${status2}`
        } else if (random_length == 3) {
        rndm = `${status1}${status2}${status3}`
        } else if (random_length == 4) {
        rndm = `${status1}${status2}${status3}${dom4}`
        }
        var anu = await Chiku.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`);
        var anuu = anu.length !== 0 ? anu : false
        try {
        try {
        var anu1 = await Chiku.fetchStatus(anu[0].jid)
        } catch {
        var anu1 = '401'
        }
        if (anu1 == '401' || anu1.status.length == 0) {
        nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
        } else {
        nomerny += `🪄 *الرقم:* wa.me/${anu[0].jid.split("@")[0]}\n🔹 *البايو :* ${anu1.status}\n🔸 *في تحديث :* ${moment(anu1.setAt).tz('Africa/Egypt').format('HH:mm:ss DD/MM/YYYY')}\n\n`
        }
        } catch {
        nowhatsapp += `${number0}${i}${number1}\n`
        }
        }
        reply(`${nomerny}${nobio}${nowhatsapp}`)
        }
        break







 case 'grouplink': case 'لينك': case 'الرابط': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 Chiku.sendMessage(from, { react: { text: "🪄" , key: m.key }})
 let response = await Chiku.groupInviteCode(m.chat)
 Chiku.sendMessage(m.chat, {text:`*اسم الجروب:* *${groupMetadata.subject}* \n\n*لينك الجروب :* \nhttps://chat.whatsapp.com/${response}l`, "contextInfo": {
 mimetype: "image/jpeg",
 text: `${global.OwnerName}`,
 "forwardingScore": 1000000000,
 isForwarded: true,
 sendEphemeral: true,
 "externalAdReply": {
 "title": `${global.BotName}`,
 "body": `${global.WaterMark}`,
 "previewType": "PHOTO",
 "thumbnailUrl": Thumb,
 "thumbnail": Thumb,
 "sourceUrl": `${global.websitex}`
 }}}, { quoted: m, detectLink: true })
 }
 break


 case 'resetlinkgc':
    case 'resetlinkgroup':
    case 'resetlinkgrup':
    case 'revoke':
    case 'resetlink':
    case 'رستر':
    case 'resetgclink':
    case 'resetgruplink': {
       if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!isBotAdmins) return replay(mess.botadmin)
    if (!isAdmins && !isCreator) return replay(mess.useradmin)
    Chiku.sendMessage(from, { react: { text: "🔄" , key: m.key }})
    Chiku.groupRevokeInvite(m.chat)
    }
    break


    case 'group': case 'جروب': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     Chiku.sendMessage(from, { react: { text: "🫡" , key: m.key }})
     if (args[0] === 'قفل'){
     await Chiku.groupSettingUpdate(m.chat, 'announcement').then((res) => replay(`تم اغلاق الجروب!`)).catch((err) => replay(jsonformat(err)))
     } else if (args[0] === 'فتح'){
     await Chiku.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replay(`تم فتح الجروب!`)).catch((err) => replay(jsonformat(err)))
     } else {
     let buttons = [
     { buttonId: '.جروب فتح', buttonText: { displayText: 'فتح' }, type: 1 },
     { buttonId: '.جروب قفل', buttonText: { displayText: 'قفل' }, type: 1 }
     ]
     let buttonMessage = {
     image: BotLogo,
     jpegThumbnail: Thumb,
     caption: `*「 ${global.BotName} 」*\n\n_أداة تغيير إعدادات المجموعة_:`,
     footer: `${BotName}`,
     buttons: buttons,
     headerType: 4
     }
     Chiku.sendMessage(m.chat, buttonMessage, { quoted: m })
     }
     }
     break

     case 'promote': case 'رفع': case 'ترقية': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
	 Chiku.sendMessage(from, { react: { text: "⬆️" , key: m.key }})
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await Chiku.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => replay(jsonformat(res))).catch((err) => replay(jsonformat(err)))
     }
     break

     case 'demote':case 'تنزيل': case 'تخفيض': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
	   Chiku.sendMessage(from, { react: { text: "⬇️" , key: m.key }})
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await Chiku.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => replay(jsonformat(res))).catch((err) => replay(jsonformat(err)))
     }
     break

     case 'kick': case 'طرد': case 'اطرد': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
	    Chiku.sendMessage(from, { react: { text: "👋" , key: m.key }})
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await Chiku.groupParticipantsUpdate(m.chat, [users], 'remove')
     }
     break


     case 'join':case 'ادخل': case 'انضم': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!isCreator) return replay(mess.botowner)
	    Chiku.sendMessage(from, { react: { text: "🫡" , key: m.key }})
     if (!args[0]) return replay(`اين الرابط?`)
     vdd = args[0]
     let vcc = vdd.split("https://chat.whatsapp.com/")[1]
     if (!vcc) return replay("الرابط خطأ!")
     if (isCreator) {
     await Chiku.groupAcceptInvite(vcc).then(async(res) => replay(jsonformat(res))).catch(_ => _)
     replay("تم الانضمام بنجاح!")
     } else {
     Chiku.query({
     tag: "iq",
     attrs: {
     type: "get",
     xmlns: "w:g2",
     to: "@g.us"
     },
     content: [{ tag: "invite", attrs: { code: vcc } }]
     }).then(async(res) => {
     sizny = res.content[0].attrs.size
     if (sizny < 20) {
     teks = `معذرة 20 أعضاء مطلوبين في مجموعة لإضافة بوت!!`
     sendOrder(m.chat, teks, "667140254502463", fs.readFileSync('./Assets/pic7.jpg'), `${global.packname}`, `${global.BotName}`, "916909137213@s.whatsapp.net", "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==", "99999999999999999999")
     } else if (sizny > 20) {
     await Chiku.groupAcceptInvite(vcc).then(async(res) => replay(jsonformat(res))).catch(_ => _)
     replay("انضم !")
     } else {
     replay("ايرور🙂")
     }
     }).catch(_ => _)
     }
     }
     break

  
     case 'volume': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
     media = await Chiku.downloadAndSaveMediaMessage(quoted, "volume")
     if (isQuotedAudio) {
     rname = getRandom('.mp3')
     exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
     fs.unlinkSync(media)
     if (err) return reply('Error!')
     jadie = fs.readFileSync(rname)
     Chiku.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
     fs.unlinkSync(rname)
     })
     } else if (isQuotedVideo) {
     rname = getRandom('.mp4')
     exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
     fs.unlinkSync(media)
     if (err) return reply('Error!')
     jadie = fs.readFileSync(rname)
     Chiku.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
     fs.unlinkSync(rname)
     })
     } else {
     reply("Please send video/audio file only!")
     }
     }
     break

     case 'tempo': {
        if (isBan) return reply(mess.banned)
        if (isBanChat) return reply(mess.bangc)
        if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
        var req = args.join(' ')
        media = await Chiku.downloadAndSaveMediaMessage(quoted, "tempo")
        if (isQuotedAudio) {
        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
        fs.unlinkSync(media)
        if (err) return reply('Error!')
        hah = fs.readFileSync(ran)
        Chiku.sendMessage(from, {audio:hah, mimetype:'audio/mp4', ptt:true}, {quoted:m})
        fs.unlinkSync(ran)
        })
        } else if (isQuotedVideo) {
        ran = getRandom('.mp4')
        exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
        fs.unlinkSync(media)
        if (err) return reply('Error!')
        hah = fs.readFileSync(ran)
        Chiku.sendMessage(from, {video:hah, mimetype:'video/mp4'}, {quoted:m})
        fs.unlinkSync(ran)
        })
        } else {
        reply("Please send video/audio file only!")
        }
        }
        break

        case 'دبه': case 'ضوضاء': case 'بطئ': case 'earrape': case 'سريع': case 'بطئ2': case 'طفل': case 'عكس': case 'روبوت': case 'slow': case 'smooth': case 'tupai':
            try {
            let set
            if (/دبه/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
            if (/ضوضاء/.test(command)) set = '-af acrusher=.1:1:64:0:log'
            if (/بطئ/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
            if (/earrape/.test(command)) set = '-af volume=12'
            if (/سريع/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
            if (/بطئ2/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
            if (/طفل/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
            if (/عكس/.test(command)) set = '-filter_complex "areverse"'
            if (/روبوت/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
            if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
            if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
            if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
            if (/audio/.test(mime)) {
            reply(mess.waiting)
            let media = await Chiku.downloadAndSaveMediaMessage(quoted)
            let ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
            fs.unlinkSync(media)
            if (err) return reply(err)
            let buff = fs.readFileSync(ran)
            Chiku.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
            fs.unlinkSync(ran)
            })
            } else reply(`رد علي الصوت اللي عاوز تغيرو واكتب _${prefix + command}_`)
            } catch (e) {
            reply(e)
            }
            break


case 'calculator': case 'cal': case 'calculate':{
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (args.length < 1) return reply(`*Example :*\n${prefix}calculator 2*5\n\n`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
reply('Error')
} else {
reply(`\`\`\`「 _Calculator Tool_ 」\`\`\`\n\n*Input :* ${qsd}\n*Calculation Result :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break

case 'public': case 'عام': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isCreator) return reply(mess.owner)
 Chiku.sendMessage(from, { react: { text: "🫡" , key: m.key }})
	
 Chiku.public = true
 reply('انا الان عام للجميع!')
 Chiku.setStatus(`حاله البوت  : عام`)
 }
 break
 
 case 'self': case 'خاص': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isCreator) return reply(mess.botowner)
   Chiku.sendMessage(from, { react: { text: "🫡" , key: m.key }})
 Chiku.public = false
 reply('انا الان خاص لمطوري فقط!')
 Chiku.setStatus(`حاله البوت : خاص`)
 }
 break


case 'لصورة': case 'لصوره': case 'toimg': {
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
Chiku.sendMessage(from, { react: { text: "📸" , key: m.key }})
if (!m.quoted) return reply('رد علي ملصق')
if (!/webp/.test(mime)) return reply(`رد علي ملصق واكتب *${prefix + command}*`)
reply(mess.waiting)
let media = await Chiku.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
Chiku.sendMessage(m.chat, { image: buffer }, { quoted: m})
fs.unlinkSync(ran)
})
}
break

case 'لفيديو': case 'tomp4': case 'makevideo': case 'tovideo': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc) 
 Chiku.sendMessage(from, { react: { text: "🎥" , key: m.key }})
 if (!m.quoted) return reply('رد علي ملصق')
 if (!/webp/.test(mime)) return reply(`رد علي ملصق متحرك واكتب *${prefix + command}*`)
 reply(mess.waiting)
 let { webp2mp4File } = require('./lib/uploader')
 let media = await Chiku.downloadAndSaveMediaMessage(quoted)
 let webpToMp4 = await webp2mp4File(media)
 await Chiku.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'اي خدمه يروحي..🖤🙂' } }, { quoted: m })
 await fs.unlinkSync(media)
 }
 break

case 'لصوتي': case 'tomp3': case 'toaudio': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`رد علي الفيديو اللي هتحولو لصوت واكتب ${prefix + command}`)
 if (!m.quoted) return reply(`رد علي الفيديو اللي هتحولو لصوت واكتب ${prefix + command}`)
 reply(mess.waiting)
 let media = await quoted.download()
 let { toAudio } = require('./lib/converter')
 let audio = await toAudio(media, 'mp4')
 Chiku.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
 }
break

case 'لملف': case 'makemp3': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 Chiku.sendMessage(from, { react: { text: "📥" , key: m.key }})
 if (/document/.test(mime)) return reply(`رد علي الفيديو اللي هتحولو لملف صوتي واكتب  ${prefix + command}`)
 if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`رد علي الفيديو اللي هتحولو لملف صوتب واكتب  ${prefix + command}`)
 if (!m.quoted) return reply(`رد علي الفيديو اللي هتحولو لملف صوتي واكتب  ${prefix + command}`)
 reply(mess.waiting)
 let media = await quoted.download()
 let { toAudio } = require('./lib/converter')
 let audio = await toAudio(media, 'mp4')
 Chiku.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `حقوق ${global.BotName} (${m.id}).mp3`}, { quoted : m })
 }
break


case 'togif': case 'لمتحرك': case 'متحركه':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
  Chiku.sendMessage(from, { react: { text: "📼" , key: m.key }})
 if (!m.quoted) return reply('رد علي صوره')
 if (!/webp/.test(mime)) return reply(`رد علي استيكر واكتب الامر *${prefix + command}*`)
 reply(mess.wait)
 let { webp2mp4File } = require('./lib/uploader')
 let media = await Chiku.downloadAndSaveMediaMessage(quoted)
 let webpToMp4 = await webp2mp4File(media)
 await Chiku.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'تم تحويله الي متحرك' }, gifPlayback: true }, { quoted: m })
 await fs.unlinkSync(media)
 }
 break


 case 'tourl': case 'تليجراف': case 'تلجراف': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
  Chiku.sendMessage(from, { react: { text: "📤" , key: m.key }})
 reply(mess.wait)
 let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
 let media = await Chiku.downloadAndSaveMediaMessage(quoted)
 if (/image/.test(mime)) {
 let anu = await TelegraPh(media)
 reply(util.format(anu))
 } else if (!/image/.test(mime)) {
 let anu = await UploadFileUgu(media)
 reply(util.format(anu))
 }
 await fs.unlinkSync(media)
 }
 break

		
		
		case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
    
    if (!q) return reply(`Example : ${prefix + command} ${global.OwnerName}`)
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
    Chiku.sendMessage(from, { react: { text: "🪄" , key: m.key }}) 
    reply(mess.waiting)	

             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
             if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
                Chiku.sendMessage(m.chat, { image: { url: anu }, caption: `Made by Chiku Bot By Ayush...  🪄` }, { quoted: m })
             }

break
		
		
		case 'pornhub':{
	if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
    Chiku.sendMessage(from, { react: { text: "🪄" , key: m.key }})
if(!q) return reply(`Example: ${prefix + command} Oh|No`)
reply(mess.waiting)	

  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anu)
Chiku.sendMessage(from,{image:{url:anu}, caption:"Here you go!"},{quoted:m})
}
break

		
		

 case 'owner': case 'المطور': case 'mod': case 'المالك':{
    Chiku.sendContact(m.chat, global.Owner, m)
    }
    break

case 'translate': case 'ts': case 'trans': {
    if (isBan) return reply(mess.banned)
    if (!args.join(" ")) return replay("Pls enter any text to translate")
    tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
    Infoo = tes.info
    Detek = tes.translate
    replay(`Input : ${Detek}\nTranslation Results : ${Infoo}`)
    }
    break


case 'gimage': case 'صورة': case 'صوره':{
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply("Enter a search term to get Google Image!")
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `${prefix}صوره ${args.join(" ")}`, buttonText: {displayText: 'الصوره التاليه⏪'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `『 بحث جوجل 』

_عنوان البحث_ : ${text}
_الرابط_ : ${images}`,
footer: `${global.BotName}`,
buttons: buttons,
headerType: 4,

}
Chiku.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break


case 'جوجل': case 'google': case 'بحث': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 Chiku.sendMessage(from, { react: { text: "🔍" , key: m.key }})
 if (!args[0]) return reply(`مثال: ${prefix + command} وعنوان البحث`)
 let google = require('google-it')
 google({'query': args.join(" ")}).then(res => {
 let teks = `『 بحث جوجل 』\n\n*عنوان البحث:* ${text}\n\n\n`
 for (let g of res) {
 teks += `*العنوان* : ${g.title}\n\n`
 teks += `*الوصف* : ${g.snippet}\n\n`
 teks += `*لينك* : ${g.link}\n\n\n        -----------------------------------------------------------------------------\n\n`
 } 
 reply(teks)
 })
 }
 break

 case 'igdl': case 'instagram': case 'instagramreels': case 'igreels': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 Chiku.sendMessage(from, { react: { text: "🪄" , key: m.key }})
 if (!args[0]) return reply(`Example :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
 try {
 hx.igdl(args[0]).then(async(resed) => {
 ini_anu = []
 anu_list = []
 textbv = `「 _Instagram Downloader_ 」\n\nUsername : ${resed.user.username ? resed.user.name : "undefined"}\nFollowers : ${resed.user.followers}`
 urut = 1
 for (let i = 0; i < resed.medias.length; i++) {
 ini_anu.push({
  "type": resed.medias[i].fileType,
  "url": resed.medias[i].url
 })
 }
 ilod = 1
 for (let i of ini_anu) {
 anu_list.push({buttonId: `${prefix}ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
 }
 textbv += `\n\n_Select the media below to download_`
 let buttons = anu_list
 let buttonMessage = {
 image:BotLogo,
 jpegThumbnail:Thumb,
 caption: textbv,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4
 }
 Chiku.sendMessage(from, buttonMessage, {quoted:m})
 })
 } catch (err) {
 reply("An Error Occured!")
 }
 }
 break

 case 'ig': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (args[0] === "mp4") {
Chiku.sendMessage(from, {video:{url:args[1]}, caption:'Here it is...', mimetype:'video/mp4'}, {quoted:m})
} else if (args[0] === "jpg") {
Chiku.sendMessage(from, {image:{url:args[1]}, caption:'Here it is...'}, {quoted:m})
} else {
reply("Error! ")
}
}
break

case 'mp4' : {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply(`Pls provide link!`)
try {
Chiku.sendMessage(from, {video:{url:args[0]}, caption:"Succes!", contextInfo:{externalAdReply:{
title:`${global.BotName}`,
body:`${global.OwnerName}`,
thumbnail: BotLogo,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}}, {quoted:m})
} catch {
reply("Link error!")
}
}
break

case 'jpeg': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
 if (!args[0]) return reply(`Please provide link!`)
 try {
 Chiku.sendMessage(from, {image:{url:args[0]}, caption:"Success!"}, {quoted:m})
 } catch {
 reply("Link error")
 }
 }
 break

 case 'igtv': {	            
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
                 if (!text) return reply(`Please provide link!`)
                 const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
                 if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('*Invalid link!*')
                 instagramdlv3(`${text}`).then(async (data) => {            
                 var buf = await getBuffer(data[0].thumbnail)        
                 Chiku.sendMessage(m.chat, { video: { url: data[0].url }, jpegThumbnail:buf, caption: `${BotName}`}, { quoted: m })
                 }).catch((err) => {
                     reply(mess.error)
                 })
             }
             break
             
case 'twitter': case 'td': case 'twitterdl': {     
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)	             
             if (!text) return reply(`Please provide link!`)
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(`*Invalid link!*`)
                xfarrapi.Twitter(`${text}`).then(async (data) => {                    
                    let txt = `「 _Twitter Downloader_ 」\n\n`
                    txt += `*Title :* ${data.title}\n`
                    txt += `*Quality :* ${data.medias[1].quality}\n`
                    txt += `*Type :* ${data.medias[1].extension}\n`
                    txt += `*Size :* ${data.medias[1].formattedSize}\n`
                    txt += `*Duration :* ${data.medias.length}\n`
                    txt += `*URL :* ${data.url}\n\n`
                    txt += `*${BotName}*`
                buf = await getBuffer(data.thumbnail)    
                Chiku.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })
                for (let i of data.medias) {
                Chiku.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*${text}*`}, { quoted: m })
                }
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break

case 'twittermp3': case 'twitteraudio': { 
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)	             
             if (!text) return reply(`Please provide link!`)
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(`*Invalid link!*`)
                xfarrapi.Twitter(`${text}`).then(async (data) => {
                Chiku.sendMessage(m.chat, { audio: { url: data.medias[1].url }, mimetype: 'audio/mp4'}, { quoted: m })
                }).catch((err) => {
                    reply(mess.reply)
                })
            }
            break

case 'twitterxx': case 'twdlxx': case 'twmp4xx': {
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply(`Example :\n${prefix + command} https://twitter.com/cinema21/status/1517754155644821504?t=rUnbyqwh4vAE1QXMXlsVeQ&s=19`)
try {
let lotwit = await aiovideodl(args[0])
teks = `「 _Twitter Downloader_ 」
Caption : ${lotwit.title ? lotwit.title : "undefined"}
Type : ${lotwit.medias[1].extension}
Size : ${lotwit.medias[1].formattedSize}
Link : ${lotwit.medias[1].url}
_Please choose the video quality_`
let buttons = [
{buttonId: `${prefix}twitter ${lotwit.medias[0].url}`, buttonText: {displayText: `Quality ${lotwit.medias[0].quality}`}, type: 1},
{buttonId: `${prefix}twitter ${lotwit.medias[2].url}`, buttonText: {displayText: `Quality ${lotwit.medias[2].quality}`}, type: 1}
]
let buttonMessage = {
video: {url:lotwit.medias[1].url},
caption: teks,
footer: `${pushname}`,
buttons: buttons,
headerType: 4,

}
Chiku.sendMessage(from, buttonMessage, {quoted:m})
} catch {
reply("Link Error!")
}
}
break

case 'twddlxx': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let buttons = [
 {buttonId: `${prefix}menu`, buttonText: {displayText: '✨Menu✨'}, type: 1}
 ]
 let buttonMessage = {
 video: {url:args[0]},
 caption: "Here it is...",
 footer: `${pushname}`,
 buttons: buttons,
 headerType: 4,

 }
 Chiku.sendMessage(from, buttonMessage, {quoted:m})
 }
 break

 case 'fbdl': case 'fb': case 'facebook': case 'fbmp4': {     	    
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
              if (!text) return reply(`Please provide the link!\n\nExample: ${prefix}facebook https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
                 if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`Invalid link!`)
             let bocil = require('@bochilteam/scraper')  
                 bocil.facebookdlv2(`${text}`).then(async (data) => {                   
                     let txt = `「 _Facebook Downloader_ 」\n\n`
                     txt += `*Title :* ${data.title}\n`
                     txt += `*Quality :* ${data.result[0].quality}\n`
                     txt += `*Description:* ${data.description}\n`
                     txt += `*URL :* ${text}\n\n`
                 buf = await getBuffer(data.thumbnail)    
                 Chiku.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })         
                 for (let i of data.result) {     
                 Chiku.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*Quality :* ${i.quality}`}, { quoted: m })
                 }          
                 }).catch((err) => {
                     reply(mess.error)
                 })
             }
             break

case 'fbmp3': case 'facebookmp3': case 'facebookaudio': {
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
                  if (!text) return reply(`Please provide the link!\n\nExample: ${prefix + command} https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
                  if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`Invalid link!`)
  let noh = require('@bochilteam/scraper')                
  noh.savefrom(`${text}`).then(async (anu) => {  
  Chiku.sendMessage(m.chat, { audio: { url: anu.url[0].url }, mimetype: 'audio/mp4' }, { quoted: m })      
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break


case 'facebookxx': case 'fbdlxxx': case 'fbmp4xxx': case 'fbxxx': {
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply(`Example :\n${prefix + command} https://fb.watch/cAX2dep-BZ/`)
try {
let resd = await aiovideodl(args[0])
teks = `「 _Facebook Downloader_ 」
Type : video/${resd.medias[0].extension}
Quality : ${resd.medias[0].quality}
Size : ${resd.medias[0].formattedSize}
_Click the button below to download_`
let buttons = [
{buttonId: `${prefix}fbdl ${resd.medias[1].url}`, buttonText: {displayText: 'QualityHD'}, type: 1}
]
let buttonMessage = {
video: {url:resd.medias[0].url},
caption: teks,
footer: `${pushname}`,
buttons: buttons,
headerType: 4,

}
Chiku.sendMessage(from, buttonMessage, {quoted:m})
} catch {
reply("Link invalid!")
}
}
break

case 'fbddlxx': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let buttons = [
 {buttonId: `${prefix}menu`, buttonText: {displayText: '⋆ القائمه •'}, type: 1}
 ]
 let buttonMessage = {
 video: {url:args[0]},
 caption: "Done!",
 footer: `${pushname}`,
 buttons: buttons,
 headerType: 4,

 }
 Chiku.sendMessage(from, buttonMessage, {quoted:m})
 }
 break

 case 'tiktok':{
    if (isBan) return reply(mess.banned)
  if (isBanChat) return reply(mess.bangc)
if (!q) return reply('Please provide the link !')
reply(mess.wait)
if (!q.includes('tiktok')) return reply(`Invalid tiktok link!`)
 const musim_rambutan = await ChikuTiktok(`${q}`).catch(e => {
reply(mess.error) 
} )
 console.log(musim_rambutan)
 const Chikutiktokop = musim_rambutan.result.watermark
texttk = `_Please choose the button below_`
let buttons = [
{buttonId: `${prefix}ttnowm ${q}`, buttonText: {displayText: 'Watermark Free'}, type: 1},
{buttonId: `${prefix}ttaud ${q}`, buttonText: {displayText: 'Audio '}, type: 1}
]
let buttonMessage = {
video: {url:Chikutiktokop},
caption: texttk,
footer: `${BotName}`,
buttons: buttons,
headerType: 4,

}
Chiku.sendMessage(from, buttonMessage, {quoted:m})
}
break

case 'tiktoknowm': case 'ttnowm':{
    if (isBan) return reply(mess.banned)
  if (isBanChat) return reply(mess.bangc)
if (!q) return reply('Please provide the link !')
reply(mess.wait)
if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
 const musim_rambutan = await ChikuTiktok(`${q}`).catch(e => {
reply(mess.error) 
} )
 console.log(musim_rambutan)
 const Chikutiktoknowm = musim_rambutan.result.nowatermark
  Chiku.sendMessage(from, { video: { url: Chikutiktoknowm }, caption: "Here it is..." }, { quoted: m })
 }
break

case 'tiktokaudio':
case 'tiktokmusic':
case 'ttaud':{
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!q) return reply('Where is the audio?')
if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
 const musim_rambutan = await ChikuTiktok(`${q}`).catch(e => {
reply(mess.error) 
} )
 console.log(musim_rambutan)
 const Chikutiktokaudio = musim_rambutan.result.nowatermark
  Chiku.sendMessage(from, { audio: { url: Chikutiktokaudio }, mimetype: 'audio/mp4' }, { quoted: m })
 }
break
		
		
case 'تشغيل': case 'شغل': case 'play': case 'song': case 'ytplay': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 Chiku.sendMessage(from, { react: { text: "🍁" , key: m.key }}) 
 const YT=require('./lib/ytdlcore')
 const { isUrl, fetchBuffer } = require('./lib/Function')

 if(!text) return Chiku.sendMessage(from,{text:"اكتب عنوان للبحث!"},{quoted:m})
 let yts = require("@adiwajshing/keyed-db2")
 let search = await yts(text)
 let anu = search.videos[0]
 let buttons = [
 {buttonId: `${prefix}ytad ${text}`, buttonText: {displayText: '♫ صوتي'}, type: 1},
 {buttonId: `${prefix}ytvd ${text}`, buttonText: {displayText: '► فيديو'}, type: 1}

 ]
 let buttonMessage = {
 image: { url: anu.thumbnail },
 caption: `▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ⟮*◉بحث يوتيوب◉*⟯ 
   
0.02━◉━━━━━━━━━━━━3.26
      🔂   ⏪   ⏸️     ⏩  🎵

✨ *العنوان :* ${anu.title}

⏳ *المده :* ${anu.timestamp}

📈 *المشاهدات :* ${anu.views}

📍 *وقت النشر :* ${anu.ago}

🎐 *القناه :* ${anu.author.name}

🔗 *الرابط :* ${anu.url}

┃اسم البوت : 📶 𝗕𝗢𝗧 𝗘𝗟𝗚𝗔𝗭𝗔𝗥 📶 

┗━━━━━━━━━❊`,
	 
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4,

 }
 Chiku.sendMessage(m.chat, buttonMessage, { quoted: m })
 }
 break
 case 'ytad': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    const YT=require('./lib/ytdlcore')
    let yts = require("@adiwajshing/keyed-db2")
    let search = await yts(text)
    let anu = search.videos[0]
    const ytmp3play = await YT.mp3(anu.url)
    
 await Chiku.sendMessage(from, {document: fs.readFileSync(ytmp3play.path),fileName: anu.title + '.mp3',mimetype: 'audio/mpeg',}, {quoted:m})
 }
 break 
 case 'ytvd': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 const YT=require('./lib/ytdlcore')
    let yts = require("@adiwajshing/keyed-db2")
    let search = await yts(text)
    let anu = search.videos[0]
    const ytmp4play = await YT.mp4(anu.url)
 Chiku.sendMessage(from, {video:{url:ytmp4play.videoUrl}, mimetype:"video/mp4", caption:anu.title+' By *Chiku MD*',}, {quoted:m})
 }
 break
 case 'ytmp3': case 'ytmusic':  case 'ytmp4': case 'ytvideo': case 'ytdl':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args[0]) return reply(mess.nolink)

 const YT=require('./lib/ytdlcore')
 if(!text) return Chiku.sendMessage(from,{text:"Please provide a valid youtube link!"},{quoted:m})
 let yts = require("@adiwajshing/keyed-db2")
 let search = await yts(text)
 let anu = search.videos[0]
 let buttons = [
 {buttonId: `${prefix}ytad2 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1},
 {buttonId: `${prefix}ytvd2 ${text}`, buttonText: {displayText: '► Video'}, type: 1}

 ]
 let buttonMessage = {
 image: { url: anu.thumbnail },
 caption: `「  Chiku Youtube Downloader 2.0  」

✨ *Title :* ${anu.title}

⏳ *Duration :* ${anu.timestamp}
👀 *Viewers :* ${anu.views}
📍 *Uploaded :* ${anu.ago}
🎐 *Channel :* ${anu.author.name}
🔗 *Url :* ${anu.url}`,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4,

 }
 Chiku.sendMessage(m.chat, buttonMessage, { quoted: m })
 }
 break 
 case 'ytad2': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    const YT=require('./lib/ytdlcore')
    const ytmp3play2 = await YT.mp3(text)
    
 await Chiku.sendMessage(from, {document: fs.readFileSync(ytmp3play2.path),fileName:'Chiku_YTmp3_Downloader.mp3',mimetype: 'audio/mpeg',}, {quoted:m})
 }
 break

 case 'ytvd2': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 const YT=require('./lib/ytdlcore')
    const ytmp4play2 = await YT.mp4(text)
 Chiku.sendMessage(from, {video:{url:ytmp4play2.videoUrl}, mimetype:"video/mp4", caption:'Downloaded by *Chiku MD*',}, {quoted:m})
 }
 break


case 'couplepp': case 'تطقيم': case 'طقم': {
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
Chiku.sendMessage(from, { react: { text: "👩‍❤️‍👨" , key: m.key }})
	
         reply(mess.waiting)
         let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
         let random = anu[Math.floor(Math.random() * anu.length)]
         Chiku.sendMessage(m.chat, { image: { url: random.male }, caption: `ولد🙎🏻‍♂️` }, { quoted: m })
         Chiku.sendMessage(m.chat, { image: { url: random.female }, caption: `بنت️🙎🏻‍♀️` }, { quoted: m })
     }
 break



case 'pinterest': case 'pin': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
 if (!args.join(" ")) return reply("Pls providea search term!")
 try {
 hx.pinterest(args.join(" ")).then(async(res) => {
 imgnyee = res[Math.floor(Math.random() * res.length)]
 let buttons = [
 {buttonId: `${prefix}pinterest ${args.join(" ")}`, buttonText: {displayText: 'الصوره التاليه⏪'}, type: 1}
 ]
 let buttonMessage = {
 image: { url: imgnyee },
 caption:  `Title : ` + args.join(" ") + `\nMedia Url : `+imgnyee,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4,
 
 }
 Chiku.sendMessage(m.chat, buttonMessage, { quoted: m })
 }).catch(_ => _)
 } catch {
 reply("Error")
 }
 }
 break



case 'زرف': case 'take': case 'سرقة': case 'سرقه':{
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
 Chiku.sendMessage(from, { react: { text: "🫡" , key: m.key }})
	
if (!args.join(" ")) return reply(`اكتب الامر: .سرقه وحقوقك`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
Chiku.downloadAndSaveMediaMessage(quoted, "gifee")
Chiku.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Chiku.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 40) return reply('حد اقصي10ثواني!')
let media = await quoted.download()
let encmedia = await Chiku.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
reply(`رد علي صوره او فيديو واكتب ${prefix + command}\nالمده لا تزيد عن10ثواني!`)
}
}
break




case 'smeme': case 'كتابه': case 'اكتب': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
let { TelegraPh } = require('./lib/uploader')
if (!text) return reply(`رد علي صوره واكتب الامر ${prefix + command} *والنص*`)
if (text.includes('|')) return reply(`رد علي صوره واكتب الامر ${prefix + command} *والنص*`)
if (!/image/.test(mime)) return reply(`رد علي صوره واكتب الامر ${prefix + command} *والنص*`)
reply(mess.wait)
mee = await Chiku.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await Chiku.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break

case 'استيكر': case 'sticker': case 's': case 'ملصق': case 'ستيكر': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
 Chiku.sendMessage(from, { react: { text: "🎴" , key: m.key }})
 if (/image/.test(mime)) {
 let media = await quoted.download()
 let encmedia = await Chiku.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
 await fs.unlinkSync(encmedia)
 } else if (/video/.test(mime)) {
 if ((quoted.msg || quoted).seconds > 11) return reply('حد اقصي10ثواني!')
 let media = await quoted.download()
 let encmedia = await Chiku.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
 await fs.unlinkSync(encmedia)
 } else {
 reply(`ارسل صورة او فيديو وقم بالرد وكتابه الامر ${prefix + command}\nيسمح بمدة الفيديو من 1 إلى 9 ثوان`)
 }
 }
 break

case 'wiki':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (args.length < 1) return reply('What Are You Looking For?? ')
const res2 = await wikiSearch(q).catch(e => {
return reply('Error Result Not Found!') 
}) 
const result2 = `*Title :* ${res2[0].judul}\n*Wiki :* ${res2[0].wiki}`
Chiku.sendMessage(from, { image : { url : res2[0].thumb }, caption : result2}) 
break

case 'earthquake':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
const tres = await Gempa()
var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
console.log(Map)
const captt = `Time : ${Waktu}\nLatitude : ${Lintang}\nLongitude : ${Bujur}\nRegion : ${Wilayah}`
Chiku.sendMessage(from, { image : { url : Map }, caption : captt})
break

case 'covidinfo':
case 'covid':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
const c = await covid()
var { kasus, kematian, sembuh } = c[0]
Chiku.sendMessage(from, {text : `Case : ${kasus}\n\nDead : ${kematian}\n\nHealed : ${sembuh}`}, m)
break


case 'جواز': case 'زواج': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(`${mess.grouponly}`)
 Chiku.sendMessage(from, { react: { text: "🌝" , key: m.key }})
	
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `@${orang.split('@')[0]} 「 معلش زوجناكم لأنكم تصلحون لبعض 🤡 」◣ @${jodoh.split('@')[0]}
「 الي يشوفهم مناسبين لبعض زيي يضغط يب 🤡 」◣`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: '「 يب هم مناسبين لبعض😂🤡 」◣', buttonText: { displayText: '「 يب هم مناسبين لبعض😂🤡 」◣' }, type: 1 }
]
await Chiku.sendButtonText(m.chat, buttons, jawab, Chiku.user.name, m, {mentions: menst})
}
break

case 'طلاق': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(`${mess.grouponly}`)
 Chiku.sendMessage(from, { react: { text: "💔" , key: m.key }})
	
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `@${orang.split('@')[0]} 「 معلش طلقناكم لأنكم لا تصلحون لبعض 💔 」◣ @${jodoh.split('@')[0]}
「 الي يشوفهم مش مناسبين لبعض زيي يضغط يب 🤡 」◣`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: '「 يب هم مش مناسبين لبعض 💔 」◣', buttonText: { displayText: '「 يب هم مش مناسبين لبعض 💔 」◣' }, type: 1 }
]
await Chiku.sendButtonText(m.chat, buttons, jawab, Chiku.user.name, m, {mentions: menst})
}
break

case 'زوجني': case 'جوزني': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(`${mess.grouponly}`)
 Chiku.sendMessage(from, { react: { text: "🌝" , key: m.key }})
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `「 معلش زوجناكم لأنكم تصلحون لبعض 🤡 」◣
@${me.split('@')[0]} 「 الي يشوفهم مناسبين لبعض زيي يضغط يب 🤡 」◣ @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: '「 الي يشوفهم مناسبين لبعض زيي يضغط يب 🤡 」◣', buttonText: { displayText: '「 يب هم مناسبين لبعض😂🤡 」◣' }, type: 1 }
]
await Chiku.sendButtonText(m.chat, buttons, jawab, Chiku.user.name, m, {mentions: ments})
}
break

case 'طلقني': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(`${mess.grouponly}`)
 Chiku.sendMessage(from, { react: { text: "💔" , key: m.key }})
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `「 معلش طلقناكم لأنكم لا تصلحون لبعض 💔 」◣
@${me.split('@')[0]} 「 الي يشوفهم مش مناسبين لبعض زيي يضغط يب 🤡 」◣ @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: '「 الي يشوفهم مش مناسبين لبعض زيي يضغط يب 🤡 」◣', buttonText: { displayText: '「 يب هم مش مناسبين لبعض 💔 」◣' }, type: 1 }
]
await Chiku.sendButtonText(m.chat, buttons, jawab, Chiku.user.name, m, {mentions: ments})
}
break

case 'رفيق': case 'soulmate': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(`${mess.grouponly}`)
 Chiku.sendMessage(from, { react: { text: "👫" , key: m.key }})
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `👫 رفيق الروح
@${me.split('@')[0]} ❤ @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: '❤', buttonText: { displayText: 'كن رفيق الروح❤✨' }, type: 1 }
]
await Chiku.sendButtonText(m.chat, buttons, jawab, Chiku.user.name, m, {mentions: ments})
}
break

case 'فراق': case 'فارقني': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(`${mess.grouponly}`)
 Chiku.sendMessage(from, { react: { text: "💔" , key: m.key }})
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `تم فراقكم 🙂💔
@${me.split('@')[0]} 💔 @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: '💔', buttonText: { displayText: 'فارقني 💔️' }, type: 1 }
]
await Chiku.sendButtonText(m.chat, buttons, jawab, Chiku.user.name, m, {mentions: ments})
}
break

case 'الحب': case 'حب':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
	Chiku.sendMessage(from, { react: { text: "❤" , key: m.key }})
				if (!text) return replay(`منشن علي شخص, مثال : ${prefix + command} @Abdallah`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
Chiku.sendMessage(from, { text: `*${command}*\n\nالاسم : ${q}\nالاجابه : *${teng}%*` }, { quoted: m })
					break
case 'الجمال': case 'جمال':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
				if (!text) return replay(`منشن علي شخص, مثال : ${prefix + command} @Abdallah`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
Chiku.sendMessage(from, { text: `*${command}*\n\nالاسم : ${q}\nالاجابه : *${tik}%*` }, { quoted: m })
					break
					

case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'الكره':
                      case 'الكرة':
                        if (isBan) return reply(mess.banned)
                        if (isBanChat) return reply(mess.bangc)
		Chiku.sendMessage(from, { react: { text: "😺" , key: m.key }})
		
				if (!text) return replay(`منشن علي شخص, مثال : ${prefix + command} @Abdallah`)
					const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
Chiku.sendMessage(from, { text: `*${command}*\n\nالاسم : ${q}\nالاجابه : *${sange}%*` }, { quoted: m })
					break


case 'شخصيتك': case 'الشخصيه':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
	Chiku.sendMessage(from, { react: { text: "🤧" , key: m.key }})
	
					if (!text) return replay(`منشن علي شخص, مثال : ${prefix + command} @Abdallah`)
					const Chikutttt =['زفت','واطي','غبي','مطيع','غلبان','جدع','طيب','حبوب','جميل','حمار','محترم','شرموط','كلب','ورع']
					const taky = Chikutttt[Math.floor(Math.random() * Chikutttt.length)]
					Chiku.sendMessage(from, { text: `التحقق من الشخصية : ${q}\nالاجابه : *${taky}*` }, { quoted: m })
				     break
                   
 case 'dare': case 'صراحه': case 'صراحة':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
	Chiku.sendMessage(from, { react: { text: "😑" , key: m.key }})
	
                   const dare =[
         "صراحه  |  صوتك حلوة؟",
"صراحه  |  التقيت الناس مع وجوهين؟",
"صراحه  |  شيء وكنت تحقق اللسان؟",
"صراحه  |  أنا شخص ضعيف عندما؟",
"صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟",
"صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟",
"صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟",
"صراحه  |  كيفية الكشف عن من يكمن عليك؟",
"صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟",
"صراحه  |  أشجع شيء حلو في حياتك؟",
"صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة توافق؟",
"صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟",
"صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟",
"صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟",
"صراحه  |  نظرة و يفسد الصداقة؟",
"صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟",
"صراحه  |  شخص معك بالحلوه والمُره؟",
"صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟",
"صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟",
"صراحه  |  وش تتمنى الناس تعرف عليك؟",
"صراحه  |  ابيع المجرة عشان؟",
"صراحه  |  أحيانا احس ان الناس ، كمل؟",
"صراحه  |  مع مين ودك تنام اليوم؟",
"صراحه  |  صدفة العمر الحلوة هي اني؟",
"صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي تتفق؟",
"صراحه  |  صفة تحبها في نفسك؟",
"صراحه  |  ‏الفقر فقر العقول ليس الجيوب  ، تتفق؟",
"صراحه  |  تصلي صلواتك الخمس كلها؟",
"صراحه  |  ‏تجامل أحد على راحتك؟",
"صراحه  |  اشجع شيء سويتة بحياتك؟",
"صراحه  |  وش ناوي تسوي اليوم؟",
"صراحه  |  وش شعورك لما تشوف المطر؟",
"صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟",
"صراحه  |  ما اكثر شي ندمن عليه؟",
"صراحه  |  اي الدول تتمنى ان تزورها؟",
"صراحه  |  متى اخر مره بكيت؟",
"صراحه  |  تقيم حظك ؟ من عشره؟",
"صراحه  |  هل تعتقد ان حظك سيئ؟",
"صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟",
"صراحه  |  كلمة تود سماعها كل يوم؟",
"صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟",
"صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟",
"صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟",
"صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟",
"‏صراحه  | هل جرحت شخص تحبه من قبل ؟",
"صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟",
"‏صراحه  | هل تحب عائلتك ام تكرههم؟",
"‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟",
"‏صراحه  |  هل خجلت من نفسك من قبل؟",
"‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟",
"‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟",
"‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟",
"‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟",
"‏صراحه  |  ماذا تختار حبيبك أم صديقك؟",
"‏صراحه  | هل حياتك سعيدة أم حزينة؟",
"صراحه  |  ما هي أجمل سنة عشتها بحياتك؟",
"‏صراحه  |  ما هو عمرك الحقيقي؟",
"‏صراحه  |  ما اكثر شي ندمن عليه؟",
"صراحه  |  ما هي أمنياتك المُستقبلية؟‏",
"صراحه  | هل قبلت فتاه؟"
     ]
                   const Chikudareww = dare[Math.floor(Math.random() * dare.length)]
                   buffer = await getBuffer(`https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg`)
                   Chiku.sendMessage(from, { image: buffer, caption: '*♚ مرحبا بك في لعبة صراحه*\nꔹ━━━━━ꔹ\n'+ Chikudareww }, {quoted:m})
                   break
                       

case 'truth': case 'انصح': case 'نصيحه': 
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
	Chiku.sendMessage(from, { react: { text: "🗿" , key: m.key }})
		
                           const truth =[
"عامل الناس بأخلاقك ولا بأخلاقهم", 
"الجمال يلفت الأنظار لكن الطيبه تلفت القلوب ", 
"الاعتذار عن الأخطاء لا يجرح كرامتك بل يجعلك كبير في نظر الناس ",
"لا ترجي السماحه من بخيل.. فما في البار لظمان ماء",
"لا تحقرون صغيره إن الجبال من الحصي",
"لا تستحي من إعطاء فإن الحرمان أقل منه ", 
"لا تظلم حتى لا تتظلم ",
"لا تقف قصاد الريح ولا تمشي معها ",
"لا تكسب موده التحكم الا بالتعقل",
"لا تمد عينك في يد غيرك ",
"لا تملح الا لمن يستحقاها ويحافظ عليها",
"لا حياه للإنسان بلا نبات",
"لا حياه في الرزق.. ولا شفاعه في الموت",
"كما تدين تدان",
"لا دين لمن لا عهد له ",
"لا سلطان على الدوق فيما يحب أو بكره",
"لا مروه لمن لادين له ",
"لا يدخل الجنه من لايأمن من جازه بوائقه",
"يسروا ولا تعسروا... ويشورا ولا تنفروا",
"يدهم الصدر ما يبني العقل الواسع ",
"أثقل ما يوضع في الميزان يوم القيامة حسن الخلق ",
"أجهل الناس من ترك يقين ما عنده لظن ما عند الناس ",
"أحياناً.. ويصبح الوهم حقيقه ",
"مينفعش تعاتب حد مبيعملش حساب لزعلك عشان متزعلش مرتين . ",
"السفر ومشاهده اماكن مختلفه وجديده ",
"عدم تضيع الفرص واسثمارها لحظه مجبئها ",
" اعطاء الاخرين اكثر من ما يتوقعون",
"معامله الناس بلطف ولكن عدم السماح لاحد بستغالال ذالك ",
"تكوين صدقات جديده مع الحفظ بلاصدقاء القودامي ",
"تعلم اصول المهنه بدلا من تضيع الوقت ف تعلم حيل المهنه ",
"مدح ع الاقل ثلاث اشخاص يوميا ",
"النظر ف عيون الشخاص عند مخاطبتهم ",
"التحلي بلسماح مع الاخرين او النفس ",
"الاكثار من قول كلمه شكرا ",
" مصافحه الاخرين بثبات وقوة ",
"الابتعاد عن المناطق السيئه السمعه لتجنب الاحداث السئه ",
" ادخار 10٪ع الاقل من الدخل",
" تجنب المخاوف من خلال التعلم من تجارب مختلفه",
" الحفاظ ع السمعه لانها اغلي ما يملك الانسان",
" الاعداء الي اصدقاء من خلال القيام بعمل جيد",
"لا تصدق كل ما تسمعع. ولا تنفق كل ما تمتلك . ولا تنم قدر ما ترغب ",
" اعتني بسمعتك جيدا فستثبت للك الايام انها اغلي ما تملك",
"حين تقول والدتك ستندم ع فعل ذالك ستندم عليه غالبا.. ",
" لا تخش العقبات الكبيره فخلفها تقع الفرص العظيمه",
"قد لا يتطلب الامر اكثر من شخص واحد لقلب حياتك رأس ع عقب ",
"اختر رفيقه حياتك بحرص فهو قرار سيشكل 90٪من سعادتك او بؤسك ",
" اقلب اداءك الاصدقاء بفعل شي جميل ومفجائ لهم",
"حين تدق الفرصه ع باباك ادعوها للبيت ",
"تعلم القواعد جيدا ثن اكسر بعدها ",
"احكم ع نجاحك من خلال قدرتك ع العطاء وليس الاخذ ",
" لا تتجاهل الشيطان مهما بدل ثيابه",
"ركز ع جعل الاشياء افضل وليس اكبر او اعظم ",
"كن سعيد  بما تمتلك واعمل لامتلاك ما تريد ",
"اعط الناس اكثر من ما يتوقعون ",
" لا تكن منشغل لدرجه عدم التعرف ع اصدقاء جدد",
"استحمه يوم العيد يمعفن🤓",
"مش تحب اي حد يقرب منك ",
" خليك مع البت راجل خليك تقيل🥥",
" انصح نفسك بنفسك بمت😆",
" كنت نصحت نفسي ياخويا😹"
             ]
                           const Chikutruthww = truth[Math.floor(Math.random() * truth.length)]
                           buffer = await getBuffer(`https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg`)
                           Chiku.sendMessage(from, { image: buffer, caption: '*♚ اتفضل النصيحه اعمل بيها*\nꔹ━━━━━ꔹ\n'+ Chikutruthww }, {quoted:m})
                           break

case 'hfhdhr': case 'اسال': case 'اسأل': 
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
	Chiku.sendMessage(from, { react: { text: "👽" , key: m.key }})
		
                           const hfhdhr =[
"أكثر جملة أثرت بك في حياتك؟ ",
  "إيموجي يوصف مزاجك حاليًا؟ ",
  "أجمل اسم بنت بحرف الباء؟ ",
  "كيف هي أحوال قلبك؟ ",
  "أجمل مدينة؟ ",
  "كيف كان أسبوعك؟ ",
  "شيء تشوفه اكثر من اهلك ؟ ",
  "اخر مره فضفضت؟ ",
  "قد كرهت احد بسبب اسلوبه؟ ",
  "قد حبيت شخص وخذلك؟ ",
  "كم مره حبيت؟ ",
  "اكبر غلطة بعمرك؟ ",
  "نسبة النعاس عندك حاليًا؟ ",
  "شرايكم بمشاهير التيك توك؟ ",
  "ما الحاسة التي تريد إضافتها للحواس الخمسة؟ ",
  "اسم قريب لقلبك؟ ",
  "مشتاق لمطعم كنت تزوره قبل الحظر؟ ",
  "أول شيء يخطر في بالك إذا سمعت كلمة (ابوي يبيك)؟ ",
  "ما أول مشروع تتوقع أن تقوم بإنشائه إذا أصبحت مليونير؟ ",
  "أغنية عالقة في ذهنك هاليومين؟ ",
  "متى اخر مره قريت قرآن؟ ",
  "كم صلاة فاتتك اليوم؟ ",
  "تفضل التيكن او السنقل؟ ",
  "وش أفضل بوت برأيك؟ ",
"كم لك بالتلي؟ ",
"وش الي تفكر فيه الحين؟ ",
"كيف تشوف الجيل ذا؟ ",
"منشن شخص وقوله، تحبني؟ ",
"لو جاء شخص وعترف لك كيف ترده؟ ",
"مر عليك موقف محرج؟ ",
"وين تشوف نفسك بعد سنتين؟ ",
"لو فزعت/ي لصديق/ه وقالك مالك دخل وش بتسوي/ين؟ ",
"وش اجمل لهجة تشوفها؟ ",
"قد سافرت؟ ",
"افضل مسلسل عندك؟ ",
"افضل فلم عندك؟ ",
"مين اكثر يخون البنات/العيال؟ ",
"متى حبيت؟ ",
  "بالعادة متى تنام؟ ",
  "شيء من صغرك ماتغير فيك؟ ",
  "شيء بسيط قادر يعدل مزاجك بشكل سريع؟ ",
  "تشوف الغيره انانيه او حب؟ ",
"حاجة تشوف نفسك مبدع فيها؟ ",
  "مع او ضد : يسقط جمال المراة بسبب قبح لسانها؟ ",
  "عمرك بكيت على شخص مات في مسلسل ؟ ",
  "‏- هل تعتقد أن هنالك من يراقبك بشغف؟ ",
  "تدوس على قلبك او كرامتك؟ ",
  "اكثر لونين تحبهم مع بعض؟ ",
  "مع او ضد : النوم افضل حل لـ مشاكل الحياة؟ ",
  "سؤال دايم تتهرب من الاجابة عليه؟ ",
  "تحبني ولاتحب الفلوس؟ ",
  "العلاقه السريه دايماً تكون حلوه؟ ",
  "لو أغمضت عينيك الآن فما هو أول شيء ستفكر به؟ ",
"كيف ينطق الطفل اسمك؟ ",
  "ما هي نقاط الضعف في شخصيتك؟ ",
  "اكثر كذبة تقولها؟ ",
  "تيكن ولا اضبطك؟ ",
  "اطول علاقة كنت فيها مع شخص؟ ",
  "قد ندمت على شخص؟ ",
  "وقت فراغك وش تسوي؟ ",
  "عندك أصحاب كثير؟ ولا ينعد بالأصابع؟ ",
  "حاط نغمة خاصة لأي شخص؟ ",
  "وش اسم شهرتك؟ ",
  "أفضل أكلة تحبه لك؟ ",
"عندك شخص تسميه ثالث والدينك؟ ",
  "عندك شخص تسميه ثالث والدينك؟ ",
  "اذا قالو لك تسافر أي مكان تبيه وتاخذ معك شخص واحد وين بتروح ومين تختار؟ ",
  "أطول مكالمة كم ساعة؟ ",
  "تحب الحياة الإلكترونية ولا الواقعية؟ ",
  "كيف حال قلبك ؟ بخير ولا مكسور؟ ",
  "أطول مدة نمت فيها كم ساعة؟ ",
  "تقدر تسيطر على ضحكتك؟ ",
  "أول حرف من اسم الحب؟ ",
  "تحب تحافظ على الذكريات ولا تمسحه؟ ",
  "اسم اخر شخص زعلك؟ ",
"وش نوع الأفلام اللي تحب تتابعه؟ ",
  "أنت انسان غامض ولا الكل يعرف عنك؟ ",
  "لو الجنسية حسب ملامحك وش بتكون جنسيتك؟ ",
  "عندك أخوان او خوات من الرضاعة؟ ",
  "إختصار تحبه؟ ",
  "إسم شخص وتحس أنه كيف؟ ",
  "وش الإسم اللي دايم تحطه بالبرامج؟ ",
  "وش برجك؟ ",
  "لو يجي عيد ميلادك تتوقع يجيك هدية؟ ",
  "اجمل هدية جاتك وش هو؟ ",
  "الصداقة ولا الحب؟ ",
"الصداقة ولا الحب؟ ",
  "الغيرة الزائدة شك؟ ولا فرط الحب؟ ",
  "قد حبيت شخصين مع بعض؟ وانقفطت؟ ",
  "وش أخر شي ضيعته؟ ",
  "قد ضيعت شي ودورته ولقيته بيدك؟ ",
  "تؤمن بمقولة اللي يبيك مايحتار فيك؟ ",
  "سبب وجوك بالتليجرام؟ ",
  "تراقب شخص حاليا؟ ",
  "عندك معجبين ولا محد درا عنك؟ ",
  "لو نسبة جمالك بتكون بعدد شحن جوالك كم بتكون؟ ",
  "أنت محبوب بين الناس؟ ولاكريه؟ ",
"كم عمرك؟ ",
  "لو يسألونك وش اسم امك تجاوبهم ولا تسفل فيهم؟ ",
  "تؤمن بمقولة الصحبة تغنيك الحب؟ ",
  "وش مشروبك المفضل؟ ",
  "قد جربت الدخان بحياتك؟ وانقفطت ولا؟ ",
  "أفضل وقت للسفر؟ الليل ولا النهار؟ ",
  "انت من النوع اللي تنام بخط السفر؟ ",
  "عندك حس فكاهي ولا نفسية؟ ",
  "تبادل الكراهية بالكراهية؟ ولا تحرجه بالطيب؟ ",
  "أفضل ممارسة بالنسبة لك؟ ",
  "لو قالو لك تتخلى عن شي واحد تحبه بحياتك وش يكون؟ ",
"لو احد تركك وبعد فتره يحاول يرجعك بترجع له ولا خلاص؟ ",
  "برأيك كم العمر المناسب للزواج؟ ",
  "اذا تزوجت بعد كم بتخلف عيال؟ ",
  "فكرت وش تسمي أول اطفالك؟ ",
  "من الناس اللي تحب الهدوء ولا الإزعاج؟ ",
  "الشيلات ولا الأغاني؟ ",
  "عندكم شخص مطوع بالعايلة؟ ",
  "تتقبل النصيحة من اي شخص؟ ",
  "اذا غلطت وعرفت انك غلطان تحب تعترف ولا تجحد؟ ",
  "جربت شعور احد يحبك بس انت مو قادر تحبه؟ ",
  "دايم قوة الصداقة تكون بإيش؟ ",
"أفضل البدايات بالعلاقة بـ وش؟ ",
  "وش مشروبك المفضل؟ او قهوتك المفضلة؟ ",
  "تحب تتسوق عبر الانترنت ولا الواقع؟ ",
  "انت من الناس اللي بعد ماتشتري شي وتروح ترجعه؟ ",
  "أخر مرة بكيت متى؟ وليش؟ ",
  "عندك الشخص اللي يقلب الدنيا عشان زعلك؟ ",
  "أفضل صفة تحبه بنفسك؟ ",
  "كلمة تقولها للوالدين؟ ",
  "أنت من الناس اللي تنتقم وترد الاذى ولا تحتسب الأجر وتسامح؟ ",
  "كم عدد سنينك بالتليجرام؟ ",
  "تحب تعترف ولا تخبي؟ ",
"انت من الناس الكتومة ولا تفضفض؟ ",
  "أنت بعلاقة حب الحين؟ ",
  "عندك اصدقاء غير جنسك؟ ",
  "أغلب وقتك تكون وين؟ ",
  "لو المقصود يقرأ وش بتكتب له؟ ",
  "تحب تعبر بالكتابة ولا بالصوت؟ ",
  "عمرك كلمت فويس احد غير جنسك؟ ",
  "لو خيروك تصير مليونير ولا تتزوج الشخص اللي تحبه؟ ",
  "لو عندك فلوس وش السيارة اللي بتشتريها؟ ",
  "كم أعلى مبلغ جمعته؟ ",
  "اذا شفت احد على غلط تعلمه الصح ولا تخليه بكيفه؟ ",
"قد جربت تبكي فرح؟ وليش؟ ",
  "تتوقع إنك بتتزوج اللي تحبه؟ ",
  "ما هو أمنيتك؟ ",
  "وين تشوف نفسك بعد خمس سنوات؟ ",
  "لو خيروك تقدم الزمن ولا ترجعه ورا؟ ",
  "لعبة قضيت وقتك فيه بالحجر المنزلي؟ ",
  "تحب تطق الميانة ولا ثقيل؟ ",
  "باقي معاك للي وعدك ما بيتركك؟ ",
  "اول ماتصحى من النوم مين تكلمه؟ ",
  "عندك الشخص اللي يكتب لك كلام كثير وانت نايم؟ ",
  "قد قابلت شخص تحبه؟ وولد ولا بنت؟ ",
"اذا قفطت احد تحب تفضحه ولا تستره؟ ",
  "كلمة للشخص اللي يسب ويسطر؟ ",
  "آية من القران تؤمن فيه؟ ",
  "تحب تعامل الناس بنفس المعاملة؟ ولا تكون أطيب منهم؟ ",
"حاجة ودك تغيرها هالفترة؟ ",
  "كم فلوسك حاليا وهل يكفيك ام لا؟ ",
  "وش لون عيونك الجميلة؟ ",
  "من الناس اللي تتغزل بالكل ولا بالشخص اللي تحبه بس؟ ",
  "اذكر موقف ماتنساه بعمرك؟ ",
  "وش حاب تقول للاشخاص اللي بيدخل حياتك؟ ",
  "ألطف شخص مر عليك بحياتك؟ ",
"انت من الناس المؤدبة ولا نص نص؟ ",
  "كيف الصيد معاك هالأيام ؟ وسنارة ولاشبك؟ ",
  "لو الشخص اللي تحبه قال بدخل حساباتك بتعطيه ولا تكرشه؟ ",
  "أكثر شي تخاف منه بالحياه وش؟ ",
  "اكثر المتابعين عندك باي برنامج؟ ",
  "متى يوم ميلادك؟ ووش الهدية اللي نفسك فيه؟ ",
  "قد تمنيت شي وتحقق؟ ",
  "قلبي على قلبك مهما صار لمين تقولها؟ ",
  "وش نوع جوالك؟ واذا بتغيره وش بتأخذ؟ ",
  "كم حساب عندك بالتليجرام؟ ",
  "متى اخر مرة كذبت؟ ",
"كذبت في الاسئلة اللي مرت عليك قبل شوي؟ ",
  "تجامل الناس ولا اللي بقلبك على لسانك؟ ",
  "قد تمصلحت مع أحد وليش؟ ",
  "وين تعرفت على الشخص اللي حبيته؟ ",
  "قد رقمت او احد رقمك؟ ",
  "وش أفضل لعبته بحياتك؟ ",
  "أخر شي اكلته وش هو؟ ",
  "حزنك يبان بملامحك ولا صوتك؟ ",
  "لقيت الشخص اللي يفهمك واللي يقرا افكارك؟ ",
  "فيه شيء م تقدر تسيطر عليه ؟ ",
  "منشن شخص متحلطم م يعجبه شيء؟ ",
"اكتب تاريخ مستحيل تنساه ",
  "شيء مستحيل انك تاكله ؟ ",
  "تحب تتعرف على ناس جدد ولا مكتفي باللي عندك ؟ ",
  "انسان م تحب تتعامل معاه ابداً ؟ ",
  "شيء بسيط تحتفظ فيه؟ ",
  "فُرصه تتمنى لو أُتيحت لك ؟ ",
  "شيء مستحيل ترفضه ؟. ",
  "لو زعلت بقوة وش بيرضيك ؟ ",
  "تنام بـ اي مكان ، ولا بس غرفتك ؟ ",
  "ردك المعتاد اذا أحد ناداك ؟ ",
  "مين الي تحب يكون مبتسم دائما ؟ ",
" إحساسك في هاللحظة؟ ",
  "وش اسم اول شخص تعرفت عليه فالتلقرام ؟ ",
  "اشياء صعب تتقبلها بسرعه ؟ ",
  "شيء جميل صار لك اليوم ؟ ",
  "اذا شفت شخص يتنمر على شخص قدامك شتسوي؟ ",
  "يهمك ملابسك تكون ماركة ؟ ",
  "ردّك على شخص قال (أنا بطلع من حياتك)؟. ",
  "مين اول شخص تكلمه اذا طحت بـ مصيبة ؟ ",
  "تشارك كل شي لاهلك ولا فيه أشياء ما تتشارك؟ ",
  "كيف علاقتك مع اهلك؟ رسميات ولا ميانة؟ ",
  "عمرك ضحيت باشياء لاجل شخص م يسوى ؟ ",
"اكتب سطر من اغنية او قصيدة جا فـ بالك ؟ ",
  "شيء مهما حطيت فيه فلوس بتكون مبسوط ؟ ",
  "مشاكلك بسبب ؟ ",
  "نسبه الندم عندك للي وثقت فيهم ؟ ",
  "اول حرف من اسم شخص تقوله? بطل تفكر فيني ابي انام؟ ",
  "اكثر شيء تحس انه مات ف مجتمعنا؟ ",
  "لو صار سوء فهم بينك وبين شخص هل تحب توضحه ولا تخليه كذا  لان مالك خلق توضح ؟ ",
  "كم عددكم بالبيت؟ ",
  "عادي تتزوج من برا القبيلة؟ ",
  "أجمل شي بحياتك وش هو؟ ",
  "من هو الصحابي الذي عند موته اهتز عرش الرحمن؟ ",
"من هي أخر من توفى من زوجات الرسول صلى الله عليه وسلم؟ ",
"سورة ذكرت فيها البسملة مرتين، أذكر اسم السورة مع ذكر أماكنها وأرقام الآيات؟ ",
"ما هي أطول كلمة في القرآن الكريم؟ مع ذكر اسم السورة الموجودة فيها الآية، ورقم الآية؟ ",
"ما هي أطول سورة في القرآن، مع ذكر عدد آياتها؟",
"ما هي أقصر سورة في القرآن الكريم، مع ذكر عدد آياتها؟ ",
" من هي الأم التي لم تلد؟",
"ما الذي يطلق على الميته التي تقع من مكان مرتفع ؟ ",
"ما هو الحيوان الذي إذا تغير دمه أصبح طاهر؟ ",
" سماه الرسول صلى الله عليه وسلم فرعون أمته؟ ",
"من الذي عدلت شهادته شهادة الرجلين؟ ",
"ما أول ما تكلم به رسول الله صلى الله عليه وسلم حين قدم المدينة؟ ",
"ما هو اللقب الذي أطلقته أهل مكة على النبي صلى الله عليه وسلم قبل البعثة؟ ",
"من هو أكبر أعمام النبي صلى الله عليه وسلم؟ ",
"متى كانت غزوة الخندق؟",
"ما هي الأداة الذي قتل بها قابيل لأخيه هابيل؟ ",
"من هو النبي الذي سمى بالذبيح؟ ",
"كم يوم ظل إبراهيم في النار؟ ",
" ما الذي يطلق على الميته التي تقع من مكان ",
" ما هو الحيوان الذي إذا تغير دمه أصبح طاهر؟",
"من هو أول من آمن بنبوة الرسول صلى الله عليه وسلم قبل أن يبعث رسولاً؟ ",
"سورة في القرآن الكريم لم تبدأ بالبسملة، فما هي؟  ",
"من هي السيدة الملقبة بجدة العرب؟ ",
"سورتان في القرآن الكريم معروفتين باسم الزهراوان، فما هما؟ "
             ]
                           const Chikuhfhdhrww = hfhdhr[Math.floor(Math.random() * hfhdhr.length)]
                           buffer = await getBuffer(`https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg`)
                           Chiku.sendMessage(from, { image: buffer, caption: '*♚ اتفضل سوال يلا جاوب*\nꔹ━━━━━ꔹ\n'+ Chikuhfhdhrww }, {quoted:m})
                           break

case 'hdydg': case 'حروف': 
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
	Chiku.sendMessage(from, { react: { text: "📄" , key: m.key }})
		
                           const hdydg =[
" جماد بحرف ⤌ ر  ", 
" مدينة بحرف ⤌ ع  ",
" حيوان ونبات بحرف ⤌ خ  ", 
" اسم بحرف ⤌ ح  ", 
" اسم ونبات بحرف ⤌ م  ", 
" دولة عربية بحرف ⤌ ق  ", 
" جماد بحرف ⤌ ي  ", 
" نبات بحرف ⤌ ج  ", 
" اسم بنت بحرف ⤌ ع  ", 
" اسم ولد بحرف ⤌ ع  ", 
" اسم بنت وولد بحرف ⤌ ث  ", 
" جماد بحرف ⤌ ج  ",
" حيوان بحرف ⤌ ص  ",
" دولة بحرف ⤌ س  ",
" نبات بحرف ⤌ ج  ",
" مدينة بحرف ⤌ ب  ",
" نبات بحرف ⤌ ر  ",
" اسم بحرف ⤌ ك  ",
" حيوان بحرف ⤌ ظ  ",
" جماد بحرف ⤌ ذ  ",
" مدينة بحرف ⤌ و  ",
" اسم بحرف ⤌ م  ",
" اسم بنت بحرف ⤌ خ  ",
" اسم و نبات بحرف ⤌ ر  ",
" نبات بحرف ⤌ و  ",
" حيوان بحرف ⤌ س  ",
" مدينة بحرف ⤌ ك  ",
" اسم بنت بحرف ⤌ ص  ",
" اسم ولد بحرف ⤌ ق  ",
" نبات بحرف ⤌ ز  ",
"  جماد بحرف ⤌ ز  ",
"  مدينة بحرف ⤌ ط  ",
"  جماد بحرف ⤌ ن  ",
"  مدينة بحرف ⤌ ف  ",
"  حيوان بحرف ⤌ ض  ",
"  اسم بحرف ⤌ ك  ",
"  نبات و حيوان و مدينة بحرف ⤌ س  ", 
"  اسم بنت بحرف ⤌ ج  ", 
"  مدينة بحرف ⤌ ت  ", 
"  جماد بحرف ⤌ ه  ", 
"  اسم بنت بحرف ⤌ ر  ", 
" اسم ولد بحرف ⤌ خ  ", 
" جماد بحرف ⤌ ع  ",
" حيوان بحرف ⤌ ح  ",
" نبات بحرف ⤌ ف  ",
" اسم بنت بحرف ⤌ غ  ",
" اسم ولد بحرف ⤌ و  ",
" نبات بحرف ⤌ ل  ",
"مدينة بحرف ⤌ ع  ",
"دولة واسم بحرف ⤌ ب  "
             ]
                           const Chikuhdydgww = hdydg[Math.floor(Math.random() * hdydg.length)]
                           buffer = await getBuffer(`https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg`)
                           Chiku.sendMessage(from, { image: buffer, caption: '*♚ مرحبا بك في لعبة الحروف*\nꔹ━━━━━ꔹ\n'+ Chikuhdydgww }, {quoted:m})
                           break

case 'verdad2': case 'كت': 
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
	Chiku.sendMessage(from, { react: { text: "🌞" , key: m.key }})
		
                           const verdad2 =[
"『فيجيتا』","『غوكو』","『شيسوي』","『ايتاشي』","『ناروتو』","『كيلوا』","『لوفي زورو سانجي』","『زاراكي ايزن توسين』","『ناروتو ساسكي كاكاشي』","『مادارا اوبيتو』","『هاشيراما توبيراما』","『انزاي دازاي』","『هاغومورو』","『سوكونا يوجي』","『كاكاشي هاتاكي』","『فوغاكو اوتشيها』","『ناروتو اوزوماكي』","『غارب لوفي ايس ساب』و","『اكاينو اوكيجي كيزارو』","『غون كيلوا』","『اوميني』","『سيلفا زينو نيترو』","『استا يامي』","『كيسكي يوروتشي ايتشيغو』","『ساروتوبي دانزو』","『فوجيتورا』","『نامي روبين』","『هيماواري هينات』","『ستارك جريمجو نيل』","『الوكا』","『شينو كيبا』","『روك لي مايت غاي』","『ايتاشي ساسكي』","『كونان ناغاتو ياهيكو』","『جيرايا تسونادي』","『ساي اينو』","『شينرا』","『ثوركيل ثورفين ثورز』","『اشيلاد』","『لاو ميهوك زورو』","『تيتش ادوارد』","『ناكا اوتشيها』","『هيروزين ساروتوبي』","『مونكي دي لوفي』","『كارين』","『موريا』","『اشورا هامورا』","『انيوشا كاجومي』","『ديدارا ساسوري』","『روجر رايلي』","『تانجيرو نيزيكو』","『زينيتسو اينوسكي』","『زيك ايرين』","『ميكاسا اني』","『ليفاي اكيرمان』","『ايروين مايكي』","『مايكي دراكن』","『هيسوكا』","『ارمين』","『هاتسوني ميكو』","『كورو』","『اوراهارا كيسكي』","『شينوبو كاناو』","『كيسامي اكاشي』","『كوزان』"
             ]
                           const Chikuverdad2ww = verdad2[Math.floor(Math.random() * verdad2.length)]
                           buffer = await getBuffer(`https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg`)
                           Chiku.sendMessage(from, { image: buffer, caption: '*♚ مرحبا بك في كت*\nꔹ━━━━━ꔹ\n'+ Chikuverdad2ww }, {quoted:m})
                           break

case 'verda': case 'بوست': 
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
	Chiku.sendMessage(from, { react: { text: "🎊" , key: m.key }})
		
                           const verda =[
" أحياناً.. ويصبح الوهم حقيقه😪.",
" الجمال يلفت الأنظار لكن الطيبه تلفت القلوب🙂 .!",
"لا تحقرون صغيره إن الجبال من الحصي 💖",
"لا تمد عينك في يد غيرك 💕",
"‏ بعض الاِعتذارات يجب أن تُرفَضّ. 🌚.",
"‏ هل كانت كل الطرق تؤدي إليكِ، أم أنني كنتُ أجعلها كذلك. 🤫 .!",
"ويُرهقني أنّي مليء بما لا أستطيع قوله.✨ ",
"‏أَكَان عَلَيَّ أَنْ أغْرَس انيابي فِي قَلْبِك لتشعر بِي ؟. 😁",
"‏ إن الأمر ينتهي بِنا إلى أعتياد أي شيء. 😎",
"‏ بعض الاِعتذارات يجب أن تُرفَضّ. 😃",
"لا تظلم حتى لا تتظلم 😊",
"لا حياه للإنسان بلا نبات ☺️",
"لا تقف قصاد الريح ولا تمشي معها.... ❤️",
" لا تملح الا لمن يستحقاها ويحافظ عليها😛",
"لا يدخل الجنه من لايأمن من جازه بوائقه 😿.",
"لا دين لمن لا عهد له 💞 ",
"لا تظلم حتى لا تتظلم 🌚.",
"عامل الناس بأخلاقك ولا بأخلاقهم 💞⛷️",
"لا تقف قصاد الريح ولا تمشي معها.... 💚 ",
"‏ ‏أحببتك وأنا منطفئ، فما بالك وأنا في كامل توهجي ؟ 🙂 .!",
"‏من ترك أمرهُ لله، أعطاه الله فوق ما يتمنَّاه💙 ",
"‏ إنعدام الرّغبة أمام الشّيء الّذي أدمنته ، انتصار. »💛",
"‏ ‏كل العالم يهون بس الدنيا بينا تصفي 💙 ",
"‏ إن الأمر ينتهي بِنا إلى أعتياد أي شيء. 😚 ",
"‏ إنعدام الرّغبة أمام الشّيء الّذي أدمنته ، انتصار. 💝",
"‏ لا تعودني على دفء شمسك، إذا كان في نيتك الغروب .َ 🙂 .!",
"‏من علامات جمال المرأة .. بختها المايل ! ❤️",
"‏ علينا إحياء زَمن الرّسائل الورقيّة وسط هذه الفوضى الالكترونية العَارمة.💜 ",
"‏ كلما أتبع قلبي يدلني إليك . 😜",
"‏ انك الجميع و كل من احتل قلبي🫀🤍 ",
"‏ بس لما أنا ببقى فايق، ببقى أبكم له ودان.💖 ",
"‏ ‏ممكن اكون اختارت غلط بس والله حبيت بجد🖇️ ",
"‏ لا تعودني على دفء شمسك، إذا كان في نيتك الغروب .َ 💕",
" ‏ ‏تبدأ حياتك محاولاً فهم كل شيء، وتنهيها محاولاً النجاة من كل ما فهمت.💖",
"الجمال يلفت الأنظار لكن الطيبه تلفت القلوب 😁",
"كما تدين تدان 😊",
"عامل الناس بأخلاقك ولا بأخلاقهم 🙂",
"يسروا ولا تعسروا... ويشورا ولا تنفروا 💕",
" لا يدخل الجنه من لايأمن من جازه بوائقه💓",
" كل كتير عادي ميهمكش😂❤️",
"لا تملح الا لمن يستحقاها ويحافظ عليها 💞 ",
" الجمال يلفت الأنظار لكن الطيبه تلفت القلوب💞 ",
" خليك طبيعي مش نورم😇❤️ ",
" الدنيا حلوه متزعلش علي ناس ماتستاهلش🌝🏃‍♂️",
" العقل السليم ف البعد عن الحريم😇❤️",
"عيش الحياه يوم واحد 🙂 .! ",
"امشي كتير عشان تخس 🧐 .! ",
" اشرب ميه كتير 😎.",
"كُنْ لحوحاً فِي الدّعاءِ،فقدْ أوشكَ السّهمُ أنْ يُصيبَ. 💗",                    
"‏من ترك أمرهُ لله، أعطاه الله فوق ما يتمنَّاه💙 ", 
"‏من علامات جمال المرأة .. بختها المايل ! ",
"‏ انك الجميع و كل من احتل قلبي🫀🤍",
"‏ ‏ لقد تْعَمقتُ بكَ كَثيراً والمِيمُ لام .♥️",
"‏ ‏ممكن اكون اختارت غلط بس والله حبيت بجد🖇️",
"‏ علينا إحياء زَمن الرّسائل الورقيّة وسط هذه الفوضى الالكترونية العَارمة. ⋆ 💜",
"‏ يجي اي الصاروخ الصيني ده جمب الصاروخ المصري لما بيلبس العبايه السوده.🤩♥️",
"‏ كُنت أرقّ من أن أتحمّل كُل تلك القَسوة من عَينيك .🍍",
"‏أَكَان عَلَيَّ أَنْ أغْرَس انيابي فِي قَلْبِك لتشعر بِي ؟.",
"‏ •كُلما أتبع قلبي يدلني إليك .",
"‏ •أيا ليت من تَهواه العينُ تلقاهُ .",
"‏ ‏: رغبتي في مُعانقتك عميقة جداً .??",
"ويُرهقني أنّي مليء بما لا أستطيع قوله.✨",
"‏ من مراتب التعاسه إطالة الندم ع شيء إنتهى. ⋆ ",
"‏ ‏كل العالم يهون بس الدنيا بينا تصفي 💙",
"‏ بعض الاِعتذارات يجب أن تُرفَضّ.",
"‏ ‏تبدأ حياتك محاولاً فهم كل شيء، وتنهيها محاولاً النجاة من كل ما فهمت.",
"‏ إن الأمر ينتهي بِنا إلى أعتياد أي شيء.",
"‏ هل كانت كل الطرق تؤدي إليكِ، أم أنني كنتُ أجعلها كذلك.",
"‏ ‏هَتفضل توآسيهُم وآحد ورآ التآني لكن أنتَ هتتنسي ومحدِش هَيوآسيك.",
"‏ جَبَرَ الله قلوبِكُم ، وقَلبِي .🍫",
"‏ بس لما أنا ببقى فايق، ببقى أبكم له ودان.💖",
"‏ ‏مقدرش عالنسيان ولو طال الزمن 🖤",
"‏ أنا لستُ لأحد ولا احد لي ، أنا إنسان غريب أساعد من يحتاجني واختفي.",
"‏ ‏أحببتك وأنا منطفئ، فما بالك وأنا في كامل توهجي ؟",
"‏ لا تعودني على دفء شمسك، إذا كان في نيتك الغروب .َ",
"‏ وانتهت صداقة الخمس سنوات بموقف.",
"‏ ‏لا تحب أحداً لِدرجة أن تتقبّل أذاه.",
"‏ إنعدام الرّغبة أمام الشّيء الّذي أدمنته ، انتصار.",
"‏مش جايز , ده اكيد التأخير وارهاق القلب ده وراه عوضاً عظيماً !💙 ",
" مش جايز , ده اكيد التأخير وارهاق القلب ده وراه عوضاً عظيماً !💙",
"فـ بالله صبر  وبالله يسر وبالله عون وبالله كل شيئ ♥️. ",
"أنا بعتز بنفسي جداً كصاحب وشايف اللي بيخسرني ، بيخسر أنضف وأجدع شخص ممكن يشوفه . ",
"فجأه جاتلى قافله ‏خلتنى مستعد أخسر أي حد من غير ما أندم عليه . ",
"‏اللهُم قوني بك حين يقِل صبري... ",
"‏يارب سهِل لنا كُل حاجة شايلين هَمها 💙‏ ",
"انا محتاج ايام حلوه بقي عشان مش نافع كدا ! ",
"المشكله مش اني باخد قررات غلط المشكله اني بفكر كويس فيها قبل ما اخدها .. ",
"تخيل وانت قاعد مخنوق كدا بتفكر فالمزاكره اللي مزكرتهاش تلاقي قرار الغاء الدراسه .. ",
" مكانوش يستحقوا المعافرة بأمانه.",
"‏جمل فترة في حياتي، كانت مع اكثر الناس الذين أذتني نفسيًا. ",
" ‏إحنا ليه مبنتحبش يعني فينا اي وحش!",
"أيام مُمله ومستقبل مجهول ونومٌ غير منتظموالأيامُ تمرُ ولا شيَ يتغير ", 
"عندما تهب ريح المصلحه سوف ياتي الجميع رتكدون تحت قدمك ❤️. ",
"عادي مهما تعادي اختك قد الدنيا ف عادي ❤. ",
"بقيت لوحدي بمعنا اي انا اصلا من زمان لوحدي.❤️ ",
"- ‏تجري حياتنا بما لاتشتهي أحلامنا ! ",
"تحملين كل هذا الجمال، ‏ألا تتعبين؟",
"البدايات للكل ، والثبات للصادقين ",
"مُؤخرًا اقتنعت بالجملة دي جدا •Private life always wins. ",
" الافراط في التسامح بيخللي الناس تستهين بيك🍍",
"مهما كنت كويس فـَ إنت معرض لـِ الاستبدال.. ",
"فخوره بنفسي جدًا رغم اني معملتش حاجه فـ حياتي تستحق الذكر والله . ",
"‏إسمها ليلة القدر لأنها تُغير الأقدار ,اللهُمَّ غير قدري لحالٍ تُحبه وعوضني خير .. ",
"فى احتمال كبير انها ليلة القدر ادعوا لنفسكم كتير وأدعو ربنا يشفى كل مريض. 💙 ",
"أنِر ظُلمتي، وامحُ خطيئتي، واقبل توبتي وأعتِق رقبتي يا اللّٰه. إنكَ عفوٌّ تُحِبُّ العفوَ؛ فاعفُ عني 💛 "
             ]
                           const Chikuverdaww = verda[Math.floor(Math.random() * verda.length)]
                           buffer = await getBuffer(`https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg`)
                           Chiku.sendMessage(from, { image: buffer, caption: '*♚ مرحبا بك في البوستات*\nꔹ━━━━━ꔹ\n'+ Chikuverdaww }, {quoted:m})
                           break

case 'verda1': case 'اذكار': 
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
	Chiku.sendMessage(from, { react: { text: "🤲🏻" , key: m.key }})
		
                           const verda1 =[
"اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ , وَشُكْرِكَ , وَحُسْنِ عِبَادَتِكَ🎈💞", 
"االلَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ , وَشُكْرِكَ , وَحُسْنِ عِبَادَتِكَ🎈💞 ",
"اا6-قول : سبحان الله وبحمده سبحان العظيم مئة مرة في اليوم قارئها غفرت له ذنوبه وأن كانت مثل زبد البحر .",
"من الأدعية النبوية المأثورة:اللهمَّ زَيِّنا بزينة الإيمان",
"اااللهم يا من رويت الأرض مطرا أمطر قلوبنا فرحا.🍂",
"اا‏اللَّهُـمَّ لَڪَ الحَمْـدُ مِنْ قَـا؏ِ الفُـؤَادِ إلىٰ ؏َـرشِڪَ المُقـدَّس حَمْـدَاً يُوَافِي نِـ؏ـمَڪ 💙🌸",
"﴿وَاذْكُرِ اسْمَ رَبِّكَ وَتَبَتَّلْ إِلَيْهِ تَبْتِيلًا﴾🌿✨",
"﴿وَمَن يَتَّقِ اللهَ يُكَفِّرْ عَنْهُ سَيِّئَاتِهِ وَيُعْظِمْ لَهُ أَجْرًا﴾«",
"«سُبْحَانَ اللهِ ، وَالحَمْدُ للهِ ، وَلَا إلَهَ إلَّا اللهُ ، وَاللهُ أكْبَرُ ، وَلَا حَوْلَ وَلَا قُوَّةَ إلَّا بِاللهِ»🍃",
"وذُنُوبًا شوَّهتْ طُهْرَ قُلوبِنا؛ اغفِرها يا ربّ واعفُ عنَّا ❤️",
"«اللَّهُمَّ آتِ نُفُوسَنَا تَقْوَاهَا ، وَزَكِّهَا أنْتَ خَيْرُ مَنْ زَكَّاهَا ، أنْتَ وَلِيُّهَا وَمَوْلَاهَا»🌹",
"۝‏﷽إن اللَّه وملائكته يُصلُّون على النبي ياأيُّها الذين آمنوا صلُّوا عليه وسلِّموا تسليما۝",
"فُسِبًحً بًحًمًدٍ ربًکْ وٌکْنِ مًنِ آلَسِآجّدٍيَنِ 🌿✨",
"اأقُمً آلَصّلَآةّ لَدٍلَوٌکْ آلَشُمًسِ إلَيَ غُسِقُ آلَلَيَلَ🥀🌺",
"نِسِتٌغُفُرکْ ربًيَ حًيَتٌ تٌلَهّيَنِآ آلَدٍنِيَآ عٌنِ ذِکْرکْ🥺😢",
"وٌمًنِ أعٌرض عٌنِ ذِکْريَ فُإنِ لَهّ مًعٌيَشُةّ ضنِکْآ 😢",
"وٌقُرأنِ آلَفُجّر إنِ قُرآنِ آلَفُجّر کْآنِ مًشُهّوٌدٍآ🎀🌲",
"اأّذّأّ أّلَدِنِيِّأّ نَِّستّګوِ أّصٌلَګوِ زِّوِروِ أّلَمَقِأّبِر💔",
"حًتٌيَ لَوٌ لَمًتٌتٌقُنِ آلَخِفُظُ فُمًصّآحًبًتٌ لَلَقُرآنِ تٌجّعٌلَکْ مًنِ آهّلَ آلَلَهّ وٌخِآصّتٌهّ❤🌱",
"وٌإذِآ رضيَتٌ وٌصّبًرتٌ فُهّوٌ إرتٌقُآء وٌنِعٌمًةّ✨🌺",
"«ربً آجّعٌلَنِيَ مًقُيَمً آلَصّلَآةّ وٌمًنِ ذِريَتٌيَ ربًنِآ وٌتٌقُبًلَ دٍعٌآء 🤲",
"اآعٌلَمً آنِ رحًلَةّ صّبًرکْ لَهّآ نِهّآيَهّ عٌظُيَمًهّ مًحًمًلَهّ بًجّوٌآئزٍ ربًآنِيَهّ مًدٍهّشُهّ🌚☺️",
"اإيَآکْ وٌدٍعٌوٌةّ آلَمًظُلَوٌمً فُ إنِهّآ تٌصّعٌدٍ آلَيَ آلَلَهّ کْأنِهّآ شُرآرهّ مًنِ نِآر 🔥🥺",
"اآلَلَهّمً آنِقُذِ صّدٍوٌرنِآ مًنِ هّيَمًنِهّ آلَقُلَقُ وٌصّبً عٌلَيَهّآ فُيَضآ مًنِ آلَطِمًأنِيَنِهّ✨🌺",
"يَآبًنِيَ إنِ صّلَآح آلَحًيَآةّ فُ أتٌجّآهّ آلَقُبًلَهّ 🥀🌿",
"«آلَلَهّمً ردٍنِآ إلَيَکْ ردٍآ جّمًيَلَآ💔🥺",
"اللهم طهر قلبي من كل خلق لا يرضيك اللهم يا مقلب القلوب ثبت قلوبنا وقلوب إخواننا على دينك وطاعتك. إلهي عوضني خيرا فيمن فقدت واحفظ ",
"إلهي عوضني خيرا فيمن فقدت واحفظ لي من أحببت اللهم اجعلني أنا وقارئ هذه الرسالة من السبعين ألفا الذين يدخلون الجنة بلا حساب ولا سابق عذاب أمين يا الله حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم ",
"والْعَصْر إِنَّ الْإِنْسَان لَفِي خُسْر إِلَّا الَّذِينَ آمَنُوا وعَمِلُوا الصَّالِحَات وتَوَاصَوْا بِالْحَقِّ وتَوَاصَوْا بِالصَّبْرِ. ",
"اذكر الله في راحِتك ليذكُرك في حاجْتك ",
"‏اللهمَّ أَخْرِجْنَا من ضيقِ أنفُسِنا إلى سِعةِ رحمتِكَ 💙 ",
"يارب يامنزل الغيث من السماء ابعد البلاء عن بلادنا و بلاد المسلمين اجمعين 💙 ",
"يارب إن ضاقت بي الدنيا من الناس ارحمني برحمتك يا لطيف يا رحيم 💙 ",
"‏اللهمّ الكتف الثابت الذي لا تهون عليه مواجعنا 💙 ",
"‏اللهم صّلِ وسَلّمْ عَلى نَبِيْنَا مُحَمد ﷺ 💙 ",
"‏اللهم أجعل لي نصيب في كل شئ أحببته💙 ",
"اجعلوا للقرآن نصيبًا مِن فجركم 💙 ",
"اللهم اشفي كل عزيز و غالي 💙 ",
"يارب ابعد عنا ضيق الدنيا و متاعبها 💙 ",
"يارب العالمين اغفر لي وارحمن ",
"‏مامن لسان يستغفر إلا فتحت له الدنيا بما فيها أستغفرك ربي وأتوب إليك "
             ]
                           const Chikuverda1ww = verda1[Math.floor(Math.random() * verda1.length)]
                           buffer = await getBuffer(`https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg`)
                           Chiku.sendMessage(from, { image: buffer, caption: '*♚ مرحبا بك في قسم الاذكار*\nꔹ━━━━━ꔹ\n'+ Chikuverda1ww }, {quoted:m})
                           break

case 'verdajj': case 'خيروك': case 'لو':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
	Chiku.sendMessage(from, { react: { text: "🎭" , key: m.key }})
		
                           const verdajj =[
"لو خيروك |  بين الإبحار لمدة أسبوع كامل أو السفر على متن طائرة لـ 3 أيام متواصلة؟ ",
"لو خيروك |  بين شراء منزل صغير أو استئجار فيلا كبيرة بمبلغ معقول؟ ",
"لو خيروك |  أن تعيش قصة فيلم هل تختار الأكشن أو الكوميديا؟ ",
"لو خيروك |  بين تناول البيتزا وبين الآيس كريم وذلك بشكل دائم؟ ",
"لو خيروك |  بين إمكانية تواجدك في الفضاء وبين إمكانية تواجدك في البحر؟ ",
"لو خيروك |  بين تغيير وظيفتك كل سنة أو البقاء بوظيفة واحدة طوال حياتك؟ ",
"لو خيروك |  أسئلة محرجة أسئلة صراحة ماذا ستختار؟ ",
"لو خيروك |  بين الذهاب إلى الماضي والعيش مع جدك أو بين الذهاب إلى المستقبل والعيش مع أحفادك؟ ",
"لو كنت شخص آخر هل تفضل البقاء معك أم أنك ستبتعد عن نفسك؟ ",
"لو خيروك |  بين الحصول على الأموال في عيد ميلادك أو على الهدايا؟ ",
"لو خيروك |  بين القفز بمظلة من طائرة أو الغوص في أعماق البحر؟ ",
"لو خيروك |  بين الاستماع إلى الأخبار الجيدة أولًا أو الاستماع إلى الأخبار السيئة أولًا؟ ",
"لو خيروك |  بين أن تكون رئيس لشركة فاشلة أو أن تكون موظف في شركة ناجحة؟ ",
"لو خيروك |  بين أن يكون لديك جيران صاخبون أو أن يكون لديك جيران فضوليون؟ ",
"لو خيروك |  بين أن تكون شخص مشغول دائمًا أو أن تكون شخص يشعر بالملل دائمًا؟ ",
"لو خيروك |  بين قضاء يوم كامل مع الرياضي الذي تشجعه أو نجم السينما الذي تحبه؟ ",
"لو خيروك |  بين استمرار فصل الشتاء دائمًا أو بقاء فصل الصيف؟ ",
"لو خيروك |  بين العيش في القارة القطبية أو العيش في الصحراء؟ ",
"لو خيروك |  بين أن تكون لديك القدرة على حفظ كل ما تسمع أو تقوله وبين القدرة على حفظ كل ما تراه أمامك؟ ",
"لو خيروك |  بين أن يكون طولك 150 سنتي متر أو أن يكون 190 سنتي متر؟ ",
"لو خيروك |  بين إلغاء رحلتك تمامًا أو بقائها ولكن فقدان الأمتعة والأشياء الخاص بك خلالها؟ ",
"لو خيروك |  بين أن تكون اللاعب الأفضل في فريق كرة فاشل أو أن تكون لاعب عادي في فريق كرة ناجح؟ ",
"لو خيروك |  بين ارتداء ملابس البيت لمدة أسبوع كامل أو ارتداء البدلة الرسمية لنفس المدة؟ ",
"لو خيروك |  بين امتلاك أفضل وأجمل منزل ولكن في حي سيء أو امتلاك أسوأ منزل ولكن في حي جيد وجميل؟ ",
"لو خيروك |  بين أن تكون غني وتعيش قبل 500 سنة، أو أن تكون فقير وتعيش في عصرنا الحالي؟ ",
"لو خيروك |  بين ارتداء ملابس الغوص ليوم كامل والذهاب إلى العمل أو ارتداء ملابس جدك/جدتك؟ ",
"لو خيروك |  بين قص شعرك بشكل قصير جدًا أو صبغه باللون الوردي؟ ",
"لو خيروك |  بين أن تضع الكثير من الملح على كل الطعام بدون علم أحد، أو أن تقوم بتناول شطيرة معجون أسنان؟ ",
"لو خيروك |  بين قول الحقيقة والصراحة الكاملة مدة 24 ساعة أو الكذب بشكل كامل مدة 3 أيام؟ ",
"لو خيروك |  بين تناول الشوكولا التي تفضلها لكن مع إضافة رشة من الملح والقليل من عصير الليمون إليها أو تناول ليمونة كاملة كبيرة الحجم؟ ",
"لو خيروك |  بين وضع أحمر الشفاه على وجهك ما عدا شفتين أو وضع ماسكارا على شفتين فقط؟ ",
"لو خيروك |  بين الرقص على سطح منزلك أو الغناء على نافذتك؟ ",
"لو خيروك |  بين تلوين شعرك كل خصلة بلون وبين ارتداء ملابس غير متناسقة لمدة أسبوع؟ ",
"لو خيروك |  بين تناول مياه غازية مجمدة وبين تناولها ساخنة؟ ",
"لو خيروك |  بين تنظيف شعرك بسائل غسيل الأطباق وبين استخدام كريم الأساس لغسيل الأطباق؟ ",
"لو خيروك |  بين تزيين طبق السلطة بالبرتقال وبين إضافة البطاطا لطبق الفاكهة؟ ",
"لو خيروك |  بين اللعب مع الأطفال لمدة 7 ساعات أو الجلوس دون فعل أي شيء لمدة 24 ساعة؟ ",
"لو خيروك |  بين شرب كوب من الحليب أو شرب كوب من شراب عرق السوس؟ ",
"لو خيروك |  بين الشخص الذي تحبه وصديق الطفولة؟ ",
"لو خيروك |  بين أمك وأبيك؟ ",
"لو خيروك |  بين أختك وأخيك؟ ",
"لو خيروك |  بين نفسك وأمك؟ ",
"لو خيروك |  بين صديق قام بغدرك وعدوك؟ ",
"لو خيروك |  بين خسارة حبيبك/حبيبتك أو خسارة أخيك/أختك؟ ",
"لو خيروك |  بإنقاذ شخص واحد مع نفسك بين أمك أو ابنك؟ ",
"لو خيروك |  بين ابنك وابنتك؟ ",
"لو خيروك |  بين زوجتك وابنك/ابنتك؟ ",
"لو خيروك |  بين جدك أو جدتك؟ ",
"لو خيروك |  بين زميل ناجح وحده أو زميل يعمل كفريق؟ ",
"لو خيروك |  بين لاعب كرة قدم مشهور أو موسيقي مفضل بالنسبة لك؟ ",
"لو خيروك |  بين مصور فوتوغرافي جيد وبين مصور سيء ولكنه عبقري فوتوشوب؟ ",
"لو خيروك |  بين سائق سيارة يقودها ببطء وبين سائق يقودها بسرعة كبيرة؟ ",
"لو خيروك |  بين أستاذ اللغة العربية أو أستاذ الرياضيات؟ ",
"لو خيروك |  بين أخيك البعيد أو جارك القريب؟ ",
"لو خيروك |  يبن صديقك البعيد وبين زميلك القريب؟ ",
"لو خيروك |  بين رجل أعمال أو أمير؟ ",
"لو خيروك |  بين نجار أو حداد؟ ",
"لو خيروك |  بين طباخ أو خياط؟ ",
"لو خيروك |  بين أن تكون كل ملابس بمقاس واحد كبير الحجم أو أن تكون جميعها باللون الأصفر؟ ",
"لو خيروك |  بين أن تتكلم بالهمس فقط طوال الوقت أو أن تصرخ فقط طوال الوقت؟ ",
"لو خيروك |  بين أن تمتلك زر إيقاف موقت للوقت أو أن تمتلك أزرار للعودة والذهاب عبر الوقت؟ ",
"لو خيروك |  بين أن تعيش بدون موسيقى أبدًا أو أن تعيش بدون تلفاز أبدًا؟ ",
"لو خيروك |  بين أن تعرف متى سوف تموت أو أن تعرف كيف سوف تموت؟ ",
"لو خيروك |  بين العمل الذي تحلم به أو بين إيجاد شريك حياتك وحبك الحقيقي؟ ",
"لو خيروك |  بين معاركة دب أو بين مصارعة تمساح؟ ",
"لو خيروك |  بين إما الحصول على المال أو على المزيد من الوقت؟ ",
"لو خيروك |  بين امتلاك قدرة التحدث بكل لغات العالم أو التحدث إلى الحيوانات؟ ",
"لو خيروك |  بين أن تفوز في اليانصيب وبين أن تعيش مرة ثانية؟ ",
"لو خيروك |  بأن لا يحضر أحد إما لحفل زفافك أو إلى جنازتك؟ ",
"لو خيروك |  بين البقاء بدون هاتف لمدة شهر أو بدون إنترنت لمدة أسبوع؟ ",
"لو خيروك |  بين العمل لأيام أقل في الأسبوع مع زيادة ساعات العمل أو العمل لساعات أقل في اليوم مع أيام أكثر؟ ",
"لو خيروك |  بين مشاهدة الدراما في أيام السبعينيات أو مشاهدة الأعمال الدرامية للوقت الحالي؟ ",
"لو خيروك |  بين التحدث عن كل شيء يدور في عقلك وبين عدم التحدث إطلاقًا؟ ",
"لو خيروك |  بين مشاهدة فيلم بمفردك أو الذهاب إلى مطعم وتناول العشاء بمفردك؟ ",
"لو خيروك |  بين قراءة رواية مميزة فقط أو مشاهدتها بشكل فيلم بدون القدرة على قراءتها؟ ",
"لو خيروك |  بين أن تكون الشخص الأكثر شعبية في العمل أو المدرسة وبين أن تكون الشخص الأكثر ذكاءً؟ ",
"لو خيروك |  بين إجراء المكالمات الهاتفية فقط أو إرسال الرسائل النصية فقط؟ ",
"لو خيروك |  بين إنهاء الحروب في العالم أو إنهاء الجوع في العالم؟ ",
"لو خيروك |  بين تغيير لون عينيك أو لون شعرك؟ ",
"لو خيروك |  بين امتلاك كل عين لون وبين امتلاك نمش على خديك؟ ",
"لو خيروك |  بين الخروج بالمكياج بشكل مستمر وبين الحصول على بشرة صحية ولكن لا يمكن لك تطبيق أي نوع من المكياج؟ ",
"لو خيروك |  بين أن تصبحي عارضة أزياء وبين ميك آب أرتيست؟ ",
"لو خيروك |  بين مشاهدة كرة القدم أو متابعة الأخبار؟ ",
"لو خيروك |  بين موت شخصية بطل الدراما التي تتابعينها أو أن يبقى ولكن يكون العمل الدرامي سيء جدًا؟ ",
"لو خيروك |  بين العيش في دراما قد سبق وشاهدتها ماذا تختارين بين الكوميديا والتاريخي؟ ",
"لو خيروك |  بين امتلاك القدرة على تغيير لون شعرك متى تريدين وبين الحصول على مكياج من قبل خبير تجميل وذلك بشكل يومي؟ ",
"لو خيروك |  بين نشر تفاصيل حياتك المالية وبين نشر تفاصيل حياتك العاطفية؟ ",
"لو خيروك |  بين البكاء والحزن وبين اكتساب الوزن؟ ",
"لو خيروك |  بين تنظيف الأطباق كل يوم وبين تحضير الطعام؟ ",
"لو خيروك |  بين أن تتعطل سيارتك في نصف الطريق أو ألا تتمكنين من ركنها بطريقة صحيحة؟ ",
"لو خيروك |  بين إعادة كل الحقائب التي تملكينها أو إعادة الأحذية الجميلة الخاصة بك؟ ",
"لو خيروك |  بين قتل حشرة أو متابعة فيلم رعب؟ ",
"لو خيروك |  بين امتلاك قطة أو كلب؟ ",
"لو خيروك |  بين الصداقة والحب ",
"لو خيروك |  بين تناول الشوكولا التي تحبين طوال حياتك ولكن لا يمكنك الاستماع إلى الموسيقى وبين الاستماع إلى الموسيقى ولكن لا يمكن لك تناول الشوكولا أبدًا؟ ",
"لو خيروك |  بين مشاركة المنزل مع عائلة من الفئران أو عائلة من الأشخاص المزعجين الفضوليين الذين يتدخلون في كل كبيرة وصغيرة؟ "
             ]
                           const Chikuverdajjww = verdajj[Math.floor(Math.random() * verdajj.length)]
                           buffer = await getBuffer(`https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg`)
                           Chiku.sendMessage(from, { image: buffer, caption: '*♚ مرحبا بك في لعبة لو خيروك*\nꔹ━━━━━ꔹ\n'+ Chikuverdajjww }, {quoted:m})
                           break

case 'hdudh': case 'تويت':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
	Chiku.sendMessage(from, { react: { text: "♣️" , key: m.key }})
		
                           const hdudh =[
"مرتبط؟ ", 
" هل بتكراش ع حد في حياتك؟", 
" ينفع نرتبط؟", 
" ممكن توريني صوره بتحبها؟", 
" ممكن نبقي صحااب ع الفيس؟", 
" هل لسه بتحب الاكس؟", 
"عندك كام اكس في حياتك؟ ", 
"ينفع تبعتلي رقمك؟ ", 
" ما تيجي اعزمني ع حاجه بحبها؟", 
"ينفع احضنك؟ ", 
"قولي ع اكبر غلطه ندمان عليهاا؟ ", 
"عندك كام سنه؟ ", 
" عامل بلوك لكام واحد عندك؟", 
" قولي سر محدش يعرفه؟", 
" عندك كام اكس في حياتك؟", 
"بتعرف تقلش وتهزر؟ ", 
" لونك المفضل هو؟", 
" مين أقرب حد ليك الفتره دي ؟", 
" قولي ع اكبر غلطه ندمان عليهاا؟", 
" مين مغنيك المفضل؟", 
" حابب تبقي اي في المستقبل؟", 
"راضي عن حياتك بنسبه كام؟ ", 
"اكتر حاجه بتلفت انتباهك في البنت او الولد؟ ", 
"اي رأيك في صوره البروفايل بتاعتي؟ ", 
" هل باين عليا اني شخص لطيف؟", 
" توافق ترجع للاكس؟", 
"ممكن تضحي بحياتك لمين؟ ", 
"سافرت بلاد برا مصر واي هي؟ ", 
" اي رأيك في صوره البروفايل بتاعتي؟", 
" هل بتعتبر نفسك حلو وبتحب شكلك؟", 
" نفسك تزور انهي بلد في العالم؟", 
" شخصيه ع السوشيال شايف انها مميزه؟", 
"عندك فوبيا من اي؟ ", 
" ممكن تورينا لينك الصراحه؟", 
"عمرك عيطت ع حاجه؟ ", 
" شايف اي أسوأ صفه فيك؟", 
"هل شلت مواد قبل كد وعدت السنه؟ ", 
"بتغير ع الل بتحبهم وبيبان عليك لو غيرت؟ ", 
"معاك كام فلوس دلوقتي؟ ", 
" بتفضل صحابك البنات ولا الولاد؟", 
" مسامح الل ظلمك؟", 
" ممثلك الافضل؟", 
" ممكن تقول رساله لحد مش هيشوفها؟", 
"انت اهلاوي ولا زملكاوي؟ ", 
" اي حيوانك المفضل؟", 
"اخر افلام شاهدتها", 
"بتعرف تكلم لغه تانيه واي هي؟ ", 
"ما هي وظفتك الحياه", 
"اعز اصدقائك ?", 
"اخر اغنية سمعتها ?", 
"تكلم عن نفسك", 
"ليه انت مش سالك", 
"ما هي عيوب سورس الجزار ؟ ", 
"اخر كتاب قرآته", 
"روايتك المفضله ?", 
"اخر اكله اكلتها", 
"اخر كتاب قرآته", 
"ليه عبدالله محمد جدع؟ ", 
 "ليه الجزار جدع؟ ", 
"افضل يوم ف حياتك", 
"ليه مضيفتش كل جهاتك", 
"حكمتك ف الحياه", 
"لون عيونك", 
"كتابك المفضل", 
"هوايتك المفضله", 
"علاقتك مع اهلك", 
" ما السيء في هذه الحياة ؟ ", 
"أجمل شيء حصل معك خلال هذا الاسبوع ؟ ", 
"سؤال ينرفزك ؟ ", 
" هل يعجبك سورس الجزار ؟؟ ", 
" اكثر ممثل تحبه ؟ ", 
"قد تخيلت شي في بالك وصار ؟ ", 
"شيء عندك اهم من الناس ؟ ", 
"تفضّل النقاش الطويل او تحب الاختصار ؟ ", 
"وش أخر شي ضيعته؟ ", 
"اي رايك في سورس الجزار ؟ ", 
"كم مره حبيت؟ ", 
" اكثر المتابعين عندك باي برنامج؟", 
" نسبه الندم عندك للي وثقت فيهم ؟", 
"تحب ترتبط بكيرفي ولا فلات؟", 
" جربت شعور احد يحبك بس انت مو قادر تحبه؟", 
" تجامل الناس ولا اللي بقلبك على لسانك؟", 
" عمرك ضحيت باشياء لاجل شخص م يسوى ؟", 
"مغني تلاحظ أن صوته يعجب الجميع إلا أنت؟ ", 
" آخر غلطات عمرك؟ ", 
" مسلسل كرتوني له ذكريات جميلة عندك؟ ", 
" ما أكثر تطبيق تقضي وقتك عليه؟ ", 
" أول شيء يخطر في بالك إذا سمعت كلمة نجوم ؟ ", 
" قدوتك من الأجيال السابقة؟ ", 
" أكثر طبع تهتم بأن يتواجد في شريك/ة حياتك؟ ", 
"أكثر حيوان تخاف منه؟ ", 
" ما هي طريقتك في الحصول على الراحة النفسية؟ ", 
" إيموجي يعبّر عن مزاجك الحالي؟ ", 
" أكثر تغيير ترغب أن تغيّره في نفسك؟ ", 
"أكثر شيء أسعدك اليوم؟ ", 
"اي رايك في الدنيا دي ؟ ", 
"ما هو أفضل حافز للشخص؟ ", 
"ما الذي يشغل بالك في الفترة الحالية؟", 
"آخر شيء ندمت عليه؟ ", 
"شاركنا صورة احترافية من تصويرك؟ ", 
"تتابع انمي؟ إذا نعم ما أفضل انمي شاهدته ", 
"يرد عليك متأخر على رسالة مهمة وبكل برود، موقفك؟ ", 
"نصيحه تبدا ب -لا- ؟ ", 
"كتاب أو رواية تقرأها هذه الأيام؟ ", 
"فيلم عالق في ذهنك لا تنساه مِن روعته؟ ", 
"يوم لا يمكنك نسيانه؟ ", 
"شعورك الحالي في جملة؟ ", 
"كلمة لشخص بعيد؟ ", 
"صفة يطلقها عليك الشخص المفضّل؟ ", 
"أغنية عالقة في ذهنك هاليومين؟ ", 
"أكلة مستحيل أن تأكلها؟ ", 
"كيف قضيت نهارك؟ ", 
"تصرُّف ماتتحمله؟ ", 
"موقف غير حياتك؟ ", 
"اكثر مشروب تحبه؟ ", 
"القصيدة اللي تأثر فيك؟ ", 
"متى يصبح الصديق غريب ", 
"وين نلقى السعاده برايك؟ ", 
"تاريخ ميلادك؟ ", 
"قهوه و لا شاي؟ ", 
"من محبّين الليل أو الصبح؟ ", 
"حيوانك المفضل؟ ", 
"كلمة غريبة ومعناها؟ ", 
"كم تحتاج من وقت لتثق بشخص؟ ", 
"اشياء نفسك تجربها؟ ", 
"يومك ضاع على؟ ", 
"كل شيء يهون الا ؟ ", 
"اسم ماتحبه ؟ ", 
"وقفة إحترام للي إخترع ؟ ", 
"أقدم شيء محتفظ فيه من صغرك؟ ", 
"كلمات ماتستغني عنها بسوالفك؟ ", 
"وش الحب بنظرك؟ ", 
"حب التملك في شخصِيـتك ولا ؟ ", 
"تخطط للمستقبل ولا ؟ ", 
"موقف محرج ماتنساه ؟ ", 
"من طلاسم لهجتكم ؟ ", 
"اعترف باي حاجه ؟ ", 
"عبّر عن مودك بصوره ؟ ",
"اسم دايم ع بالك ؟ ", 
"اشياء تفتخر انك م سويتها ؟ ", 
" لو بكيفي كان ؟ ", 
  "أكثر جملة أثرت بك في حياتك؟ ",
  "إيموجي يوصف مزاجك حاليًا؟ ",
  "أجمل اسم بنت بحرف الباء؟ ",
  "كيف هي أحوال قلبك؟ ",
  "أجمل مدينة؟ ",
  "كيف كان أسبوعك؟ ",
  "شيء تشوفه اكثر من اهلك ؟ ",
  "اخر مره فضفضت؟ ",
  "قد كرهت احد بسبب اسلوبه؟ ",
  "قد حبيت شخص وخذلك؟ ",
  "كم مره حبيت؟ ",
  "اكبر غلطة بعمرك؟ ",
  "نسبة النعاس عندك حاليًا؟ ",
  "شرايكم بمشاهير التيك توك؟ ",
  "ما الحاسة التي تريد إضافتها للحواس الخمسة؟ ",
  "اسم قريب لقلبك؟ ",
  "مشتاق لمطعم كنت تزوره قبل الحظر؟ ",
  "أول شيء يخطر في بالك إذا سمعت كلمة (ابوي يبيك)؟ ",
  "ما أول مشروع تتوقع أن تقوم بإنشائه إذا أصبحت مليونير؟ ",
  "أغنية عالقة في ذهنك هاليومين؟ ",
  "متى اخر مره قريت قرآن؟ ",
  "كم صلاة فاتتك اليوم؟ ",
  "تفضل التيكن او السنقل؟ ",
  "وش أفضل بوت برأيك؟ ",
"كم لك بالتلي؟ ",
"وش الي تفكر فيه الحين؟ ",
"كيف تشوف الجيل ذا؟ ",
"منشن شخص وقوله، تحبني؟ ",
"لو جاء شخص وعترف لك كيف ترده؟ ",
"مر عليك موقف محرج؟ ",
"وين تشوف نفسك بعد سنتين؟ ",
"لو فزعت/ي لصديق/ه وقالك مالك دخل وش بتسوي/ين؟ ",
"وش اجمل لهجة تشوفها؟ ",
"قد سافرت؟ ",
"افضل مسلسل عندك؟ ",
"افضل فلم عندك؟ ",
"مين اكثر يخون البنات/العيال؟ ",
"متى حبيت؟ ",
  "بالعادة متى تنام؟ ",
  "شيء من صغرك ماتغير فيك؟ ",
  "شيء بسيط قادر يعدل مزاجك بشكل سريع؟ ",
  "تشوف الغيره انانيه او حب؟ ",
"حاجة تشوف نفسك مبدع فيها؟ ",
  "مع او ضد •يسقط جمال المراة بسبب قبح لسانها؟ ",
  "عمرك بكيت على شخص مات في مسلسل ؟ ",
  "‏- هل تعتقد أن هنالك من يراقبك بشغف؟ ",
  "تدوس على قلبك او كرامتك؟ ",
  "اكثر لونين تحبهم مع بعض؟ ",
  "مع او ضد •النوم افضل حل لـ مشاكل الحياة؟ ",
  "سؤال دايم تتهرب من الاجابة عليه؟ ",
  "تحبني ولاتحب الفلوس؟ ",
  "العلاقه السريه دايماً تكون حلوه؟ ",
  "لو أغمضت عينيك الآن فما هو أول شيء ستفكر به؟ ",
"كيف ينطق الطفل اسمك؟ ",
  "ما هي نقاط الضعف في شخصيتك؟ ",
  "اكثر كذبة تقولها؟ ",
  "تيكن ولا اضبطك؟ ",
  "اطول علاقة كنت فيها مع شخص؟ ",
  "قد ندمت على شخص؟ ",
  "وقت فراغك وش تسوي؟ ",
  "عندك أصحاب كثير؟ ولا ينعد بالأصابع؟ ",
  "حاط نغمة خاصة لأي شخص؟ ",
  "وش اسم شهرتك؟ ",
  "أفضل أكلة تحبه لك؟ ",
"عندك شخص تسميه ثالث والدينك؟ ",
  "عندك شخص تسميه ثالث والدينك؟ ",
  "اذا قالو لك تسافر أي مكان تبيه وتاخذ معك شخص واحد وين بتروح ومين تختار؟ ",
  "أطول مكالمة كم ساعة؟ ",
  "تحب الحياة الإلكترونية ولا الواقعية؟ ",
  "كيف حال قلبك ؟ بخير ولا مكسور؟ ",
  "أطول مدة نمت فيها كم ساعة؟ ",
  "تقدر تسيطر على ضحكتك؟ ",
  "أول حرف من اسم الحب؟ ",
  "تحب تحافظ على الذكريات ولا تمسحه؟ ",
  "اسم اخر شخص زعلك؟ ",
"وش نوع الأفلام اللي تحب تتابعه؟ ",
  "أنت انسان غامض ولا الكل يعرف عنك؟ ",
  "لو الجنسية حسب ملامحك وش بتكون جنسيتك؟ ",
  "عندك أخوان او خوات من الرضاعة؟ ",
  "إختصار تحبه؟ ",
  "إسم شخص وتحس أنه كيف؟ ",
  "وش الإسم اللي دايم تحطه بالبرامج؟ ",
  "وش برجك؟ ",
  "لو يجي عيد ميلادك تتوقع يجيك هدية؟ ",
  "اجمل هدية جاتك وش هو؟ ",
  "الصداقة ولا الحب؟ ",
"الصداقة ولا الحب؟ ",
  "الغيرة الزائدة شك؟ ولا فرط الحب؟ ",
  "قد حبيت شخصين مع بعض؟ وانقفطت؟ ",
  "وش أخر شي ضيعته؟ ",
  "قد ضيعت شي ودورته ولقيته بيدك؟ ",
  "تؤمن بمقولة اللي يبيك مايحتار فيك؟ ",
  "سبب وجوك بالتليجرام؟ ",
  "تراقب شخص حاليا؟ ",
  "عندك معجبين ولا محد درا عنك؟ ",
  "لو نسبة جمالك بتكون بعدد شحن جوالك كم بتكون؟ ",
  "أنت محبوب بين الناس؟ ولاكريه؟ ",
"كم عمرك؟ ",
  "لو يسألونك وش اسم امك تجاوبهم ولا تسفل فيهم؟ ",
  "تؤمن بمقولة الصحبة تغنيك الحب؟ ",
  "وش مشروبك المفضل؟ ",
  "قد جربت الدخان بحياتك؟ وانقفطت ولا؟ ",
  "أفضل وقت للسفر؟ الليل ولا النهار؟ ",
  "انت من النوع اللي تنام بخط السفر؟ ",
  "عندك حس فكاهي ولا نفسية؟ ",
  "تبادل الكراهية بالكراهية؟ ولا تحرجه بالطيب؟ ",
  "أفضل ممارسة بالنسبة لك؟ ",
  "لو قالو لك تتخلى عن شي واحد تحبه بحياتك وش يكون؟ ",
"لو احد تركك وبعد فتره يحاول يرجعك بترجع له ولا خلاص؟ ",
  "برأيك كم العمر المناسب للزواج؟ ",
  "اذا تزوجت بعد كم بتخلف عيال؟ ",
  "فكرت وش تسمي أول اطفالك؟ ",
  "من الناس اللي تحب الهدوء ولا الإزعاج؟ ",
  "الشيلات ولا الأغاني؟ ",
  "عندكم شخص مطوع بالعايلة؟ ",
  "تتقبل النصيحة من اي شخص؟ ",
  "اذا غلطت وعرفت انك غلطان تحب تعترف ولا تجحد؟ ",
  "جربت شعور احد يحبك بس انت مو قادر تحبه؟ ",
  "دايم قوة الصداقة تكون بإيش؟ ",
"أفضل البدايات بالعلاقة بـ وش؟ ",
  "وش مشروبك المفضل؟ او قهوتك المفضلة؟ ",
  "تحب تتسوق عبر الانترنت ولا الواقع؟ ",
  "انت من الناس اللي بعد ماتشتري شي وتروح ترجعه؟ ",
  "أخر مرة بكيت متى؟ وليش؟ ",
  "عندك الشخص اللي يقلب الدنيا عشان زعلك؟ ",
  "أفضل صفة تحبه بنفسك؟ ",
  "كلمة تقولها للوالدين؟ ",
  "أنت من الناس اللي تنتقم وترد الاذى ولا تحتسب الأجر وتسامح؟ ",
  "كم عدد سنينك بالتليجرام؟ ",
  "تحب تعترف ولا تخبي؟ ",
"انت من الناس الكتومة ولا تفضفض؟ ",
  "أنت بعلاقة حب الحين؟ ",
  "عندك اصدقاء غير جنسك؟ ",
  "أغلب وقتك تكون وين؟ ",
  "لو المقصود يقرأ وش بتكتب له؟ ",
  "تحب تعبر بالكتابة ولا بالصوت؟ ",
  "عمرك كلمت فويس احد غير جنسك؟ ",
  "لو خيروك تصير مليونير ولا تتزوج الشخص اللي تحبه؟ ",
  "لو عندك فلوس وش السيارة اللي بتشتريها؟ ",
  "كم أعلى مبلغ جمعته؟ ",
  "اذا شفت احد على غلط تعلمه الصح ولا تخليه بكيفه؟ ",
"قد جربت تبكي فرح؟ وليش؟ ",
  "تتوقع إنك بتتزوج اللي تحبه؟ ",
  "ما هو أمنيتك؟ ",
  "وين تشوف نفسك بعد خمس سنوات؟ ",
  "هل انت حرامي تويت بتعت عبدالله محمد؟ ",
  "لو خيروك تقدم الزمن ولا ترجعه ورا؟ ",
  "لعبة قضيت وقتك فيه بالحجر المنزلي؟ ",
  "تحب تطق الميانة ولا ثقيل؟ ",
  "باقي معاك للي وعدك ما بيتركك؟ ",
  "اول ماتصحى من النوم مين تكلمه؟ ",
  "عندك الشخص اللي يكتب لك كلام كثير وانت نايم؟ ",
  "قد قابلت شخص تحبه؟ وولد ولا بنت؟ ",
   "هل انت تحب عبدالله محمد؟ ",
"اذا قفطت احد تحب تفضحه ولا تستره؟ ",
  "كلمة للشخص اللي يسب ويسطر؟ ",
  "آية من القران تؤمن فيه؟ ",
  "تحب تعامل الناس بنفس المعاملة؟ ولا تكون أطيب منهم؟ ",
"حاجة ودك تغيرها هالفترة؟ ",
  "كم فلوسك حاليا وهل يكفيك ام لا؟ ",
  "وش لون عيونك الجميلة؟ ",
  "من الناس اللي تتغزل بالكل ولا بالشخص اللي تحبه بس؟ ",
  "اذكر موقف ماتنساه بعمرك؟ ",
  "وش حاب تقول للاشخاص اللي بيدخل حياتك؟ ",
  "ألطف شخص مر عليك بحياتك؟ ",
   "هل عبدالله محمد لطيف؟ ",
"انت من الناس المؤدبة ولا نص نص؟ ",
  "كيف الصيد معاك هالأيام ؟ وسنارة ولاشبك؟ ",
  "لو الشخص اللي تحبه قال بدخل حساباتك بتعطيه ولا تكرشه؟ ",
  "أكثر شي تخاف منه بالحياه وش؟ ",
  "اكثر المتابعين عندك باي برنامج؟ ",
  "متى يوم ميلادك؟ ووش الهدية اللي نفسك فيه؟ ",
  "قد تمنيت شي وتحقق؟ ",
  "قلبي على قلبك مهما صار لمين تقولها؟ ",
  "وش نوع جوالك؟ واذا بتغيره وش بتأخذ؟ ",
  "كم حساب عندك بالتليجرام؟ ",
  "متى اخر مرة كذبت؟ ",
"كذبت في الاسئلة اللي مرت عليك قبل شوي؟ ",
  "تجامل الناس ولا اللي بقلبك على لسانك؟ ",
  "قد تمصلحت مع أحد وليش؟ ",
  "وين تعرفت على الشخص اللي حبيته؟ ",
  "قد رقمت او احد رقمك؟ ",
  "وش أفضل لعبته بحياتك؟ ",
  "أخر شي اكلته وش هو؟ ",
  "حزنك يبان بملامحك ولا صوتك؟ ",
  "لقيت الشخص اللي يفهمك واللي يقرا افكارك؟ ",
  "فيه شيء م تقدر تسيطر عليه ؟ ",
  "منشن شخص متحلطم م يعجبه شيء؟ ",
"اكتب تاريخ مستحيل تنساه ",
  "شيء مستحيل انك تاكله ؟ ",
  "تحب تتعرف على ناس جدد ولا مكتفي باللي عندك ؟ ",
  "انسان م تحب تتعامل معاه ابداً ؟ ",
  "شيء بسيط تحتفظ فيه؟ ",
  "فُرصه تتمنى لو أُتيحت لك ؟ ",
   "لي عبدالله محمد ناك اليكس؟ ",
  "شيء مستحيل ترفضه ؟. ",
  "لو زعلت بقوة وش بيرضيك ؟ ",
  "تنام بـ اي مكان ، ولا بس غرفتك ؟ ",
  "ردك المعتاد اذا أحد ناداك ؟ ",
  "مين الي تحب يكون مبتسم دائما ؟ ",
" إحساسك في هاللحظة؟ ",
  "وش اسم اول شخص تعرفت عليه فالتلقرام ؟ ",
  "اشياء صعب تتقبلها بسرعه ؟ ",
  "شيء جميل صار لك اليوم ؟ ",
  "اذا شفت شخص يتنمر على شخص قدامك شتسوي؟ ",
  "يهمك ملابسك تكون ماركة ؟ ",
  "ردّك على شخص قال (أنا بطلع من حياتك)؟. ",
  "مين اول شخص تكلمه اذا طحت بـ مصيبة ؟ ",
  "تشارك كل شي لاهلك ولا فيه أشياء ما تتشارك؟ ",
  "كيف علاقتك مع اهلك؟ رسميات ولا ميانة؟ ",
  "عمرك ضحيت باشياء لاجل شخص م يسوى ؟ ",
"اكتب سطر من اغنية او قصيدة جا فـ بالك ؟ ",
  "شيء مهما حطيت فيه فلوس بتكون مبسوط ؟ ",
  "مشاكلك بسبب ؟ ",
  "نسبه الندم عندك للي وثقت فيهم ؟ ",
  "اول حرف من اسم شخص تقوله? بطل تفكر فيني ابي انام؟ ",
  "اكثر شيء تحس انه مات ف مجتمعنا؟ ",
  "لو صار سوء فهم بينك وبين شخص هل تحب توضحه ولا تخليه كذا  لان مالك خلق توضح ؟ ",
  "كم عددكم بالبيت؟ ",
  "عادي تتزوج من برا القبيلة؟ ",
  "أجمل شي بحياتك وش هو؟ "
             ]
                           const Chikuhdudhww = hdudh[Math.floor(Math.random() * hdudh.length)]
                           buffer = await getBuffer(`https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg`)
                           Chiku.sendMessage(from, { image: buffer, caption: '*♚ مرحبا بك في قسم تويت*\nꔹ━━━━━ꔹ\n'+ Chikuhdudhww }, {quoted:m})
                           break


case 'jfysudh': case 'فزوره': 
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
	Chiku.sendMessage(from, { react: { text: "🪅" , key: m.key }})
		
                           const jfysudh =[
"ايه الحاجه اللي لازم تكسرها قبل ما تستخدها؟ ", 
" ما هو الحيوان الذي لا يبيض ولا يلد؟ ", 
" عقرب لا يخاف منه احد وغير مؤذي؟ ", 
" من هو الانسان الذي قتل ربع سكان العالم؟ ", 
" ما هو االشي الذي ترميه قبل ان تستخدمه؟ ", 
" تأكل ولا تشبع ما هي؟ ", 
"الماء ابوه ولكن اذا وضعناه مع الماء يموت؟ ", 
"ما الشيء الذي كلما اخذت منه كبر؟ ", 
" اخت خالك ومش خالتك مين هي؟ ", 
"شئ امامك ولن تراه؟ ", 
"من هو الخال الوحيد لأولاد عمتك؟ ", 
"ما هو الشيء الذي يقرصك دون ان تراه؟ ", 
" شئ يخترق الزجاج ولا يكسره؟ ", 
" ما هي الصلاة التي لا نسجد ولا نركع فيها؟ ", 
" شئ لو وضعته في الثلاجه لا يبرد؟ ", 
"ما هي السورة التي بدأت وانتهت بالتسبيح؟ ", 
" ما هي السور التي تسمى بمواقيت الصلاة؟", 
" كم عدد كلمات آية الكرسي؟", 
" ما هي السورة الملقبة بقلب القرآن؟", 
" ماهو الشيء الذي له أربع أرجل ولا يمشي ؟", 
" ايهما اثقل كيلو اسفنج ام كيلو من حديد ؟", 
"شىء اخف من الريش ومع ذلك لايمكن الامساك به طويلا؟ ", 
"ماهو الشىء الذى ليس بإنسان ولا حيوان ولا جماد؟ ", 
"ما هو الشّيء الّذي يَكتُب ولا يقرأ؟ ", 
" ما هو الشّيء الّذي إذا لمسته أصدر صوتاً؟", 
" ما هو الشيء الّذي لا يؤكل في الليل أبداً؟", 
"شيء يتحدث ويتكلم بدون لسان ولا أذنين؟ ", 
"ما هو الشيء الّذي ليس له بداية ولا نهاية؟ ", 
" فاكهة لونها مثل اسمها؟", 
" شيء ينبض دون أن يكون له قلب فما هو؟", 
" أين يوجد البحر الذي لا يوجد به ماء؟", 
" يسير على الماء ولكنه لا يبتل.. فما هو؟", 
"ما هو الشيء الذي كلما تحرك خسر جزءًا من ذيله؟ ", 
" ما هو الشيء الذي له رأس ولكن ليس له عين؟", 
"ما هو الشيء الذي يوجد في السماء وإذا أضفنا إليه حرفا أصبح شيء يوجد في الأرض؟ ", 
" ماهو الشيء الذي لا تحب ان تلبسه وإذا لبسته لا تراه ؟", 
"ما هو الشيء عندما يكون لونه اسود لا يكون نافع ولكن عندما يكون لونه احمر يكون نافع؟ ", 
"من هو الشخص الذي يكون ابن أمك وأبيك ولكن ليس أخيك؟ ", 
"من هو الذي مات ولم يولد؟ ", 
" ما هو الشيء الذي إن غليـته جمد؟", 
" ماهو الشيء الذي تأكل منه مع إنه لا يؤكل؟", 
" ماهو الشيء الذي كلما زاد نقص؟"
             ]
                           const Chikujfysudhww = jfysudh[Math.floor(Math.random() * jfysudh.length)]
                           buffer = await getBuffer(`https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg`)
                           Chiku.sendMessage(from, { image: buffer, caption: '*♚ مرحبا بك في قسم الفوازير*\nꔹ━━━━━ꔹ\n'+ Chikujfysudhww }, {quoted:m})
                           break

case 'nsfwChiku':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.wait)
nye = `http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=${command}`
Chiku.sendMessage(from, {image:{url:nye}, caption:"Master..."}, {quoted:m})
break

case 'ميديافاير': case 'mediafire': {
	if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!text) return reply(mess.linkm)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`اللينك غلط`)
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return reply('*حد الملف* '+util.format(baby1))
const result4 = `『 *تحميل ميديافاير* 』
				
*الاسم* : ${baby1[0].nama}
*الحجم* : ${baby1[0].size}
*التحميل* : ${baby1[0].mime}
*لينك* : ${baby1[0].link}`
reply(`${result4}`)
Chiku.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(mess.error))
}
break

case 'masturbation': case 'jahy': case 'hentai': case 'glasses': case 'gangbang': case 'foot': 
case 'femdom': case 'cum': case 'ero': case 'cuckold': case 'blowjob': case 'bdsm': 
case 'ahegao': case 'ass': case 'orgy': case 'panties': case 'pussy': case 'thighs': case 'yuri': case 'tentacles':
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
if (!AntiNsfw) return reply(mess.nonsfw)
try{
reply(mess.waiting)
NoHorny = await fetchJson(`https://myselfff.herokuapp.com/docs/nsfw/${command}`)
YesHorny = await getBuffer(NoHorny.result)
Chiku.sendMessage(from, {image:YesHorny},{quoted:m})
} catch (e) {error("Error")}	
break

case 'spank':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
spankd = await axios.get(`https://nekos.life/api/v2/img/spank`)                                   
  let spbuff = await getBuffer(spankd.data.url)
let spgif = await GIFBufferToVideoBuffer(spbuff)   
        await Chiku.sendMessage(m.chat,{video: spgif, gifPlayback:true},{ quoted:m }).catch(err => {
                    return reply('Error!')
                                    })
break

case 'blowjobgif': case 'bj' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
bjd = await axios.get(`https://api.waifu.pics/nsfw/blowjob`)         
  let bjf = await getBuffer(bjd.data.url)
let bjif = await GIFBufferToVideoBuffer(bjf)   
        await Chiku.sendMessage(m.chat,{video: bjif, gifPlayback:true},{ quoted:m }).catch(err => {
                    return reply('error..')
                                    })
break

case 'hentaivid': case 'hentaivideo': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
anu = await hentai()
result912 = anu[Math.floor(Math.random(), anu.length)]
Chiku.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `Title : ${result912.title}\nCategory : ${result912.category}\n$Mimetype : ${result912.type}\nViews : ${result912.views_count}\nShares : ${result912.share_count}\nSource : ${result912.link}\nMedia Url : ${result912.video_1}` }, { quoted: m })
}
break

case 'trap' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
 let trapbot = [
    {buttonId: `${prefix}trap`, buttonText: {displayText: `الصوره التاليه⏪`}, type: 1},
    ]
  let button2Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here it is...`,
  buttons: trapbot,
  headerType: 1
  }     
            await Chiku.sendMessage(m.chat, button2Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break

case 'hentai-neko' :
case 'hneko' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 let hnekobot = [
    {buttonId: `${prefix + command}`, buttonText: {displayText: `الصوره التاليه⏪`}, type: 1},
    ]
  let button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Nyaah...`,
  buttons: hnekobot,
  headerType: 1
  }      
            await Chiku.sendMessage(m.chat, button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break

case 'hentai-waifu' :
case 'hwaifu' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
 let nwaifubot = [
    {buttonId: `${prefix + command}`, buttonText: {displayText: `الصوره التاليه⏪`}, type: 1},
    ]
  let button4Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here it is...`,
  buttons: nwaifubot,
  headerType: 1
  }      
            await Chiku.sendMessage(m.chat, button4Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break

case 'gasm':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `${prefix}gasm`, buttonText: {displayText: `الصوره التاليه⏪`}, type: 1},
        ]
      let buttonsssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here it is...`,
      footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Chiku.sendMessage(m.chat, buttonsssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break  


case 'smug2':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/smug`)
                           var wbuttsss = [
        {buttonId: `${prefix}smug2`, buttonText: {displayText: `الصوره التاليه⏪`}, type: 1},
        ]
      let button1ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here it is...`,
      footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Chiku.sendMessage(m.chat, button1ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break

case 'foxgirl':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)
                           var wbuttsss = [
        {buttonId: `${prefix}foxgirl`, buttonText: {displayText: `الصوره التاليه⏪`}, type: 1},
        ]
      let button12ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Awooo...`,
      footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Chiku.sendMessage(m.chat, button12ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break   

case 'animenom' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)
    waifudd = await axios.get(`https://waifu.pics/api/sfw/nom`)
 let xxhnekobot = [
    {buttonId: `${prefix}animenom`, buttonText: {displayText: `الصوره التاليه⏪`}, type: 1},
    ]
  let xx1button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here it is...`,
  buttons: xxhnekobot,
  headerType: 1
  }      
            await Chiku.sendMessage(m.chat, xx1button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break

case 'waifu3':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)
                           var wbuttsss = [
        {buttonId: `${prefix}waifu3`, buttonText: {displayText: `الصوره التاليه⏪`}, type: 1},
        ]
      let button112ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here it is...`,
      footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Chiku.sendMessage(m.chat, button112ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break



case 'crossplay': case 'crosplay': case 'cosplay':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
                const buttons = [
        {buttonId: '-crossplay', buttonText: {displayText: 'الصوره التاليه⏪'}, type: 1},
            ]               
        const cosplybutton = {
        image: {url: 'https://fantox-cosplay-api.onrender.com/'},
        caption: "Guess who am i...",
        footer: `${global.BotName}`,
        buttons: buttons,
        headerType: 4
        }
                  
        await Chiku.sendMessage(m.chat,cosplybutton, { quoted:m }).catch(err => {
            return('Error!')
        })  

        break




case 'neko2':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
   waifud = await axios.get('https://waifu.pics/api/sfw/neko')
                var wbutsss = [
        {buttonId: `${prefix}neko2`, buttonText: {displayText: `الصوره التاليه⏪`}, type: 1},
        ]
      let buttonssMessage = {
       image: {url:waifud.data.url},
       caption:  `Here it is...`,
      footer: `${global.BotName}`,
      buttons: wbutsss,
      headerType: 4
      }
            await Chiku.sendMessage(m.chat,buttonssMessage, { quoted:m }).catch(err => {
                    return('Error!')
                })               
                break



case 'feed':
case 'meow':
case 'tickle':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `${prefix + command}`, buttonText: {displayText: `الصوره التاليه⏪`}, type: 1},
        ]
      let buttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here it is...`,
      footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Chiku.sendMessage(m.chat, buttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

case 'cry':  case 'handhold':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
 Chiku.sendMessage(from, { react: { text: "❤" , key: m.key }})
	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} ${command}ed with themself!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} ${command}ed with @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Chiku.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

case 'nom':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} is eating with themself!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} is eating with @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Chiku.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

case 'hug':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} hugged themself!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} hugged @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Chiku.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break


case 'dance':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} is dancing alone!!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} is dancing with @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Chiku.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

case 'kill': case 'pat': case 'lick': case 'kiss': case 'bite':
case 'bully': case 'bonk': case 'poke': case 'slap':
case 'happy':
case 'cuddle': case 'kick':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} ${command}ed themselves!!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} ${command}ed  @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Chiku.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break



case 'yeet':
case 'wink': case 'smile':
case 'wave': case 'blush': case 'smug': case 'glomp':
case 'cringe': case 'highfive':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} ${command}ed at themself!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} ${command}ed at @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Chiku.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/*

case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': case 'kiss': case 'bite': case 'yeet':
case 'bully': case 'bonk': case 'wink': case 'poke': case 'nom': case 'slap': case 'smile':
case 'wave': case 'blush': case 'smug': case 'glomp': case 'happy': case 'dance':
case 'cringe': case 'cuddle': case 'highfive': case 'handhold': case 'kick':

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)						
resggh = await axios.get(`https://nekos.life/api/v2/img/${command}`)         
let resffj = await getBuffer(resggh.data.url)
let resmain = await GIFBufferToVideoBuffer(resffj)   
      await Chiku.sendMessage(m.chat,{video: resmain, gifPlayback:true},{ quoted:m }).catch(err => {
                  return reply('error..')
                                  })
break

*/




case 'megumin':
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
ud = await axios.get('https://waifu.pics/api/sfw/megumin')
var wbutsss = [
    {buttonId: `${prefix}megumin`, buttonText: {displayText: `الصوره التاليه⏪`}, type: 1},
         ]
      let buttonzMessage = {
      image: {url:ud.data.url},
       caption:  `Here it is...`,
      footer: `${global.BotName}`,
          buttons: wbutsss,
     headerType: 4
                      }
await Chiku.sendMessage(m.chat,buttonzMessage, { quoted:m }).catch(err => {
     return('Error!')
    })               
break     

case 'awoo':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    reply(mess.waiting)						
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)
 var wbuttsss = [
    {buttonId: `${prefix}awoo`, buttonText: {displayText: `الصوره التاليه⏪`}, type: 1},
    ]
  let button1Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here it is...`,
   footer: `${global.BotName}`,
  buttons: wbuttsss,
  headerType: 2
  }       
            await Chiku.sendMessage(m.chat, button1Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break


case 'animewall2': case 'animewallpaper2':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    reply(mess.waiting)						
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return reply('Please enter a seach term!')
const wall = new AnimeWallpaper();
    const pages = [1,2,3,4];
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null);
const i = Math.floor(Math.random() * wallpaper.length);
var walb = [
        {buttonId: `${prefix}animewall2 ${q}`, buttonText: {displayText: `الصوره التاليه⏪`}, type: 1},        
        ]
      let wal = {
       image: {url:wallpaper[i].image},
       caption: `*Search Term :* ${q}`,
      footer: `${global.BotName}`,
      buttons: walb,
      headerType: 4
      }     
            await Chiku.sendMessage(m.chat, wal,{ quoted:m }).catch(err => {
                    return('Error!')
                })          
break


case 'انمي':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
	    if(!q) return reply(`يرجى تقديم مصطلح البحث!\n\n*مثال:* ${prefix}anime naruto`)
reply(mess.waiting)							
const { Anime } =require("@shineiichijo/marika")
    const client = new Anime();
     let anime = await client.searchAnime(q)
    let result = anime.data[0];
    console.log(result)
   let details = `*العنوان:* ${result.title}\n`;
    details += `*الشكل:* ${result.type}\n`;
    details += `*الحاله:* ${result.status.toUpperCase().replace(/\_/g, " ")}\n`;
    details += `*مجموع الحلقات:* ${result.episodes}\n`;
    details += `*المده:* ${result.duration}\n`;
    details += `*الانواع:*\n`;
    for (let i = 0; i < result.genres.length; i++) {
      details += `\t\t\t\t\t\t\t\t${result.genres[i].name}\n`;
    }
    details += `*مرتكز على:* ${result.source.toUpperCase()}\n`;
    details += `*استوديوهات:*\n`;
    for (let i = 0; i < result.studios.length; i++) {
      details += `\t\t\t\t\t\t\t\t${result.studios[i].name}\n`;
    }
    details += `*منتجين:*\n`;
    for (let i = 0; i < result.producers.length; i++) {
      details += `\t\t\t\t\t\t\t\t\t\t${result.producers[i].name}\n`;
    }
    details += `*عرض لأول مرة في:* ${result.aired.from}\n`;
    details += `*انتهى في:* ${result.aired.to}\n`;
    details += `*شعبية:* ${result.popularity}\n`;
    details += `*المفضلة:* ${result.favorites}\n`;
    details += `*تقييم:* ${result.rating}\n`;
    details += `*مرتبه:* ${result.rank}\n\n`;
    if (result.trailer.url !== null)
      details += `*جَرَّار:* ${result.trailer.url}\n\n`;
    details += `*الرابط:* ${result.url}\n\n`;
    if (result.background !== null)
      details += `*خلفيه:* ${result.background}\n\n`;
    details += `*الوصف:* ${result.synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`
Chiku.sendMessage(m.chat,{image:{url:result.images.jpg.large_image_url},caption:details},{quoted:m})   
break

case 'مانجا':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly) 
	Chiku.sendMessage(from, { react: { text: "🍁" , key: m.key }})
		
reply(mess.waiting)							
const { Manga } =require("@shineiichijo/marika")
const manga = new Manga();
if(!q) return reply(`Please proide a search term!\n\n_Example:_ ${prefix}manga naruto`)
let srh = await manga.searchManga(q)
    let mang = `*Title:* ${srh.data[0].title}\n`;
    mang += `*Status:* ${srh.data[0].status}\n`;
    mang += `*Total Volumes:* ${srh.data[0].volumes}\n`;
    mang += `*Total Chapters:* ${srh.data[0].chapters}\n`;
    mang += `*Genres:*\n`;
    for (let i = 0; i < srh.data[0].genres.length; i++) {
      mang += `\t\t\t\t\t\t\t\t${srh.data[0].genres[i].name}\n`;
    }
    mang += `*Published on:* ${srh.data[0].published.from}\n`;
    mang += `*Score:* ${srh.data[0].scored}\n`;
    mang += `*Popularity:* ${srh.data[0].popularity}\n`;
    mang += `*Favorites:* ${srh.data[0].favorites}\n`;
    mang += `*Authors:*\n`;
    for (let i = 0; i < srh.data[0].authors.length; i++) {
      mang += `\t\t\t\t\t\t\t\t\t${srh.data[0].authors[i].name} (${srh.data[0].authors[0].type})\n`;
    }
    mang += `\n*URL:* ${srh.data[0].url}\n\n`;
    if (srh.data[0].background !== null)
      mang += `*Background:* ${srh.data[0].background}`;
    mang += `*Description:* ${srh.data[0].synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`;
Chiku.sendMessage(m.chat,{image:{url:srh.data[0].images.jpg.large_image_url},caption:mang},{quoted:m})   
break



case 'waifu' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)	
    waifuddd = await axios.get('https://waifu.pics/api/sfw/waifu')
 var wbuttsssr = [
    {buttonId: `${prefix}waifu`, buttonText: {displayText: `الصوره التاليه⏪`}, type: 1},
    ]
        let button4Messagess = {
        image: {url:waifuddd.data.url},
        caption: 'More than one waifu will definitely ruin your Laifu!',
        buttons: wbuttsssr,
        headerType: 4
         }     
                                  
    await Chiku.sendMessage(m.chat, button4Messagess, { quoted:m }).catch(err => {
        return('error..')
        })
break

case 'neko' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)	
    waifuddd = await axios.get('https://waifu.pics/api/sfw/neko')
 var wbuttsssr = [
    {buttonId: `${prefix}neko`, buttonText: {displayText: `الصوره التاليه⏪`}, type: 1},
    ]
        let buttonMessagessf = {
        image: {url:waifuddd.data.url},
        caption: 'Nyaa...',
        buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await Chiku.sendMessage(m.chat, buttonMessagessf, { quoted:m }).catch(err => {
        return('error..')
        })
break


case 'loli' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)	
    waifuddd = await axios.get('https://waifu.pics/api/sfw/shinobu')
 var wbuttsssr = [
    {buttonId: `${prefix}loli`, buttonText: {displayText: `الصوره التاليه⏪`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'Dont be a lolicon !',
        buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await Chiku.sendMessage(m.chat, buttonMessagessfgr, { quoted:m }).catch(err => {
        return('error..')
        })
break


case 'lyrics': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
 Chiku.sendMessage(from, { react: { text: "🍁" , key: m.key }})
if (!text) return reply(`Comand usage: ${prefix}lyrics Thunder`)
reply(mess.waiting)	
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
reply(`
*Title :* ${result.title}
*Author :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim())
}
break


case "quotes":
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
var res = await Quotes()
teks = `\n*Author:* ${res.author}\n`
teks += `\n*Quotes:*\n`
teks += `${res.quotes}\n`

replay(teks)
break

case "darkjoke":
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
var res = await Darkjokes()
teks = "\nDarkjokes"
Chiku.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
break

case 'leavegc': case 'اخرج': case 'غادر': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
        reply(mess.waiting)
                    if (!isCreator) return replay(`${mess.botowner}`)
                    await Chiku.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
                break


case 'bc': case 'شير': case 'اذاعه': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
if (!args.join(" ")) return replay(`الرجاء إدخال نص للبث! \n\nمثال : ${prefix + command} ${global.OwnerName}`)
let anu = await store.chats.all().map(v => v.id)
replay(`إرسال البث إلى ${anu.length} شات\nانتهى الوقت في ${anu.length * 1.5} ثانيه`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
quickReplyButton: {
displayText: '⋆ القائمه •',
id: '.menu'
}  
}, {
quickReplyButton: {
displayText: '⋆ مبرمج البوت •',
id: '.owner'
}
}]
let txt = `𓆩  *${global.OwnerName}'اذاعه للكل*  𓆪\n\n${text}`
Chiku.send5ButImg(yoi, txt, `${global.BotName}`, BotLogo, btn, Thumb)
}
replay('تم الاذاعه بنجاح !')
}
break    


case 'help': case 'القائمه': case 'menu': case 'بوت': case 'الاوامر':case 'اوامر':{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    Chiku.sendMessage(from, { react: { text: "📂" , key: m.key }})
      
 const helpmenu = `
•╗ مرحبا ياعزيزي ⤌⤈       
𓆩 *${pushname}* 𓆪
•╣ انا بوت واتس اسمي
𓆩 *${global.BotName}* 𓆪
•╣ اعمل في الخاص وجروبات
•╣ وظيفتي حماية جروبك
•╣ اكتب كلمه .الاوامر لمعرفه
•╣ اوامر البوت وطريقه الاستخدام
•╣ مميزات البوت كثيره جدا 
•╝ ويعمل بجودة فائقه وعاليه
𓍹————————————𓍻
𓆩قائمة اوامر سورس الجزار𓆪 
𓍹————————————𓍻
( .م1 ) ☞ اوامر الاعضاء
( .م2 ) ☞ اوامر المالك
( .م3 ) ☞  اوامر الجروبات
( .م4 ) ☞ اوامر البحث وتنزيل
( .م5 ) ☞ اوامر التحويل
( .م6 ) ☞ اوامر تغيير الصوت
( .م7 ) ☞ اوامر التسليه
( .م8 ) ☞ اوامر البنك
( .م9 ) ☞ لعرض جميع الاومر
.المميزات ☞ لعرض مميزات البوت
.المطور ☞ لعرض مطور البوت
.السورس ☞ لعرض المبرمج
`


    let buttonshelpm = [

    {buttonId: `.owner`, buttonText: {displayText: '⋆ مبرمج البوت •'}, type: 1}

    ]
                let buttonMessage = {
                  image:fs.readFileSync('./system/elgazar.jpg'),gifPlayback:true,
                    caption: helpmenu,
                    footer: `${global.BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4
                    
                }
            Chiku.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break
 
 
 case 'م1': case 'اوامر الاعضاء': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    Chiku.sendMessage(from, { react: { text: "1️⃣" , key: m.key }})
      
 const helpmenu = `
• مرحبا ياروحي ⤌⤈       
𓆩 *${pushname}* 𓆪
𓍹——————————𓍻
𓆩اليك قائمة باوامر الاعضاء𓆪 
𓍹——————————𓍻
( .ايدي )
♚ لمعرفة معلوماتك 
ꔹ━━━━━ꔹ
( .التنصيب )
♚ لعرض روابط وصنع بوت مشابه
ꔹ━━━━━ꔹ
( .الدعم )
♚ لعرض رابط الدعم 
ꔹ━━━━━ꔹ
( .المطور )
♚ لمعرفه مطور البوت 
ꔹ━━━━━ꔹ
( .انطق )
♚ البوت ينطق المكتوب
ꔹ━━━━━ꔹ
( .باركود )
♚ يجلب لك الباركود مباشر
`


    let buttonshelpm = [

    {buttonId: `.owner`, buttonText: {displayText: '⋆ مبرمج البوت •'}, type: 1}

    ]
                let buttonMessage = {
                  image:fs.readFileSync('./system/elgazar.jpg'),gifPlayback:true,
                    caption: helpmenu,
                    footer: `${global.BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4
                    
                }
            Chiku.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break

case 'مميزات': case 'المميزات': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    Chiku.sendMessage(from, { react: { text: "🔮" , key: m.key }})
      
 const helpmenu = `
مرحبا ياروحي ⤌⤈       
𓆩 *${pushname}* 𓆪
𓍹——————————𓍻
𓆩اليك قائمة بمميزات البوت𓆪 
𓍹——————————𓍻
( .اذكار )
♚ البوت يرسل لك اذكار عشوائيه
ꔹ━━━━━ꔹ
( .تويت )
♚ البوت يسالك اساله حياتيه
ꔹ━━━━━ꔹ
( .انصح )
♚ البوت يبعتلك نصايح عشوائيه
ꔹ━━━━━ꔹ
( .صراحه )
♚ البوت يبعتلك اسئله صراحه
ꔹ━━━━━ꔹ
( .اسال )
♚ البوت يسالك ونت جاوب
ꔹ━━━━━ꔹ
( .خيروك )
♚ البوت يخيرك بين حاجتين
ꔹ━━━━━ꔹ
( .فزوره )
♚ البوت يجيب لك فوازير
ꔹ━━━━━ꔹ
( .كت )
♚ البوت يجيب اسماء انمي
ꔹ━━━━━ꔹ
( .بوست )
♚ البوت يرسلك لك بوست عشوائي
ꔹ━━━━━ꔹ
( .حروف )
♚ البوت يرسلك حروف تكملها
`


    let buttonshelpm = [

    {buttonId: `.owner`, buttonText: {displayText: '⋆ مبرمج البوت •'}, type: 1}

    ]
                let buttonMessage = {
                  image:fs.readFileSync('./system/elgazar.jpg'),gifPlayback:true,
                    caption: helpmenu,
                    footer: `${global.BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4
                    
                }
            Chiku.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break

case 'م2': case 'اوامر المالك': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    Chiku.sendMessage(from, { react: { text: "2️⃣" , key: m.key }})
      
 const helpmenu = `
• مرحبا ياروحي ⤌⤈       
𓆩 *${pushname}* 𓆪
𓍹——————————𓍻
𓆩اليك قائمة باوامر المالك𓆪
𓍹——————————𓍻
( .عام )
♚ يجعل البوت عام للجميع  
ꔹ━━━━━ꔹ
( .خاص )
♚ يجعل البوت خاص للمالك فقط
ꔹ━━━━━ꔹ
( .حظر )
♚ حظر شخص من استخدام البوت 
ꔹ━━━━━ꔹ
( .بان )
♚ حظر اي جروب من استخدام البوت 
ꔹ━━━━━ꔹ
( .اخرج )
♚ خروج البوت من الجروب 
ꔹ━━━━━ꔹ
( .انضم )
♚ ينضم البوت لجروب عبر الرابط
ꔹ━━━━━ꔹ
( .بلوك )
♚ عمل بلوك لشخص من البوت 
ꔹ━━━━━ꔹ
( .فك-البلوك )
♚ الغاء البلوك عن الشخص 
ꔹ━━━━━ꔹ
( .شير )
♚ عمل شير لكل الجروبات في البوت
`


    let buttonshelpm = [

    {buttonId: `.owner`, buttonText: {displayText: '⋆ مبرمج البوت •'}, type: 1}

    ]
                let buttonMessage = {
                  image:fs.readFileSync('./system/elgazar.jpg'),gifPlayback:true,
                    caption: helpmenu,
                    footer: `${global.BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4
                    
                }
            Chiku.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break

case 'م3': case 'اوامر الجروب': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    Chiku.sendMessage(from, { react: { text: "3️⃣" , key: m.key }})
      
 const helpmenu = `
• مرحبا ياروحي ⤌⤈       
𓆩 *${pushname}* 𓆪
𓍹——————————𓍻
𓆩اليك قائمة باوامر الجروب𓆪
𓍹——————————𓍻
( .منشن )
♚ منشن جماعي لكل الاعضاء
ꔹ━━━━━ꔹ
( .المشرفين )
♚ منشن لكل المشرفين
ꔹ━━━━━ꔹ
( .مخفي )
♚ منشن مخفي لكل الاعضاء 
ꔹ━━━━━ꔹ
( .المتصلين )
♚ يجيب لك الاعضاء المتصله
ꔹ━━━━━ꔹ
( .حذف )
♚ حذف رسالة البوت والاعضاء
ꔹ━━━━━ꔹ
( .الرابط )
♚ جلب رابط الجروب 
ꔹ━━━━━ꔹ
( .رستر )
♚ رستارت لرابط الجروب 
ꔹ━━━━━ꔹ
( .رفع )
♚ رفع عضو لمشرف 
ꔹ━━━━━ꔹ
( .تنزيل )
♚ تنزيل عضو من المشرف 
ꔹ━━━━━ꔹ
( .تغيرالاسم )
♚ تغيير اسم الجروب 
ꔹ━━━━━ꔹ
( .تغيرالبايو )
♚ تغيير وصف الجروب 
ꔹ━━━━━ꔹ
( .تغيرالصوره )
♚ تغيير صورة الجروب 
ꔹ━━━━━ꔹ
( .جروب )
♚ غلق وفتح الجروب 
ꔹ━━━━━ꔹ
( .طرد )
♚ طرد شخص من الجروب 
ꔹ━━━━━ꔹ
( .اضافه )
♚ اضافه شخص للجروب
ꔹ━━━━━ꔹ
( .الروابط )
♚ منع ارسال الروابط في الجروب 
ꔹ━━━━━ꔹ
( .اعدادات )
♚ جلب معلومات التحكم بالجروب
ꔹ━━━━━ꔹ
( .الحب )
♚ جلب نسبه حب الشخص لك
ꔹ━━━━━ꔹ
( .الكره )
♚ نسبه كره الشخص لك
ꔹ━━━━━ꔹ
( .شخصيتك )
♚ البوت يعرفك شخصيتك
ꔹ━━━━━ꔹ
( .الجمال )
♚ يجلب لك نسبه جمالك
`


    let buttonshelpm = [

    {buttonId: `.owner`, buttonText: {displayText: '⋆ مبرمج البوت •'}, type: 1}

    ]
                let buttonMessage = {
                  image:fs.readFileSync('./system/elgazar.jpg'),gifPlayback:true,
                    caption: helpmenu,
                    footer: `${global.BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4
                    
                }
            Chiku.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break

case 'م4': case 'اوامر التنزيل': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    Chiku.sendMessage(from, { react: { text: "4️⃣" , key: m.key }})
      
 const helpmenu = `
• مرحبا ياروحي ⤌⤈       
𓆩 *${pushname}* 𓆪
𓍹——————————𓍻
𓆩اليك قائمة باوامر التنزيل𓆪
𓍹——————————𓍻
( .ميديافاير )
♚ التنزيل من ميديا فاير
ꔹ━━━━━ꔹ
( .شغل )
♚ البحث عن مقطع أغنية 
ꔹ━━━━━ꔹ
( .فيلم )
♚ البحث عن معلومات فلم
ꔹ━━━━━ꔹ
( .انمي )
♚ البحث عن خلفية انمي 
ꔹ━━━━━ꔹ
( .صوره )
♚ البحث عن صور عشوائية 
ꔹ━━━━━ꔹ
( .ويكيديا )
♚ البحث عن صور في ويكيديا 
ꔹ━━━━━ꔹ
( .تطقيم )
♚ جلب تطقيمات 
ꔹ━━━━━ꔹ
( .جوجل )
♚ البحث في جوجل
ꔹ━━━━━ꔹ
( .تخمين )
♚ تخمين ارقام مشابهه لرقمك
ꔹ━━━━━ꔹ
( .تلجراف )
♚ رفع الصور تلجراف
`


    let buttonshelpm = [

    {buttonId: `.owner`, buttonText: {displayText: '⋆ مبرمج البوت •'}, type: 1}

    ]
                let buttonMessage = {
                  image:fs.readFileSync('./system/elgazar.jpg'),gifPlayback:true,
                    caption: helpmenu,
                    footer: `${global.BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4
                    
                }
            Chiku.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break

case 'م5': case 'اوامر التحويل': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    Chiku.sendMessage(from, { react: { text: "5️⃣" , key: m.key }})
      
 const helpmenu = `
• مرحبا ياروحي ⤌⤈       
𓆩 *${pushname}* 𓆪
𓍹——————————𓍻
𓆩اليك قائمة باوامر التحويل𓆪
𓍹——————————𓍻
( .مـلـصـق )
♚ انشاء ملصقات عادية ومتحركة 
ꔹ━━━━━ꔹ
( .سرقه )
♚ انشاء ملصق بحقوقك 
ꔹ━━━━━ꔹ
( .دمج )
♚ دمج اثنين من الاموجي 
ꔹ━━━━━ꔹ
( .لصورة )
♚ تحويل ملصق عادي لصورة 
ꔹ━━━━━ꔹ
( .لفيديو )
♚ تحويل ملصق متحرك لفيديو 
ꔹ━━━━━ꔹ
( .لصوتي )
♚ تحويل فيديو لصوتية 
ꔹ━━━━━ꔹ
 ( .لملف )
♚ تحويل فيديو لملف صوتي 
ꔹ━━━━━ꔹ
( .لمتحرك )
♚ تحويل ملصق لمتحرك
ꔹ━━━━━ꔹ
( .اكتب )
♚ يكتب لك علي الملصق
`


    let buttonshelpm = [

    {buttonId: `.owner`, buttonText: {displayText: '⋆ مبرمج البوت •'}, type: 1}

    ]
                let buttonMessage = {
                  image:fs.readFileSync('./system/elgazar.jpg'),gifPlayback:true,
                    caption: helpmenu,
                    footer: `${global.BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4
                    
                }
            Chiku.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break

case 'م6': case 'اوامر تغير الصوت': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    Chiku.sendMessage(from, { react: { text: "6️⃣" , key: m.key }})
      
 const helpmenu = `
• مرحبا ياروحي ⤌⤈       
𓆩 *${pushname}* 𓆪
𓍹——————————𓍻
𓆩اليك قائمة باوامر تغير الصوت𓆪
𓍹——————————𓍻
( .دبه )
♚ عمل دبه لصوت الاغنيه
ꔹ━━━━━ꔹ
( .ضوضاء )
♚ عمل ضوضاء لصوت الاغنيه
ꔹ━━━━━ꔹ
( .بطئ )
♚ عمل تبطئ لصوت الاغنيه
ꔹ━━━━━ꔹ
( .بطئ2 )
♚ عمل تبطئ لصوت الاغنيه
ꔹ━━━━━ꔹ
( .سريع )
♚ عمل تسريع لصوت الاغنيه
ꔹ━━━━━ꔹ
( .طفل )
♚ عمل الاغنيه بصوت طفل
ꔹ━━━━━ꔹ
( .عكس )
♚ عمل عكس لاغنيه 
ꔹ━━━━━ꔹ
( .روبوت )
♚ عمل الاغنيه بصوت روبوت
`


    let buttonshelpm = [

    {buttonId: `.owner`, buttonText: {displayText: '⋆ مبرمج البوت •'}, type: 1}

    ]
                let buttonMessage = {
                  image:fs.readFileSync('./system/elgazar.jpg'),gifPlayback:true,
                    caption: helpmenu,
                    footer: `${global.BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4
                    
                }
            Chiku.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break

case 'م7': case 'اوامر التسليه': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    Chiku.sendMessage(from, { react: { text: "7️⃣" , key: m.key }})
      
 const helpmenu = `
• مرحبا ياروحي ⤌⤈       
𓆩 *${pushname}* 𓆪
𓍹——————————𓍻
𓆩اليك قائمة باوامر التسليه𓆪
𓍹——————————𓍻
( .زواج )
♚ البوت يزوج اثنين عشوائي
ꔹ━━━━━ꔹ
 ( .طلاق )
♚ البوت يطلق اثنين عشوائي
ꔹ━━━━━ꔹ
 ( .زوجني )
♚ البوت يزوجك من شخص عشوائي
ꔹ━━━━━ꔹ
 ( .طلقني )
♚ البوت يطلقك من شخص عشوائي
ꔹ━━━━━ꔹ
( .المستوي )
♚ يرفع مستوي الاعضاء
ꔹ━━━━━ꔹ
( .رفيق )
♚ البوت يجيب لك رفيق عشوائي
ꔹ━━━━━ꔹ
 ( .فراق )
♚ البوت يفارقك من رفيقك
ꔹ━━━━━ꔹ
( .عكس )
♚ عكس كلمة او جملة 
ꔹ━━━━━ꔹ
( .اختفاء )
♚ اترك سبب ذاهبك
ꔹ━━━━━ꔹ
( .قهوه )
♚ صوره عشوائيه لـ قهوه
`


    let buttonshelpm = [

    {buttonId: `.owner`, buttonText: {displayText: '⋆ مبرمج البوت •'}, type: 1}

    ]
                let buttonMessage = {
                  image:fs.readFileSync('./system/elgazar.jpg'),gifPlayback:true,
                    caption: helpmenu,
                    footer: `${global.BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4
                    
                }
            Chiku.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break

case 'م8': case 'اوامر البنك': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    Chiku.sendMessage(from, { react: { text: "8️⃣" , key: m.key }})
      
 const helpmenu = `
• مرحبا ياروحي ⤌⤈       
𓆩 *${pushname}* 𓆪
𓍹——————————𓍻
𓆩اليك قائمة باوامر البنك𓆪
𓍹——————————𓍻
( .مرتبي )
♚ للحصول علي مرتب يومي
ꔹ━━━━━ꔹ
 ( .محفظتي )
♚ لمعرفه عدد فلوسك في المحفظه
ꔹ━━━━━ꔹ
 ( .البنك )
♚ لمعرفه عدد فلوسك في البنك
ꔹ━━━━━ꔹ
 ( .ايداع )
♚ ايداع اموالك في البنك
ꔹ━━━━━ꔹ
( .ترقيه )
♚ لترقيه البنك الخاص بك
ꔹ━━━━━ꔹ
( .سحب )
♚ لسحب اموال من البنك
ꔹ━━━━━ꔹ
 ( .سرقه )
♚ للهجوم علي ضحيه وسرقه اموالها
ꔹ━━━━━ꔹ
( .تحويل )
♚ تحويل اموال لشخص اخر
ꔹ━━━━━ꔹ
( .رهان )
♚ رهان علي فلوس من محفظتك
ꔹ━━━━━ꔹ
( .تدوير )
♚ لعبه فواكه لكسب نقاط في البنك
ꔹ━━━━━ꔹ
( .اكس )
♚ لعبه اكس او لكسب نقاط في البنك
`


    let buttonshelpm = [

    {buttonId: `.owner`, buttonText: {displayText: '⋆ مبرمج البوت •'}, type: 1}

    ]
                let buttonMessage = {
                  image:fs.readFileSync('./system/elgazar.jpg'),gifPlayback:true,
                    caption: helpmenu,
                    footer: `${global.BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4
                    
                }
            Chiku.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break

case 'م9': case 'كل الاوامر': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    Chiku.sendMessage(from, { react: { text: "9️⃣" , key: m.key }})
      
 const helpmenu = `
• مرحبا ياروحي ⤌⤈       
𓆩 *${pushname}* 𓆪
• انا بوت واتس اسمي ⤌⤈
𓆩 *${global.BotName}* 𓆪
• اعمل في الخاص وجروبات •
• وظيفتي حماية جروبك •
• تفضل اوامر البوت •
𓍹——————————𓍻
𓆩اليك قائمة باوامر الاعضاء𓆪 
𓍹——————————𓍻
( .ايدي )
♚ لمعرفة معلوماتك 
ꔹ━━━━━ꔹ
( .التنصيب )
♚ لعرض روابط وصنع بوت مشابه
ꔹ━━━━━ꔹ
( .الدعم )
♚ لعرض رابط الدعم 
ꔹ━━━━━ꔹ
( .المطور )
♚ لمعرفه مطور البوت 
ꔹ━━━━━ꔹ
( .انطق )
♚ البوت ينطق المكتوب
ꔹ━━━━━ꔹ
( .باركود )
♚ يجلب لك الباركود مباشر
𓍹——————————𓍻
𓆩اليك قائمة باوامر المالك𓆪
𓍹——————————𓍻
( .عام )
♚ يجعل البوت عام للجميع  
ꔹ━━━━━ꔹ
( .خاص )
♚ يجعل البوت خاص للمالك فقط
ꔹ━━━━━ꔹ
( .حظر )
♚ حظر شخص من استخدام البوت 
ꔹ━━━━━ꔹ
( .بان )
♚ حظر اي جروب من استخدام البوت 
ꔹ━━━━━ꔹ
( .اخرج )
♚ خروج البوت من الجروب 
ꔹ━━━━━ꔹ
( .انضم )
♚ ينضم البوت لجروب عبر الرابط
ꔹ━━━━━ꔹ
( .بلوك )
♚ عمل بلوك لشخص من البوت 
ꔹ━━━━━ꔹ
( .فك-البلوك )
♚ الغاء البلوك عن الشخص 
ꔹ━━━━━ꔹ
( .شير )
♚ عمل شير لكل الجروبات في البوت
𓍹——————————𓍻
𓆩اليك قائمة باوامر الجروب𓆪
𓍹——————————𓍻
( .منشن )
♚ منشن جماعي لكل الاعضاء
ꔹ━━━━━ꔹ
( .المشرفين )
♚ منشن لكل المشرفين
ꔹ━━━━━ꔹ
( .مخفي )
♚ منشن مخفي لكل الاعضاء 
ꔹ━━━━━ꔹ
( .المتصلين )
♚ يجيب لك الاعضاء المتصله
ꔹ━━━━━ꔹ
( .حذف )
♚ حذف رسالة البوت والاعضاء
 ꔹ━━━━━ꔹ
( .الرابط )
♚ جلب رابط الجروب 
ꔹ━━━━━ꔹ
( .رستر )
♚ رستارت لرابط الجروب 
ꔹ━━━━━ꔹ
( .رفع )
♚ رفع عضو لمشرف 
ꔹ━━━━━ꔹ
( .تنزيل )
♚ تنزيل عضو من المشرف 
ꔹ━━━━━ꔹ
( .تغيرالاسم )
♚ تغيير اسم الجروب 
 ꔹ━━━━━ꔹ
( .تغيرالبايو )
♚ تغيير وصف الجروب 
ꔹ━━━━━ꔹ
( .تغيرالصوره )
♚ تغيير صورة الجروب 
ꔹ━━━━━ꔹ
( .جروب )
♚ غلق وفتح الجروب 
ꔹ━━━━━ꔹ
( .طرد )
♚ طرد شخص من الجروب 
ꔹ━━━━━ꔹ
( .اضافه )
♚ اضافه شخص للجروب
ꔹ━━━━━ꔹ
( .الروابط )
♚ منع ارسال الروابط في الجروب 
ꔹ━━━━━ꔹ
( .اعدادات )
♚ جلب معلومات التحكم بالجروب
ꔹ━━━━━ꔹ
( .الحب )
♚ جلب نسبه حب الشخص لك
ꔹ━━━━━ꔹ
( .الكره )
♚ نسبه كره الشخص لك
ꔹ━━━━━ꔹ
( .شخصيتك )
♚ البوت يعرفك شخصيتك
ꔹ━━━━━ꔹ
( .الجمال )
♚ يجلب لك نسبه جمالك
ꔹ━━━━━ꔹ
( .الجمال )
♚ يجلب لك نسبه جمالك
𓍹——————————𓍻
𓆩اليك قائمة باوامر التنزيل𓆪
𓍹——————————𓍻
( .ميديافاير )
♚ التنزيل من ميديا فاير
ꔹ━━━━━ꔹ
( .شغل )
♚ البحث عن مقطع أغنية 
ꔹ━━━━━ꔹ
( .فيلم )
♚ البحث عن معلومات فلم
ꔹ━━━━━ꔹ
( .انمي )
♚ البحث عن خلفية انمي 
ꔹ━━━━━ꔹ
( .صوره )
♚ البحث عن صور عشوائية 
ꔹ━━━━━ꔹ
( .ويكيديا )
♚ البحث عن صور في ويكيديا 
ꔹ━━━━━ꔹ
( .تطقيم )
♚ جلب تطقيمات 
ꔹ━━━━━ꔹ
( .جوجل )
♚ البحث في جوجل
ꔹ━━━━━ꔹ
( .تخمين )
♚ تخمين ارقام مشابهه لرقمك
ꔹ━━━━━ꔹ
( .تلجراف )
♚ رفع الصور تلجراف
𓍹——————————𓍻
𓆩اليك قائمة باوامر التحويل𓆪
𓍹——————————𓍻
( .مـلـصـق )
♚ انشاء ملصقات عادية ومتحركة 
ꔹ━━━━━ꔹ
( .سرقه )
♚ انشاء ملصق بحقوقك 
ꔹ━━━━━ꔹ
( .دمج )
♚ دمج اثنين من الاموجي 
ꔹ━━━━━ꔹ
( .لصورة )
♚ تحويل ملصق عادي لصورة 
ꔹ━━━━━ꔹ
( .لفيديو )
♚ تحويل ملصق متحرك لفيديو 
ꔹ━━━━━ꔹ
( .لصوتي )
♚ تحويل فيديو لصوتية 
ꔹ━━━━━ꔹ
 ( .لملف )
♚ تحويل فيديو لملف صوتي 
ꔹ━━━━━ꔹ
( .لمتحرك )
♚ تحويل ملصق لمتحرك
ꔹ━━━━━ꔹ
( .اكتب )
♚ يكتب لك علي الملصق
𓍹——————————𓍻
𓆩اليك قائمة باوامر تغير الصوت𓆪
𓍹——————————𓍻
( .دبه )
♚ عمل دبه لصوت الاغنيه
ꔹ━━━━━ꔹ
( .ضوضاء )
♚ عمل ضوضاء لصوت الاغنيه
ꔹ━━━━━ꔹ
( .بطئ )
♚ عمل تبطئ لصوت الاغنيه
ꔹ━━━━━ꔹ
( .بطئ2 )
♚ عمل تبطئ لصوت الاغنيه
ꔹ━━━━━ꔹ
( .سريع )
♚ عمل تسريع لصوت الاغنيه
ꔹ━━━━━ꔹ
( .طفل )
♚ عمل الاغنيه بصوت طفل
ꔹ━━━━━ꔹ
( .عكس )
♚ عمل عكس لاغنيه 
ꔹ━━━━━ꔹ
( .روبوت )
♚ عمل الاغنيه بصوت روبوت
𓍹——————————𓍻
𓆩اليك قائمة باوامر التسليه𓆪
𓍹——————————𓍻
( .زواج )
♚ البوت يزوج اثنين عشوائي
 ꔹ━━━━━ꔹ
 ( .طلاق )
♚ البوت يطلق اثنين عشوائي
 ꔹ━━━━━ꔹ
 ( .زوجني )
♚ البوت يزوجك من شخص عشوائي
 ꔹ━━━━━ꔹ
 ( .طلقني )
♚ البوت يطلقك من شخص عشوائي
 ꔹ━━━━━ꔹ
( .المستوي )
♚ يرفع مستوي الاعضاء
 ꔹ━━━━━ꔹ
( .رفيق )
♚ البوت يجيب لك رفيق عشوائي
 ꔹ━━━━━ꔹ
 ( .فراق )
♚ البوت يفارقك من رفيقك
 ꔹ━━━━━ꔹ
( .عكس )
♚ عكس كلمة او جملة 
ꔹ━━━━━ꔹ
( .اختفاء )
♚ اترك سبب ذاهبك
ꔹ━━━━━ꔹ
( .قهوه )
♚ صوره عشوائيه لـ قهوه
𓍹——————————𓍻
𓆩اليك قائمة باوامر البنك𓆪
𓍹——————————𓍻
( .مرتبي )
♚ للحصول علي مرتب يومي
 ꔹ━━━━━ꔹ
 ( .محفظتي )
♚ لمعرفه عدد فلوسك في المحفظه
 ꔹ━━━━━ꔹ
 ( .البنك )
♚ لمعرفه عدد فلوسك في البنك
 ꔹ━━━━━ꔹ
 ( .ايداع )
♚ ايداع اموالك في البنك
 ꔹ━━━━━ꔹ
( .ترقيه )
♚ لترقيه البنك الخاص بك
 ꔹ━━━━━ꔹ
( .سحب )
♚ لسحب اموال من البنك
 ꔹ━━━━━ꔹ
 ( .سرقه )
♚ للهجوم علي ضحيه وسرقه اموالها
 ꔹ━━━━━ꔹ
( .تحويل )
♚ تحويل اموال لشخص اخر
ꔹ━━━━━ꔹ
( .رهان )
♚ رهان علي فلوس من محفظتك
ꔹ━━━━━ꔹ
( .تدوير )
♚ لعبه فواكه لكسب نقاط في البنك
ꔹ━━━━━ꔹ
( .اكس )
♚ لعبه اكس او لكسب نقاط في البنك
`


    let buttonshelpm = [

    {buttonId: `.owner`, buttonText: {displayText: '⋆ مبرمج البوت •'}, type: 1}

    ]
                let buttonMessage = {
                  image:fs.readFileSync('./system/elgazar.jpg'),gifPlayback:true,
                    caption: helpmenu,
                    footer: `${global.BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4
                    
                }
            Chiku.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break


case '':
    if(isCmd){
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    Chiku.sendMessage(from, { react: { text: "👋" , key: m.key }})

      Chikupic ='https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg'
    
        
 const needhelpmenu = `•╗ مرحبا ياعزيزي ⤌⤈       
𓆩 *${pushname}* 𓆪
•╣ انا بوت واتس اسمي
𓆩 *${global.BotName}* 𓆪
•╣ اعمل في الخاص وجروبات
•╣ وظيفتي حماية جروبك
•╣ اكتب كلمه .الاوامر لمعرفه
•╣ اوامر البوت وطريقه الاستخدام
•╣ مميزات البوت كثيره جدا 
•╝ ويعمل بجودة فائقه وعاليه

⋆ يمكنك التواصل مع المبرمج عبر التيلجرام ⤌⤈
 t.me/A_M_030

• تم تطويري وبرمجتي •
• بواسطه عبدالله محمد •
• اذا كنت تريد صنع بوت مماثل لهذا •
يجب عليك الانظمام لهذه القناه وسماع الشروحات لتنصيب البوت
 
قناة الشروحات
https://youtube.com/@ABDALLAH_MOHAMED

لينك شاتي 
https://api.whatsapp.com/send?phone=+201098906252`
     
         let butRun = [
                {buttonId: `${prefix}owner`, buttonText: {displayText: '⋆ مبرمج البوت •'}, type: 1}
                ]
                let buttonMessage = {
                    image:fs.readFileSync('./system/elgazar.jpg'),gifPlayback:true,
                    caption: needhelpmenu,
                    footer: `${global.BotName}`,
                    buttons: butRun,
                    headerType: 4
                }
            Chiku.sendMessage(m.chat,buttonMessage,{quoted:m})
                }
break



case 'الجزار': case 'عبدالله': 
		
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)

const txt = `⋆ تم تطوير وبرمجه هذا السورس •
⋆ بواسطه عبدالله محمد •
⋆ يمكنك التواصل مع المبرمج عبر التيلجرام ⤌⤈
 t.me/A_M_030
تبعني عبر اليوتيوب ⤌⤈
https://youtube.com/@ABDALLAH_MOHAMED
واشترك وفعل الجرس وانتظر شروحات للبرمجه..🌍🔥.`
const Chikuarray= [
            "https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg"
            
            ]
        
            const Chikuselection = Chikuarray[Math.floor(Math.random()*Chikuarray.length)]
        
            Chiku.sendMessage(from,{video:{url:Chikuselection},gifPlayback:true,caption:txt},{quoted:m})
		break

case 'add': case 'اضافه':{     			
    if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 Chiku.sendMessage(from, { react: { text: "➕" , key: m.key }})
 let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
 if (users.length == 0) return replay(`يرجى كتابة رقم الشخص الذي تريد إضافته إلى هذه المجموعة`)
  await Chiku.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => replay(`تمت إضافة المستخدم بنجاح!`)).catch((err) => replay(`لا يمكن إضافة هذا المستخدم إلى هذه المجموعة!`))
 }
 break
 
		
case 'weather':
        if (isBan) return reply(mess.banned)
        if (!args[0]) return reply("Enter your location to search weather.")
         myweather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args.join(" ")}&units=metric&appid=e409825a497a0c894d2dd975542234b0&language=tr`)

        const weathertxt = `           🌤 Weather Report 🌤  \n\n🔎 Search Location: ${myweather.data.name}\n*💮 Country:* ${myweather.data.sys.country}\n🌈 Weather: ${myweather.data.weather[0].description}\n🌡️ Temperature: ${myweather.data.main.temp}°C\n❄️ Minimum Temperature: ${myweather.data.main.temp_min}°C\n📛 Maximum Temperature: ${myweather.data.main.temp_max}°C\n💦 Humidity: ${myweather.data.main.humidity}%\n🎐 Wind: ${myweather.data.wind.speed} km/h\n`
        Chiku.sendMessage(from, { video: { url: 'https://media.tenor.com/bC57J4v11UcAAAPo/weather-sunny.mp4' }, gifPlayback: true, caption: weathertxt }, { quoted: m })

        break
		

 case "tts":  case "انطق":  case "قول": case "speak":{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)

    if (!args[0]) return reply("من فضلك اكتب اي شئ و سوف انطقه!")
      
      let texttosay = text
        ? text
        : m.quoted && m.quoted.text
        ? m.quoted.text
        : m.text;
      const SpeakEngine = require("google-tts-api"); 
      const texttospeechurl = SpeakEngine.getAudioUrl(texttosay, {lang: "ar", slow: false, host: "https://translate.google.com",});
      Chiku.sendMessage(m.chat,{audio: {url: texttospeechurl,},mimetype: "audio/mpeg",fileName: `ChikuSpeechEngine.mp3`,},{quoted: m,});
    }
    break;


    case 'qr': case 'scanner': case 'باركود':
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
        if (!m.isGroup) return replay(mess.grouponly)
	Chiku.sendMessage(from, { react: { text: "🍁" , key: m.key }})
		
    reply(`جاري إعادة التشغيل .... يرجى الانتظار حتى يستجيب Rep.it ...`)						
    var replqr =  await getBuffer(`https://bot-elgazar-qr--bm077197.repl.co/`)
                               var qrbutton = [
            {buttonId: `${prefix}باركود`, buttonText: {displayText: `باركود جديد`}, type: 1}
            ]
          let bmffg = {
           image: replqr,
           caption:  `امسح الباركود خلال 10-15 ثانية...`,
          footer: `${global.BotName}`,
          buttons: qrbutton,
          headerType: 4
          }     
                await Chiku.sendMessage(m.chat, bmffg,{ quoted:m }).catch(err => {
                        return('Error!')
                    })
    break



default:

    if(isCmd){
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
        reply (`⋆ المعذره ياروحي ⤌⤈
𓆩 *${pushname}* 𓆪
لا يوجد امر مثل هذا  اكتب *${prefix}الاوامر* للحصول على قائمة الأوامر الكاملة الخاصة ب البوت `)

    }	 			


if (budy.startsWith('=>')) {
if (!isCreator) return reply(mess.botowner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
Chiku.sendMessage(from, {image:ErrorPic, caption:String(e)}, {quoted:m})
}
}
if (budy.startsWith('>')) {
if (!isCreator) return reply(mess.botowner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await Chiku.sendMessage(from, {image:ErrorPic, caption:String(err)}, {quoted:m})
}
}


                
if (budy.startsWith('$')) {
if (!isCreator) return replay(mess.botowner)
exec(budy.slice(2), (err, stdout) => {
if(err) return Chiku.sendMessage(from, {image:ErrorPic, caption:String(err)}, {quoted:m})
if (stdout) return replay(stdout)
})
}


if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
Chiku.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
}catch (err) {
Chiku.sendMessage(`${ownertag}@s.whatsapp.net`, util.format(err), {quoted:m})
console.log(err)
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
