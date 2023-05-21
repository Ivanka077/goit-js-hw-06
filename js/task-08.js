
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const emailEl = form.elements.email.value;
    const passwordEl = form.elements.password.value;

    if (emailEl === '' || passwordEl === '') {
        alert('Заповніть всі поля, будь ласка');
    } else {
        const dataInfo = {
            email: emailEl,
            password: passwordEl,
        }; 
        console.log(dataInfo);
        form.reset();
    }
}