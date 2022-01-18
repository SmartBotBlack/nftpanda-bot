(async () => {
  const PAUSE_TASK = 5 * 1000;
  const PAUSE_BUTTON = 5 * 1000;
  const PAUSE_WAIT_POPUP = 10 * 1000;
  const PAUSE_BEFORE_CLOSE_POPUP = 10 * 1000;

  while (1) {
    await new Promise((res) => setTimeout(res, PAUSE_TASK));

    console.log(1);

    // Find all active button for mine
    const buttonsSendToAdventure = document.querySelectorAll(
      ".one-slot:not(.no-p):not(.dis)"  // Количество панд 
    );

    // Going through all active buttons
    for (let i = 0; i < buttonsSendToAdventure.length; ++i) {
      let buttonSendToAdventure = document.querySelectorAll(
        ".one-slot:not(.no-p):not(.dis)"
      )[i];
      const button = buttonSendToAdventure.querySelector(
        ".one-slot-bt .button-in" //  кнопка отправки в путешествие
      );
      if (button) {
        button.click();
        console.log(2);
      }

      // If button "close" in popup visible
      while (
        !document.querySelector(".papper-modal .button-name-in")?.offsetParent 
      ) {
        await new Promise((res) => setTimeout(res, PAUSE_WAIT_POPUP));
      }

      await new Promise((res) => setTimeout(res, PAUSE_BEFORE_CLOSE_POPUP));

      // Click button "close" in popup

      while (document.querySelector(".papper-modal .button-name-in")) {
        document.querySelector(".papper-modal .button-name-in").click(); // закрытие модального окна с с количесвтом намайненого. 
        console.log(3);
      }

      await new Promise((res) => setTimeout(res, PAUSE_BUTTON));
      console.log(4);

    }
  }
})();


// Скрипт работает один раз, второй раз в путшествие панды не отправляются
// логи выводятся 1,2,3,4,1. То есть скрипт начинается заново сразу после задачи. 
// Если скрипт отработал, через два часа ты жмешь send to adventure, то скрипт сам заканчивает задачу. 
