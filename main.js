let carre = document.getElementById('carre');
let black = document.getElementById('black');
let random = document.getElementById('random');
let range = document.getElementById('range');
black.onclick = function(){
    carre.style.backgroundColor = 'black' ;
}
random.onclick = function(){
     let red = Math.floor( Math.random()*255;)
     let green = Math.floor( Math.random()*255;)
     let bleu = Math.floor(Math.random()*255;)
    carre.style.backgroundColor = "rgb( "  + red + " , " + green + " , " + bleu + " ) ";
}
range.oninput = function(){
    
carre.style.opacity =  range.value


}