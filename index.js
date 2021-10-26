(async () => {
  const PAUSE_TASK = 5 * 1000;
  const PAUSE_BUTTON = 5 * 1000;
  const PAUSE_WAIT_POPUP = 10 * 1000;
  const PAUSE_BEFORE_CLOSE_POPUP = 10 * 1000;

  while (1) {
    await new Promise((res) => setTimeout(res, PAUSE_TASK));

    // Find all active button for mine
    const buttonsSendToAdventure = document.querySelectorAll(
      ".one-slot:not(.no-p):not(.dis) .button-in"
    );

    // Going through all active buttons
    for (const buttonSendToAdventure of buttonsSendToAdventure) {
      buttonSendToAdventure.click();

      // After click button wait popup with succes message text
      const buttonClosePopup = document.querySelector(
        ".papper-modal .button-name-in"
      );

      // If button "close" in popup visible
      while (!buttonClosePopup.offsetParent) {
        await new Promise((res) => setTimeout(res, PAUSE_WAIT_POPUP));
      }

      // Click button "close" in popup
      await new Promise((res) => setTimeout(res, PAUSE_BEFORE_CLOSE_POPUP));

      buttonClosePopup.click();

      await new Promise((res) => setTimeout(res, PAUSE_BUTTON));
    }
  }
})();
