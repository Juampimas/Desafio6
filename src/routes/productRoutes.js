import Router from "express";
export const router = Router();
import {products} from "../contenedor.js";



router.get('/', (req, res) => {
  res.render('agregarProducto.handlebars',{ products: products.getAll() });
});

router.get('/productos', (req, res) => {
  res.render('productos.handlebars', { products: products.getAll() });
});

router.post('/productos', (req, res) => {
  products.save(req.body)
  res.redirect('/productos');
});



