(async () => {
  const PAUSE_TASK = 5 * 1000;
  const PAUSE_BUTTON = 5 * 1000;
  const PAUSE_WAIT_POPUP = 10 * 1000;
  const PAUSE_BEFORE_CLOSE_POPUP = 10 * 1000;

  const foodsRating = {
    common: 0,
    uncommon: 1,
  };

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

      // const energy = parseFloat(
      //   buttonSendToAdventure
      //     .querySelector(".tool-body")
      //     .textContent.split("/")[0]
      // );

      // if (button && energy > 5) {
        button.click();

        // If button "close" in popup visible
        while (
          !document.querySelector(".papper-modal .button-name-in")?.offsetParent
        ) {
          await new Promise((res) => setTimeout(res, PAUSE_WAIT_POPUP));
        }

        await new Promise((res) => setTimeout(res, PAUSE_BEFORE_CLOSE_POPUP));

      //   // Click button "close" in popup
        document.querySelector(".papper-modal .button-name-in").click();

        await new Promise((res) => setTimeout(res, PAUSE_BUTTON));
      // }

      // Check energy
      // if (energy <= 5) {
      //   console.log("energy", energy);
      //   let rarity = buttonSendToAdventure
      //     .querySelector("ul li:nth-child(3)")
      //     .textContent.split(": ")[1]
      //     .toLowerCase();
      //   if (rarity === "promo") rarity = "uncommon";
      //   console.log("rarity", rarity);
      //   document.querySelector(".menu-will-be .shop").click();

      //   const foods = document.querySelectorAll(
      //     ".shafl-wrap-in .one-shafl-prod .one-shafl-prod-thumb a"
      //   );
      //   const food = foods[foodsRating[rarity]];

      //   food.click();

      //   await new Promise((res) => setTimeout(res, PAUSE_WAIT_POPUP));

      //   document.querySelector(".modal-bay-bt .button-name-value").click();

      //   // If button "close" in popup visible
      //   while (
      //     !document.querySelector("#thank-modal-shop .def-bt.mid").offsetParent
      //   ) {
      //     await new Promise((res) => setTimeout(res, PAUSE_WAIT_POPUP));
      //   }

      //   document.querySelector("#thank-modal-shop .def-bt.mid").click();

      //   await new Promise((res) => setTimeout(res, PAUSE_BUTTON));

      //   document
      //     .querySelector(".header-menu-in .one-menu-item:nth-child(2) a")
      //     .click();

      //   await new Promise((res) => setTimeout(res, PAUSE_BUTTON));

      //   buttonSendToAdventure = document.querySelectorAll(
      //     ".one-slot:not(.no-p):not(.dis)"
      //   )[i];

      //   const buttonEnergy = buttonSendToAdventure.querySelector(
      //     ".energy-bt.tooltip button"
      //   );
      //   console.log("buttonSendToAdventure", buttonSendToAdventure);
      //   console.log("buttonEnergy", buttonEnergy);

      //   buttonEnergy.click();

      //   while (!document.querySelector(".modal-wrap-eat-list")?.offsetParent) {
      //     await new Promise((res) => setTimeout(res, PAUSE_WAIT_POPUP));
      //   }

      //   await new Promise((res) => setTimeout(res, PAUSE_BEFORE_CLOSE_POPUP));

      //   const foodItem = [
      //     ...document
      //       .querySelector(".modal-wrap-eat-list")
      //       .querySelectorAll(".bamb-modal-cards .one-eat-list.active"),
      //   ].find((el) => el.textContent.toLowerCase().includes(rarity));

      //   foodItem.querySelector(".button-name-value").click();

      //   await new Promise((res) => setTimeout(res, PAUSE_BEFORE_CLOSE_POPUP));
      // }

      await new Promise((res) => setTimeout(res, PAUSE_BUTTON));
    }
  }
})();
