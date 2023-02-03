const inputRef = document.querySelector('#validation-input');

const inputRefBlurHandeler = (event) => {
    const element =  event.currentTarget;
    const sizeLimitValue = element.dataset.length;
    const sizeValue = element.value.length;
    const elementClassList = element.classList;

    if(elementClassList.contains('invalid')) elementClassList.remove('invalid');
    if(elementClassList.contains('valid')) elementClassList.remove('valid');

    element.classList.add(sizeLimitValue < sizeValue ? 'invalid' : 'valid');
};

inputRef.addEventListener('blur', inputRefBlurHandeler);