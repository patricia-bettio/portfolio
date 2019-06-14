const SPEAKBUTTON = document.querySelector("#bt11");
console.log(SPEAKBUTTON);
SPEAKBUTTON.addEventListener("click", speakPizza);

function speakPizza() {
    const PIZZA = document.querySelector("#pizza");
    PIZZA.classList.toggle("speak");
    console.log(PIZZA);
}
