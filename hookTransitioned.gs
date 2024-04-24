/**
 * @param {String} spaceId the ID of the space
 * @param {String} threadId the ID of the thread
 * @param {Object} issue the issue data from JIRA
 */
function hookTransitioned(spaceId, threadId, issue) {
  Logger.log(`Send message with new status "${issue.fields.status.name}" to space "${spaceId}" to thread "${threadId}"`)

  const space = `spaces/${spaceId}`
  const thread = `spaces/${spaceId}/threads/${threadId}`

  let widget = {
    "decoratedText": {
      "icon": {
        "iconUrl": issue.fields.status.iconUrl
      },
      "topLabel": "Status",
      "text": issue.fields.status.name,
      "bottomLabel": "",
    }
  }

  let message = {
    "cardsV2": [
      {
        "cardId": "transitioned",
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
