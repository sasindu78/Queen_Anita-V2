const fs = require("fs");
const chalk = require("chalk");


//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = true;


//auto functioner
global.autoTyping = false;                //auto tying by default off.
global.autoRecord = true;                //auto recording by default off.
global.groupevent = false;                //This is the new variable for controlling group event handling.
global.statusseen = false ;                 //This is the new variable for controlling status seen.


//
global.Owner = ["94761679959"];         //If you want singal number so global.Owner = ['8801928502256'] Change into your number.
global.OwnerNumber = ["94761679959"];   //If you want singal number so global.Owner = ['8801928502256'] Change into your number.
global.ownertag = ["94761679959];
global.OwnerName = "DARK SASIYA;
global.BotName = "QUEEN_VISH-V2";
global.packname = "Queen VISH";                             //Do not change.
global.author = "QUEEN_VISH-V2";                               //Do not change.
global.BotSourceCode = "https://github.com/DeeCeeXxx/"; //Do not change.
global.SupportGroupLink = "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L"; 


//
global.sessionName = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU1MbGdJWitQa1AvcWhIdXR6VDk2VnhtVm9MUlIwL2FwQ1NMZkNrYTQzQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZk1UdzV3M1dMKzJ6REtwdG5aUzlURUpMeW9MMHUvMzYzR0gwK2d4Y0FHTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQzY3ODY1Yi83YnRNL0ZLSS9HVzVJMTB5MDc3WDhkWml2V1duYTh0UDNJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDZzcwT0E2SEs0Uk1GZkZYRFVvUGIvaFBSQUVRN0tqUkkvb0lWUkJyc3dnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndJVHphSFY2aUtqcmlwTktIdXJhK2JiMlRvUnZJc1B4U1VuWlQzcDJHWHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJaVStVamZaUW1CTXhadm40WHFaUTlNN3dtL0RxY01ZM0o2VlNVVVBEMjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0RaNkIrRlFNS28ramhybjIxbDhkNnZod09HVWNIc0hGTTQrdXhseE9FND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHE2bFI2Qm1uR3NlR2hOTyt4ZUE5MHFuaUd0bXdnbEdoRWNVbmlvbWhsST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZ4Ty9SYTZyNlY1U2ExVm16WTFWeTh0Z2FnV1MxLzY5RzdnUG10L0dSaDg3WFV3WE9nMGhDVzFpams4a2FjY0lkTnEyYnZEL2ZnaUhvUytJTnFJUEN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjUsImFkdlNlY3JldEtleSI6ImIyTkZyeU13UHRDdkZlUVMvYlZnS3g4SFB0M3l1MmJDZldnN1VndmtYeVE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlRrNklSUmwyU3d5UWw3a2hRZkZVM0EiLCJwaG9uZUlkIjoiZjZmYmExOGUtZmEyNy00OTJhLThiYmYtYmQ3NmUwNjY1YzA0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9lM1FzMzVKYWw2blU2RGlFbkVmd1pwYVF3VT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJleHdoaHFYWisydEI2bTVWNmxFYXNoQ0xwTXc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTjFBSjFITEwiLCJtZSI6eyJpZCI6Ijk0NzYxNjc5OTU5OjMwQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMNkg1ZE1ERU5XQTZiUUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJNOElzUGpFUlZadHBob3N5Uy9ycDhlWVpLdmFtNVZBTUdhM1pweGl2SEJNPSIsImFjY291bnRTaWduYXR1cmUiOiJoNDBLeXFsK2tkMlQ0K1BBTFZNclFETFBVMU9DS3ovWjRsUmxYcnJsOEVaSVIrTU9TTGRkMWZ1ZUtMWUQ1MWlvZ2p0T20wbFlxYVFHdVRibVFhdzFEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQ2hsTnhKUlh1RHFYTG04SnRDWFI0NGIyVUladFpZQllpdU50QnZEenp3blcwYVZGbkplWnB5MXUzc1FWRC9BUDY2VjNSZlpSOXdiLzUxU0ZodEJPQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2MTY3OTk1OTozMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUUENMRDR4RVZXYmFZYUxNa3Y2NmZIbUdTcjJwdVZRREJtdDJhY1lyeHdUIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxMzg1MDU5fQ==";                          //Do not change.


//
global.prefa = ["."];                                    //Default prefix here.
global.openAiAPI = "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";


//
global.location = "Lagos, Nigeria";                   
global.reactmoji = "🐦";
global.themeemoji = "😏";
global.vidmenu = { url: 'https://tenor.com/view/chainsaw-man-power-csm-power-anime-gif-9890569885648818723' };
global.websitex = "https://github.com/ahil15";
global.lolhuman = "KaysaS";


//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
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


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Sorry, only *Group Admins* can use this command *Baka*!',
    botadmin: 'Sorry, i cant execute this command without being an *Admin* of this group.',
    botowner: 'Only my *Owner* can use this command, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Just Wait...',
    nolink: 'Please provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You are *Banned* fron using commands!',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert Baka! This is not a NSFW enabled group!'
    
}

global.limitawal = {
  premium: "Infinity",
  free: 2,
  monayawal: 1000,
};

global.limitawal = {
  rakyat: "Infinity",
  free: 100,
};

global.APIs = {
  zenz: "https://zenzapis.xyz",
};
global.APIKeys = {
  "https://zenzapis.xyz": "5d1197db351b",
};
