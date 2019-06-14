const NEXTBTN = document.querySelector("#bt1");

/*constant audio file*/
const SFX = new Audio('Audio/Wind_Perfect.mp3');
console.log(NEXTBTN);
NEXTBTN.addEventListener("click", destroy);

function destroy() {
    const DEST = document.querySelector("#twister");

    DEST.classList.toggle('spin');

    console.log(DEST);

    setTimeout(function () {

    window.location.replace("../../Door_Scene2/door.html");
    }, 1000);


}

/* Old Script for Audio
function playSound(soundfile) {
  document.getElementById("dummy").innerHTML=
    "<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}
*/
function playSoundSound(audio){
    audio.play();
    console.log('x')
}
