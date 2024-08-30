
displayDigits = [];


/* displayNumbers should take an event as an argument - querySelectorAll for numbers and operators 
- all should have event listeners for this function

displayDigits should be an array containing firstNumber, operator and secondNumber

function should A) return the array to be used in function operate
                B) display the numbers and operator in display-numbers 
*/                 


function displayNumbers(event){
    
    displayDigits.push(event.currentTarget.innerHTML);

    display.innerHTML += event.currentTarget.innerHTML;

    return displayDigits;
}




function operate(event){



/*     displayDigits is an Array, separate it into three distinct values

    all numbers clicked before an operator - save as firstNumber
    operator -  save as operator
    all numbers after operator and before equals - save as lastNumber
*/


    if(operator === "add"){
        add(firstNumber, secondNumber); 
    } else if(operator === "substract"){
        substract(firstNumber, secondNumber);
    } else if (operator === "multiply") {
        multiply(firstNumber, secondNumber);
    } else if (operator === "divide") {
        divide(firstNumber, secondNumber);
    };

    // at the end we should display the result
    displayNumbers(result);

}

function clear(){
    display = [];
    firstNumber = null;
    secondNumber = null;
    operator = null;
}



const display = document.querySelector(".display-numbers");

const equalsBTN = document.querySelector(".equals");
equalsBTN.addEventListener("click", operate);


const number = document.querySelectorAll(".number");
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", displayNumbers);
    }


const addBTN = document.querySelector(".add");
addBTN.addEventListener("click", displayNumbers);

const substractBTN = document.querySelector(".substract");
substractBTN.addEventListener("click", displayNumbers);

const multiplyBTN = document.querySelector(".multiply");
multiplyBTN.addEventListener("click", displayNumbers);

const divideBTN = document.querySelector(".divide");
divideBTN.addEventListener("click", displayNumbers);

const clearBTN = document.querySelector(".clear");
clearBTN.addEventListener("click", displayNumbers);


function add(a, b){
    return a + b;
   }
   
   function substract(a, b){
    return a - b;
   }
   
   function multiply(a, b){
    return a * b;
   }
   
   function divide(a, b){
    return a / b;
   }