import Router from 'express';

import Productos from '../fakerProducts/fakerProducts.js';
const productsTest = new Router;


productsTest.get('/', (req, res)=>{
    const productsToShow = []
    for (let i = 0; i <= 4; i++){
        productsToShow.push(Productos())
    }
    console.log(productsToShow)
    res.render('products-test.ejs', {products: productsToShow})
})

export default productsTest