/**
 * @param {Object} event the event object from Google Chat
 */
function actionPreviewNotes(event) {
  const formHandler = new FormInputHandler(event);

  const announcements = formHandler.getTextValue('announcements');
  const notes = formHandler.getTextValue('notes');
  const actions = formHandler.getTextValue('actions');

  const sections = [];

  if (!announcements.length && !notes.length && !actions.length) {
    sections.push(
        {
          'header': '⚠️ Attention ⚠️',
          'widgets': [
            widgetTextParagraph('<b>You don\'t write anything!</b>')
          ]
        }
    );
  }

  if (announcements.length) {
    sections.push(
        {
          'header': '📢 Announcements',
          'widgets': prepareTextWidgets(announcements)
        }
    );
  }

  if (notes.length) {
    sections.push(
        {
          'header': '📝 Notes',
          'widgets': prepareTextWidgets(notes)
        }
    );
  }

  if (actions.length) {
    sections.push(
        {
          'header': '✅ Action Items',
          'widgets': prepareTextWidgets(actions)
        }
    );
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
            'sections': sections,
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
                    'function': 'actionNewNotes',
                    'parameters': formHandler.getParameters()
                  }
                }
              },
              'secondaryButton': {
                'text': 'Edit',
                'onClick': {
                  'action': {
                    'function': 'actionEditNotes',
                    'parameters': formHandler.getParameters()
                  }
                }
              }
            }
          }
        }
      }
    }
  };
}
