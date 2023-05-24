const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsId = document.getElementById('ingredients');
const markup = ingredients.map((ingr) => {
  const ingredientsEl = document.createElement('li');

  ingredientsEl.classList.add('item');
  ingredientsEl.textContent = ingr;
  return ingredientsEl;
});
ingredientsId.append(...markup);