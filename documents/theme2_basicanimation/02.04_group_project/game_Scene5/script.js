var cls;
var id;
var counter = 0;

function allowDrop(ev) {
    ev.preventDefault();
}

function dragStart(ev) {
    cls = ev.target.classList[0];
    id = ev.target.id;
}

function drop(ev) {

    if (ev.target.classList[0] == cls) {
        console.log(ev.target.classList[0], id);
        ev.target.append(document.getElementById(id));
        console.log(document.getElementById(id))

        counter ++
        if(counter == 4) {
            setTimeout(function (){

                       window.location.replace("../End_Scene/Gametest.html");
                       }, 2000);
        }
    }
}
