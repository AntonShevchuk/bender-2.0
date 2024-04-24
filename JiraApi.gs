/**
 * Class for working with JIRA API v2
 *
 * @link https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/
 */
class JiraAPI {
  constructor() {
    const scriptProperties = PropertiesService.getScriptProperties();
    this.baseUrl = scriptProperties.getProperty('JIRA_URL');
    this.token = scriptProperties.getProperty('JIRA_TOKEN');
    this.project = scriptProperties.getProperty('JIRA_PROJECT');
    this.customField = scriptProperties.getProperty('JIRA_CUSTOM_FIELD');
    this.options = {
      headers: {
        "Authorization": "Bearer " + this.token,
        "Content-Type": "application/json"
      },
      muteHttpExceptions: true // Set to false to throw exceptions for HTTP errors
    }
  }

  /**
   * Makes a HTTP request to the JIRA API with error handling.
   *
   * @param {String} endpoint - The API endpoint.
   * @param {Object} options - The options for the fetch call, including method, headers, and payload.
   * @return {Object} The JSON response from the JIRA API.
   */
  fetch(endpoint, options) {
    const url = `${this.baseUrl}${endpoint}`;

    Logger.log(url)
    Logger.log(options)

    try {
      const response = UrlFetchApp.fetch(url, Object.assign({}, options, this.options));
      const responseCode = response.getResponseCode()
      const contentText = response.getContentText()
      const contentType = response.getHeaders()['Content-Type']

      Logger.log(`Response code: ${responseCode}`)
      Logger.log(`Content type: ${contentType}`)

      if (responseCode >= 200 && responseCode < 300) {
        // it strange, FIXME
        if (contentText.length && contentType.search('application/json') !== -1) {
          return JSON.parse(contentText)
        } else {
          return response.getResponseCode()
        }
      } else {
        console.error(`JIRA API request to ${endpoint} failed with code: ${responseCode}, response: ${contentText}`);
        throw new Error(`Request failed with code: ${responseCode}`);
      }
    } catch (e) {
      console.error(`Error making request to JIRA API: ${e}`);
      throw e; // Rethrow the error after logging
    }
  }

  /**
   * Retrieves details of an issue from JIRA.
   *
   * @param {String} issueIdOrKey - The ID or key of the issue
   */
  getIssue(issueIdOrKey) {
    return this.fetch(`/rest/api/2/issue/${issueIdOrKey}`, {
      "method": "get"
    });
  }

  /**
   * Creates a new issue in JIRA.
   *
   * @param {Object} issueData
   */
  createIssue(issueData) {
    return this.fetch("/rest/api/2/issue", {
      "method": "post",
      "payload": JSON.stringify(issueData)
    });
  }

  /**
   * Updates an issue in JIRA.
   *
   * @param {String} issueIdOrKey - The ID or key of the issue
   * @param {Object} issueData
   */
  updateIssue(issueIdOrKey, issueData) {
    return this.fetch(`/rest/api/2/issue/${issueIdOrKey}`, {
      "method": "put",
      "payload": JSON.stringify(issueData)
    });
  }
}
