const body = document.querySelector('body')

function callback (texto, callback) {
    body.innerHTML = texto;
    callback(' Mundo!');
}

callback('Olá,', (texto1) => {
    body.innerHTML += texto1;
})
