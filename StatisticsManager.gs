class StatisticsManager {
  constructor() {
    this.userProperties = PropertiesService.getUserProperties();
    this.scriptProperties = PropertiesService.getScriptProperties();

    this.emptyStats = {
      events: {
        MESSAGE: 0,
        CARD_CLICKED: 0,
        ADDED_TO_SPACE: 0,
        REMOVED_FROM_SPACE: 0,
      },
      commands: {},
      functions: {},
    }

    this.userStats = this.loadUserStats();
    this.scriptStats = this.loadScriptStats();
  }

  /**
   * Load user-specific statistics
   */
  loadUserStats() {
    const stats = this.userProperties.getProperty('STATS');
    return stats ? JSON.parse(stats) : this.emptyStats;
  }

  /**
   * Load script statistics
   */
  loadScriptStats() {
    const stats = this.scriptProperties.getProperty('STATS');
    return stats ? JSON.parse(stats) : this.emptyStats;
  }

  /**
   * Get usage statistics for this user
   */
  getUserStats() {
    return this.userStats;
  }

  /**
   * Get total usage statistics
   */
  getScriptStats() {
    return this.scriptStats;
  }

  /**
   * Save statistics
   */
  save() {
    this.saveUserStats()
    this.saveScriptStats()
  }

  /**
   * Save user-specific statistics
   */
  saveUserStats() {
    this.userProperties.setProperty('STATS', JSON.stringify(this.userStats));
  }

  /**
   * Save script statistics
   */
  saveScriptStats() {
    this.scriptProperties.setProperty('STATS', JSON.stringify(this.scriptStats));
  }

  /**
   * Collect event data and count statistics for functions and commands
   *
   * @param {Object} event the event object from Google Chat
   */
  collectData(event) {
    let userStats = this.getUserStats()
    let scriptStats = this.getScriptStats()

    userStats.events[event.type]++
    scriptStats.events[event.type]++

    switch (event.type) {
      case 'MESSAGE':
        if (event.message.slashCommand) {
          let commandId = event.message.slashCommand.commandId

          userStats.commands[commandId] = (userStats.commands[commandId] || 0) + 1
          scriptStats.commands[commandId] = (userStats.commands[commandId] || 0) + 1
        }
        break;
      case 'CARD_CLICKED':
        if (event.common.invokedFunction) {

          let invokedFunction = event.common.invokedFunction

          userStats.functions[invokedFunction] = (userStats.functions[invokedFunction] || 0) + 1
          scriptStats.functions[invokedFunction] = (scriptStats.functions[invokedFunction] || 0) + 1
        }
        break;
    }
  }
}
