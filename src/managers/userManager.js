import { usuarioModel } from '../models/schemaUsuario.js';

class UserManager {
    async guardar(user){
        await usuarioModel.create(user);
        return user;        
    }
}

export const manager = new UserManager();
