/* mongo 

show dbs 

use ecommerce

db.createCollection("productos")
db.createCollection("mensajes")
 */

//add 10 mensajes diferentes con email y mensaje
db.mensajes.insertMany([
  { email: "test1@example.com", mensaje: "Hola 1" },
  { email: " test2@gmail.com", mensaje: "Hola 2" },
  { email: " test3@esac.com", mensaje: "Hola 3" },
  { email: " test4@sdasd.com", mensaje: "Hola 4" },
  { email: " test5@gmail.com", mensaje: "Hola 5" },
  { email: "test6@example.com", mensaje: "Hola 6" },
  { email: " test7@gmail.com", mensaje: "Hola 7" },
  { email: " test8@esac.com", mensaje: "Hola 8" },
  { email: " test9@sdasd.com", mensaje: "Hola 9" },
  { email: " test10@gmail.com", mensaje: "Hola 10" },
]);

// add 10 productos
db.productos.insertMany([
  { nombre: "producto1", precio: 142, thumbnail: "http://" },
  { nombre: "producto2", precio: 580, thumbnail: "http://" },
  { nombre: "producto3", precio: 442, thumbnail: "http://" },
  { nombre: "producto4", precio: 4333, thumbnail: "http://" },
  { nombre: "producto5", precio: 506, thumbnail: "http://" },
  { nombre: "producto6", precio: 3222, thumbnail: "http://" },
  { nombre: "producto7", precio: 700, thumbnail: "http://" },
  { nombre: "producto8", precio: 1233, thumbnail: "http://" },
  { nombre: "producto9", precio: 2231, thumbnail: "http://" },
  { nombre: "producto10", precio: 1563, thumbnail: "http://" },
]);

//Listar todos los documentos en cada colección.
db.mensajes.find();
db.productos.find();

//Mostrar la cantidad de documentos almacenados en cada una de ellas.
db.mensajes.estimatedDocumentCount();
db.productos.estimatedDocumentCount();



// add 1 more product to productos collection
db.productos.insertOne({
  nombre: "producto11",
  precio: 5555,
  thumbnail: "http://",
});

// list productos with price lt 1000
db.productos.find({ precio: { $lt: 1000 } });

// Listar los productos con precio entre los 1000 a 3000 pesos.
db.productos.find({ precio: { $gt: 1000, $lt: 3000 } });

// Listar los productos con precio mayor a 3000 pesos.
db.productos.find({ precio: { $gt: 3000 } });

// Realizar una consulta que traiga sólo el nombre del tercer producto más barato
db.productos.find({ precio: { $lt: 1000 } }).sort({ precio: 1 }).limit(3); // arreglar 

//Hacer una actualización sobre todos los productos, agregando el campo stock a todos ellos con un valor de 100.
db.productos.updateMany({}, { $set: { stock: 100 } });

//Cambiar el stock a cero de los productos con precios mayores a 4000 pesos.
db.productos.updateMany({ precio: { $gt: 4000 } }, { $set: { stock: 0 } });

// Borrar los productos con precio menor a 1000 pesos
db.productos.deleteMany({ precio: { $lt: 1000 } });

// Crear un usuario 'pepe' clave: 'asd456' que sólo pueda leer la base de datos ecommerce. Verificar que pepe no pueda cambiar la información.
db.createUser({
  user: "pepe",
  pwd: "asd456",
  roles: [{ role: "read", db: "ecommerce" }],
});

db.createUser({
  user: "readonly",
  pwd: "readonly",
  roles: [{ role: "read", db: "ecommerce" }],
});


db.products.insert({nombre: 'Nodeberia'})