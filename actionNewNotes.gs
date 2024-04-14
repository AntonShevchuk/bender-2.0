/**
 * @param {Object} event the event object from Google Chat
 */
function actionNewNotes(event) {
  const parameters = event.common.parameters

  let announcements = parameters["announcements"]
  let notes = parameters["notes"]
  let actions = parameters["actions"]

  if (!announcements.length && !notes.length && !actions.length) {
    return INVALID_ARGUMENT('You don\'t write anything!')
  }

  let sections = []

  if (announcements.length) {
    sections.push(
      {
        "header": "📢 Announcements",
        "widgets": prepareTextWidgets(announcements)
      }
    )
  }

  if (notes.length) {
    sections.push(
      {
        "header": "📝 Notes",
        "widgets": prepareTextWidgets(notes)
      }
    )
  }

  if (actions.length) {
    sections.push(
      {
        "header": "✅ Action Items",
        "widgets": prepareTextWidgets(actions)
      }
    )
  }

  return {
    "actionResponse": {
      "type": RESPONSE_TYPE_NEW_MESSAGE,
    },
    "cardsV2": [
      {
        "cardId": "notes",
        "card": {
          "header": {
            "title": "📆 " + new Date().toISOString().substring(0, 10),
            "subtitle": "Meeting Minutes",
            "imageUrl": "https://drive.google.com/uc?id=11EEyaDyInz-fnz2seJr8grqoUL8zBFIg",
            "imageType": "CIRCLE"
          },
          "sections": sections
        }
      }
    ]
  }
}
