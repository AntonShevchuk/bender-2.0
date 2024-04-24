/**
 * Create a dialog for Google Chat.
 *
 * @param {Object} event the event object from Chat API.
 * @param {Object} request the data from the form or from parameters.
 * @param {String} type the type of issue
 * @return {object} open a Dialog in Google Chat.
 */
function dialogIssue(event, request = null, type = "Task") {
  let card = {
    "action_response": {
      "type": RESPONSE_TYPE_DIALOG,
      "dialog_action": {
        "dialog": {
          "body": {
            "sections": [
              {
                "widgets": []
              }
            ],
            "name": `New ${type}`,
            "fixedFooter": {
              "primaryButton": {
                "text": "Create",
                "onClick": {
                  "action": {
                    "function": "actionNewIssue",
                    "parameters": [
                      {
                        "key": "type",
                        "value": type
                      }
                    ]
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  if (request && !request.summary) {
    card.action_response.dialog_action.dialog.body.sections[0].widgets.push({
        "textParagraph": {
          "text": "<font color='#c1121f'>The summary is required</font>"
        }
      }
    )
  }

  card.action_response.dialog_action.dialog.body.sections[0].widgets.push(
    {
      "textInput": {
        "label": "Summary*",
        "type": "SINGLE_LINE",
        "name": "summary",
        "hintText": "",
        "value": request ? request.summary : ""
      }
    }
  )

  if (request && !request.description) {
    card.action_response.dialog_action.dialog.body.sections[0].widgets.push({
        "textParagraph": {
          "text": "<font color='#c1121f'>The description is required</font>"
        }
      }
    )
  }

  card.action_response.dialog_action.dialog.body.sections[0].widgets.push(
    {
      "textInput": {
        "label": "Description*",
        "type": "MULTIPLE_LINE",
        "name": "description",
        "hintText": "",
        "value": request ? request.description : ""
      }
    }
  )

  card.action_response.dialog_action.dialog.body.sections[0].widgets.push({
      "textParagraph": {
        "text": "<font color='#c1121f'>*</font> - all fields are required."
      }
    }
  )

  return card
}
