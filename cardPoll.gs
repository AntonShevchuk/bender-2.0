/**
 * @param {Object} event the event object from Google Chat
 * @param {Object} data the data from the request
 *
 * @return {Object} the card object
 */
function cardPoll(event, data) {
  let card = {
    'actionResponse': {
      'type': 'NEW_MESSAGE',
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

  sections.push({
    "widgets": [
      {
        "decoratedText": {
          /*"startIcon": {
            "materialIcon": {
              "name": data.anonymous ? "lock" : "public"
            }
          },*/
          "text": data.question,
          "endIcon": {
            "materialIcon": {
              "name": data.multi ? "checklist_rtl" : "rule"
            }
          }
        }
      }
    ]
  })

  for (let i = 0; i < data.options.length; i++) {
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
            "topLabel": data.options[i],
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
                  "function": "votePoll",
                  "parameters": [
                    {
                      "key": "option",
                      "value": `${i+1}`
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
