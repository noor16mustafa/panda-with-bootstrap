// practice no 2
const h2Tags = document.getElementsByTagName('h2');
for (const h2tag of h2Tags) {
    h2tag.style.color = 'lightblue';
}

//practise no 3
const backPacks = document.getElementById('backpack');
backPacks.style.backgroundColor = 'tomato';
//practise no 4
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px';
}
//practise no 5
function msgShow() {
    console.log('hey...its done');
}

//practise no 6

const buyNow = document.getElementsByClassName('btn');
for (const btn of buyNow) {
    btn.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    })
}
//practise no 7
document.getElementById('exampleInputEmail1').addEventListener('keyup', function (event) {
    const emailfiled = event.target.value;
    const submitButton = document.getElementById('emailsubmit');
    if (emailfiled === 'email') {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', true);
    }
})
//practise no 8
document.getElementById('shoe1').addEventListener('mouseenter', function (event) {
    event.target.src = "images/shoes/shoe-3.png";
})
document.getElementById('shoe1').addEventListener('mouseout', function (event) {
    event.target.src = "images/shoes/shoe-1.png";
})

//practise no 9
document.getElementById('subscribe').addEventListener('dblclick', function (event) {
    event.target.style.backgroundColor = 'tomato';
})
