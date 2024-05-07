/**
 * @param {Object} event the event object from Google Chat
 */
function actionNewCard(event) {

  const parameters = event.common.parameters

  let description = parameters["description"]

  let images = [
    parameters["image_1"],
    parameters["image_2"],
    parameters["image_3"],
    parameters["image_4"],
    parameters["image_5"],
  ]

  images = images.filter(n => n)

  let widgets = []

  // Always display the first image directly if there are an odd number of images
  if (images.length % 2 !== 0) {
    widgets.push(widgetImage(images.shift()));
  }

  // Create the Grid for the remaining images
  if (images.length > 0) {
    let grid = new Grid("", 2)

    // For each image, add a grid item to the Grid instance
    for (let i = 0; i < images.length; i++) {
      grid.addGridItem(images[i], "", "SQUARE", "", "");
    }

    widgets.push(grid.build());
  }

  widgets.push(
    widgetTextParagraph(description)
  )

  return {
    "actionResponse": {
      "type": RESPONSE_TYPE_NEW_MESSAGE,
    },
    "cardsV2": [
      {
        "cardId": "card",
        "card": {
          "sections": [
            {
              "collapsible": false,
              "widgets": widgets
            }
          ]
        }
      }
    ]
  }
}
