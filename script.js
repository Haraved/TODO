document.getElementById('addButton').onclick = function () {
    var input = [];
    input.push(document.getElementById('todo__input').value);
    console.log(input);
    var li = document.createElement('li');
    li.textContent = input;
    document.getElementById('theList').appendChild(li);
    var delateButton = document.createElement('button');
    delateButton.className = "delateButton";
    li.appendChild(delateButton);
    document.getElementById("todo__input").value = ""; //clear the value after sending input
    var doneButton = document.createElement('button');
    doneButton.className = "doneButton";
    li.appendChild(doneButton);
    var inProgressButton = document.createElement('button');
    inProgressButton.className = "inProgressButton";
    li.appendChild(inProgressButton);
}
document.getElementById
//remove added thing on list
theList.onclick = removeItem;
function removeItem(e) {
    var click = e.target;
    if (click.className === "delateButton") {
        click.closest("li").remove();
    } else if (click.className === "doneButton") {
        click.closest("li").style.color = "#52b788";
    } else if (click.className === "inProgressButton") {
        click.closest("li").style.color = "#d00000";
    }
    return false;
}
