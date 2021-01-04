require('dotenv').config();
const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const client = new Client();

const people = require('./people');
const teams = require('./best/team');

if (process.env.ENVIRONMENT === 'test') {
  client.initialize();
} else {
  // set browser to chromium for raspberry pi os
  client.initialize({
    browserOptions: {
      headless: true,
      executablePath: '/usr/bin/chromium-browser',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    },
  });
}

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('client is ready');
});

client.on('message', async (msg) => {
  if (msg.body.toLowerCase().includes('@frank')) {
    if (people.jah(msg)) {
      msg.reply("Jah you're clapped stfu");
    } else {
      let lowercase = msg.body.toLowerCase();
      if (lowercase.includes('god')) {
        msg.reply('Kfir is god.');
      } else if (lowercase.includes('joke')) {
        if (people.ishan(msg)) {
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
          if (teams.man_utd(msg)) {
            msg.reply('Sheffield United > Manchester United');
          } else if (teams.chelsea(msg)) {
            msg.reply('Chelsea is shit');
          } else if (teams.arsenal(msg)) {
            msg.reply('Enjoy ur relegation battle arsenal fan haha');
          } else if (teams.sheffield(msg)) {
            msg.reply('Sheffield is the best United but Liverpool are better');
          } else if (teams.man_city(msg)) {
            msg.reply('Liverpool are better with or without oil money');
          } else if (teams.tottenham(msg)) {
            msg.reply('Enjoy Europa League tottenham fan');
          } else if (teams.southamption(msg)) {
            msg.reply('Yes');
          } else if (teams.or(msg)) {
            msg.reply('Liverpool are always the best!');
          } else {
            msg.reply('Liverpool are the best team in the world');
          }
        } else if (lowercase.includes('country')) {
          msg.reply('Israel');
        } else {
          msg.reply('ur mum');
        }
      } else if (lowercase.includes('hi')) {
        if (people.kfir(msg)) {
          msg.reply('Hi god');
        }
      }
    }
  }
  if (msg.body.toLowerCase().includes('jah')) {
    msg.reply('Jah is clapped.');
  }
  if (msg.body.toLowerCase().includes('daniel choudhary')) {
    msg.reply('Dan is deluded. He has no friends.');
  }
  if (
    msg.body.toLowerCase().includes('patrick') ||
    msg.body.toLowerCase().includes('pato')
  ) {
    msg.reply('Barcelona fan');
  }
  if (msg.body.toLowerCase().includes('qaher')) {
    msg.reply('simp');
  }
  if (teams.chelsea(msg)) {
    msg.reply('Chelsea is shit');
  }
  if (msg.body.toLowerCase().includes('firmino')) {
    msg.reply('you just got DEFENSIVE STRIKEAIRED');
  }
  if (msg.body.toLowerCase().includes('milner')) {
    msg.reply('goat');
  }
  if (msg.body.toLowerCase().includes('async')) {
    msg.reply('await');
  }
  if (msg.body.includes('מטוס')) {
    if (people.yuval(msg)) {
      msg.reply('מטוס');
    }
  }
  if (msg.body.includes('סייבר')) {
    msg.reply('מטוס');
  }
});
