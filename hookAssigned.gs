/**
 * @param {String} spaceId the ID of the space
 * @param {String} threadId the ID of the thread
 * @param {Object} issue the issue data from JIRA
 */
function hookAssigned(spaceId, threadId, issue) {

  Logger.log(`Send update message to space "${spaceId}" to thread "${threadId}"`)

  const space = `spaces/${spaceId}`
  const thread = `spaces/${spaceId}/threads/${threadId}`

  let widget = {
    "decoratedText": {
      "icon": {
        "knownIcon": "PERSON"
        // "iconUrl": issue.fields.assignee.avatarUrls["48x48"]
      },
      "topLabel": "Assigned",
      "text": issue.fields.assignee ? issue.fields.assignee.displayName : 'Unassigned',
      "bottomLabel": issue.fields.assignee ? issue.fields.assignee.emailAddress : '',
    }
  }

  let message = {
    "cardsV2": [
      {
        "cardId": "assigned",
        "card": {
          "sections": [{
            "widgets": [widget]
          }]
        }
      }
    ],
    "thread": {
      "name": thread
    }
  }

  const serviceToken = getServiceAccessToken('messages', ['https://www.googleapis.com/auth/chat.messages']);

  return Chat.Spaces.Messages.create(
    message,
    space,
    { "messageReplyOption": "REPLY_MESSAGE_OR_FAIL" },
    { "Authorization": `Bearer ${serviceToken}` }
  );
}
