const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');
const ingredientsArryLi = [];

ingredients.forEach(element => {
  const newLiRef = document.createElement('li');
  newLiRef.textContent = element;
  newLiRef.classList.add('item');
  ingredientsArryLi.push(newLiRef);
});

ingredientsRef.append(...ingredientsArryLi);