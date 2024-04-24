/**
 * @param {String} spaceId the ID of the space
 * @param {String} threadId the ID of the thread
 * @param {Object} issue the issue data from JIRA
 */
function hookUpdated(spaceId, threadId, issue) {

  Logger.log(`Update the card relative to issue "${issue.key}"`)

  const name = `spaces/${spaceId}/messages/${threadId}.${threadId}`

  const serviceToken = getServiceAccessToken('messages', ['https://www.googleapis.com/auth/chat.messages']);

  let message = Chat.Spaces.Messages.get(name, {}, { "Authorization": `Bearer ${serviceToken}` })

  // Update title
  message.cardsV2[0]["card"]["sections"][0]["header"] = issue.fields.summary

  // Update description
  message.cardsV2[0]["card"]["sections"][0]["widgets"][0]["textParagraph"]["text"] = jiraToGoogleChat(issue.fields.description)

  // Update assignee and status
  message.cardsV2[0]["card"]["sections"][2] = {
    "widgets": [
      {
        "columns": {
          "columnItems": [
            {
              "widgets": [
                {
                  "decoratedText": {
                    "icon": {
                      "iconUrl": issue.fields.status.iconUrl
                    },
                    "topLabel": "Status",
                    "text": issue.fields.status.name,
                    "bottomLabel": "",
                  }
                }

              ]
            },
            {
              "widgets": [
                {
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
              ]
            }
          ]
        }
      }
    ]
  }

  return Chat.Spaces.Messages.update(message, name, { "updateMask": "cardsV2" }, { "Authorization": `Bearer ${serviceToken}` })
}
