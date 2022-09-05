var score = 0;
const scoreArea = document.querySelector(".example");
const borders = document.getElementsByClassName("boundary");


let person = prompt("Please enter your name", "Your Name ...");


if (person != null) {
    if(localStorage.getItem(person) != null)
    {
        score = localStorage.getItem(person)
        document.querySelector(".example").innerHTML = score;
    }
  document.getElementById("status").innerHTML =
  "Hello " + person + ', Begin by moving your mouse over the "S".';
}


window.addEventListener('click', (e) =>
{
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
        for (let i = 0; i < 5; i++) borders[i].style.border= "1px solid red";
        score -= 10;
        document.getElementById("status").innerHTML = "YOU LOST!";
        document.querySelector(".example").innerHTML = score;
        document.getElementById("game").style.pointerEvents = "none";
        document.getElementById("start").style.pointerEvents = "all";
        localStorage.setItem(person, score);
    }
};


window.addEventListener('mousemove', (e) =>
{
    var check = e.target.classList.value;
    var checkId = e.target.id;
    checkTouching(check);

    if (checkId === 'start')
    {
        document.getElementById("game").style.pointerEvents = "all";
        for (let i = 0; i < 5; i++) borders[i].style.border= "1px solid black";
        
        document.getElementById("status").innerHTML = 'Begin by moving your mouse over the "S".';
        localStorage.setItem(person, score);
    }

    if (checkId === 'end')
    {
        score += 5;
        document.getElementById("game").style.pointerEvents = "none";
        document.getElementById("status").innerHTML = 'Begin by moving your mouse over the "S".';
        document.querySelector(".example").innerHTML = score;
        document.getElementById("status").innerHTML = "YOU WON!";
        localStorage.setItem(person, score);
    }
}
);
