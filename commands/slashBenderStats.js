/**
 * @param {Object} event the event object from Google Chat
 */
function slashBenderStats(event) {
  let statisticsManager = new StatisticsManager()
  let userStats = statisticsManager.getUserStats()
  let scriptStats = statisticsManager.getScriptStats()

  let widgets = [
    widgetDivider(),
    widgetDecoratedText("<b>Scripts statistics</b>"),
    widgetDecoratedText("Events"),
    widgetColumnsByObject(scriptStats.events),
    widgetDecoratedText("Commands"),
    widgetColumnsByObject(scriptStats.commands),
    widgetDecoratedText("Functions"),
    widgetColumnsByObject(scriptStats.functions),
    widgetDivider(),
    widgetDecoratedText("<b>User statistics</b>"),
    widgetDecoratedText("Commands"),
    widgetColumnsByObject(userStats.commands),
    widgetDecoratedText("Functions"),
    widgetColumnsByObject(userStats.functions),
  ]

  return {
    "cardsV2": [{
      "cardId": "bender",
      "card":
      {
        "sections": [
          {
            "header": "Stats",
            "collapsible": false,
            "widgets": widgets
          }
        ]
      }
    }]
  }
}
