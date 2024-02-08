/**
 * @param {Object} event the event object from Google Chat
 */
function receiveCard(event) {
  const formHanler = new FormInputHandler(event)

  if (!formHanler.isValidHandler()) {
    console.log('Invalid event: formInputs not found.')
    return
  }

  let description = formHanler.getTextValue('description')

  if (!description || description.trim() === '') {
    return INVALID_ARGUMENT('You should write the description')
  }

  let images = [
    formHanler.getTextValue('image_1'),
    formHanler.getTextValue('image_2'),
    formHanler.getTextValue('image_3'),
    formHanler.getTextValue('image_4'),
    formHanler.getTextValue('image_5')
  ]

  images = images.filter(n => n)

  let widgets = []

  // Always display the first image directly if there are an odd number of images
  if (images.length % 2 !== 0) {
    widgets.push(widgetImage(images.shift()));
  }

  // Create Grid for the remaining images
  if (images.length > 0) {
    let grid = new Grid('', 2)

    // For each image, add a grid item to the Grid instance
    for (let i = 0; i < images.length; i++) {
      grid.addGridItem(images[i], '', 'SQUARE', '', '');
    }

    widgets.push(grid.build());
  }

  widgets.push(
    widgetTextParagraph(description)
  )

  return {
    'actionResponse': {
      'type': RESPONSE_TYPE_NEW_MESSAGE,
    },
    'cardsV2': [
      {
        'cardId': 'niceCard',
        'card': {
          'sections': [
            {
              'collapsible': false,
              'widgets': widgets
            }
          ]
        }
      }
    ]
  }
}
