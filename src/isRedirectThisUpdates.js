const config = require('./config');
const isAttentionUpdate = require('./isAttentionUpdate');
const regionRecognizer = require('./regionRecognizer');

function isTargetPeer(aMessage, peer) {
  return aMessage.peer_id.channel_id === peer;
}

function isCorrectMessageType(anUpdatedValue) {
  return anUpdatedValue._ === 'updateNewChannelMessage';
}

module.exports = (updates) =>
  updates
    .filter((anUpdatedValue) => isCorrectMessageType(anUpdatedValue))
    .filter((anUpdatedValue) =>
      isTargetPeer(anUpdatedValue.message, config.targetPeerId),
    )
    .filter((anUpdatedValue) => isAttentionUpdate(anUpdatedValue))
    .map((anUpdatedValue) => ({
      ...anUpdatedValue,
      regions: regionRecognizer(anUpdatedValue.message.message),
    }));
