require('dotenv').config();

module.exports = {
  appId: process.env.APP_ID,
  apiHash: process.env.APP_HASH,
  phoneNumber: process.env.PHONE_NUMBER,
  code: process.env.PHONE_CODE,
  keywords: [
    'ПОВІТРЯНА',
    'ТРИВОГА',
    'УКРИТТЯ!',
    'УКРИТТЯ',
    'ВІДБІЙ',
    'ПОВІТРЯНОЇ',
    'ТРИВОГИ',
    '🟢ВІДБІЙ',
    'ВІДБІЙ',
    'АВІАУДАР',
    'ЛИШАЙТЕСЯ',
    'УКРИТТЯХ',
    'УКРИТТЯХ!',
    'УКРИТТІ',
    'УКРИТТІ.',
    'непаніка',
    'Підвищена',
    'підвищена',
    'небезпека',
  ],
  regionRules: [
    {
      region: 'cherkasy',
      rule: /ЧЕРКАС/,
    },
    {
      region: 'smila',
      rule: /СМІЛ/,
    },
    {
      region: 'uman',
      rule: /УМАН/,
    },
    {
      region: 'kaniv',
      rule: /КАНІВ/,
    },
    {
      region: 'zolotonosha',
      rule: /ЗОЛОТОН/,
    },
  ],
  // Skichko
  targetPeerId: process.env.TARGET_PEER_ID,
  targetPeerHash: process.env.TARGET_PEER_HASH,

  smsUrl: 'https://alert-radar-api.herokuapp.com/api/notification/alert',
  forwardingUrl: 'http://localhost:3001/forward',
  smsKey: process.env.SMS_KEY,
};
