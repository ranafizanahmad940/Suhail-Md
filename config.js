const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_55_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUyLFxuICAgICAgICA2MixcbiAgICAgICAgNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDc3LFxuICAgICAgICAxODUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDYyLFxuICAgICAgICA4MixcbiAgICAgICAgMzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk5LFxuICAgICAgICA4LFxuICAgICAgICAxNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzksXG4gICAgICAgIDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDczLFxuICAgICAgICA0OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMixcbiAgICAgICAgMTg2LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg1LFxuICAgICAgICA1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDk3LFxuICAgICAgICA0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5LFxuICAgICAgICAzMCxcbiAgICAgICAgMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTk5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDcxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjI0LFxuICAgICAgICA4NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDYwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI5LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTczLFxuICAgICAgICA1MixcbiAgICAgICAgODUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA1NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNCxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExNyxcbiAgICAgICAgODgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUwLFxuICAgICAgICA5NixcbiAgICAgICAgMTgzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI5LFxuICAgICAgICAzMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUEl6WjJLV0N2dC9DQy9Nd2JoRjRwa0tQb3FjNFlFVW01d3ZVVDc4RmtlZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicVVXWWVRWjdSUVMtNkE0ZkJPUU5ZZ1wiLFxuICBcInBob25lSWRcIjogXCI4ZTkzMGExZi05Nzk2LTQ4ZDMtOTQxNy02ZDJmMGUwNzFjZjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjYsXG4gICAgICAyMDUsXG4gICAgICAxNTIsXG4gICAgICA5MCxcbiAgICAgIDU1LFxuICAgICAgODAsXG4gICAgICAxMDksXG4gICAgICAyOSxcbiAgICAgIDY4LFxuICAgICAgMTY1LFxuICAgICAgNDQsXG4gICAgICA1MyxcbiAgICAgIDEwMixcbiAgICAgIDE3MyxcbiAgICAgIDIxMyxcbiAgICAgIDEzLFxuICAgICAgMTA3LFxuICAgICAgNDEsXG4gICAgICA0LFxuICAgICAgMjA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMyLFxuICAgICAgMjMwLFxuICAgICAgMTU5LFxuICAgICAgNixcbiAgICAgIDE1NyxcbiAgICAgIDc3LFxuICAgICAgMTUsXG4gICAgICAxNDgsXG4gICAgICA0MyxcbiAgICAgIDE0NSxcbiAgICAgIDI0OSxcbiAgICAgIDI5LFxuICAgICAgMzksXG4gICAgICA4OSxcbiAgICAgIDE2MCxcbiAgICAgIDIzMixcbiAgICAgIDIyNCxcbiAgICAgIDIyNSxcbiAgICAgIDEzMCxcbiAgICAgIDIxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEN1NHMkZYUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjgyMTQ1MTgzOjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5MTIzODQyNjQ4MDg0MToyOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLN2tpTVlFRU1EVW83UUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkpuSEFDalpyZmlaSWhuWE50UFBUSEIrSEF2alJ0aGUzTXJQemx0OGp1RHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMWJ4VDVvd05DOHVqcjV0alZkNmM1ZHVCZC94OTRoUDJNZDkrckJ2QVlwTjFQbGM0RGU2ZnZsclkrWTNTdDJ0bnJ4VWtyUnp4S1R0S3AvQlJkZG5mQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMVNCbWxyeWN5WG9UL2QrU3h6RndHSnp6YWlIcDl6b2hQcWRWZGQyR0FGSEhlWUpMS3o0MzVPczh0Wm5TWVF6TUJUSXhpN0RSVm9wQkV1azNuS090RHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjgyMTQ1MTgzOjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDYwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyNDg4OTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFWStcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVZKy5qc29uIjogIntcImtleURhdGFcIjpcIm0yYlFXOHBqbklZTkhUSGQ2d0tpbXVISFh1MVhiN0ZWYjgrRndTdXpoSTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIyMDY4NjM3OCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5NzUyNzU3MTM2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
