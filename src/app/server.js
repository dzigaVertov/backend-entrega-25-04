import express from 'express';
export const app = express();
import {engine} from 'express-handlebars';

app.use(express.static('./public'));
app.use(express.json);
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', engine());
