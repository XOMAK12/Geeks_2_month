const buttonPlus = document.querySelector("#plus");
const buttonMinus = document.querySelector("#minus");
const buttonReset = document.querySelector("#reset");
const number = document.querySelector("h2");

let numOfNum = 0;

function changeColor() {
    number.innerText = numOfNum;
    if (numOfNum > 0) {
        number.style.color = "green";
    } else if (numOfNum < 0) {
        number.style.color = "red";
    } else {
        number.style.color = "gray";
    }
}
function plus() {
    numOfNum++;
    changeColor();
}
function minus() {
    numOfNum--;
    changeColor();
}
function reset() {
    numOfNum = 0;
    changeColor();
}

buttonPlus.addEventListener("click", plus);
buttonMinus.addEventListener("click", minus);
buttonReset.addEventListener("click", reset);