/**
 * Get Access Token by service credentials
 *
 * Examples of usage:
 *
 *  getServiceAccessToken('messages', ['https://www.googleapis.com/auth/chat.messages.create']);
 *  getServiceAccessToken('spaces', ['https://www.googleapis.com/auth/chat.spaces.readonly']);
 */
function getServiceAccessToken(serviceName = 'messages', scopes = []) {
  const scriptProperties = PropertiesService.getScriptProperties()

  const service = OAuth2.createService(serviceName)
    .setTokenUrl('https://oauth2.googleapis.com/token')
    .setPrivateKey(scriptProperties.getProperty('PRIVATE_KEY').replace(/\\n/g, '\n'))
    .setIssuer(scriptProperties.getProperty('CLIENT_EMAIL'))
    .setPropertyStore(scriptProperties)
    .setScope(scopes.join(' '));

  if (!service.hasAccess()) {
    Logger.log('Authentication error: %s', service.getLastError());
    return null;
  }

  return service.getAccessToken();
}
