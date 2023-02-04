const spanValue = document.querySelector('#counter > #value');
const buttonDecrementRef = document.querySelector('#counter > [data-action="decrement"]');
const buttonIncrementRef = document.querySelector('#counter > [data-action="increment"]');

let counterValue = 0; // flow number

const editValue = (value) => spanValue.textContent = value; //flow number changes

// decrease the number by one
const buttonDecrementRefClickHandler = () => {
    counterValue -= 1;
    editValue(counterValue);
};

// increasing the number by one
const buttonIncrementRefCliclHandler = () => { 
    counterValue +=1;
    editValue(counterValue);
}

buttonDecrementRef.addEventListener('click', buttonDecrementRefClickHandler);
buttonIncrementRef.addEventListener('click', buttonIncrementRefCliclHandler);