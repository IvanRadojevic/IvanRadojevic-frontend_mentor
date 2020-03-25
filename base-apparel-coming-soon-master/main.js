const form = document.querySelector('.email-form');
const img = document.querySelector('.email-form__img');
const label = document.querySelector('.email-form__label');


form.addEventListener('submit', e => {
    e.preventDefault();
    let email = document.getElementById("email");

    if (!validateEmail(email.value)) {

        form.classList.add('error')
        label.innerText = 'Invalid email'
        form.classList.remove('success')
    } else {
        label.innerText = 'Mail has been sent'
        form.classList.add('success')
        form.classList.remove('error')
        email.value = '';

        setTimeout(() => {
            form.classList.remove('success')
        }, 1400)
    }


})

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}