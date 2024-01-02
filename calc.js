let previousVal = '';
let currentVal = ''
let operator = ''

let clearBtn = document.querySelector("#clearButton");
let deleteBtn = document.querySelector("#deleteButton");
let decimalBtn = document.querySelector("#decimalButton");
let equalsBtn = document.querySelector("#equalsButton");

let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");

let previousScreen = document.querySelector("#previous");
let currentScreen = document.querySelector("#current");

numbers.forEach((number) => number.addEventListener('click', function(e){
    handleNumber(e.target.textContent);
    currentScreen.textContent = currentVal;
}))

operators.forEach((op) => op.addEventListener('click', function(e){
    handleOperator(e.target.textContent);
    previousScreen.textContent = previousVal + " " + operator;
    currentScreen.textContent = "";
}))

clearBtn.addEventListener('click', () => {
    previousVal = "";
    currentVal = "";
    operator = "";
    previousScreen.textContent = "";
    currentScreen.textContent = "";
}
)

equalsBtn.addEventListener('click', function(){
    if(currentVal != '' && previousVal != ''){
        operate();
        previousScreen.textContent = "";
        if(previousVal.length <=5){
            currentScreen.textContent = previousVal;
        }
        else {
            currentScreen.textContent = previousVal.slice(0,5)+ "...";
        }
    }

decimalBtn.addEventListener('click', function(){
    addDecimal();
    console.log('test');
});
    
});
function handleNumber(num){
    if (currentVal.length <=5){
        currentVal += num;
    }
}

function handleOperator(op){
    operator = op;
    previousVal = currentVal;
    currentVal = '';
}

function operate(){
    previousVal = Number(previousVal);
    currentVal = Number(currentVal);
    
    if(operator == "+"){
        previousVal += currentVal;
    }
    if(operator == "-"){
        previousVal -= currentVal;
    }
    if(operator == "/"){
        previousVal /= currentVal;
    }
    if(operator == "x"){
        previousVal *= currentVal;
    }

    previousVal = roundNumber(previousVal);
    currentVal = previousVal;
    console.log(previousVal);
    previousVal = previousVal.toString();
    currentVal = currentVal.toString();
}

function roundNumber(num){
    return Math.round(num*1000) / 1000;
}

function addDecimal(){
    if(!currentVal.includes('.')){
        currentVal += '.';
    }
    currentScreen.textContent = currentVal;
}