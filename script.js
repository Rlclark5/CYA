let classroom  = document.querySelector('.classroom');
let hallway = document.querySelector('.hallway');
let eerieHallway = document.querySelector('.eerieHallway');
let text = document.querySelector('p');
let eerieClassroom = document.querySelector('.eerieClassroom');
let hallway2 = document.querySelector('.hallway2');
let lightClassroom = document.querySelector('.lightClassroom');
let zombieHallway = document.querySelector('.zombieHallway');
let dead = document.querySelector('.dead');
let woods = document.querySelector('.woods');
eerieClassroom.style.display ="none";
hallway2.style.display ="none";
lightClassroom.style.display ="none";
zombieHallway.style.display ="none";
dead.style.display ="none";
woods.style.display ="none";

classroom.addEventListener('click', function(){

    console.log("classroom was clicked")
    eerieHallway.style.display ="none";
    classroom.style.display ="none";
    hallway.style.display ="none";
    eerieClassroom.style.display ="block";

    text.innerHTML ="As you walk back into the classroom, you see that the student has disappeared and the lights shut off. Double click the image to go back to the hallway or hover over to find the light switch.";

});


hallway.addEventListener('click', function(){

    console.log("hallway was clicked")
    zombieHallway.style.display ="block";
    classroom.style.display ="none";
    hallway.style.display ="none";
    eerieClassroom.style.display ="none";
    eerieHallway.style.display ="none";

    text.innerHTML ="Oh My Gosh! There's a zombie! Mouse enter to attempt to fight the zombie or press the r key to attempt to run past the zombie.";

});

eerieClassroom.addEventListener('dblclick',  function() {

    text.innerHTML ="Help! ";
    console.log("hallway2 was dbclicked");
    eerieClassroom.style.display ="none";
    hallway2.style.display ="block";

});

eerieClassroom.addEventListener('mouseleave',  function() {

text.innerHTML ="Thank God ";
 console.log("hallway2 was mouse left");
eerieClassroom.style.display ="none";
lightClassroom.style.display ="block";

});




zombieHallway.addEventListener('mouseenter',  function() {

    text.innerHTML =" You're dead.";
    console.log("zombieHallway was mouse entered");
    zombieHallway.style.display ="none";
    dead.style.display ="block";

});

document.addEventListener('keyr',  function(r) {
text.innerHTML ="...You're in the..woods? Hey, atleast you're still alive.";
 console.log("hallway2 was mouse entered");
zombieHallway.style.display ="none";
woods.style.display ="block";

});
