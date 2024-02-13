/**
 * @param {Object} event the event object from Google Chat
 */
function slashBenderStats(event) {
  let statisticsManager = new StatisticsManager()
  let userStats = statisticsManager.getUserStats()
  let scriptStats = statisticsManager.getScriptStats()

  let widgets = []

  widgets.push(
    widgetDecoratedText('<b>Scripts statistics</b>')
  )

  widgets.push(
    widgetDecoratedText('', 'Events')
  )

  widgets.push(
    widgetColumnsByObject(scriptStats.events)
  )

  widgets.push(
    widgetDecoratedText('', 'Commands')
  )

  widgets.push(
    widgetColumnsByObject(scriptStats.commands)
  )

  widgets.push(
    widgetDecoratedText('', 'Functions')
  )

  widgets.push(
    widgetColumnsByObject(scriptStats.functions)
  )

  widgets.push(
    widgetDecoratedText('<b>User statistics</b>')
  )

  widgets.push(
    widgetDecoratedText('', 'Commands')
  )

  widgets.push(
    widgetColumnsByObject(userStats.commands)
  )

  widgets.push(
    widgetDecoratedText('', 'Functions')
  )

  widgets.push(
    widgetColumnsByObject(userStats.functions)
  )

  return {
    'cardsV2': [{
      'cardId': 'bender',
      'card':
        {
          'sections': [
            {
              'header': 'Stats',
              'collapsible': false,
              'widgets': widgets
            }
          ]
        }
    }]
  }
}
