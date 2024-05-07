/**
 * Responds to a REMOVED_FROM_SPACE event in Google Chat.
 *
 * @param {Object} event the event object from Google Chat
 */
function onRemoveFromSpace(event) {

  collectStatisticData(event)

  console.info("Bot removed from ",
    (event.space.name ? event.space.name : "this chat"));
}
