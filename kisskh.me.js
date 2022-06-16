document.addEventListener("keydown", (e) => {
  const video = document.querySelector("video");
  const keyMap = {
    " ": () => {
      const isPaused = video.paused;
      if (isPaused) video.play();
      else video.pause();
    },
    ArrowRight() {
      video.currentTime += 10;
    },
    ArrowLeft() {
      video.currentTime += -10;
    },
  };

  if (e.key in keyMap) {
    e.preventDefault();
    keyMap[e.key]();
  }
});
