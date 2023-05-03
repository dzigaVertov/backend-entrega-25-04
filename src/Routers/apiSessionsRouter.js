import { Router } from 'express';
import { usuarioModel } from '../models/schemaUsuario.js';
import passport from 'passport';
import {registerController} from '../Controllers/registerController.js';
import {loginController} from '../Controllers/loginController.js';

const apiSessionsRouter = Router();

export default apiSessionsRouter;

apiSessionsRouter.post('/login', passport.authenticate('login'), loginController);

apiSessionsRouter.post('/registro', passport.authenticate('register'), registerController);


