//este archivo va a recibir una lista de productos y sus existencias hay que crear una función para insertarlos en una base de datos mediante una promesa
//la función debe retornar una promesa
//la promesa debe retornar un objeto con un mensaje de éxito o un mensaje de error
//la función debe recibir una lista de productos y sus existencias
//la función debe retornar una promesa
//la promesa debe retornar un objeto con un mensaje de éxito o un mensaje de error
//la función debe recibir una lista de productos y sus existencias
//la función debe retornar una promesa
//la promesa debe retornar un objeto con un mensaje de éxito o un mensaje de error
//la función debe recibir una

function insertarProductos(productos) {
    return new Promise((resolve, reject) => {
        //simulamos la inserción de productos en la base de datos
        setTimeout(() => {
            let error = false;
            if (error) {
                reject("Error al insertar los productos");
            } else {
                resolve("Productos insertados correctamente");
            }
        }, 2000);
    });
}