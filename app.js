import express from 'express';
import {router} from './src/routes/productRoutes.js';
// const handlebars = require('express-handlebars').engine;
export const app = express();
import {schema, normalize} from "normalizr"
import ProductsTest from "../desafio/src/routes/products-test.js"

// const handlebarsConig = {
//   defaultLayout: 'index.handlebars',
// };
// app.engine('handlebars', handlebars(handlebarsConig));
app.set('view engine', '.handlebars');
app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', router);

app.use("/api/productosTest", ProductsTest)