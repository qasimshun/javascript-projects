const balance = document.getElementById('balance');
const income = document.getElementById('income');
const expense = document.getElementById('expense');
const itemName = document.getElementById('list');
const item = document.getElementById('item');
const amount = document.getElementById('amount');
const addBtn = document.getElementById('add');
const form = document.querySelector('form');

// const dummy = [
//     {id: 1, name: 'flower', amount: -30},
//     {id: 2, name: 'cash', amount: 300},
//     {id: 3, name: 'phone', amount: -300},
//     {id: 4, name: 'client', amount: 200},
// ];

const another = JSON.parse(localStorage.getItem('transactions'));

let transactions = localStorage.getItem('transactions') !==null ? another : [];

function addTransaction(transaction){
    const listItem = document.createElement('li');
    const sign = transaction.amount < 0 ? '-' : '+';
    listItem.innerHTML = `
    ${transaction.name} <span>${sign}${Math.abs(transaction.amount)}</span><button onclick="removed(${transaction.id})">delete</button>
    `;
    listItem.classList.add(transaction.amount < 0 ? 'minus': 'plus');
    itemName.appendChild(listItem);
}

function updateTransaction() {
    localStorage.setItem('transactions', JSON.stringify(transactions))
}

function removed(e) {
    transactions = transactions.filter(transaction => transaction.id !== e);
    updateTransaction()
    init()
}

function updateValues() {
    const amounts = transactions.map(item => item.amount);
    const balanceAmount = amounts.reduce((acc, item) => (acc +=item), 0);
    const incomeAmount = amounts.filter(item => item > 0).reduce((acc, item) => (acc+=item),0);
    const expenseAmount = (amounts.filter(item => item < 0).reduce((acc, item) => (acc+=item),0))*-1;

    balance.innerHTML = `$${balanceAmount}`;
    income.innerHTML = `$${incomeAmount}`;
    expense.innerHTML = `$${expenseAmount}`;
}

function init(){
    itemName.innerHTML = '';
    transactions.forEach(addTransaction);
    updateValues();
}

function stopped(e) {
    e.preventDefault();
    if(item.value.trim()===''|| amount.value.trim()===''){
        alert('gg')
    }else {
        const explanation = {
            id: randomAmount(),
            amount: +amount.value,
            name:item.value
        }
        transactions.push(explanation);
        addTransaction(explanation);
        updateValues();
        updateTransaction();
        item.value = '';
        amount.value = '';

    }
}

function randomAmount(){
    return Math.floor(Math.random()*8000);
}
init()

form.addEventListener('submit', stopped);