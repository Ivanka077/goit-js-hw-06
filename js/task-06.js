const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', checkLength);

function checkLength(event) {
    const expectedLength = Number(inputEl.getAttribute('data-length'));
    const realLength = event.currentTarget.value.length;
    if (realLength === expectedLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}  