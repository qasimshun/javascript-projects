const numbersBtns = document.querySelectorAll('button.number');
const answer = document.querySelector('.answer');
const current = document.querySelector('.current');
const allClearBtn = document.querySelector('.ac');
const equalBtn = document.querySelector('.equal');
const operationBtns = document.querySelectorAll('.operation');

class Calculator {
    constructor(currentOperandText, previousOperandText){
        this.currentOperandText = currentOperandText;
        this.previousOperandText = previousOperandText;
        this.clear();
    }

    delete() {

    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
        
    updateDisplay() {
        this.currentOperandText.innerHTML = this.currentOperand;
        if(this.operation != null){
            this.previousOperandText.innerHTML = `${this.previousOperand} ${this.operation}`;
        }
    }

    appendNumber(number) {
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if(this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        const prev = this.previousOperand;
        const cur = this.currentOperand;
        let computation;
        if(isNaN(prev) || isNaN(cur)) return
        switch(this.operation){
            case 'plus':
                computation = parseInt(prev) + parseInt(cur);
                break;
            case 'minus':
                computation = prev - cur;
                break;
            case 'multiply':
                computation = prev * cur;
                break;
            case 'divide':
                computation = prev / cur;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.previousOperand = '';
        this.operation = undefined;
    }
}

const calculator = new Calculator(answer, current);

numbersBtns.forEach(ele => {
    ele.addEventListener('click', ()=>{
        calculator.appendNumber(ele.innerHTML);
        calculator.updateDisplay();
    })
})

operationBtns.forEach(ele => {
    ele.addEventListener('click', ()=>{
        calculator.chooseOperation(ele.innerHTML);
        calculator.updateDisplay();
    })
})

equalBtn.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

allClearBtn.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})