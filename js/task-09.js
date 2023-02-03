function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

buttonChangeColor.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  spanColor.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
});