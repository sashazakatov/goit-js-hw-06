const categoriesRef = document.querySelector('#categories');
const itemsRef = document.querySelectorAll('#categories > li');

// number of elements in categoriesRef
const countOfCategories = itemsRef.length;
console.log("Number of categories:", countOfCategories);

// display title and number of elements in itemsRef
itemsRef.forEach((element) => {
    const titleRef = element.querySelector('h2');
    const listRef = element.querySelector('ul');
    console.log('Category:', titleRef.textContent);
    console.log('Elements:', listRef.children.length);
});