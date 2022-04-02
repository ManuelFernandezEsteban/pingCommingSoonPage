
const email = document.getElementById('email');
const error_email = document.getElementById('error-email');

const mensajeInvalid = 'Please provide a valid email address';
const mensajeVacio = 'Whoops! It looks like you forgot to add your email';

const submit = document.getElementById('submit').addEventListener('click', () => {

    listacaracteres = /^[_a-z0-9-]+(.[a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/;
    if (email.value== '') {
        displayError(mensajeVacio);
        return;
    }

    if (!listacaracteres.test(email.value)) {
        displayError(mensajeInvalid);
        return;
    }
    else {
        borrarError();
        return;
    }
})


const displayError = (mensaje) => {
    error_email.classList.remove('no-visible');
    error_email.innerText = mensaje;
    email.classList.add('error-input');
}

const borrarError = () => {
    error_email.classList.add('no-visible');
    error_email.innerText = '';
    email.classList.remove('error-input');
}