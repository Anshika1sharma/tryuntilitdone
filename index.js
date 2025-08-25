var len = document.getElementsByClassName("drum").length;

for (var i = 0; i < len; i++) {
  document.getElementsByClassName("drum")[i]
    .addEventListener("click", handleProgram);
}
document.addEventListener("keydown", (event) => {
  handleProgramKeys(event.key);
  buttonAnimation(event.key);
});

function handleProgram() {
  let drumClass = this.innerHTML;

  switch (drumClass) {
    case 'w': new Audio("./tom-1.mp3").play(); break;
    case 'a': new Audio("./tom-2.mp3").play(); break;
    case 's': new Audio("./tom-3.mp3").play(); break;
    case 'd': new Audio("./tom-4.mp3").play(); break;
    case 'j': new Audio("./crash.mp3").play(); break;
    case 'k': new Audio("./kick-bass.mp3").play(); break;
    case 'l': new Audio("./snare.mp3").play(); break;
  }
}

function handleProgramKeys(keynote) {
  switch (keynote) {
    case 'w': new Audio("./tom-1.mp3").play(); break;
    case 'a': new Audio("./tom-2.mp3").play(); break;
    case 's': new Audio("./tom-3.mp3").play(); break;
    case 'd': new Audio("./tom-4.mp3").play(); break;
    case 'j': new Audio("./crash.mp3").play(); break;
    case 'k': new Audio("./kick-bass.mp3").play(); break;
    case 'l': new Audio("./snare.mp3").play(); break;
  }
}

function buttonAnimation(key) {
  let activeButton = document.querySelector("." + key); 

  if (activeButton) { 
    activeButton.classList.add("animation");

    setTimeout(() => {
      activeButton.classList.remove("animation");
    }, 100); 
  }
}




