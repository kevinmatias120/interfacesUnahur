/*
function cambiarDimensionFuente(size) {
    return function() { 
        document.body.style.fontSize = size + 'px';
        };
}
var size8 = cambiarDimensionFuente(8);
var size16 = cambiarDimensionFuente(16);
var size24 = cambiarDimensionFuente(24);

function setClicks(){
    document.getElementById('fuente-8').onclick = size8;
    document.getElementById('fuente-16').onclick = size16;
    document.getElementById('fuente-24').onclick = size24;
}
*/

function cambiarDimensionFuente16() {
    document.body.style.fontSize = 16 + 'px';
}

function cambiarDimensionFuente8() {
    document.body.style.fontSize =8 + 'px';
}

function cambiarDimensionFuente24() {
    document.body.style.fontSize = 24 + 'px';
}

var size8 = document.getElementById('fuente-8');
var size16 = document.getElementById('fuente-16');
var size24 = document.getElementById('fuente-24');


size8.addEventListener("click",cambiarDimensionFuente8)
size16.addEventListener("click",cambiarDimensionFuente16)
size24.addEventListener("click",cambiarDimensionFuente24)





