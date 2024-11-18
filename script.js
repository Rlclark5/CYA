let left = document.querySelector('.left');
let right = document.querySelector('.right');
let leftRight = document.querySelector('.leftRight');
let text = document.querySelector('p');
let cfa = document.querySelector('.cfa');
cfa.style.display ="none";

left.addEventListener('click', function(){

    leftRight.style.display ="none";
    left.style.display ="none";
    right.style.display ="none";
    cfa.style.display ="block";

    text.innerHTML ="click to order";

});


cfa.addEventListener('dblclick',  function() {

    text.innerHTML ="that was good";

});