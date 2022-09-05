
var score = 0;

//the area where the score will be shown
const scoreArea = document.querySelector(".example");
//get the boundaries that must not be touched
const borders = document.getElementsByClassName("boundary");

//prompt for user name
let person = prompt("Please enter your name", "Your Name ...");


if (person != null) {
    //if the username is found in the local storage I will get his saved score and let him continue the game
    if(localStorage.getItem(person) != null)
    {
        score = localStorage.getItem(person)
        document.querySelector(".example").innerHTML = score;
    }
    //greet the user to start the game
  document.getElementById("status").innerHTML =
  "Hello " + person + ', Begin by moving your mouse over the "S".';
}


window.addEventListener('click', (e) =>
{
    //if the user click on the "S" div the game will restart
    var checkClick = e.target.id;

    if (checkClick == "start")
    {
        score = 0;
        document.querySelector(".example").innerHTML = score;
        
    }
}
);


const checkTouching = (value) => {
    if (value === 'boundary')
    {
        // if the user touched the boudaries it will turn red and the status above will tell him that he have lost
        // I couldn't choose the borders using + on selectors so I changed the whole borders
        for (let i = 0; i < 5; i++) borders[i].style.border= "1px solid red";
        score -= 10;
        document.getElementById("status").innerHTML = "YOU LOST!";
        document.querySelector(".example").innerHTML = score;
        //set pointerEvents to none so that nothing will happen if he touched the boundaries now untill he hover over the "S" again
        document.getElementById("game").style.pointerEvents = "none";
        //just let the start button be active as it the key to start the game again
        document.getElementById("start").style.pointerEvents = "all";
        localStorage.setItem(person, score);
    }
};


window.addEventListener('mousemove', (e) =>
{
    //go with the mouse cursor and check its position
    var check = e.target.classList.value;
    var checkId = e.target.id;
    // check if it touches the borders
    checkTouching(check);
    
    //if the user touches the "S"
    if (checkId === 'start')
    {   
        // reactivate the game borders and turn them again from red to black
        document.getElementById("game").style.pointerEvents = "all";
        for (let i = 0; i < 5; i++) borders[i].style.border= "1px solid black";
        // initialize the status again
        document.getElementById("status").innerHTML = 'Begin by moving your mouse over the "S".';
        localStorage.setItem(person, score);
    }

    // if the user reaches the end without losing
    if (checkId === 'end')
    {
        score += 5;
        // also here I should set pointerEvents to none so nothing will happen after that till the user hover over "S"
        document.getElementById("game").style.pointerEvents = "none";
        document.getElementById("status").innerHTML = 'Begin by moving your mouse over the "S".';
        document.querySelector(".example").innerHTML = score;
        document.getElementById("status").innerHTML = "YOU WON!";
        localStorage.setItem(person, score);
    }
}
);
