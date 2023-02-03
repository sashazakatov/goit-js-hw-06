const spanValue = document.querySelector('#counter > #value');
const buttonDecrementRef = document.querySelector('#counter > [data-action="decrement"]');
const buttonIncrementRef = document.querySelector('#counter > [data-action="increment"]');

let counterValue = 0;

const editValue = (value) => spanValue.textContent = value;
const buttonDecrementRefClickHendler = () => {
    counterValue -= 1;
    editValue(counterValue);
};
const buttonIncrementRefCliclHendler = () => {
    counterValue +=1;
    editValue(counterValue);
}

buttonDecrementRef.addEventListener('click', buttonDecrementRefClickHendler);
buttonIncrementRef.addEventListener('click', buttonIncrementRefCliclHendler);