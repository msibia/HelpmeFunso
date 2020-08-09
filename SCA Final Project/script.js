const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//Names of classes
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin"
const LINE_THROUGH = "lineThrough";

//Show current date
const options = { weekday: "long", month: "short", day: "numeric" }
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);


// add to do function
function addToDo(toDO, id, done, trash) {

    if (trash) { return; }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item = `<li class="item">
                  <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                  <p class="text ${LINE}">${toDo}</p>
                  <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                  </li>
               `;

    const position = "beforeend";

    list.insertAdjacentHTML(position, item);

}

// Add Activity to To Do list

document.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        const toDo = input.value;

        if (toDo) {
            addToDo(toDo);
        }
        input.value = "";
    }
});

addToDo("Coffee", 1, true, false);



/*list.addEventListener("click", function(event) {
    event.target;
    event.target.attributrs.job.value.value;
    if (elementJOB == "complete") {
        completeToDo(element);
    } else if (elementJOB == "delete") {
        removeToDo(element);
    }

});




function addToDo(toDo, id, done, trash) {
    
    const html = `< li class = "item">
        <i class = "fa   ${DONE} complete" job = "complete"  id="${id}"> </i> 
        <p class = "text ${LINE}" > ${ toDo } </p> 
        <i class = "fa fa-trash-o delete" job = "delete"  id="${id}> </i> 
        </li>`;



    list.insertAdjacentHTML("beforeend", html)
}
// when the user clicks on a button to delete or signify completion

list.addEventListener("click", function(e) {
    let element = e.target;
    const elementId = e.target.id;
    const elementJOB = e.target.attrinutes.job.value;

    console.log(elementJOB);

    localStorage.setItem("TODO", JSON.stringify(LIST));
})

document.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        const toDo = input.value;
        if (toDo) {
            addToDo(toDo, id, false, false);
            LIST.push({
                name: toDo,
                id: 0,
                done: false,
                trash: false
            })
        }
        input.value = "";
        id++;
    }
});

function completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    LIST[element.id].done ? false : true;
}

let LIST = [];
let id = 0;
LIST = [{}, {}, {}];
LIST[0] = {
    name: "Wake Up",
    id: 0,
    done: false,
    trash: false
}

LIST[1] = {
    name: "Exercise",
    id: 1,
    done: true,
    trash: false,
}

function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}

localStorage.setItem('key', 'value');
let variable = localStorage.getItem('key');