/**
 * Create a card for Google Chat.
 *
 * @param {Object} event the event object from Google Chat
 * @param {Object} issue the JIRA issue
 *
 * @return {Object} the card object
 */
function cardIssue(event, issue) {

  const scriptProperties = PropertiesService.getScriptProperties();
  const jiraUrl = scriptProperties.getProperty('JIRA_URL')
  const jiraIssueUrl = `${jiraUrl}/browse/${issue.key}`

  Logger.log(`The URL to Issue is ${jiraIssueUrl}`)

  return {
    "cardsV2": [
      {
        "cardId": "presale-request",
        "card": {
          "header": {
            "title": event.user.displayName,
            "subtitle": event.user.email,
            "imageUrl": event.user.avatarUrl,
            "imageType": "CIRCLE"
          },
          "sections": [
            {
              "widgets": [
                {
                  "decoratedText": {
                    "icon": {
                      // "iconUrl": issue.fields.issuetype.iconUrl
                      "materialIcon": {
                        "name": issue.fields.issuetype.name === "Task" ? "task" : "bug_report"
                      }
                    },
                    "text": issue.fields.summary,
                  }
                },
                {
                  "textParagraph": {
                    "text": jiraToGoogleChat(issue.fields.description)
                  }
                }
              ]
            },
            {
              "widgets": [
                {
                  "buttonList": {
                    "buttons": [
                      {
                        "text": "JIRA",
                        "color": {
                          "red": 0.75,
                          "green": 0.85,
                          "blue": 0.95,
                          "alpha": 1
                        },
                        "icon": {
                          "materialIcon": {
                            "name": "task"
                          }
                        },
                        "onClick": {
                          "openLink": {
                            "url": jiraIssueUrl
                          }
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
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
            },
            {
              "widgets": [
                {
                  "decoratedText": {
                    "icon": {
                      "knownIcon": "CLOCK"
                    },
                    "text": new Date().toLocaleString(),
                  }
                }
              ]
            },
          ]
        }
      }
    ]
  }
}
