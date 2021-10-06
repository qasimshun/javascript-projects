const allInputs = document.querySelectorAll("input");
const submitBtn = document.querySelector('button');
const form = document.querySelector('form');
const password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirm');
console.log(password,confirmPassword)

const cutItOff = (e) => {
    e.preventDefault();
}

const redColor = (ele) => {
    ele.style.borderColor = 'red';
}

const greenColor = (ele) => {
    ele.style.borderColor = 'green';
}

const message = (element, sentence) => {
    const ele = document.createElement('div');
    ele.className = 'gg';
    ele.innerHTML = sentence;
    element.insertAdjacentElement('afterend',ele);
}

const main = () => {
    allInputs.forEach(element => {
        if(element.value === ''){
            message(element,'ok');
            redColor(element);
        }
        else{
            greenColor(element);
        }
        if(element.id === 'zero'){
            console.log(element)
            if(element.value.length >0 && element.value.length < 3){
                message(element,'please increase characters in word');
                redColor(element)
            }
        }
    });

    if(password.length > 0){
        if(password!==confirmPassword){
            redColor(password);
            redColor(confirmPassword);
            message(password, 'please make password same');
            message(confirmPassword,'please make password same');
        }
    }

    if(password.length < 4){
        redColor(password);
        message(password, 'please increase password length');
    }
}

submitBtn.addEventListener('click', main);
form.addEventListener('submit', cutItOff);