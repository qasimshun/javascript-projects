const addTaskInput = document.querySelector('.new');
const clearTaskInput = document.querySelector('.remove');
const addInputBtn = document.querySelector('.add');
const clearInputBtn = document.querySelector('.clear');
const secondBox = document.querySelector('.second-box');

function taskAdded(e){
    console.log(addTaskInput, addTaskInput.value)
    if(addTaskInput.value == ''){
        alert('gg');
    }
    
    const element = document.createElement('div');
    element.className = 'gg';
    element.innerHTML = `${addTaskInput.value}`;
    const btn = document.createElement('button');
    btn.className = 'another';
    btn.innerHTML = 'delete';
    element.append(btn);
    secondBox.append(element);
    addTaskInput.value = '';
    btn.addEventListener('click',cutItOff);
}

function cutItOff(e) {
    e.target.parentElement.remove();
}

function allDivsGone() {
    const allDivs = secondBox.querySelectorAll('.gg');
    allDivs.forEach(item => {
        item.remove();
    })
}

function filtering(e) {
    const text = e.target.value.toLowerCase();
    const word = document.querySelectorAll('.gg');
    word.forEach(item => {
        const gg = item.textContent.toLowerCase();
        if(gg.indexOf(text) != -1){
            item.style.display = 'block';
        }else {
            item.style.display = 'none';
        }
    })
}

addInputBtn.addEventListener('click', taskAdded);
clearInputBtn.addEventListener('click', allDivsGone);
clearTaskInput.addEventListener('keyup', filtering);