const formularioRegistro = document.getElementById('formularioRegistro');

if (formularioRegistro instanceof HTMLFormElement) {
    formularioRegistro.addEventListener('submit', nuevoUsuario);
}

async function nuevoUsuario(event) {
    event.preventDefault();

    const first_name = document.querySelector('#first_name');
    const last_name = document.querySelector('#last_name');
    const email = document.querySelector('#email');
    const age = document.querySelector('#age');
    const password = document.querySelector('#password');

    const datosPersonales = {
        first_name: first_name.value,
        last_name: last_name.value,
        email: email.value,
        age: age.value,
    }

    const payload = {
        username: email.value,
        password: password.value,
        datosPersonales
    }

    const {status} = await fetch('/api/sessions/registro', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            "Content-type": "application/json"
        }
    });

     if (status === 201 || status === 200) {
        window.location.href = '/perfil'
      } else {
        console.log('[register] estado inesperado: ' + status)
      }
}
