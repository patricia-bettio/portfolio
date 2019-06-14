const MIRRORBUTTON = document.querySelector("#bt12");
console.log(MIRRORBUTTON);
MIRRORBUTTON.addEventListener("click", mirrorPizza);

function mirrorPizza() {
    const PIZZA = document.querySelector("#pizza");
    PIZZA.classList.toggle("mirror");
    console.log(PIZZA);
}
