const inputRef = document.querySelector('#validation-input');

const inputRefBlurHandeler = (event) => {
    const {
        dataset:{length: sizeLimitValue,}, 
        value:{length:sizeValue,}, 
        classList,
    } = event.currentTarget;

    if(classList.contains('invalid')) classList.remove('invalid');
    if(classList.contains('valid')) classList.remove('valid');

    classList.add(sizeLimitValue < sizeValue ? 'invalid' : 'valid');
};

inputRef.addEventListener('blur', inputRefBlurHandeler);