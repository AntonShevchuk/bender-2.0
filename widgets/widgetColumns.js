/**
 * @link https://developers.google.com/chat/ui/widgets/columns
 * @param {("FILL_AVAILABLE_SPACE"|"FILL_MINIMUM_SPACE")} firstSize
 * @param {("START"|"CENTER"|"END")} firstHA
 * @param {("TOP"|"CENTER"|"BOTTOM")} firstVA
 * @param {("FILL_AVAILABLE_SPACE"|"FILL_MINIMUM_SPACE")} secondSize
 * @param {("START"|"CENTER"|"END")} secondHA
 * @param {("TOP"|"CENTER"|"BOTTOM")} secondVA
 */
function widgetColumns(firstSize = "FILL_AVAILABLE_SPACE",
  firstHA = "CENTER",
  firstVA = "CENTER",
  secondSize = "FILL_AVAILABLE_SPACE",
  secondHA = "CENTER",
  secondVA = "CENTER") {
  return {
    "columns": {
      "columnItems": [
        {
          "horizontalSizeStyle": firstSize,
          "horizontalAlignment": firstHA,
          "verticalAlignment": firstVA,
          "widgets": []
        },
        {
          "horizontalSizeStyle": secondSize,
          "horizontalAlignment": secondHA,
          "verticalAlignment": secondVA,
          "widgets": []
        }
      ]
    }
  }
}
