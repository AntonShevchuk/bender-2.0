/**
 * Responds to an ADDED_TO_SPACE event in Google Chat.
 *
 * @param {Object} event the event object from Google Chat
 */
function onAddToSpace(event) {
  collectStatisticData(event);

  let message;

  if (event.space.singleUserBotDm) {
    message = `I'm Bender, ${event.user.displayName}!`;
  } else {
    message = `I'm Bender, baby! This is my space now!`;
  }

  if (event.message) {
    // Bot added through @mention
    message = `You say "${event.message.text}" but you do it without respect`;
  }

  return {'text': message};
}
