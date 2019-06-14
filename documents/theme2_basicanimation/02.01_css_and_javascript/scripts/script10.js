const SHAKEBUTTON = document.querySelector("#bt10");
console.log(SHAKEBUTTON);
SHAKEBUTTON.addEventListener("click", shakePizza);

function shakePizza() {
    const PIZZA = document.querySelector("#pizza");
    PIZZA.classList.toggle("shake");
    console.log(PIZZA);
}
