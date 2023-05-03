import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { hashear, validarPassword } from '../utils/criptografia.js';
import { usuarioModel } from '../models/schemaUsuario.js';
import { manager as userManager } from '../managers/userManager.js';

passport.use('register', new LocalStrategy({ passReqToCallback: true }, async (req, _u, _p, done) => {
    let { username, password, datosPersonales } = req.body;

    const user = {
        username,
        password: hashear(password),
        ...datosPersonales
    };

    await userManager.guardar(user);
    done(null, {
        username: user.username,
        nombre: user.first_name,
        apellido: user.last_name,
        edad: user.age,
        email: user.email,
    });
}));

passport.use('login', new LocalStrategy({ passReqToCallback: true }, async (req, _u, _p, done) => {
    const { username, password } = req.body;
    let buscado;
    try {
        buscado = await userManager.buscarPorUsername(username);
    } catch (error) {
        return done(error);
    }
    console.log('passwords coinciden: ', validarPassword(password, buscado.password));
    if (!validarPassword(password, buscado.password))
        return done(new Error());
    done(null, {
        username: buscado.username,
        nombre:   buscado.first_name,
        apellido: buscado.last_name,
        edad:     buscado.age,
        email:    buscado.email,
    });
}));

passport.serializeUser((user, next) => { next(null, user) });
passport.deserializeUser((user, next) => { next(null, user) });

export const passportInitialize = passport.initialize();
export const passportSession = passport.session();


