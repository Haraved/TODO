/*const addButton = document.getElementsByClassName("add");
const list_of_tasks = [];
const todo_input = document.getElementById("todo__input");
*/
function addFunction() {
    var input = [] ;
    input.push(document.getElementById("todo__input").value);
    console.log(input)
    //document.getElementById("input_list").innerHTML = input;
    const ul = document.createElement("ul");
    ul.setAttribute('id', 'theList');
    document.getElementsByClassName("list__todo").innerHTML = ul;
    for (i = 0; i <= input.length; i++){
        const li = document.createElement("li");
        li.innerHTML = input[i];
        ul.appendChild(li);
        console.log(i);
    }
    document.getElementById('something').innerHTML = ul.textContent;

}