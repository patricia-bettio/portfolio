const JUMPMORE = document.querySelector("#bt6");
console.log(JUMPMORE);
JUMPMORE.addEventListener("click", jumpOverAndOver);

function jumpOverAndOver() {
    const PIZZA = document.querySelector("#pizza");
    PIZZA.classList.toggle("jumpMore");
    console.log(PIZZA);
}
