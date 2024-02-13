/**
 * Oh, yep, it is htmlEntities
 */
function htmlEntities (str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/**
 * Card Helper
 *  - Prepare Text and inject dividers
 */
function prepareTextWidgets (text) {
  let parts = text.split(/(-?\r?\n){3,}/)

  // filter empty rows
  parts = parts.filter(item => item.trim().length)

  // replace elements
  parts = parts.map(text => widgetTextParagraph(text))

  // add dividers
  parts = parts.flatMap((part, index) =>
    index < parts.length - 1 ? [part, widgetDivider()] : [part]
  );

  return parts
}

/**
 * Collect event data and count statistics for functions and commands
 *
 * @param {Object} event the event object from Google Chat
 */
function collectStatisticData(event) {
  const statistics = new StatisticsManager()
  statistics.collectData(event)
  statistics.save()
}
