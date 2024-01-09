// Calc class
class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
    }

    // to clear ()
    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    // DEL
    delete(){

    }

    // appends to output screen
    appendNumber(number){

        // only one period is allowed
        if(number === '.' && this.currentOperand.includes('.')) return

        this.currentOperand = (this.currentOperand ? this.currentOperand.toString() : ' ')  + number.toString();

    }

    // chooses the specified operation by the user
    chooseOperation(operation) {
         
    }

    // computes the value based on the two numbers
    compute(){

    }

    // to update the display after the compute
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand

    }

}





// variables

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();

    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();

    })
})