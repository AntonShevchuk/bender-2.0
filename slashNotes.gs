/**
 * Opens a dialog in Google Chat.
 *
 * @param {Object} event the event object from Chat API.
 *
 * @return {object} open a Dialog in Google Chat.
 */
function slashNotes (event) {

  const parameters = event.common.parameters

  return {
    'action_response': {
      'type': 'DIALOG',
      'dialog_action': {
        'dialog': {
          'body': {
            'sections': [
              {
                'header': 'Meeting Minutes',
                'collapsible': false,
                'widgets': [
                  {
                    'textInput': {
                      'name': 'announcements',
                      'type': 'MULTIPLE_LINE',
                      'label': '📢 Announcements',
                      'value': parameters ? (htmlEntities(parameters['announcements']) || '') : ''
                    }
                  },
                  {
                    'textInput': {
                      'name': 'notes',
                      'type': 'MULTIPLE_LINE',
                      'label': '📝 Notes',
                      'value': parameters ? (htmlEntities(parameters['notes']) || '') : ''
                    }
                  },
                  {
                    'textInput': {
                      'name': 'actions',
                      'type': 'MULTIPLE_LINE',
                      'label': '✅ Action Items',
                      'value': parameters ? (htmlEntities(parameters['actions']) || '') : ''
                    }
                  }
                ]
              }
            ],
            'fixedFooter': {
              'primaryButton': {
                'icon': {
                  'materialIcon': {
                    'name': 'send'
                  }
                },
                'text': 'Preview',
                'onClick': {
                  'action': {
                    'function': 'openNotes'
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
