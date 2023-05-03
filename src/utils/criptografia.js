import bcrypt from 'bcrypt';

export function hashear(password) {
    let passwordHasheado = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    return passwordHasheado;
}

export function validarPassword(recibido, almacenado){
    return bcrypt.compareSync(recibido, almacenado);
}
