const idEl = document.getElementById('categories');
const itemEl = idEl.querySelectorAll('li.item');
console.log(`Number of categories: ${idEl.children.length}`);

itemEl.forEach((item) => {
    const categoryTitle = item.firstElementChild.textContent;
    const categoryEl = item.lastElementChild.children.length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryEl}`);

});




