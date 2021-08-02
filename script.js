const button = document.querySelector('.btn');
const par = document.querySelector('#show');
button.addEventListener('click', result);

function result(e) {
    e.preventDefault();
    let points = 0;
    if (document.querySelector('#answerOne').checked) {
        points++;
    }
    if (document.querySelector('#answerTwo').checked) {
        points++;
    }
    if (document.querySelector('#answerThree').checked) {
        points++;
    }
    if (document.querySelector('#answerFour').checked) {
        points++;
    }
    if (document.querySelector('#answerFive').checked) {
        points++;
    }

    par.textContent = "Your points " + points;

}