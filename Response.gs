/**
 * The canonical error codes for gRPC APIs.
 *
 * @link https://developers.google.com/chat/api/reference/rest/v1/spaces.messages#code
 */
// Not an error; returned on success.
// HTTP Mapping: 200 OK
const CODE_OK = 'OK'
// The client specified an invalid argument.
// INVALID_ARGUMENT indicates arguments that are problematic regardless of the state of the system (e.g., a malformed file name).
// HTTP Mapping: 400 Bad Request
const CODE_INVALID_ARGUMENT = 'INVALID_ARGUMENT'
const CODE_ALREADY_EXISTS = 'ALREADY_EXISTS'

/**
 * The type of Chat app response
 *
 * @link https://developers.google.com/chat/api/reference/rest/v1/spaces.messages#responsetype
 */
// Default type that's handled as NEW_MESSAGE
const RESPONSE_TYPE_TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED'
// Post as a new message in the topic
const RESPONSE_TYPE_NEW_MESSAGE = 'NEW_MESSAGE'
// Update the Chat app's message.
// This is only permitted on a CARD_CLICKED event where the message sender type is BOT
const RESPONSE_TYPE_UPDATE_MESSAGE = 'UPDATE_MESSAGE'
// Update the cards on a user's message.
// This is only permitted as a response to a MESSAGE event with a matched url, or a CARD_CLICKED event where the message sender type is HUMAN.
// Text is ignored.
const RESPONSE_TYPE_UPDATE_USER_MESSAGE_CARDS = 'UPDATE_USER_MESSAGE_CARDS'
// Privately ask the user for additional authentication or configuration.
const RESPONSE_TYPE_REQUEST_CONFIG = 'REQUEST_CONFIG'
// Presents a dialog
const RESPONSE_TYPE_DIALOG = 'DIALOG'
// Widget text autocomplete options query
const RESPONSE_TYPE_UPDATE_WIDGET = 'UPDATE_WIDGET'

function actionResponse(type = RESPONSE_TYPE_DIALOG, statusCode = CODE_OK, message = '') {
  return {
    'actionResponse': {
      'type': type,
      'dialogAction': {
        'actionStatus': {
          'statusCode': statusCode,
          'userFacingMessage': message
        }
      }
    }
  }
}

/**
 * Card Helper
 *  - When all OK, status code
 */
function OK () {
  return actionResponse(RESPONSE_TYPE_DIALOG, CODE_OK, '👌')
}

/**
 * Card Helper
 *  - When argument is invalid
 */
function INVALID_ARGUMENT (message) {
  return actionResponse(RESPONSE_TYPE_DIALOG, CODE_INVALID_ARGUMENT, message)
}
