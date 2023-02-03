function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColorRef = document.querySelector('.change-color');
const spanColorRef = document.querySelector('.color');

buttonChangeColorRef.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  
  spanColorRef.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
});