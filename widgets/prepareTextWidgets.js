/**
 * Card Helper
 *  - Prepare Text and inject dividers
 */
function prepareTextWidgets(text) {
  let parts = text.split(/(-?\r?\n){3,}/);

  // filter empty rows
  parts = parts.filter((item) => item.trim().length);

  // replace elements
  parts = parts.map((text) => widgetTextParagraph(text));

  // add dividers
  parts = parts.flatMap((part, index) =>
    index < parts.length - 1 ? [part, widgetDivider()] : [part]
  );

  return parts;
}
