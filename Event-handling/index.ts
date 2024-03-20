const e1 = document.getElementById("h1");
e1?.addEventListener("click", addColor);

const e2 = document.getElementById("submit");
e2?.addEventListener("mouseover", removeBackground);

function addColor(): void {
   document.body.style.backgroundColor = "#f56a79";
}

function removeBackground(): void {
    document.body.style.backgroundColor = "";
}