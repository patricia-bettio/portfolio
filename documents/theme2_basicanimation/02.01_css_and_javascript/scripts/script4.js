const MOVE30 = document.querySelector("#bt4");
console.log(MOVE30);
MOVE30.addEventListener("click", moveTo30);

function moveTo30() {
    const PIZZA = document.querySelector("#pizza");
    PIZZA.classList.toggle("move30");
    console.log(PIZZA);
}


