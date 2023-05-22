
const refs = {
  btnEl: document.querySelector('.change-color'),
  bodyEl: document.body,
  spanEl: document.querySelector('.color'),
};


refs.btnEl.addEventListener('click', changeBodyColor);

function changeBodyColor() {
  const randomColor = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = randomColor;
  refs.spanEl.textContent = randomColor;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}