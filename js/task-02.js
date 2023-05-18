const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsId = document.getElementById('ingredients');
console.log(ingredientsId);
ingredients.forEach((ingr) => {
  const ingredientsEl = document.createElement('li');

  ingredientsId.append(ingredientsEl);
  ingredientsEl.classList.add('item');
  ingredientsEl.textContent = ingr;
  
});
