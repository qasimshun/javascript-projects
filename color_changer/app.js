const btn = document.querySelector('button');
let counter = 0;
const arr = ['yellow','blue','green','red','pink'];
const body = document.body;
btn.addEventListener('click', function(){
    body.style.background = arr[Math.floor(Math.random() * arr.length)];
});

