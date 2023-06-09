import mongoose from 'mongoose';

const schemaUsuario = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    age: { type: Number, required: true },
}, { versionKey: false });

export const usuarioModel = mongoose.model('usuarios', schemaUsuario);


