const fs = require("fs")
const chalk = require("chalk")

global.available = true
global.autoReadGc = true
global.autoReadAll = false
global.antitags = true

//aumto functioner
//global.autoTyping = false //auto tying in gc (true to on, false to off)
//global.autoRecord = true //auto recording (true to on, false to off)

global.Owner = ['212770701405']
global.OwnerNumber = ['212770701405']
global.ownertag = ['212770701405']
global.BotName = "❤️𝐵𝑂𝑇 𝐵𝐴𝐾𝐼❤️"
global.packname = "⍣حقوق شيزوكو⍣"
global.author = "⍣212770701405⍣"
global.OwnerName = "شيزوكو❤️"
global.BotSourceCode = "https://youtube.com/@ABDALLAH_MOHAMED"
global.SupportGroupLink = "https://chat.whatsapp.com/EwCh9XrjxmY68GeO8oVmMp"
global.sessionName = "session"

// Prefix //
// If you want to change the prefix, change it and also change all switch's button id from Core.js  otherwise buttons will not work //
global.prefa = ['.'] 


global.location = "Cairo, Egypy"
global.reactmoji = "❤️"
global.themeemoji = "🐦"
global.vidmenu = { url: 'https://media.tenor.com/Jdu0Ov8X2sIAAAAC/A17-Bot.mp4' }
global.websitex = "https://youtube.com/@ABDALLAH_MOHAMED"
global.lolhuman = "KaysaS"


global.BotLogo = fs.readFileSync("./Assets/pic1.jpg")
global.Thumb = fs.readFileSync("./Assets/pic9.jpg")
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg")
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: 'تم يروحي',
    useradmin: '『 الامر دا لادمن بس! 』',
    botadmin: '『 ارفع البوت ادمن الاول 』',
    botowner: '『 الميزه دي للمطور بس!』',
    grouponly: '『 الميزه دي للجروبات بس! 』',
    privateonly: '『 الميزه دي في الخاص بس! 』',
    botonly: '『 الميزه دي للبوت بس! 』',
    waiting: '█████████████]99%',
    nolink: '『 فين الرابط? 』',
    error: '『 ايرور! 』',
    banned: '『 انت محظور من استخدام البوت اتواصل مع المطور لالغاء حظرك! 』',
    bangc: '『 تم حظر الجروب دا من استخدام البوت! 』',
    nonsfw: '『 لا يوجد اباحي بالبوت احترم نفسك! 』,'
    
}


global.limitawal = {
    premium: "Infinity",
    free: 20,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '5d1197db351b',
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
