/**
 * @param {Object} event the event object from Google Chat
 */
function slashBenderInfo(event = null) {
  let message = `Hello %username`
  return {
    'privateMessageViewer': event.user,
    'text': message
  };
}
