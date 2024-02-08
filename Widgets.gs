/**
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
