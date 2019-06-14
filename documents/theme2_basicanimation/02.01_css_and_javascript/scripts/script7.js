const FADEME = document.querySelector("#bt7");
console.log(FADEME);
FADEME.addEventListener("click", fadePizza);

function fadePizza() {
    const PIZZA = document.querySelector("#pizza");
    PIZZA.classList.toggle("fade");
    console.log(PIZZA);
}
