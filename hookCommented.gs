/**
 * @param {String} spaceId the ID of the space
 * @param {String} threadId the ID of the thread
 * @param {Object} issue the issue data from JIRA
 */
function hookCommented(spaceId, threadId, issue) {
  Logger.log(`Send comment to space "${spaceId}" to thread "${threadId}"`)

  const space = `spaces/${spaceId}`
  const thread = `spaces/${spaceId}/threads/${threadId}`

  if (!issue.comment.body) {
    return
  }

  const comment = issue.comment

  Logger.log(comment)

  let widget = {
    "decoratedText": {
      "icon": {
        "knownIcon": "PERSON"
      },
      "topLabel": comment.author.displayName,
      "text": comment.body,
      "bottomLabel": comment.author.name,
    }
  }

  let message = {
    "cardsV2": [
      {
        "cardId": "commented",
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