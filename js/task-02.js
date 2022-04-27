const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientElem = ingredients.map(ingredient => {
  const ingredientElem = document.createElement('li')
  ingredientElem.classList.add('item')
  ingredientElem.textContent = ingredient;
console.log(ingredientElem);
  return ingredientElem;
})

const ingredientElemList = document.querySelector('#ingredients')
ingredientElemList.append(...ingredientElem)
