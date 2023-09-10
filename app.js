let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let boxh = document.querySelector('.boxh');

let degrees = 0;

prev.addEventListener('click', function(){
    degrees += 45;
    boxh.style = `transform: perspective(1000px) rotateY($
    {degrees}deg)`; 
})

next.addEventListener('click', function(){
    degrees -= 45;
    boxh.style = `transform: perspective(1000px) rotateY($
    {degrees}deg)`;
})