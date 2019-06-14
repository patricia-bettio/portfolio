const MOVEF30 = document.querySelector("#bt5");
console.log(MOVEF30);
MOVEF30.addEventListener("click", moveFrom30);

function moveFrom30() {
    const PIZZA = document.querySelector("#pizza");
    PIZZA.classList.toggle("movef30");
    console.log(PIZZA);
}


