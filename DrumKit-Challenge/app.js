// audio sounds
let boom = document.getElementById("boom");
let clap = document.getElementById("clap");
let hihat = document.getElementById("hihat");
let kick = document.getElementById("kick");
let openhat = document.getElementById("openhat");
let ride = document.getElementById("ride");
let snare = document.getElementById("snare");
let tink = document.getElementById("tink");
let tom = document.getElementById("tom");

document.addEventListener("keypress", (keyValue) => {
    if (keyValue.keyCode == 97) {
        boom.play();
    } else if (keyValue.keyCode == 115) {
        clap.play();
    } else if (keyValue.keyCode == 100) {
        hihat.play();
    } else if (keyValue.keyCode == 102) {
        kick.play();
    } else if (keyValue.keyCode == 103) {
        openhat.play();
    } else if (keyValue.keyCode == 104) {
        ride.play();
    } else if (keyValue.keyCode == 106) {
        snare.play();
    } else if (keyValue.keyCode == 107) {
        tink.play();
    } else if (keyValue.keyCode == 108) {
        tom.play();
    }
  })

  const buttons = document.querySelectorAll(".click");
  
  buttons.forEach(button => { 
    button.addEventListener("click", () => { 
    let audio = document.querySelector(`#${button.textContent}`)
    audio.play()
    }); 
});