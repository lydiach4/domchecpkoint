let carre = document.getElementById('carre');
let black = document.getElementById('black');
let random = document.getElementById('random');
let range = document.getElementById('range');
black.onclick = function(){
    carre.style.backgroundColor = 'black' ;
}
random.onclick = function(){
     let change = Math.random()*255;
     let change1 = Math.random()*255;
     let change2 = Math.random()*255;
    carre.style.backgroundColor = "rgb( "  + change + " , " + change1 + " , " + change2 + " ) ";
}
range.oninput = function(){
    
carre.style.opacity =  range.value


}