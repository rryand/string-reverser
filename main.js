var button = document.querySelector("button");
var input = document.querySelector("input");
var output = document.getElementById("output");

button.addEventListener("click", reversify);
input.addEventListener("click", textbox);

function textbox() { 
    input.focus();
    input.setSelectionRange(0, input.value.length);
}

function reversify() {
    /*switch (output.style.opacity) {
    case 1:
        fade();
    default:
        rmain();
        setTimeout(fade(), 2000);
    } */
    
    rmain();
}

/*function fade() {
    output.classList.toggle('fade');
} */

function rmain() {
    var text = input.value; //To get the input value once clicked
    var rtext = "";
    
    for(var i = text.length - 1; i >= 0; i--) {
            rtext = rtext + text[i];
    }
    output.innerHTML = rtext;
    console.log(output.innerHTML);
}