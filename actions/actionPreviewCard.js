/**
 * @param {Object} event the event object from Google Chat
 */
function actionPreviewCard(event) {
  const formHandler = new FormInputHandler(event);

  if (!formHandler.isValidHandler()) {
    console.log('Invalid event: formInputs not found.');
    return;
  }

  const description = formHandler.getTextValue('description');

  let images = [
    formHandler.getTextValue('image_1'),
    formHandler.getTextValue('image_2'),
    formHandler.getTextValue('image_3'),
    formHandler.getTextValue('image_4'),
    formHandler.getTextValue('image_5')
  ];

  images = images.filter((n) => n);

  const widgets = [];

  // Always display the first image directly if there are an odd number of images
  if (images.length % 2 !== 0) {
    widgets.push(widgetImage(images.shift()));
  }

  // Create the Grid for the remaining images
  if (images.length > 0) {
    const grid = new Grid('', 2);

    // For each image, add a grid item to the Grid instance
    for (let i = 0; i < images.length; i++) {
      grid.addGridItem(images[i], '', 'SQUARE', '', '');
    }

    widgets.push(grid.build());
  }

  widgets.push(
      widgetTextParagraph(description)
  );

  return {
    'action_response': {
      'type': RESPONSE_TYPE_DIALOG,
      'dialog_action': {
        'dialog': {
          'body': {
            'sections': [
              {
                'header': 'Card Builder',
                'collapsible': false,
                'widgets': widgets
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
                    'function': 'actionNewCard',
                    'parameters': formHandler.getParameters()
                  }
                }
              },
              'secondaryButton': {
                'text': 'Edit',
                'onClick': {
                  'action': {
                    'function': 'actionEditCard',
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
