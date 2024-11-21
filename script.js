let classroom  = document.querySelector('.classroom');
let hallway = document.querySelector('.hallway');
let eerieHallway = document.querySelector('.eerieHallway');
let text = document.querySelector('p');
let eerieClassroom = document.querySelector('.eerieClassroom');
let hallway2 = document.querySelector('.hallway2');
eerieClassroom.style.display ="none";
hallway2.style.display ="none";

classroom.addEventListener('click', function(){

    console.log("classroom was clicked")
    eerieHallway.style.display ="none";
    classroom.style.display ="none";
    hallway.style.display ="none";
    eerieClassroom.style.display ="block";

    text.innerHTML ="As you walk back into the classroom, you see that the student has disappeared and the lights shut off. You know theres a flashlight somewhere";

});


eerieClassroom.addEventListener('dblclick',  function() {

    text.innerHTML ="Help! ";
    console.log("hallway2 was dbclicked");
    eerieClassroom.style.display ="none";
    hallway2.style.display ="block";

});