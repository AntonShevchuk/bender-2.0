/**
 * @param {Object} event the event object from Google Chat
 */
function receiveNotes(event) {
  const parameters = event.common.parameters

  let announcements = parameters['announcements'] || ''
  let notes = parameters['notes'] || 'notes'
  let actions = parameters['actions'] || 'actions'

  let widgets = []

  if (announcements.length) {
    widgets.push(
      {
        'header': '📢 Announcements',
        'widgets': announcements
      }
    )
  }

  if (notes.length) {
    widgets.push(
      {
        'header': '📝 Notes',
        'widgets': notes
      }
    )
  }

  if (actions.length) {
    widgets.push(
      {
        'header': '✅ Action Items',
        'widgets': actions
      }
    )
  }

  return {
    'actionResponse': {
      'type': 'NEW_MESSAGE',
    },
    'cardsV2': [
      {
        'cardId': 'mm',
        'card': {
          'header': {
            'title': '📆 ' + new Date().toISOString().substring(0, 10),
            'subtitle': 'Meeting Minutes',
            'imageUrl': 'https://drive.google.com/uc?id=11EEyaDyInz-fnz2seJr8grqoUL8zBFIg',
            'imageType': 'CIRCLE'
          },
          'sections': widgets
        }
      }
    ]
  }
}
