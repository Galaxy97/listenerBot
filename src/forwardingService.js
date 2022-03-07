const axios = require('axios').default;
const config = require('./config');
const logger = require('./logger');

module.exports = (updates) => {
  const ids = updates.map((updatedEvent) => updatedEvent.message.id);
  logger.info('send notification to FORWARDING service');
  axios
    .post(config.forwardingUrl, {
      ids,
    })
    .catch((error) => logger.error(JSON.stringify(error)));
};
