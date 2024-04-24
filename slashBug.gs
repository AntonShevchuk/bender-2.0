/**
 * Opens a dialog in Google Chat.
 *
 * @param {Object} event the event object from Chat API.
 *
 * @return {object} open a Dialog in Google Chat.
 */
function slashBug(event) {
  // nothing for now
  return dialogIssue(event, null, "Bug")
}
