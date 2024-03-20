// Accessing and modifying DOM elements
var heading = document.getElementById('h1');
heading.innerHTML = 'SOFTWARE ENGINEERING';
var list = document.getElementById('myList');
var listItem = document.createElement('li');
listItem.textContent = 'Student 4';
list.appendChild(listItem);
function say() {
    alert('hello osama');
}
function course() {
    var list = [
        "FUNDAMENTAL OF SOFTWARE ENGINEERING",
        "FUNDAMENTAL OF DATABASE",
        "FUNDAMENTAL OF NETWORKING",
        "SOFTWARE SECURITY",
        "REQUIREMENT ENGINEERING",
        "FUNDAMENTAL OF CLOUD COMPUTING"
    ];
    for (var i = 0; i < list.length; i++) {
        alert(list[i]);
    }
    return list;
}
