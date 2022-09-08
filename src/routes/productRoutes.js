const { Router } = require("express");
const router = Router();

const products = require('../contenedor')

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

module.exports = router;



// let listaProductos=[
//     {
//         "id": 1,
//         "title": "SMART TV SAMSUNG",
//         "price": 110000,
//         "img": "https://armoto.vtexassets.com/arquivos/ids/162843/POP-MT50Y003A1B.png?v=637955881308700000"
//       },
//       {
//         "id": 2,
//         "title": "Laptop ThinkPad L14",
//         "price": 230000,
//         "img": "https://www.lenovo.com/medias/lenovo-laptop-thinkpad-l14-gen-2-intel-subseries-hero.png?context=bWFzdGVyfHJvb3R8MTQ2NDE2fGltYWdlL3BuZ3xoMTQvaDI2LzE0MTgxMzI5OTkzNzU4LnBuZ3w5MjE1Njg3MTdkNTM3ZGU1NDcwMmYxOGU1MjNiOWZkZjgyOTU3NzhkMzE4NmZlMzExODM2YzJkZjE3ZDc1Y2Ix"
//       },
//       {
//         "id": 3,
//         "title": "Tab P12",
//         "price": 75000,
//         "img": "https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8NzY2NTh8aW1hZ2UvcG5nfGgxZC9oNDkvMTEyNzY1MjY3ODA0NDYucG5nfGVhYzg5MzgwNjAzY2ExYTY3NzBlNmI2NDg3OTk0YTBjMDY0NzM2ZjM1NGQ3ZmNjMTVkNzIzN2I0OWE4MTJjNTc"
//       }
// ]
// let id=4;

// router.get("/mostrarProductos", (req,res) => {
//   res.render("productos", {productos:listaProductos})
// });

// router.get("/agregarProductos", (req,res) => {
//   res.render("agregarProducto")
// });

// router.get('/detalle/:id',(req,res)=>{
//     let id = req.params.id;
//     let miProducto = listaProductos.filter(p=>p.id == id);
//     if(miProducto.length == 0){
//         return res.send(`No existe ese producto`);
//     }
//     res.send(miProducto)
// })

// router.post("/", (req,res) => {
//   let datos = req.body;
//   datos.id=id++;
//   listaProductos = [...listaProductos, datos];
//   res.redirect("/productos/agregarProductos")
// });

// module.exports = router;