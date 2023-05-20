
const refs = {
    btnDecrEl: document.querySelector('[data-action="decrement"]'),
    btnIncrEl: document.querySelector('[data-action="increment"]'),
    spanEl: document.querySelector('#value'),
}

let counterValue = 0;

refs.btnDecrEl.addEventListener('click', decreaseEl);
refs.btnIncrEl.addEventListener('click', increaseEl);

function increaseEl(event) {
    counterValue += 1;
    updateValue();
}

function decreaseEl(event) {
    counterValue -= 1;
    updateValue();
}

function updateValue() {
    refs.spanEl.textContent = counterValue;
}