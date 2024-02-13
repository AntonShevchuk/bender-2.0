/**
 * @param {Object} event the event object from Google Chat
 */
function slashBender (event) {

  if (event.message.argumentText && event.message.argumentText.length) {
    switch (event.message.argumentText.trim()) {
      case 'stats':
        return slashBenderStats(event)
    }
  }

  const messages = [
    'I\'m Bender, baby!',
    'Wanna kill all humans?',
    'I\'m so embarrassed. I wish everybody else was dead.',
    'My story is a lot like yours, only more interesting \'cause it involves robots.',
    'This is the worst kind of discrimination there is: the kind against me!',
    'How can I be so bad at everything I try, and still be so great?',
    'My life, and by extension everyone else\'s, is meaningless.',
    'I\'m going to build my own theme park! With blackjack! And hookers!',
    'Bite my shiny metal ass!'
  ]

  const random = Math.floor(Math.random() * (messages.length - 1))

  return {
    'cardsV2': [{
      'cardId': 'bender',
      'card':
        {
          'sections': [
            {
              'collapsible': false,
              'widgets': [
                {
                  'textParagraph': {
                    'text': '— ' + messages[random]
                  }
                }
              ]
            }
          ]
        }
    }
    ]
  }
}
