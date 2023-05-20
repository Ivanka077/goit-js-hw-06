
const refs = {
    inputEl: document.querySelector('#name-input'),
    spanEl: document.querySelector('#name-output'),
};


refs.inputEl.addEventListener('input', onInputChange);


function onInputChange(event) {
    const InputValue = event.currentTarget.value;
    refs.spanEl.textContent = InputValue && refs.spanEl.textContent !== '' ? InputValue : 'Anonymous';
}

