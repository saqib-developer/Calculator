function helpful(value) {
    const display = document.getElementById("display");
    const cretspan = document.createElement("span");
    cretspan.appendChild(document.createTextNode(value));
    display.appendChild(cretspan);
}

function eraseAll() {
    const display = document.getElementById("display");
    display.innerHTML = '';
}

function calculate() {
    // const display = document.getElementById("display");
    // let a = display.innerHTML;
    // console.log(typeof a);
}