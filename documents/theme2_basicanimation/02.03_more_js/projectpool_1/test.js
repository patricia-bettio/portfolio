const body = document.querySelector("body");

const li = document.querySelector("li");


const input = document.querySelector("input");
const button = document.querySelector("button");



button.addEventListener("click", addNewLi);

function addNewLi() {

    const newLi = document.createElement("li");

    newLi.textContent = input.value;


    newLi.addEventListener('click', markThis);


    todo.appendChild(newLi);

    console.log(addNewLi);
}



function markThis() {

    console.log(markThis);
    const donelist = this.cloneNode(true);
    done.appendChild(this);

}
