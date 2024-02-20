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
 * @param {('FILL_AVAILABLE_SPACE'|'FILL_MINIMUM_SPACE')} firstSize
 * @param {('START'|'CENTER'|'END')} firstHA
 * @param {('TOP'|'CENTER'|'BOTTOM')} firstVA
 * @param {('FILL_AVAILABLE_SPACE'|'FILL_MINIMUM_SPACE')} secondSize
 * @param {('START'|'CENTER'|'END')} secondHA
 * @param {('TOP'|'CENTER'|'BOTTOM')} secondVA
 */
function widgetColumns (firstSize = 'FILL_AVAILABLE_SPACE',
  firstHA = 'CENTER',
  firstVA = 'CENTER',
  secondSize = 'FILL_AVAILABLE_SPACE',
  secondHA = 'CENTER',
  secondVA = 'CENTER') {
  return {
    'columns': {
      'columnItems': [
        {
          'horizontalSizeStyle': firstSize,
          'horizontalAlignment': firstHA,
          'verticalAlignment': firstVA,
          'widgets': []
        },
        {
          'horizontalSizeStyle': secondSize,
          'horizontalAlignment': secondHA,
          'verticalAlignment': secondVA,
          'widgets': []
        }
      ]
    }
  }
}

/**
 * Fill columns widget with key-value data from an object
 * @param object
 */
function widgetColumnsByObject(object) {
  let widget = widgetColumns(
    'FILL_AVAILABLE_SPACE',
    'START',
    'CENTER',
    'FILL_MINIMUM_SPACE',
    'END',
    'CENTER'
  )

  Object.keys(object).forEach((key) => {
    widget.columns.columnItems[0].widgets.push(widgetTextParagraph(key))
    widget.columns.columnItems[1].widgets.push(widgetTextParagraph(object[key]))
  })

  return widget
}
