const form = document.querySelector('.form-group');
const label = document.getElementById('label');
const email = document.getElementById("mail");



form.addEventListener('submit', e => {
    e.preventDefault();
    if (email.value === '') {
        label.innerText = 'Email cannot be empty!'
        label.style.opacity = 1;
        label.style.display = 'block';
        email.style.border = '1px solid hsl(0, 61%, 63%)';
        label.style.color = 'hsl(0, 61%, 63%)';
    } else if (!validateEmail(email.value)) {
        label.innerText = 'Invalid email'
        label.style.opacity = 1;
        label.style.display = 'block';
        email.style.border = '1px solid hsl(0, 61%, 63%)';
        label.style.color = 'hsl(0, 61%, 63%)';

    } else {
        label.style.display = 'block';
        label.style.opacity = 1;
        label.innerText = 'Mail has been sent'
        label.style.color = 'hsl(120, 61%, 63%)';
        email.value = '';
        email.style.border = '1px solid hsl(120, 61%, 63%)'

        setTimeout(() => {
            label.style.opacity = 0;
            label.style.display = 'none';
            email.style.border = '1px solid hsl(223,100%,88%)';
        }, 1400)
    }


})

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}