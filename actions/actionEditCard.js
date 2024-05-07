/**
 * Opens a dialog in Google Chat.
 *
 * @param {Object} event the event object from Chat API.
 *
 * @return {object} open a Dialog in Google Chat.
 */
function actionEditCard(event) {
  const parameters = event.common.parameters;

  return dialogCard(event, parameters);
}
