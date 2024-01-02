let previousVal = '';
let currentVal = '';
let operator = '';

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



decimalBtn.addEventListener('click', function(){
    addDecimal();
});

deleteBtn.addEventListener('click', function(){
    currentScreen.textContent = currentScreen.textContent.toString().slice(0,-1);
    currentVal = currentScreen.textContent;
})

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
        previousVal = operate();
        console.log(previousVal);
        previousScreen.textContent = "";
        if(previousVal.length <=5){
            currentScreen.textContent = previousVal;
        }
        else {
            currentScreen.textContent = previousVal.slice(0,5)+ "...";
        }
        currentVal = '';
    }    
});

function handleNumber(num){
    if (currentVal.length <=5){
        currentVal += num;
    }
}

operators.forEach((op) => op.addEventListener('click', function(e){
    handleOperator(e.target.textContent);
    previousScreen.textContent = previousVal + " " + operator;
    currentScreen.textContent = "";
}))

function handleOperator(op){
    if(operator==''){
        operator = op;
        previousVal = currentVal;
        currentVal = '';
    }

    else {
        console.log(previousVal);
        previousVal = operate();
        operator = op;
        currentVal = '';
    }

    
}

function operate(){
    previousVal = Number(previousVal);
    currentVal = Number(currentVal);
    if(operator=='/'&&currentVal==0){
        alert("Don't divide by 0 dummy!");
        previousVal = previousVal.toString();
        currentVal = currentVal.toString();
        return;
    }
    if(operator == "+"){
        if (currentVal != ''){
            previousVal += currentVal;
        }
    }
    if(operator == "-"){
        if (currentVal != ''){
            previousVal -= currentVal;
        }
    }
    if(operator == "/"){
        if (currentVal != ''){
            previousVal /= currentVal;
        }
    }
    if(operator == "x"){
        if (currentVal != ''){
            previousVal *= currentVal;
        }
    }

    previousVal = roundNumber(previousVal);
    currentVal = previousVal;
    previousVal = previousVal.toString();
    currentVal = currentVal.toString();
    return previousVal;
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