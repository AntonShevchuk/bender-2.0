/**
 * Creates a grid widget for Google Chat cards.
 * @param {String} title Optional title for the grid.
 * @param {Number} columnCount Number of columns in the grid.
 * @link https://developers.google.com/chat/api/reference/rest/v1/cards#grid
 */
class Grid {
  constructor(title = '', columnCount = 2) {
    this.grid = {
      title: title,
      columnCount: columnCount,
      items: []
    };
  }

  /**
   * Creates a grid item for inclusion in a grid widget.
   * @param {String} imageUrl URL of the image.
   * @param {String} altText Alternative text for the image (for accessibility).
   * @param {String} cropStyle Crop style of the image, can be SQUARE, CIRCLE, or RECTANGLE_4_3.
   * @param {String} title Title text for the grid item.
   * @param {String} subtitle Subtitle text for the grid item.
   * @param {String} layout Layout of the text relative to the image, either TEXT_ABOVE or TEXT_BELOW.
   * @link https://developers.google.com/chat/api/reference/rest/v1/cards#griditem
   */
  addGridItem(imageUrl, altText = '', cropStyle = '', title = '', subtitle = '', layout = 'TEXT_BELOW') {
    const imageComponent = this.createImageComponent(imageUrl, altText, cropStyle);
    const gridItem = {
      image: imageComponent,
      layout: layout,
      title: title,
      subtitle: subtitle
    };
    this.grid.items.push(gridItem);
  }

  /**
   * Creates an image component to be used in a grid item.
   * @param {String} url URL of the image.
   * @param {String} altText Alternative text for the image (for accessibility).
   * @param {String} cropStyle Crop style of the image, can be SQUARE, CIRCLE, or RECTANGLE_4_3.
   * @link https://developers.google.com/chat/api/reference/rest/v1/cards#imagecomponent
   */
  createImageComponent(url, altText = '', cropStyle = '') {
    let imageComponent = {
      imageUri: url,
      altText: altText
    };

    if (cropStyle) {
      imageComponent.cropStyle = { type: cropStyle };
    }

    return imageComponent;
  }

  build() {
    return {
      grid: this.grid
    };
  }
}
