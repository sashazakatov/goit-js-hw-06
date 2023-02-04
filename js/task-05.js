const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const inputRefInputHendler = (event) =>{
    outputRef.textContent = event.currentTarget.value;
    if (inputData === '') outputRef.textContent = 'Anonymous';
}

inputRef.addEventListener('input', inputRefInputHendler);