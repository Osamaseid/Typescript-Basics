// Accessing and modifying DOM elements
const heading = document.getElementById('h1') as HTMLElement;
heading.innerHTML = 'SOFTWARE ENGINEERING';

const list = document.getElementById('myList') as HTMLUListElement;
const listItem = document.createElement('li');
listItem.textContent = 'Student 4';
list.appendChild(listItem);

function say(): void {
    alert('hello osama');
}

function course(): string[] {
    const list: string[] = [
        "FUNDAMENTAL OF SOFTWARE ENGINEERING",
        "FUNDAMENTAL OF DATABASE",
        "FUNDAMENTAL OF NETWORKING",
        "SOFTWARE SECURITY",
        "REQUIREMENT ENGINEERING",
        "FUNDAMENTAL OF CLOUD COMPUTING"
    ];

    for(let i = 0; i < list.length; i++){
        alert(list[i]);
    }
    
    return list;
}