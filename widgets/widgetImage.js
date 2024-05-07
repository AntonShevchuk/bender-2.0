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
  };
}
