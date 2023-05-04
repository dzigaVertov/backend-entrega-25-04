import { usuarioModel } from '../models/schemaUsuario.js';

class UserManager {
    async guardar(user) {
        await usuarioModel.create(user);
        return user;
    }

    async buscarPorUsername(username) {
        let usuario = await usuarioModel.findOne({ username: username }).lean();
        if (!usuario) {
            throw new Error('No hay usuario');
        }
        return usuario;
    }

    async buscarPorEmail(email) {
        let usuario = await usuarioModel.findOne({ email: email }).lean();
        if (!usuario) {
            throw new Error('No hay usuario');
        }
        return usuario;
    }
}

export const manager = new UserManager();
