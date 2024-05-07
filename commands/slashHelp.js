/**
 * Just help
 */
function slashHelp(event) {
  return {
    'privateMessageViewer': event.user,
    'text': [
      '*/help* — Ask for assistance',
      '*/bender* — Seek my opinion',
      '*/whisky* — It"s time for a 🥃',
      '*/card* — Open Card Builder',
      '*/notes* — Prepare meeting notes for the current space',
      '*/poll* - Create vote/poll'
    ].join('\n\n')
  };
}
