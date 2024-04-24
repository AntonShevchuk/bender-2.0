/**
 * Responds to a CARD_CLICKED event in Google Chat.
 *
 * @param {Object} event the event object from Google Chat
 */
function onCardClick(event) {

  collectStatisticData(event)

  switch (event.common.invokedFunction) {
    // - /card
    case 'actionEditCard':
      return actionEditCard(event)
    case 'actionPreviewCard':
      return actionPreviewCard(event)
    case 'actionNewCard':
      return actionNewCard(event)
    // - /notes
    case 'actionEditNotes':
      return actionEditNotes(event)
    case 'actionPreviewNotes':
      return actionPreviewNotes(event)
    case 'actionNewNotes':
      return actionNewNotes(event)
    // - /poll
    case 'actionNewPoll':
      return actionNewPoll(event)
    case 'actionVotePoll':
      return actionVotePoll(event)
    // - /task
    // - /bug
    case 'actionNewIssue':
      return actionNewIssue(event)
  }
}
