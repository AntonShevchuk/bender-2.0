// Called from elsewhere (i.e. on button press).
function updateAppHomeCard(event) {
  return {
    render_actions: {
      action: {
        navigations: [
          {
            updateCard: cardHome()
          }
        ]
      }
    }
  }
}
