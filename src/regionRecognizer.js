const config = require('./config');

module.exports = (aMessage) => {
  const result = [];
  config.regionRules.forEach((aRegionRule) => {
    if (aMessage.match(aRegionRule.rule)) result.push(aRegionRule.region);
  });
  return result;
};
