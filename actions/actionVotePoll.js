/**
 * @param {Object} event the event object from Google Chat
 */
function actionVotePoll(event) {
  const parameters = event.common.parameters;

  const sections = event.message.cardsV2[0].card.sections;

  // let anonymous = sections[0].widgets[0].decoratedText.startIcon.materialIcon.name === "lock"

  const multi = sections[0].widgets[0].decoratedText.endIcon.materialIcon.name === 'checklist_rtl';

  const option = parseInt(parameters.option);

  const user = event.user.displayName;
  const avatar = event.user.avatarUrl;

  const widget = {
    'decoratedText': {
      'startIcon': {
        'iconUrl': avatar
      },
      'text': user
    }
  };

  const votes = [];

  for (let i = 1; i < sections.length; i++) {
    const widgets = sections[i].widgets;
    const people = [];

    if (widgets.length > 1) {
      for (let j = 1; j < widgets.length; j++) {
        people.push(
            widgets[j].decoratedText.text
        );
      }
    }

    votes[i] = people.filter((n) => n);

    Logger.log(`Votes for "${i}": ${votes[i].length}`, votes[i]);
  }

  // update votes
  const index = votes[option].indexOf(user);
  if (index === -1) {
    Logger.log(`+1 vote for ${option}`);
    votes[option].push(user);
    sections[option].widgets.push(widget);
  } else {
    Logger.log(`-1 vote for ${option}, index is ${index}`);
    votes[option].splice(index, 1);
    sections[option].widgets.splice(index + 1, 1);
  }

  // for non-multi voting poll
  // remove user votes for another options
  if (!multi) {
    for (let i = 1; i < sections.length; i++) {
      if (i === option) {
        continue;
      }
      const index = votes[i].indexOf(user);
      if (index !== -1) {
        Logger.log(`-1 vote for ${i}, index is ${index}`);
        votes[i].splice(index, 1);
        sections[i].widgets.splice(index + 1, 1);
      }
    }
  }

  Logger.log(`Vote for "${option}": ${votes[option].length}`, votes[option]);

  // removed empty value from position 0
  votes.shift();

  const percentages = calculatePercentages(votes);

  Logger.log(`%:`, percentages);

  for (let i = 1; i < sections.length; i++) {
    sections[i].widgets[0].decoratedText.text = fillProgressBar(percentages[i - 1]);
    sections[i].widgets[0].decoratedText.bottomLabel = `${percentages[i - 1]}%`;
  }

  return {
    'actionResponse': {
      'type': RESPONSE_TYPE_UPDATE_MESSAGE
    },
    'cardsV2': [
      {
        'cardId': 'poll',
        'card': {
          'header': event.message.cardsV2[0].card.header,
          'sections': sections
        }
      }
    ]
  };
}

/**
 * @param {Array} data
 */
function calculatePercentages(data) {
  // Flatten the array by concatenating all sub-arrays
  const flattenedArray = [].concat.apply([], data);

  // Calculate total number of items across all sub-arrays
  const totalItems = flattenedArray.length;

  // Filter out duplicates by using a temporary object where properties represent the unique items found so far
  const uniqueItems = flattenedArray.filter(function(item, index, self) {
    return self.indexOf(item) === index;
  });

  const totalUniqueItems = uniqueItems.length;

  // Calculate percentage of each sub-array based on the total items
  return data.map(function(sublist) {
    return totalUniqueItems ? Math.round(sublist.length / totalUniqueItems * 100) : 0;
  });
}

/**
 * @param {Number} percentage
 */
function fillProgressBar(percentage) {
  const totalBoxes = 10; // Total number of boxes in the text
  const filledBoxes = Math.round(percentage / 10); // Calculate number of filled boxes (each box represents 5%)
  let progressBar = ''; // Initialize an empty string for the progress bar

  // Build the progress bar string
  for (let i = 0; i < totalBoxes; i++) {
    if (i < filledBoxes) {
      progressBar += '🟦'; // Add a filled box for each 5% completed // █
    } else {
      progressBar += '⬜️'; // Fill the rest with empty boxes
    }
  }

  return progressBar;
}
