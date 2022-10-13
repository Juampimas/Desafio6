import Contenedor from "./Contenedor.js";
import {options} from "./options/mariadb.js";

const mariadb = new Contenedor(options);

export default mariadb