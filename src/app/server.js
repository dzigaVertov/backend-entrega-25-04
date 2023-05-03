import express from 'express';
import session from '../middlewares/session.js';
import apiSessionsRouter from '../Routers/apiSessionsRouter.js';
import userRouter from '../Routers/userRouter.js';

export const app = express();

import { engine } from 'express-handlebars';
import { passportInitialize, passportSession } from '../middlewares/passport.js';

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', engine());
app.set('views', './views');
app.set('view engine', 'handlebars')

app.use(session);

app.use(passportInitialize, passportSession);

app.use('/', userRouter);
app.use('/api/sessions', apiSessionsRouter);
