/**
 * Opens a dialog in Google Chat.
 *
 * @param {Object} event the event object from Chat API.
 * @param {Object} request the data from the form.
 *
 * @return {object} open a Dialog in Google Chat.
 */
function dialogPoll(event, request = null) {

  let card = {
    "action_response": {
      "type": RESPONSE_TYPE_DIALOG,
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
                      "value": request && request.question ? request.question : ""
                    }
                  },
                  {
                    "textInput": {
                      "name": "option1",
                      "label": "1️⃣ Option*",
                      "value": request && request.options && request.options[0] ? request.options[0] : ""
                    }
                  },
                  {
                    "textInput": {
                      "name": "option2",
                      "label": "2️⃣ Option*",
                      "value": request && request.options && request.options[1] ? request.options[1] : ""
                    }
                  },
                  {
                    "textInput": {
                      "name": "option3",
                      "label": "3️⃣ Option",
                      "value": request && request.options && request.options[2] ? request.options[2] : ""
                    }
                  },
                  {
                    "textInput": {
                      "name": "option4",
                      "label": "4️⃣ Option",
                      "value": request && request.options && request.options[3] ? request.options[3] : ""
                    }
                  },
                  {
                    "textInput": {
                      "name": "option5",
                      "label": "5️⃣ Option",
                      "value": request && request.options && request.options[4] ? request.options[4] : ""
                    }
                  },
                  {
                    "textInput": {
                      "name": "option6",
                      "label": "6️⃣ Option",
                      "value": request && request.options && request.options[5] ? request.options[5] : ""
                    }
                  },
                  {
                    "textInput": {
                      "name": "option7",
                      "label": "7️⃣ Option",
                      "value": request && request.options && request.options[6] ? request.options[6] : ""
                    }
                  },
                  {
                    "textInput": {
                      "name": "option8",
                      "label": "8️⃣ Option",
                      "value": request && request.options && request.options[7] ? request.options[7] : ""
                    }
                  },
                  {
                    "textInput": {
                      "name": "option9",
                      "label": "9️⃣ Option",
                      "value": request && request.options && request.options[8] ? request.options[8] : ""
                    }
                  },
                  {
                    "textInput": {
                      "name": "option10",
                      "label": "🔟 Option",
                      "value": (request && request.options && request.options[9]) ? request.options[9] : ""
                    }
                  }
                ]
              },
              {
                "header": "Options",
                "collapsible": false,
                "widgets": [
                  /*{
                    "decoratedText": {
                      "text": "Anonymous voting",
                      "bottomLabel": "If this checked the voters name will be not shown",
                      "switchControl": {
                        "name": "anonymous",
                        "selected": (request && request.anonymous) ? request.anonymous : false,
                        "controlType": "SWITCH"
                      }
                    }
                  },*/
                  {
                    "decoratedText": {
                      "text": "Multiple Answers",
                      "bottomLabel": "If this checked the voters can choose more than option",
                      "switchControl": {
                        "name": "multi",
                        "selected": (request && request.multi) ? request.multi : true,
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
                    "function": "actionNewPoll"
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  if (request) {
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
