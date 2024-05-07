/**
 * Create a dialog for Google Chat.
 *
 * @param {Object} event the event object from Chat API.
 * @param {Object} request the data from the form or from parameters.
 *
 * @return {object} open a Dialog in Google Chat.
 */
function dialogNotes(event, request = null) {
  return {
    'action_response': {
      'type': RESPONSE_TYPE_DIALOG,
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
                      'value': request ? (htmlEntities(request['announcements']) || '') : ''
                    }
                  },
                  {
                    'textInput': {
                      'name': 'notes',
                      'type': 'MULTIPLE_LINE',
                      'label': '📝 Notes',
                      'value': request ? (htmlEntities(request['notes']) || '') : ''
                    }
                  },
                  {
                    'textInput': {
                      'name': 'actions',
                      'type': 'MULTIPLE_LINE',
                      'label': '✅ Action Items',
                      'value': request ? (htmlEntities(request['actions']) || '') : ''
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
                    'function': 'actionPreviewNotes'
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
