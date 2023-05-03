import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { hashear, validarPassword } from '../utils/criptografia.js';

passport.use('register', new LocalStrategy({ passReqToCallback: true }, async (req, _u, _p, done) => {
    const { username, password, ...datosPersonales } = req.body;
    const user = new User({ username, password: hashear(password), ...datosPersonales });
    await userManager.guardar(user)
    done(null, {
        username: user.username,
        nombre: user.nombre,
        apellido: user.apellido,
        edad: user.edad,
        direccion: user.direccion,
    })

}))

passport.use('login', new LocalStrategy({ passReqToCallback: true }, async (req, _u, _p, done) => {
    const { username, password } = req.body
    let buscado
    try {
        buscado = await userManager.buscarPorUsername(username)
    } catch (error) {
        return done(new ErrorDeAutenticacion())
    }
    if (!validarPassword(password, buscado.password))
        return done(new ErrorDeAutenticacion())
    done(null, {
        username: buscado.username,
        nombre: buscado.nombre,
        apellido: buscado.apellido,
        edad: buscado.edad,
        direccion: buscado.direccion,
    })
}))

passport.serializeUser((user, next) => { next(null, user) })
passport.deserializeUser((user, next) => { next(null, user) })

export const passportInitialize = passport.initialize()
export const passportSession = passport.session()


