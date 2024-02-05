/**
 * Responds to a MESSAGE event in Google Chat.
 *
 * @param {Object} event the event object from Google Chat
 */
function onMessage(event) {
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
 * Responds to an ADDED_TO_SPACE event in Google Chat.
 *
 * @param {Object} event the event object from Google Chat
 */
function onAddToSpace(event) {
  let message = ''

  if (event.space.singleUserBotDm) {
    message = `I'm Bender, ${event.user.displayName}!`
  } else {
    message = `I'm Bender, baby! This is mine space now!`
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
  console.info("Bot removed from ",
    (event.space.name ? event.space.name : "this chat"));
}