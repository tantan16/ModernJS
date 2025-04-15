document.addEventListener('DOMContentLoaded', function(){

    const email = {
        email: '',
        cc: '',
        asunto: '',
        mensaje: ''
    }

// Se seleccionan los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputCC = document.querySelector('#cc');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type = "submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner')

    
    ///Aquí se asignan los eventos
    inputEmail.addEventListener('input', validar);
    inputCC.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);
    formulario.addEventListener('submit', enviarEmail);
    btnReset.addEventListener('click', function(e){
        e.preventDefault();
        resetFormulario();
    })

    /// Funciones 

    function enviarEmail(e){
        e.preventDefault();

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');
        
        setTimeout(()=>{
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            resetFormulario();

            //Crear una alerta de envío de correo 

            const alertaExito = document.createElement('P'); 
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase'); 

            alertaExito.textContent = 'Mensaje enviado correctamente'; 

            formulario.appendChild(alertaExito);

            setTimeout(()=>{
                alertaExito.remove();
            }, 3000);
            
        }, 3000);
    }
    
    function validar (e){
        if ( e.target.id != 'cc' && e.target.value.trim() === ''){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        } 

        if (e.target.type === 'email' && e.target.value.trim() !== '' && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es válido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        limpiarAlerta(e.target.parentElement);
        email[e.target.name] = e.target.value.trim().toLowerCase();
       comprobarEmail()

    } 


    function mostrarAlerta(mensaje, referencia){
        limpiarAlerta(referencia);
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center', 'alerta');
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia){
        const alerta = referencia.querySelector('.alerta');
        if (alerta){
            alerta.remove();
        }
    }

    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const resutlado = regex.test(email);
        return resutlado;
    }
 
    function comprobarEmail(){
       const camposRequeridos = Object.keys(email).filter(key => key!== 'cc'); 
       
       if (camposRequeridos.some(key => email[key] === '')) {
        btnSubmit.classList.add('opacity-50');
        btnSubmit.disabled = true;
        return;
      }

      btnSubmit.classList.remove('opacity-50');
      btnSubmit.disabled = false;
    }


    function resetFormulario(){
        email.email= '';
        email.cc= '';
        email.asunto= '';
        email.mensaje= '';

        formulario.reset();
        comprobarEmail();
    }
});