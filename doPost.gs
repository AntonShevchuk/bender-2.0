/**
 * POST request to Web app URL
 */
function doPost(event) {
  const action = event.parameter.action ? event.parameter.action : null

  Logger.log(`WebHook doPost("${action}")`)

  if (!event.postData || !event.postData.contents) {
    Logger.log(`POST data is empty`)
  }

  const data = JSON.parse(event.postData.contents);

  if (!data) {
    Logger.log(`POST data is invalid`)
  }

  const scriptProperties = PropertiesService.getScriptProperties();

  // JIRA threadUrl
  const threadUrl = data.fields[scriptProperties.getProperty('JIRA_CUSTOM_FIELD')]

  if (!threadUrl || threadUrl.length === 0) {
    Logger.log(`Invalid thread URL for issue "${data.key}"`)
    return HtmlService.createHtmlOutput(`POST request processed: Invalid thread URL`);
  }

  try {
    const parts = threadUrl.split('/'); // Split the URL into parts by '/'
    const spaceId = parts[4]; // The space ID is expected to be the fifth part
    const threadId = parts[5]; // The thread ID is expected to be the sixth part

    // You can now call your bot method based on event type
    switch (action) {
      case 'assigned':
        hookUpdated(spaceId, threadId, data)
        hookAssigned(spaceId, threadId, data)
        break;
      case 'updated':
        hookUpdated(spaceId, threadId, data)
        break;
      case 'transitioned':
        hookUpdated(spaceId, threadId, data)
        hookTransitioned(spaceId, threadId, data)
        break;
      case 'commented':
        hookCommented(spaceId, threadId, data)
        break;
      default:
        Logger.log("Invalid action")
        break;
    }
  } catch (e) {
    return HtmlService.createHtmlOutput(`POST request processed with error: ${e}`);
  }

  return HtmlService.createHtmlOutput("POST request processed");
}
