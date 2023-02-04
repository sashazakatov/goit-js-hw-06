function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

// element references
const refs = {
  box: document.querySelector('#boxes'),
  buttonCreate: document.querySelector('#controls > [data-create]'),
  buttonDestroy: document.querySelector('#controls > [data-destroy]'),
  input: document.querySelector('#controls > input'),
};

// markup creation 
const createBoxes = (amount) =>
{
  const width = 30;
  const height = 30;
  const markup = new Array(amount)
  .fill(null)
  .map((element, index) => {
    element = `<div style="background-color:${getRandomHexColor()}; width:${width + index * 10}px; height:${height + index * 10}px;"></div>`;
    return element;
  })
  .join('');

  refs.box.insertAdjacentHTML('beforeend', markup);
};

refs.buttonCreate.addEventListener('click', () => createBoxes(parseInt(refs.input.value)));
refs.buttonDestroy.addEventListener('click', () => {
  refs.box.innerHTML = '';
  refs.input.value = '';
});