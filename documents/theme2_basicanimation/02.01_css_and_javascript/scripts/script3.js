const JUMPBUTTON = document.querySelector("#bt3");
console.log(JUMPBUTTON);
JUMPBUTTON.addEventListener("click", jumpPizza);

function jumpPizza() {
    const PIZZA = document.querySelector("#pizza");
    PIZZA.classList.toggle("jump");
    console.log(PIZZA);
}
