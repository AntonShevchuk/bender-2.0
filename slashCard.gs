/**
 * Opens a dialog in Google Chat.
 *
 * @param {Object} event the event object from Chat API.
 *
 * @return {object} open a Dialog in Google Chat.
 */
function slashCard (event) {
  return {
    'action_response': {
      'type': RESPONSE_TYPE_DIALOG,
      'dialog_action': {
        'dialog': {
          'body': {
            'sections': [
              {
                'header': 'Nice Card Builder',
                'collapsible': true,
                'uncollapsibleWidgetsCount': 2,
                'widgets': [
                  {
                    'textInput': {
                      'name': 'description',
                      'type': 'MULTIPLE_LINE',
                      'label': '📝 Description'
                    }
                  },
                  {
                    'textInput': {
                      'name': 'image_1',
                      'label': '1️⃣ Image URL',
                      'placeholderText': 'https://source.unsplash.com/featured/320x320'
                    }
                  },
                  {
                    'textInput': {
                      'name': 'image_2',
                      'label': '2️⃣'
                    }
                  },
                  {
                    'textInput': {
                      'name': 'image_3',
                      'label': '3️⃣'
                    }
                  },
                  {
                    'textInput': {
                      'name': 'image_4',
                      'label': '4️⃣'
                    }
                  },
                  {
                    'textInput': {
                      'name': 'image_5',
                      'label': '5️⃣'
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
                'text': 'Send',
                'color': {
                  'red': 0,
                  'green': 0.5,
                  'blue': 1,
                  'alpha': 1
                },
                'onClick': {
                  'action': {
                    'function': 'receiveCard'
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
