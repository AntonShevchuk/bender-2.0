/**
 * @param {Object} event the event object from Google Chat
 */
function actionNewIssue(event) {

  const parameters = event.common.parameters
  const formHandler = new FormInputHandler(event)

  const summary = formHandler.getTextValue('summary')
  const description = formHandler.getTextValue('description')
  const type = parameters.type

  // validation
  if (!summary.length || !description.length) {
    return dialogIssue(event, { summary, description })
  }

  Logger.log(`New Issue: ${summary}`)

  const jiraApi = new JiraAPI()

  let issueData = {
    "fields": {
      "project": { "key": jiraApi.project },
      "summary": summary,
      "description": googleChatToJira(description),
      "issuetype": { "name": type },
      "reporter": { "name": event.user.email },
      "assignee": null,
    }
  };

  const response = jiraApi.createIssue(issueData);

  Logger.log(`The Issue Key is "${response.key}"`)

  const issue = jiraApi.getIssue(response.key)

  try {
    // See https://developers.google.com/chat/api/guides/auth/service-accounts
    // for details on how to obtain a service account OAuth token.
    const serviceToken = getServiceAccessToken('messages', ['https://www.googleapis.com/auth/chat.messages']);
    const card = cardIssue(event, issue)
    const message = Chat.Spaces.Messages.create(
      card,
      event.space.name,
      {},
      // Authenticate with the service account token.
      {'Authorization': `Bearer ${serviceToken}`}
    );

    // Extracting the thread name from the response
    // Assuming Id is spaces/AAAAUxdK75Q/threads/2HM5vNXagUo
    const [ , spaceId, , threadAndMessageId] = message.thread.name.split('/');
    const baseUrl = "https://chat.google.com/room/";
    const threadUrl = `${baseUrl}${spaceId}/${threadAndMessageId}/${threadAndMessageId}`;

    Logger.log(`New thread ${threadUrl}`)

    let updateData = {
      "fields": {}
    }

    updateData.fields[jiraApi.customField] = threadUrl

    jiraApi.updateIssue(response.key, updateData)
  } catch (err) {
    // TODO (developer) - Handle exception
    Logger.log('Failed to create message with error %s', err.message);
  }

  return OK()
}
