var e1 = document.getElementById("h1");
e1 === null || e1 === void 0 ? void 0 : e1.addEventListener("click", addColor);
var e2 = document.getElementById("submit");
e2 === null || e2 === void 0 ? void 0 : e2.addEventListener("mouseover", removeBackground);
function addColor() {
    document.body.style.backgroundColor = "#f56a79";
}
function removeBackground() {
    document.body.style.backgroundColor = "";
}
