/**
 * "onAppHome" is the pre-defined name of the callback that the Chat servers execute.
 */
function onAppHome() {
  return {
    action: {
      navigations: [
        {
          pushCard: cardHome()
        }
      ]
    }
  };
}
