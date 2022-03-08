const axios = require('axios').default;
const config = require('./config');
const logger = require('./logger');

module.exports = (updates) => {
  updates.forEach((anUpdate) => {
    logger.info('send notification to SMS service ');
    axios
      .post(config.smsUrl, {
        message: anUpdate.message.message,
        key: config.smsKey,
        channel_id: config.targetPeerId,
        settlements: anUpdate.regions,
      })
      .catch((error) => logger.error(JSON.stringify(error)));
  });
};
