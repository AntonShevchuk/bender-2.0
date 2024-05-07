/**
 * Collect event data and count statistics for functions and commands
 * 
 * @param {Object} event the event object from Google Chat
 */
function collectStatisticData(event) {
  const statistics = new StatisticsManager()
  statistics.collectData(event)
  statistics.save()
}
