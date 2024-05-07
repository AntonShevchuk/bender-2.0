/**
 * Oh, yep, it is htmlEntities
 *
 * @param {String} text
 * @return {String}
 */
function htmlEntities(text) {
  return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
}
