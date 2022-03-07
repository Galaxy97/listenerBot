const forwardingService = require('./forwardingService');
const sendSms = require('./smsService');

module.exports = (redirectThisUpdates) => {
  forwardingService(redirectThisUpdates);
  sendSms(redirectThisUpdates);
};
