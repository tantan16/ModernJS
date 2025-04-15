
// EVENTO SUBMIT A UN FORMULARIO

const formulario = document.querySelector('#formulario');

// 1. PREVENT: PREVIENE QUE SUCEDAN LOS EVENTOS PREDETERMINADOS

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault();

    console.log('Buscando...');

    console.log(e.target.action);
}

