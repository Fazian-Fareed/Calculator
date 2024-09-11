const buttons = document.querySelectorAll("button");
const equalTo = document.querySelector(".equalTo");
const Del = document.querySelector(".Del");
const CL = document.querySelector(".CL");
const inputBox = document.querySelector("#input");

// to print value in input box
const inputFun = (userChoice) => {
    let input = inputBox.value += userChoice;
}

// To calculate
const calc = () => {
    try {
        
        inputBox.value += ' = ' + eval(inputBox.value);
        
    }
    catch {
        alert("invalid");
    }
}
// event listeners to invoke above functions
equalTo.addEventListener('click', calc);

// for clear All
const clr = () => {
    inputBox.value = '';
}
// event listeners to invoke above functions
CL.addEventListener('click', clr);  // for clear All

// for Delete
const Delete = () => {
    inputBox.value = inputBox.value.slice(0, -1);
}
// event listeners to invoke above functions
Del.addEventListener('click', Delete); // for Delete


// To select each button individually
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let userChoice = button.getAttribute("id");
        if (userChoice === 'pi') {
            inputFun(Math.PI);
        }
        else if(userChoice === '(' || userChoice === ')'){
            inputFun('*');
        }
        else if(!userChoice || userChoice === 'CL' || userChoice === 'Del' || userChoice === '='){
            return;
        }
        else {
            inputFun(userChoice);
        }
    })
});