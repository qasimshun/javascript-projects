const add = document.querySelector('.add');
const double = document.querySelector('.double');
const show = document.querySelector('.show');
const sort = document.querySelector('.sort');
const calculate = document.querySelector('.calculate');
const right = document.querySelector('.right')

let another = [];


stuffed();
stuffed();



async function stuffed() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random()* 100000)
    };

    addData(newUser);
}

function moneyDouble(){
    another = another.map(item => {
        return {...item, money: item.money * 2};
    });

    updateDom();
}

function changeSortOrder(){
    another.sort((a,b)=> b.money - a.money);
    updateDom();
}

function allowMillionares(){
    another = another.filter(item => {
        return item.money > 100000;
    });
    updateDom();
}

function entireWealth(){
    const wealth = another.reduce((a,b)=>(a+= b.money), 0);

    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<p>total: ${wealth}</p>`;
    right.append(wealthEl);
}

function addData(item){
    another.push(item);

    updateDom();
}

function updateDom(previousData = another){
    right.innerHTML = `<h2>person <strong>wealth</strong></h2>`;

    previousData.forEach(item => {
        const element = document.createElement('div');
        element.className = 'him';
        element.innerHTML = `<p>${item.name} <span class='gg'>${item.money}</span></p>`;
        right.append(element);
    });
}

add.addEventListener('click', stuffed);
double.addEventListener('click', moneyDouble);
sort.addEventListener('click', changeSortOrder);
show.addEventListener('click', allowMillionares);
calculate.addEventListener('click', entireWealth);