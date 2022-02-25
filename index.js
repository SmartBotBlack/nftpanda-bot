(async () => {
  const PAUSE_TASK = 5 * 1000;
  const PAUSE_BUTTON = 5 * 1000;
  const PAUSE_WAIT_POPUP = 10 * 1000;
  const PAUSE_BEFORE_CLOSE_POPUP = 10 * 1000;

  const mouseClickEvents = ["mousedown", "click", "mouseup"];
  function simulateMouseClick(element) {
    mouseClickEvents.forEach((mouseEventType) =>
      element.dispatchEvent(
        new MouseEvent(mouseEventType, {
          view: window,
          bubbles: true,
          cancelable: true,
          buttons: 1,
        })
      )
    );
  }

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

        const location = document.querySelector("#group-adv-3.group-adv");
        if (location) {
          console.log("Wait location");
          simulateMouseClick(location);

          const sendAdventure = document.querySelector(
            ".modal-to-adv.open.anim.bamb button"
          );

          if (sendAdventure) {
            console.log("Wait sendAdventure");
            sendAdventure.click();

            // If button "close" in popup visible
            while (
              !document.querySelector(
                ".modal-to-adv.reward-window.open.anim.bamboo-rew button"
              )?.offsetParent
            ) {
              await new Promise((res) => setTimeout(res, PAUSE_WAIT_POPUP));
            }

            await new Promise((res) =>
              setTimeout(res, PAUSE_BEFORE_CLOSE_POPUP)
            );

            // Click button "close" in popup
            document
              .querySelector(
                ".modal-to-adv.reward-window.open.anim.bamboo-rew button"
              )
              .click();

            await new Promise((res) => setTimeout(res, PAUSE_BUTTON));
          }
        }
      }
      await new Promise((res) => setTimeout(res, PAUSE_BUTTON));
    }
  }
})();
