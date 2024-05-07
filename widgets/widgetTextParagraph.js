/**
 * @link https://developers.google.com/chat/ui/widgets/text-paragraph
 * @link https://developers.google.com/chat/api/reference/rest/v1/cards#TextParagraph_1
 */
function widgetTextParagraph(text) {
  return {
    "textParagraph": {
      "text": `${text}`
    }
  }
}
