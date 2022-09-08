class Contenedor {
    constructor(route) {
      this.route = route;
      this.products = [];
    }
  
    getAll() {
      return this.products;
    }
    save(obj) {
      obj.id = !this.products.length ? 1 : parseInt(this.products[this.products.length - 1].id) + 1;
      this.products.push(obj);
      return obj
    }
  
    getById(id) {
      return this.products.find((product) => product.id == id);
    }
  
    updateProduct(id, obj) {
      const productIndex = this.products.findIndex(product => product.id == id);
      
      if (productIndex != -1) {
        this.products[productIndex].title = obj.title || this.products[productIndex].title;
        this.products[productIndex].price = obj.price || this.products[productIndex].price;
        this.products[productIndex].thumbnail = obj.thumbnail || this.products[productIndex].thumbnail;
        return this.products[productIndex];
      }
      return false;
    }
  
    deleteById(id) {
      const index = this.products.findIndex(prod=>prod.id == id)
      if(index != -1){
        this.products = this.products.filter((product) => (product.id != id));
        return true
      }
      return false
    }
  }
  const products = new Contenedor('./src/products.txt');
  
  products.save({title: 'SMART TV SAMSUNG', price: 110000, thumbnail:"https://armoto.vtexassets.com/arquivos/ids/162843/POP-MT50Y003A1B.png?v=637955881308700000"})
  products.save({title: 'Laptop ThinkPad L14', price: 230000, thumbnail:"https://www.lenovo.com/medias/lenovo-laptop-thinkpad-l14-gen-2-intel-subseries-hero.png?context=bWFzdGVyfHJvb3R8MTQ2NDE2fGltYWdlL3BuZ3xoMTQvaDI2LzE0MTgxMzI5OTkzNzU4LnBuZ3w5MjE1Njg3MTdkNTM3ZGU1NDcwMmYxOGU1MjNiOWZkZjgyOTU3NzhkMzE4NmZlMzExODM2YzJkZjE3ZDc1Y2Ix"})
  products.save({title: 'Tab P12', price:75000, thumbnail:'https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8NzY2NTh8aW1hZ2UvcG5nfGgxZC9oNDkvMTEyNzY1MjY3ODA0NDYucG5nfGVhYzg5MzgwNjAzY2ExYTY3NzBlNmI2NDg3OTk0YTBjMDY0NzM2ZjM1NGQ3ZmNjMTVkNzIzN2I0OWE4MTJjNTc'})
  
  module.exports = products;