const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

ingredients.forEach(function (element)
{
const list = document.createElement('li');
  list.textContent = element;
  list.classList.add('item');

  return listIngredients.append(list);
});

