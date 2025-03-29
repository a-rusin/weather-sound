import "./css/style.scss";

document.addEventListener("DOMContentLoaded", () => {
  const soundItems = document.querySelectorAll(".sound__item");
  const listItems = document.querySelectorAll(".list__item");

  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      const itemAtr = item.getAttribute("data-list-item");
      if (itemAtr) {
        playSound(itemAtr);
      }
    });
  });

  function playSound(atr) {
    stopAllSounds();
    const music = document.querySelector(`.sound__item_${atr}`);
    music.play();
  }

  function stopAllSounds() {
    soundItems.forEach((audio) => {
      console.log(audio);
      audio.pause();
      audio.currentTime = 0;
    });
  }
});
