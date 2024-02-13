/**
 * @param {Object} event the event object from Google Chat
 */
function openNotes (event) {
  const formHandler = new FormInputHandler(event)

  const announcements = formHandler.getTextValue('announcements')
  const notes = formHandler.getTextValue('notes')
  const actions = formHandler.getTextValue('actions')

  if (!announcements.length && !notes.length && !actions.length) {
    return INVALID_ARGUMENT('You don\'t write anything!')
  }

  let widgets = []

  if (announcements.length) {
    widgets.push(
      {
        'header': '📢 Announcements',
        'widgets': prepareTextWidgets(announcements)
      }
    )
  }

  if (notes.length) {
    widgets.push(
      {
        'header': '📝 Notes',
        'widgets': prepareTextWidgets(notes)
      }
    )
  }

  if (actions.length) {
    widgets.push(
      {
        'header': '✅ Action Items',
        'widgets': prepareTextWidgets(actions)
      }
    )
  }

  return {
    'action_response': {
      'type': RESPONSE_TYPE_DIALOG,
      'dialog_action': {
        'dialog': {
          'body': {
            'header': {
              'title': '📆 ' + new Date().toISOString().substring(0, 10),
              'subtitle': 'Meeting Minutes',
              'imageUrl': 'https://drive.google.com/uc?id=11EEyaDyInz-fnz2seJr8grqoUL8zBFIg',
              'imageType': 'CIRCLE'
            },
            'sections': widgets,
            'fixedFooter': {
              'primaryButton': {
                'icon': {
                  'materialIcon': {
                    'name': 'send'
                  }
                },
                'text': 'Send',
                'color': {
                  'red': 0,
                  'green': 0.5,
                  'blue': 1,
                  'alpha': 1
                },
                'onClick': {
                  'action': {
                    'function': 'receiveNotes',
                    'parameters': formHandler.getParameters()
                  }
                }
              },
              "secondaryButton": {
                "text": "Edit",
                "onClick": {
                  "action": {
                    "function": "slashNotes",
                    'parameters': formHandler.getParameters()
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
