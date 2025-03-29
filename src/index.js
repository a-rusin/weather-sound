import "./css/style.scss";

document.addEventListener("DOMContentLoaded", () => {
  const soundItems = document.querySelectorAll(".sound__item");
  const listItems = document.querySelectorAll(".list__item");
  const bgItems = document.querySelectorAll(".bg-content__item");
  const volumeRage = document.querySelector(".input-volume-range");

  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      const itemAtr = item.getAttribute("data-list-item");
      if (itemAtr) {
        playSound(itemAtr);
        changeBG(itemAtr);
      }
    });
  });

  function playSound(atr) {
    stopAllSounds();
    const music = document.querySelector(`.sound__item_${atr}`);
    music.play();
  }

  function changeBG(atr) {
    const activeBg = document.querySelector(`.bg-content__item_${atr}`);

    bgItems.forEach((bg) => {
      if (bg !== activeBg) {
        bg.classList.remove("active");
      } else {
        bg.classList.add("active");
      }
    });
  }

  function stopAllSounds() {
    soundItems.forEach((sound) => {
      sound.pause();
      sound.currentTime = 0;
    });
  }

  volumeRage.addEventListener("input", () => {
    const value = +volumeRage.value;
    changeSoundVolume(value);
  });

  function changeSoundVolume(value) {
    soundItems.forEach((sound) => {
      sound.volume = value;
    });
  }
});
