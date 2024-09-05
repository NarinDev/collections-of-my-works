const btnContainer = document.getElementById("btnContainer");
const input = document.getElementById("input");
const OPERATIONS = ["+", "-", "*", "/"];
let num1 = "";
let num2 = "";
let previousSimbol = "";
let previousOperator = "";
let stringAll = "";
const NUMS_WITHOUT_ZERO = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const ALL_NUMS = ["0", ...NUMS_WITHOUT_ZERO]
const PERIOD = ".";
const PERCENT = "%";
let currentInput = "";
let isClearCurrentInput = false;
let signBefore = "";
const ESCAPE_OPERATIONS = ["=", "AC", "signBefore", ...OPERATIONS, PERCENT]
btnContainer.addEventListener("click", (event) => {

        const value = event.target.closest(".btn").getAttribute("value")

        if( value ) {

            if( isClearCurrentInput && !ESCAPE_OPERATIONS.includes(value)) {
                input.innerHTML = "";
                isClearCurrentInput = false;
            }

            let temporyText = "";
            currentInput = input.innerHTML;
            stringAll += value;
            if( value === "signBefore") {
                signBefore = signBefore === '' ? '-' : ''
                if( currentInput && !OPERATIONS.includes(previousSimbol)) {
                    input.innerHTML = `${signBefore}${currentInput.replace("-", "")}`
                }else {
                    input.innerHTML = `${signBefore}0`;
                    isClearCurrentInput = false;
                }
            }
            /**
             * Если предыдущая операция была = и вводим новое число, обнуляем все переменные
             */
           if( NUMS_WITHOUT_ZERO.includes(value) ) {
               if ( previousSimbol === "=") {
                   currentInput = "";
                   previousOperator = "";
                   num1 = "";
                   num2 = "";
               }
               temporyText = parseFloat(currentInput + value ).toString();
               input.innerHTML = temporyText;
           }
           if( value === "0") {
               if( currentInput !== "0") {
                   input.innerHTML += value;
               }
           }
           if( value === PERIOD) {
               if( !currentInput.includes(PERIOD)) {
                   input.innerHTML += PERIOD;
               }
           }
           if( OPERATIONS.includes(value) ) {
               //signBefore = "";
               if( OPERATIONS.includes(previousSimbol)) {
                   previousOperator = value;
               }else {
                   if( num1 ) {
                       input.innerHTML = getResult(num1, currentInput, previousOperator);
                       num1 = input.innerHTML;
                       isClearCurrentInput = true;
                   }
                   if( !num1 && currentInput ) {
                       num1 = parseFloat(currentInput);
                       isClearCurrentInput = true;
                   }

                   previousOperator = value;
               }
           }
            if( value === "=") {
                if( num1 && (ALL_NUMS.includes(previousSimbol) || previousSimbol === PERCENT || previousSimbol === "signBefore")) {
                    input.innerHTML = getResult(num1, currentInput, previousOperator);
                    num1 = "";
                    num2 = parseFloat(currentInput);
                }
                if( num2 && previousSimbol === "=") {
                    input.innerHTML = getResult(currentInput, num2, previousOperator);
                }
            }
            if (value === "AC") {
                if( num1 && OPERATIONS.includes(previousSimbol) ) {
                    num1 = "";
                    input.innerHTML = "0";
                }else {
                    input.innerHTML = "0";
                }
            }
            if( value === PERCENT) {
                if( currentInput && !OPERATIONS.includes(previousSimbol)){
                    input.innerHTML = currentInput / 100;
                }
            }


           previousSimbol = value;
        }

});

function getResult(num1, num2, operation) {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    switch (operation) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            return n1 / n2
    }
}
