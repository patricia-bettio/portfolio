const GLOWPIZZA = document.querySelector("#bt8");
console.log(GLOWPIZZA);
GLOWPIZZA.addEventListener("click", glowPizza);

function glowPizza() {
    const PIZZA = document.querySelector("#pizza");
    PIZZA.classList.toggle("glow");
    console.log(PIZZA);
}

