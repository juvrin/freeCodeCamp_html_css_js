const drumPad = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

const playSound = id => {
  const audioEl = document.getElementById(id);
  audioEl.play()
  display.innerText = id;
}

const keyMapping = (e) => {
  playSound(e.key.toUpperCase());
}

drumPad.forEach((pad) => pad.addEventListener("click", () => playSound(pad.id.replace("pad",""))));
document.addEventListener("keydown", keyMapping);



