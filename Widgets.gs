/**
 * @link https://developers.google.com/chat/ui/widgets/text-paragraph
 * @link https://developers.google.com/chat/api/reference/rest/v1/cards#TextParagraph_1
 */
function widgetTextParagraph(text) {
  return {
    'textParagraph': {
      'text': `${text}`
    }
  }
}

/**
 * @link https://developers.google.com/chat/ui/widgets/image
 * @link https://developers.google.com/chat/api/reference/rest/v1/cards#image
 */
function widgetImage(url, alt = '') {
  return {
    'image': {
      'imageUrl': url,
      'altText': alt
    }
  }
}

/**
 * @link https://developers.google.com/chat/ui/widgets/divider
 */
function widgetDivider() {
  return {
    "divider": {}
  }
}

/**
 * @link https://developers.google.com/chat/ui/widgets/decorated-text
 */
function widgetDecoratedText(text, topLabel = '', bottomLabel = '') {
  return {
    "decoratedText": {
      "topLabel": `${topLabel}`,
      "text": `${text}`,
      "bottomLabel": `${bottomLabel}`
    }
  }
}

/**
 * @link https://developers.google.com/chat/ui/widgets/columns
 */
function widgetColumnsByObject(object) {
  let widget = {
    'columns': {
      'columnItems': [
        {
          'horizontalSizeStyle': 'FILL_AVAILABLE_SPACE',
          'horizontalAlignment': 'START',
          'verticalAlignment': 'CENTER',
          'widgets': []
        },
        {
          'horizontalSizeStyle': 'FILL_MINIMUM_SPACE',
          'horizontalAlignment': 'END',
          'verticalAlignment': 'CENTER',
          'widgets': []
        }
      ]
    }
  }

  Object.keys(object).forEach((key) => {
    widget.columns.columnItems[0].widgets.push(widgetTextParagraph(key))
    widget.columns.columnItems[1].widgets.push(widgetTextParagraph(object[key]))
  })

  return widget
}
