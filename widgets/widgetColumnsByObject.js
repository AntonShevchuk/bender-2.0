/**
 * Fill columns widget with key-value data from an object
 * @param object
 */
function widgetColumnsByObject(object) {
  const widget = widgetColumns(
      'FILL_AVAILABLE_SPACE',
      'START',
      'CENTER',
      'FILL_MINIMUM_SPACE',
      'END',
      'CENTER'
  );

  Object.keys(object).forEach((key) => {
    widget.columns.columnItems[0].widgets.push(widgetTextParagraph(key));
    widget.columns.columnItems[1].widgets.push(widgetTextParagraph(object[key]));
  });

  return widget;
}
