const form = document.getElementById("form");
const inputs = form.querySelectorAll('input');

form.addEventListener('submit', validateForm);

function validateForm(e) {
    e.preventDefault();
    let validForms = 0;
    inputs.forEach(input => {

        if (input.value === '') {
            input.labels[0].innerText = `${input.placeholder} cannot be empty`
            input.parentNode.classList.remove('success')
            input.parentNode.classList.add('error');
        } else if (input.value.length < 5) {
            input.labels[0].innerText = `${input.placeholder} is short`
            input.parentNode.classList.remove('success')
            input.parentNode.classList.add('error');
        } else {
            if (input.name === 'email') {
                if (!validateEmail(input.value)) {
                    input.labels[0].innerText = `Not valid ${input.placeholder}`
                    input.parentNode.classList.add('error')
                    input.parentNode.classList.remove('success');
                    return;
                }

            }
            input.labels[0].innerText = `${input.placeholder}`
            input.parentNode.classList.remove('error')
            input.parentNode.classList.add('success');
            validForms++;


        }
    })
    if (validForms === inputs.length) {

        inputs.forEach((input, index) => {

            setTimeout(() => {
                input.parentNode.classList.remove('success');
                input.value = '';
            }, 300 * (index + 1))
        })

    }
    console.log(inputs.length);


};

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}