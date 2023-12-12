const itemLists = document.querySelector('#categories');
let total = itemLists.children.length;
const itemCategories = document.querySelectorAll('.item');
const ulLists = document.querySelectorAll('ul');

const arrayUls = Array.from(ulLists).splice(1);
const arrayItems = Array.from(itemCategories);

arrayItems.forEach(arrayItem => {
  console.log(`Category: ${arrayItem.firstElementChild.textContent}`);
});
arrayUls.forEach(arrayUl => {
  console.log(`Elements: ${arrayUl.children.length}`);
});
console.log(`Number of categories: ${total}`);
