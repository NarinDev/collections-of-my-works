console.log('string');

const btnContainer = document.getElementById("btnContainer");
const input = document.getElementById("input");
const OPERATIONS = ["+", "-", "*", "/"];
let num1 = "";
let previousSimbol = "";
let previousOperator = "";
let stringAll = "";
const NUMS_WITHOUT_ZERO = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const PERIOD = ".";
let currentInput = "";
let isClearCurrentInput = false;

btnContainer.addEventListener("click", (event) => {

        const value = event.target.closest(".btn").getAttribute("value")

        if( value ) {
            if( isClearCurrentInput ) {
                input.innerHTML = "";
                isClearCurrentInput = false;
            }
            let temporyText = "";
            currentInput = input.innerHTML;
            stringAll += value;

           if( NUMS_WITHOUT_ZERO.includes(value) ) {
               temporyText = parseFloat(currentInput + value ).toString();
               input.innerHTML = temporyText;
               console.log(currentInput, value, temporyText);

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
               if( OPERATIONS.includes(previousSimbol)) {
                   previousOperator = value;
               }else {
                   console.log('%c++===','background: red', num1, !num1, currentInput);
                   if( num1 ) {
                       console.log('%c++===','background: yellow', num1, currentInput, previousOperator);
                       input.innerHTML = getResult(num1, currentInput, previousOperator);
                       num1 = input.innerHTML;
                       isClearCurrentInput = true;
                   }
                   if( !num1 && currentInput ) {
                       num1 = parseFloat(currentInput);
                       isClearCurrentInput = true;
                       console.log('%c++===','background: orange', num1);
                   }

                   previousOperator = value;
               }
           }
           previousSimbol = value;
           console.log(stringAll)
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
