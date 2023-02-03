const categoriesRef = document.querySelector('#categories');
const categories = document.querySelectorAll('#categories > li');

const countOfCategories = categories.length;
console.log("Number of categories:", countOfCategories);

categories.forEach((element) => {
    const titleRef = element.querySelector('h2');
    const listRef = element.querySelector('ul');
    console.log('Category:', titleRef.textContent);
    console.log('Elements:', listRef.children.length);
});