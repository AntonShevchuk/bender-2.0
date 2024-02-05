/**
 * Just help
 */
function slashHelp (event) {
  return {
    'privateMessageViewer': event.user,
    'text': [
      '*/help* — Ask for assistance',
      '*/bender* — Seek my opinion',
      '*/whisky* — It\'s time for a 🥃',
    ].join('\n\n')
  }
}
