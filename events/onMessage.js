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
