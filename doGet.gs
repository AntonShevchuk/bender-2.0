/**
 * GET request to Web app URL
 */
function doGet(event) {
  Logger.log(`WebHook doGet()`)

  return HtmlService.createHtmlOutput("GET request processed");
}
