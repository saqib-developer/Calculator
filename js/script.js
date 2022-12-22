function clicked7() {
    helpful(document.getElementById(7));
}

function helpful(btn) {
    const display = document.getElementById("display");
    const id = btn.getAttribute('id');
    const cretspan = document.createElement("span");
    cretspan.appendChild(document.createTextNode(id));
    display.appendChild(cretspan);
}