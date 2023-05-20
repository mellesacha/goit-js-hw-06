const categories = document.querySelector('#categories');
const listItem = categories.querySelectorAll('.item');

console.log('Number of categories :', listItem.length);


listItem.forEach(function(element) {
    console.log('Category:', element.querySelector('h2').textContent);
    console.log('Elements:', element.querySelectorAll('li').length);
    });
