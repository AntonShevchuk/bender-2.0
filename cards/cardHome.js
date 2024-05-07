function cardHome() {
  return {
    sections: [
      {
        widgets: [
          {
            buttonList: {
              buttons: [
                {
                  text: 'Manual for developers',
                  onClick: {
                    openLink: {
                      url: 'https://anton.shevchuk.name/google/google-chat-bot-first-steps/'
                    }
                  }
                }
              ]
            }
          }
        ]
      }
    ]
  };
}
