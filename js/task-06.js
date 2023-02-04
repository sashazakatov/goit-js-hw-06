const inputRef = document.querySelector('#validation-input');

const inputRefBlurHandeler = (event) => {
    const {
        dataset:{length: sizeLimitValue,}, 
        value:{length:sizeValue,}, 
        classList,
    } = event.currentTarget;

    classList.remove('invalid', 'valid');
    classList.add(sizeValue === parseInt(sizeLimitValue) ? 'valid' : 'invalid');
};

inputRef.addEventListener('blur', inputRefBlurHandeler);