const api = require('./src/api');

(async () => {
  console.log('log');
  const resolvedPeer = await api
    .call('contacts.resolveUsername', {
      username: 'pupadawg',
    })
    .catch((e) => {
      console.log(e);
    });

  const channel = resolvedPeer.chats.find(
    (chat) => chat.id === resolvedPeer.peer.channel_id,
  );

  console.log(channel);

  try {
    // await api.call('messages.forwardMessages', {
    //   from_peer: {
    //     _: 'inputPeerChannel',
    //     channel_id: '1210629374',
    //     access_hash: '15883494888643460108',
    //   },
    //   to_peer: {
    //     _: 'inputPeerChannel',
    //     channel_id: '1770325612',
    //     access_hash: '5761533829620680145',
    //   },
    //   id: [4287], // anUpdate.message.id
    //   random_id: [
    //     Math.ceil(Math.random() * 0xffffff) +
    //     Math.ceil(Math.random() * 0xffffff),
    //   ],
    // });
    // await api.call('messages.sendMessage', {
    //   clear_draft: true,
    //   peer: {
    //     _: 'inputPeerChannel',
    //     channel_id: '1770325612',
    //     access_hash: '5761533829620680145',
    //   },
    //   message: 'Hello @mtproto_core',
    //   entities: [
    //     {
    //       _: 'messageEntityBold',
    //       offset: 6,
    //       length: 13,
    //     },
    //   ],
    //   random_id: Math.ceil(Math.random() * 0xffffff) + Math.ceil(Math.random() * 0xffffff),
    // });
  } catch (error) {
    console.log(error);
  }

  // const historyCount = firstHistoryResult.count;

  // for (let offset = 0; offset < historyCount; offset += LIMIT_COUNT) {
  //   const history = await api.call('messages.getHistory', {
  //     peer: inputPeer,
  //     add_offset: offset,
  //     limit: LIMIT_COUNT,
  //   });

  //   allMessages.push(...history.messages);
  // }

  // console.log('allMessages:', allMessages);
})();
