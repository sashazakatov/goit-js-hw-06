const inputRef = document.querySelector('#validation-input');

console.log(inputRef.dataset.length);

const inputRefBlurHandeler = (event) => {
    const element =  event.currentTarget;
    const sizeLimitValue = element.dataset.length;
    const sizeValue = element.value.length;
    element.classList.add(sizeLimitValue < sizeValue ? 'invalid' : 'valid');
};

inputRef.addEventListener('blur', inputRefBlurHandeler);