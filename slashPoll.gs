/**
 * Opens a dialog in Google Chat.
 *
 * @param {Object} event the event object from Chat API.
 * @param {Object} data from a form.
 *
 * @return {object} open a Dialog in Google Chat.
 */
function slashPoll(event, data = null) {

  let card = {
    "action_response": {
      "type": "DIALOG",
      "dialog_action": {
        "dialog": {
          "body": {
            "sections": [
              {
                "header": "Create New Poll",
                "collapsible": true,
                "uncollapsibleWidgetsCount": 4,
                "widgets": [
                  {
                    "textParagraph": {
                      "text": "Enter the poll topic and up to 10 choices in the poll. Blank options will be omitted."
                    }
                  },
                  {
                    "textInput": {
                      "name": "question",
                      "label": "Ask a question*",
                      "value": data && data.question ? data.question : ""
                    }
                  },
                  {
                    "textInput": {
                      "name": "option1",
                      "label": "1️⃣ Option*",
                      "value": data && data.options && data.options[0] ? data.options[0] : ""
                    }
                  },
                  {
                    "textInput": {
                      "name": "option2",
                      "label": "2️⃣ Option*",
                      "value": data && data.options && data.options[1] ? data.options[1] : ""
                    }
                  },
                  {
                    "textInput": {
                      "name": "option3",
                      "label": "3️⃣ Option",
                      "value": data && data.options && data.options[2] ? data.options[2] : ""
                    }
                  },
                  {
                    "textInput": {
                      "name": "option4",
                      "label": "4️⃣ Option",
                      "value": data && data.options && data.options[3] ? data.options[3] : ""
                    }
                  },
                  {
                    "textInput": {
                      "name": "option5",
                      "label": "5️⃣ Option",
                      "value": data && data.options && data.options[4] ? data.options[4] : ""
                    }
                  },
                  {
                    "textInput": {
                      "name": "option6",
                      "label": "6️⃣ Option",
                      "value": data && data.options && data.options[5] ? data.options[5] : ""
                    }
                  },
                  {
                    "textInput": {
                      "name": "option7",
                      "label": "7️⃣ Option",
                      "value": data && data.options && data.options[6] ? data.options[6] : ""
                    }
                  },
                  {
                    "textInput": {
                      "name": "option8",
                      "label": "8️⃣ Option",
                      "value": data && data.options && data.options[7] ? data.options[7] : ""
                    }
                  },
                  {
                    "textInput": {
                      "name": "option9",
                      "label": "9️⃣ Option",
                      "value": data && data.options && data.options[8] ? data.options[8] : ""
                    }
                  },
                  {
                    "textInput": {
                      "name": "option10",
                      "label": "🔟 Option",
                      "value": (data && data.options && data.options[9]) ? data.options[9] : ""
                    }
                  }
                ]
              },
              {
                "header": "Options",
                "collapsible": false,
                "widgets": [
                  {
                    "decoratedText": {
                      "text": "Multiple Answers",
                      "bottomLabel": "If this checked the voters can choose more than option",
                      "switchControl": {
                        "name": "multi",
                        "selected": (data && data.multi) ? data.multi : true,
                        "controlType": "SWITCH"
                      }
                    }
                  }
                ]
              }
            ],
            "fixedFooter": {
              "primaryButton": {
                "icon": {
                  "materialIcon": {
                    "name": "send"
                  }
                },
                "text": "Send",
                "onClick": {
                  "action": {
                    "function": "receivePoll"
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  if (data) {
    let section = {
      "widgets": [
        {
          "textParagraph": {
            "text": "<b><font color='#ff0000'>Please fill in all required data, including the question and two or more options.</font></b>"
          }
        }
      ]
    }

    card.action_response.dialog_action.dialog.body.sections.unshift(section)
  }

  return card;
}
