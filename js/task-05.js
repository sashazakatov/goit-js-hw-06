const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const inputRefInputHendler = (event) =>{
    const inputData = event.currentTarget.value;
    outputRef.textContent = inputData
    if (inputData === '') outputRef.textContent = 'Anonymous';
}

inputRef.addEventListener('input', inputRefInputHendler);