const axios = require('axios').default;
const config = require('./config');
const logger = require('./logger');

module.exports = (updates) => {
  const forwardObject = updates.map((updatedEvent) => ({
    id: updatedEvent.message.id,
    regions: updatedEvent.regions,
  }));
  logger.info('send notification to FORWARDING service');
  axios
    .post(config.forwardingUrl, {
      forwardObject,
    })
    .catch((error) => logger.error(JSON.stringify(error)));
};
