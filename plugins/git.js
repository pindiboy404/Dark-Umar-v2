const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/hlquIOG.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creater Dark Umar*

*TO CONTACT MY OWNERS

UMAR SER : https://wa.me/923060479256

DARK UMAR : https://wa.me/919057593646*

*githublink : https://github.com/pindiboy404/Dark-Umar-v2*

*audio commads : https://github.com/Ajmal-Achu/media/tree/master/uploads*
`}) 

}));
