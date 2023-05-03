import MongoStore from 'connect-mongo';
import session from 'express-session';
import { MONGODB_CNX_STR } from '../config/mongoose.config.js';


export default session({
    store: MongoStore.create({mongoUrl: MONGODB_CNX_STR}),
    saveUninitialized: false,
    resave: false,
    secret: 'sanlorenzo'
});


