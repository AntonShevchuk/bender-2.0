/**
 * @link https://developers.google.com/chat/ui/widgets/decorated-text
 */
function widgetDecoratedText(text, topLabel = "", bottomLabel = "") {
  return {
    "decoratedText": {
      "topLabel": `${topLabel}`,
      "text": `${text}`,
      "bottomLabel": `${bottomLabel}`
    }
  }
}
