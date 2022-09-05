const scoreArea = document.querySelector(".example");
const borders = document.getElementsByClassName("boundary");

const checkTouching = (value) => {
    if (value === 'boundary')
    {

    }
};


window.addEventListener('mousemove', (e) =>

{
    var check = e.target.classList.value;
    var checkId = e.target.id;
    checkTouching(check);
    if (checkId === 'start')
    {

    }

    if (checkId === 'end')
    {

    }
}
);