document.addEventListener("keydown", (e) => {
  const video = document.querySelector("video");
  const captionButton = document.querySelector("mat-caption-button");
  const nextEp = document.querySelector('[mattooltip="Next Episode"]');
  const fullScreen = document.querySelector("mat-fullscreen-button");

  const keyMap = {
    // Play or pause video
    " ": () => {
      const isPaused = video.paused;
      if (isPaused) video.play();
      else video.pause();
    },
    // Fast forward
    ArrowRight() {
      video.currentTime += 10;
    },
    // Fast backward
    ArrowLeft() {
      video.currentTime += -10;
    },
    // Toggle custom subtitles
    s() {
      captionButton.firstChild.click();
    },
    // Play next episode
    n() {
      const proceed = confirm("Confirm next episode?");
      if (proceed) nextEp.click();
    },
    // Fullscreen
    f() {
      fullScreen.click();
    },
    // Lock or unclock player
    l() {
      if (captionButton) {
        let sibling = captionButton.nextSibling;
        while (sibling.nodeName !== "BUTTON") {
          sibling = sibling.nextSibling;
        }
        if (sibling) sibling.click();
      } else {
        const icons = document.getElementsByTagName("mat-icon");
        let unlockIcon;
        Array.from(icons).forEach((icon) => {
          if (icon.textContent === "lock") unlockIcon = icon;
        });
        unlockIcon.closest("button").click();
      }
    },
  };

  if (e.key in keyMap && !!video) {
    e.preventDefault();
    keyMap[e.key]();
  }
});
