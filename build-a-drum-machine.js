const heater1 = document.getElementById("heater1");
const audio = new Audio();


const playSound = id => {
  const sound = document.getElementById(id);
  audio.src = sound.src;
  audio.play()
}



heater1.addEventListener("click", () => playSound("Q"))
