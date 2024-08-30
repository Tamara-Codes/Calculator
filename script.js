function displayNumbers(event){

    if(display.innerHTML === "0"){
    display.innerHTML = ""};
    
    display.innerHTML += event.currentTarget.innerHTML;
    }


function operate(event){

    let operator = "";
    const operators = ["+", "-", "/", "*"];
    let values = display.innerHTML;

    for(let i = 0; i < values.length; i++){
        if(operators.includes(values[i])) {
            operator = values[i];
        }
    }

    splitValues = values.split(operator);
    firstNumber = splitValues[0];
    secondNumber = splitValues[1];
  

    if(operator === "+"){
        add(firstNumber, secondNumber); 
    } else if(operator === "-"){
        substract(firstNumber, secondNumber);
    } else if (operator === "*") {
        multiply(firstNumber, secondNumber);
    } else if (operator === "/") {
        divide(firstNumber, secondNumber);
    }  
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

const dotBTN = document.querySelector(".dot");
dotBTN.addEventListener("click", displayNumbers);

const squaredBTN = document.querySelector(".squared");
squaredBTN.addEventListener("click", displayNumbers);
squaredBTN.addEventListener("click", squared);



const clearBTN = document.querySelector(".clear");
clearBTN.addEventListener("click", clear);



function clear(event){
    display.innerHTML = "";
}


function add(a, b){
    result = parseFloat(a) + parseFloat(b);
    display.innerHTML = result;
   }
   
function substract(a, b){
    result = a - b;
    display.innerHTML = result;
   }
   
function multiply(a, b){
    result = a * b;
    display.innerHTML = result;
   }
   
function divide(a, b){
    result = a / b;
    display.innerHTML = result;
   }

function squared(event){

    let values = display.innerHTML;

    let number = 0;
    let rest = 0;

    [number, rest] = values.split("x²");

    console.log(number);
    console.log(rest);
    let result = parseFloat(number) ** parseFloat(number);
    display.innerHTML = result;
}



