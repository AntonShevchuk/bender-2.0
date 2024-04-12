/**
 * @param {Object} event the event object from Google Chat
 */
function receivePoll(event) {

  const formHandler = new FormInputHandler(event)

  let data = {
    question: formHandler.getTextValue('question'),
    multi: formHandler.getBooleanValue('multi'),
    options: []
  }

  for (let i = 1; i <= 10; i++) {
    let option = formHandler.getTextValue(`option${i}`)
    if (option.length) {
      data.options.push(option)
    }
  }

  if (!data.question.length) {
    return slashPoll(event, data)
  }

  if (data.options.length < 2) {
    return slashPoll(event, data)
  }

  return cardPoll(event, data)
}
