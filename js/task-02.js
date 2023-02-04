const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');
 
//array to hold elements 'li' 
const ingredientsArryLi = ingredients.map(element => {
  const newLiRef = document.createElement('li');
  newLiRef.textContent = element;
  newLiRef.classList.add('item');
  return newLiRef;
});

ingredientsRef.append(...ingredientsArryLi);