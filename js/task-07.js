const fontSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const changeSizeText = (elementText, sizeText) => {
    elementText.style.fontSize = `${sizeText}px`;
};

const fontSizeControlRefInputHadnler = (event) => {
    changeSizeText(textRef, event.currentTarget.value);
}

fontSizeControlRef.addEventListener('input', fontSizeControlRefInputHadnler);