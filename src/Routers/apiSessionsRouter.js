import { Router } from 'express';
import { usuarioModel } from '../models/schemaUsuario.js';
import passport from 'passport';
import {registerController} from '../Controllers/registerController.js';
import {loginController} from '../Controllers/loginController.js';

const apiSessionsRouter = Router();

export default apiSessionsRouter;

apiSessionsRouter.post('/login', passport.authenticate('login'), loginController);

apiSessionsRouter.post('/registro', passport.authenticate('register'), registerController);

apiSessionsRouter.get('/github_auth', (req, res, next)=> {console.log(req);next()}, passport.authenticate('github', {scope: ['user:email']}));

apiSessionsRouter.get('/githubcallback', passport.authenticate('github', {failWithError: true}), loginController);


