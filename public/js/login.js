const formularioLogin = document.querySelector('#formularioLogin');

if (formularioLogin instanceof HTMLFormElement) {
    formularioLogin.addEventListener('submit', loginSubmit)
}

async function loginSubmit(event) {
    event.preventDefault();
    const email = document.querySelector('#input_email');
    const pass = document.querySelector('#input_password');

    if ((email instanceof HTMLInputElement) &&
        (pass instanceof HTMLInputElement)) {
        const datosUsuario = {
            username: email.value,
            password: pass.value
        };

        const {status} = await fetch('/api/sessions/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosUsuario)
        });

        
     if (status === 201 || status === 200) {
        window.location.href = '/perfil'
      } else {
        console.log('[login] estado inesperado: ' + status)
      }
    }
}
