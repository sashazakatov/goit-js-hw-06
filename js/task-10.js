function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  box: document.querySelector('#boxes'),
  buttonCreate: document.querySelector('#controls > [data-create]'),
  buttonDestroy: document.querySelector('#controls > [data-destroy]'),
  input: document.querySelector('#controls > input'),
};

const createBoxes = (amount) =>
{
  const boxes = [];
  for(let i = 0; i < amount; i++){
    const box = document.createElement('div');
    
    box.style.backgroundColor = getRandomHexColor();
    console.log(30 + (i * 10));
    box.style.width = `${30 + (i * 10)}px`;
    box.style.height = `${30 + (i * 10)}px`;

    boxes.push(box);
    // console.log(box.style);
  }

  refs.box.append(...boxes);
  // console.log(refs.box);
};
// console.dir(refs.input);
refs.buttonCreate.addEventListener('click', () => createBoxes(refs.input.value));
refs.buttonDestroy.addEventListener('click', () => {
  refs.box.innerHTML = '';
  refs.input.value = '';
});