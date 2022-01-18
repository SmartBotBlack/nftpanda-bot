(async () => {
  const PAUSE_TASK = 5 * 1000;
  const PAUSE_BUTTON = 5 * 1000;
  const PAUSE_WAIT_POPUP = 10 * 1000;
  const PAUSE_BEFORE_CLOSE_POPUP = 10 * 1000;

  while (1) {
    await new Promise((res) => setTimeout(res, PAUSE_TASK));

    // Find all active button for mine
    const buttonsSendToAdventure = document.querySelectorAll(
      ".one-slot:not(.no-p):not(.dis)"
    );

    // Going through all active buttons
    for (let i = 0; i < buttonsSendToAdventure.length; ++i) {
      let buttonSendToAdventure = document.querySelectorAll(
        ".one-slot:not(.no-p):not(.dis)"
      )[i];
      const button = buttonSendToAdventure.querySelector(
        ".one-slot-bt .button-in"
      );

      if (button) {
        button.click();

        // If button "close" in popup visible
        while (
          !document.querySelector(".papper-modal .button-name-in")?.offsetParent
        ) {
          await new Promise((res) => setTimeout(res, PAUSE_WAIT_POPUP));
        }

        await new Promise((res) => setTimeout(res, PAUSE_BEFORE_CLOSE_POPUP));

        // Click button "close" in popup
        document.querySelector(".papper-modal .button-name-in").click();

        await new Promise((res) => setTimeout(res, PAUSE_BUTTON));
      }

      await new Promise((res) => setTimeout(res, PAUSE_BUTTON));
    }
  }
})();
