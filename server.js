import { app } from './app.js';
import { Server } from "http"
import { Socket } from "socket.io";
import {schema, normalize} from "normalizr";

// import { mariadb } from "./contenedorMariaDb/mariadb.js";
import { sqlite3 } from "./contenedorSqlite3/Sqlite3.js";

const PORT = process.env.PORT || 3001;
const httpServer = new Server(app);
const io = new Socket(httpServer);

const server = Server.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

server.on("error", (error) => console.error(`Error en Servidor ${error}`));

server.on("error", (err) => {
  console.log(err);
});

io.on("connection", async (socket) => {
  const products = await sqlite3.getAll();
  const messages = await sqlite3.getAll();

  socket.emit("messages", { messages, products });

  socket.on("new-message", async (data) => {
    await sqlite3.save(data);
    let todo = {
      messages: await sqlite3.getAll(),
      products: await sqlite3.getAll(),
    };
    io.sockets.emit("messages", todo);
  });

  socket.on("new-product", async (data) => {
    await sqlite3.save(data);
    let todo = {
      messages: await sqlite3.getAll(),
      products: await sqlite3.getAll(),
    };
    io.sockets.emit("messages", todo);
  });
});

// io.on("connection", async (socket) => { 

//   socket.emit("productos", await sqlite3.getAll()); 
//   socket.emit("chat", normalize(await sqlite3.getAll(), [messageSchema]))


//   socket.on("nuevoProducto", async (data) => { 
//     await sqlite3.save(data)
//      io.sockets.emit('productos', await sqlite3.getAll())

//   })

//   socket.on("nuevoMensaje", async (data) => { 
//    await sqlite3.save(data)
//      io.sockets.emit('chat', normalize(await sqlite3.getAll(), [messageSchema]))
//   });

// })