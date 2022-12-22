function helpful(value) {
    const display = document.getElementById("display");
    display.appendChild(document.createTextNode(value));
}

function eraseAll() {
    const display = document.getElementById("display");
    display.innerHTML = '';
}

function calculate() {
    const display = document.getElementById("display");
    let ans = eval(display.innerHTML);
    display.innerHTML = '';
    display.appendChild(document.createTextNode(ans));
}