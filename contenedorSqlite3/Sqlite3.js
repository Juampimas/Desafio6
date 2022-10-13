import Contenedor from "./Contenedor.js";
import {options} from "./options/sqlite3.js";

const sqlite3 = new Contenedor(options);

export default sqlite3