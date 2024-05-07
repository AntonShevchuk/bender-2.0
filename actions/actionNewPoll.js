/**
 * @param {Object} event the event object from Google Chat
 */
function actionNewPoll(event) {
  const formHandler = new FormInputHandler(event);

  const request = {
    question: formHandler.getTextValue('question'),
    // anonymous: formHandler.getBooleanValue('anonymous'),
    multi: formHandler.getBooleanValue('multi'),
    options: []
  };

  for (let i = 1; i <= 10; i++) {
    const option = formHandler.getTextValue(`option${i}`);
    if (option.length) {
      request.options.push(option);
    }
  }

  if (!request.question.length) {
    return dialogPoll(event, request);
  }

  if (request.options.length < 2) {
    return dialogPoll(event, request);
  }

  return cardPoll(event, request);
}
