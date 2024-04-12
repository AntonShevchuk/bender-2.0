/**
 * Responds to a MESSAGE event in Google Chat.
 *
 * @param {Object} event the event object from Google Chat
 */
function onMessage(event) {

  collectStatisticData(event)

  if (event.message.slashCommand) {
    // Checks for the presence of event.message.slashCommand
    // The ID for your slash command
    switch (event.message.slashCommand.commandId) {
      case 1:
        return slashHelp(event)
      case 10:
        return slashBender(event)
      case 11:
        return slashWhisky(event)
      case 20:
        return slashCard(event)
      case 21:
        return slashNotes(event)
      case 22:
        return slashPoll(event)
    }
  } else {
    // If the Chat app doesn't detect a slash command
    let name = ''

    if (event.space.type === 'DM') {
      name = 'You'
    } else {
      name = event.user.displayName
    }

    const message = name + ' said "' + event.message.text + '"'

    return { 'text': message }
  }
}

/**
 * Responds to a CARD_CLICKED event in Google Chat.
 *
 * @param {Object} event the event object from Google Chat
 */
function onCardClick(event) {

  collectStatisticData(event)

  switch (event.common.invokedFunction) {
    // - /card
    case 'slashCard':
      return slashCard(event)
    case 'openCard':
      return openCard(event)
    case 'receiveCard':
      return receiveCard(event)
    // - /notes
    case 'slashNotes':
      return slashNotes(event)
    case 'openNotes':
      return openNotes(event)
    case 'receiveNotes':
      return receiveNotes(event)
    case 'openNotesForward':
      return openNotesForward(event)
    case 'receiveNotesForward':
      return receiveNotesForward(event)
    // - /poll
    case 'receivePoll':
      return receivePoll(event)
    case 'votePoll':
      return votePoll(event)
  }
}

/**
 * Responds to an ADDED_TO_SPACE event in Google Chat.
 *
 * @param {Object} event the event object from Google Chat
 */
function onAddToSpace(event) {

  collectStatisticData(event)

  let message = ''

  if (event.space.singleUserBotDm) {
    message = `I'm Bender, ${event.user.displayName}!`
  } else {
    message = `I'm Bender, baby! This is my space now!`
  }

  if (event.message) {
    // Bot added through @mention
    message = `You say "${event.message.text}" but you do it without respect`
  }

  return { 'text': message }
}

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
