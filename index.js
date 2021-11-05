const body = document.querySelector("body");

function playSound(e) {
  const audio = body.querySelector(`audio[data-key = "${e.keyCode}"]`);
  const key = body.querySelector(`.key[data-key = "${e.keyCode}"]`);

  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransitionend);
});

function removeTransitionend(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}
body.addEventListener("keydown", playSound);
