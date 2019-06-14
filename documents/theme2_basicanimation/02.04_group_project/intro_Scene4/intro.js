const SCROWBTN = document.querySelector("#trap");

const SCROWSOUND = new Audio("audio/scare_sound.wav");

const DOROTHYSOUND = new Audio("audio/dorothy.mp3");

const TINSOUND = new Audio("audio/tinman_heart.wav");

const LIONSOUND = new Audio("audio/lion_courage.wav");


SCROWBTN.addEventListener("click", showing);

function showing() {
    const SHOWUP = document.querySelector ("#scarecrow");

    SHOWUP.classList.toggle('appear');
    SCROWSOUND.play();

}


const ENTERBTN = document.querySelector("#can");

ENTERBTN.addEventListener("click", hello);

function hello() {
    const FACEUP = document.querySelector ("#tinman");
    TINSOUND.play();


    FACEUP.classList.toggle('foshow');
}


const WASSUPBNT = document.querySelector("#leo");
console.log(WASSUPBNT);
WASSUPBNT.addEventListener("click", supdog);

function supdog() {
    const YEP = document.querySelector ("#lion");
     LIONSOUND.play();

    YEP.classList.toggle('zap');
}

const YEAHHBTN = document.querySelector("#dori");

YEAHHBTN.addEventListener("click", woopwoop);

function woopwoop() {
    DOROTHYSOUND.play();
}
