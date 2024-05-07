/**
 * Opens a dialog in Google Chat.
 *
 * @param {Object} event the event object from Chat API.
 *
 * @return {object} open a Dialog in Google Chat.
 */
function actionEditNotes(event) {

  const parameters = event.common.parameters

  return dialogNotes(event, parameters)
}
