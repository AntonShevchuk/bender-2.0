/**
 * @param {String} spaceId the ID of the space
 * @param {String} threadId the ID of the thread
 * @param {Object} issue the issue data from JIRA
 */
function hookUpdated(spaceId, threadId, issue) {

  Logger.log(`Update the card relative to issue "${issue.key}"`)

  const serviceToken = getServiceAccessToken('messages', ['https://www.googleapis.com/auth/chat.messages']);

  const name = `spaces/${spaceId}/messages/${threadId}.${threadId}`

  let message = Chat.Spaces.Messages.get(name, {}, { "Authorization": `Bearer ${serviceToken}` })

  message = Object.assign({}, message, cardIssue(false, issue))

  return Chat.Spaces.Messages.update(message, name, { "updateMask": "cardsV2" }, { "Authorization": `Bearer ${serviceToken}` })
}
