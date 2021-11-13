const input = document.querySelector('input');
const contentContainer = document.querySelector('.container');
const circles = document.querySelectorAll('.circles');

let limit = 5;
let page = 1;

async function getPost() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
    const data = await res.json();
    return data;
}

async function showPost() {
    const posts = await getPost();

    posts.forEach(element => {
        const div = document.createElement('div');
        div.className = 'gg';
        div.innerHTML = `
        <span>${element.id}</span>
        <h2 class='heading'>${element.title}</h2>
        <p class='post'>${element.body}</p>
        `
        contentContainer.appendChild(div);
    });
}

function showLoader() {
    circles.forEach(ele => {
        ele.classList.add('show');
        setTimeout(()=>{
            ele.classList.remove('show');
            setTimeout(()=>{
                page++;
                showPost();
            },300)
        },1000)
    })
}

function filterPosts(e) {
    const inputValue = e.target.value.toUpperCase();
    const posts = document.querySelectorAll('.gg');
    posts.forEach(ele => {
        const heading = document.querySelector('.post').innerHTML.toUpperCase();
        const title = document.querySelector('.heading').innerHTML.toUpperCase();
        if(heading.indexOf(inputValue)> -1|| title.indexOf(inputValue)>-1){
            ele.style.display = 'block';
            console.log('gg')
        }else {
            ele.style.display = 'none';
        }
    })
}

window.addEventListener('scroll', ()=> {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if(scrollTop + clientHeight >= scrollHeight-5){
        showLoader();
    }
});

input.addEventListener('input', filterPosts);

showPost();