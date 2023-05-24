
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const divIdEl = document.querySelector('#controls');
const inputEl = divIdEl.querySelector('input');
const btnCreate = divIdEl.querySelector('button[data-create]');
const btnDestroy = divIdEl.querySelector('button[data-destroy]');
const idBox = document.querySelector('#boxes');

btnCreate.addEventListener('click', () => createBoxes(inputEl.value));
btnDestroy.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
  amount = Number(amount);
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const color = getRandomHexColor();

   const createDivEl = document.createElement('div');
    createDivEl.style.width = '${size}px';
    createDivEl.style.height = '${size}px';
    createDivEl.style.backgroundColor = color; 

    boxes.push(createDivEl);
  }

    idBox.append(...boxes);
  
}

function destroyBoxes() {
  idBox.innerHTML = '';
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

