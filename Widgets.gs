/**
 * @link https://developers.google.com/chat/ui/widgets/text-paragraph
 * @link https://developers.google.com/chat/api/reference/rest/v1/cards#TextParagraph_1
 */
function widgetTextParagraph(text) {
  return {
    'textParagraph': {
      'text': text
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
