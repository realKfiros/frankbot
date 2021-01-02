const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const client = new Client();

client.initialize();

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('client is ready');
});

client.on('message', async (msg) => {
  if (msg.body.startsWith('@Frank')) {
    if (msg.author.split('@')[0] === '2547792459509') {
      console.log("Jah you're clapped stfu");
    } else {
      let lowercase = msg.body.toLowerCase();
      if (lowercase.includes('god')) {
        msg.reply('Kfir is god.');
      } else if (lowercase.includes('joke')) {
        if (msg.author.split('@')[0] === '917523085454') {
          msg.reply('cry more Ishan');
        } else {
          if (lowercase.includes('chelsea')) {
            msg.reply('Chelsea is always the joke');
          } else {
            msg.reply('Chelsea');
          }
        }
      } else if (lowercase.includes('best')) {
        if (lowercase.includes('team')) {
          msg.reply('Liverpool');
        } else if (lowercase.includes('country')) {
          msg.reply('Israel');
        } else {
          msg.reply('ur mum');
        }
      } else if (lowercase.includes('hi')) {
        if (msg.author.split('@')[0] === '972545487630') {
          msg.reply('Hi god');
        }
      }
    }
  }
  if (msg.body.toLowerCase().includes('jah')) {
    msg.reply('Jah is clapped.');
  }
  if (msg.body.includes('מטוס')) {
    if (msg.author.split('@')[0] === '972527003724') {
      msg.reply('מטוס');
    }
  }
  if (msg.body.toLowerCase().includes('chelsea')) {
    msg.reply('Chelsea is shit');
  }
  // if (msg.body.toLowerCase().includes('chelsea')) {
  //   msg.reply('Chelsea is shit');
  // }
});
