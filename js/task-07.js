const fontSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

// change text size
const changeSizeText = (elementText, sizeText) => {
    elementText.style.fontSize = `${sizeText}px`;
};

const fontSizeControlRefInputHadnler = (event) => {
    changeSizeText(textRef, event.currentTarget.value);
}

fontSizeControlRef.addEventListener('input', fontSizeControlRefInputHadnler);