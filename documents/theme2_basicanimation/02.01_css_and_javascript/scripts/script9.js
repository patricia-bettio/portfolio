const FALLDOWN = document.querySelector("#bt9");
console.log(FALLDOWN);
FALLDOWN.addEventListener("click", fallPizza);

function fallPizza() {
    const PIZZA = document.querySelector("#pizza");
    PIZZA.classList.toggle("fall");
    console.log(PIZZA);
}
