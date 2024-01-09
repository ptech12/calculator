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
        this.operation = '';
    }

    // DEL
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1);

    }

    // appends to output screen
    appendNumber(number){

        // only one period is allowed
        if(number === '.' && this.currentOperand.includes('.')) return

        this.currentOperand = (this.currentOperand ? this.currentOperand.toString() : ' ')  + number.toString();

    }

    // chooses the specified operation by the user
    chooseOperation(operation) {
        if(this.currentOperand === '') return
        if(this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    // computes the value based on the two numbers
    compute(){
        let computation;
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return
        console.log(this.operation);
        switch (this.operation){
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '×':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            default:
                return
        }

        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = ''

    }
    getDisplayNumber(number){
        const float = parseFloat(number);
        if(isNaN(float)) return ''

        return number.toLocaleString('en');
    }

    // to update the display after the compute
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        if(this.operation != null){
            // this.previousOperandTextElement
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`

        }
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

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})
deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})

