const LEFT = document.querySelector("#left");

const GLOW = document.querySelector;

var door1 = document.getElementsByClassName("door");

door1[0].addEventListener('click', openFunction);

function glow() {
    LEFT.classList.toggle('glowin');
}

function openFunction() {
    document.getElementById("door").classList.add("doorOpen");
}
