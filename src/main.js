import mongoose from 'mongoose';
import {app} from './app/server.js';
import {PORT} from './config/server.config.js';
import {MONGODB_CNX_STR} from './config/mongoose.config.js';


const dbConnection = await mongoose.connect(MONGODB_CNX_STR)
console.log(`CONECTADO A BASE DE DATOS en ${MONGODB_CNX_STR}`);

app.listen(8080, () => console.log(`Escuchando en puerto: ${PORT}`));
