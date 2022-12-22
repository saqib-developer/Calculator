function helpful(value) {
    const display = document.getElementById("display");
    display.appendChild(document.createTextNode(value));
}

function eraseAll() {
    const display = document.getElementById("display");
    display.innerHTML = '';
}

function calculate() {
    let ans = eval(display.innerHTML);
    display.innerHTML = '';
    display.appendChild(document.createTextNode(ans));
}


function eraseOne() {
    const display = document.getElementById("display");
    display.lastChild.remove();
}