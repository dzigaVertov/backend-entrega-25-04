import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GithubStrategy } from 'passport-github2';
import { githubCallbackUrl, githubClientSecret, githubClientId } from '../config/auth.config.js'
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

    if (!validarPassword(password, buscado.password))
        return done(new Error());
    done(null, {
        username: buscado.username,
        nombre: buscado.first_name,
        apellido: buscado.last_name,
        edad: buscado.age,
        email: buscado.email,
    });
}));


passport.use('github', new GithubStrategy({
    clientID: githubClientId,
    clientSecret: githubClientSecret,
    callbackURL: githubCallbackUrl
},
    async (accessToken, refreshToken, profile, done) => {
        let user;
        try {
            user = await userManager.buscarPorEmail(profile.username + '@github');
        } catch (error) {
            user = {
                username: profile.username,
                email: profile.username + '@github',
                password: 'github',
                first_name: profile.username,
                last_name: 'github',
                age: 18,
            }

            await userManager.guardar(user);
        }
        done(null, user);

    }))
passport.serializeUser((user, next) => { next(null, user) });
passport.deserializeUser((user, next) => { next(null, user) });

export const passportInitialize = passport.initialize();
export const passportSession = passport.session();


