const MOVEME = document.querySelector("#bt2");
console.log(MOVEME);
MOVEME.addEventListener("click", movePizza);

function movePizza() {
    const PIZZA = document.querySelector("#pizza");
    PIZZA.classList.toggle("moveallout");
    console.log(PIZZA);
}

