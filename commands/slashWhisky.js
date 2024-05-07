/**
 * @param {Object} event the event object from Google Chat
 */
function slashWhisky(event) {
  return {
    'cardsV2': [{
      'cardId': 'whisky',
      'card': {
        'sections': [
          {
            'collapsible': false,
            'widgets': [
              {
                'grid': {
                  'title': '',
                  'columnCount': 1,
                  'items': [
                    {
                      'image': {
                        'imageUri': 'https://source.unsplash.com/featured/320x320?whisky+glass&sig=8',
                        'cropStyle': {
                          'type': 'CIRCLE'
                        },
                        'borderStyle': {
                          'type': 'STROKE'
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        ]
      }
    }]
  };
}
