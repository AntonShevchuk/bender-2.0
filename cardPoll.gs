/**
 * Create a card for Google Chat.
 *
 * @param {Object} event the event object from Google Chat
 * @param {Object} request the data from the request
 *
 * @return {Object} the card object
 */
function cardPoll(event, request) {
  let card = {
    "actionResponse": {
      "type": RESPONSE_TYPE_NEW_MESSAGE,
    },
    "cardsV2": [
      {
        "cardId": "poll",
        "card": {
          "header": {
            "title": event.user.displayName,
            "subtitle": event.user.email,
            "imageUrl": event.user.avatarUrl,
            "imageType": "CIRCLE"
          },
          "sections": []
        }
      }
    ]
  }

  let sections = [];

  // the widget with question and icon
  sections.push({
    "widgets": [
      {
        "decoratedText": {
          /*"startIcon": {
            "materialIcon": {
              "name": request.anonymous ? "lock" : "public"
            }
          },*/
          "text": request.question,
          "endIcon": {
            "materialIcon": {
              "name": request.multi ? "checklist_rtl" : "rule"
            }
          }
        }
      }
    ]
  })

  // prepare widgets for every option
  for (let i = 0; i < request.options.length; i++) {
    sections.push({
      "collapsible": true,
      "uncollapsibleWidgetsCount": 1,
      "widgets": [
        {
          "decoratedText": {
            "startIcon": {
              "materialIcon": {
                "name": "arrow_right"
              }
            },
            "topLabel": request.options[i],
            "text": "⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️",
            "bottomLabel": "0%",
            "button": {
              "text": "vote",
              "icon": {
                "materialIcon": {
                  "name": "add"
                }
              },
              "altText": "Vote",
              "onClick": {
                "action": {
                  "function": "actionVotePoll",
                  "parameters": [
                    {
                      "key": "option",
                      "value": `${i + 1}`
                    }
                  ]
                }
              }
            }
          }
        }
      ]
    })
  }

  card.cardsV2[0].card.sections = sections

  return card
}
