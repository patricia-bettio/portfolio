const MOVEOUTSIDE = document.querySelector("#bt1");
console.log(MOVEOUTSIDE);
MOVEOUTSIDE.addEventListener("click", movePizzaOutside);

function movePizzaOutside() {
    const PIZZA = document.querySelector("#pizza");
    PIZZA.classList.toggle("moveOutside");
    console.log(PIZZA);
}

