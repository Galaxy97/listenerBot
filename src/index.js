const auth = require('./auth');
const logger = require('./logger');

logger.info('Start listener application');
auth();
logger.info('Application is listening new messages');
