const itemCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemCategories.length}`);

itemCategories.forEach(itemCategory => {
  console.log(`Category: ${itemCategory.firstElementChild.textContent}`);
  console.log(`Elements: ${itemCategory.lastElementChild.children.length}`);
});
