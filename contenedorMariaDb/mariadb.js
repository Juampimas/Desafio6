const Contenedor = require("./Contenedor.js");
const options = require("./options/mariadb.js");

const mariadb = new Contenedor(options);

module.exports = { mariadb };