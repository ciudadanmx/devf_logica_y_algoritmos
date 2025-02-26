/* Proyecto Métodos de Arreglos
Objetivo
El objetivo de este proyecto es permitir que los estudiantes practiquen cómo aplicar algunos de los métodos de arreglos más usados en JavaScript. En particular practicar los métodos filter(), sort(), y map() para manipular datos de un arreglo.

Problema: Filtro y Orden de Productos de una Tienda Online
Eres el encargado de gestionar los datos de una tienda online. Tienes un listado de productos con información como nombre, precio y categoría. Tu tarea será filtrar los productos por precio, ordenarlos alfabéticamente y generar una lista con los nombres.

Instrucciones para resolver el problema:
Crea un arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría. Puedes ver el código de ejemplo para este paso en el siguiente enlace: https://gist.github.com/heladio-devf-mx/a2127c7992384fd0fd66893db47ea506
Usa filter() para obtener los productos que cuesten menos de $100.
Usa sort() para ordenar esos productos alfabéticamente por su nombre.
Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.
Muestra los resultados de la aplicación de cada métiodo en consola.
(Oppcional) Incluye alguno de los métodos faltantes (reduce, some, every, includes, etc.) con algún caso de uso en este ejemplo, usa tu creatividad.
Entregables
Para este proyecto se debe crear un repositorio nuevo y agregar los archivos necesarios que contenga la solución al problema planteado. Si tienes alguna duda de este ejercicio, no dudes en consultarla con tu sensei para que quede claro. También puedes solicitar una asesoría.

Crea un nuevo repositorio en tu equipo local para solucionar el problema planteado.
Crea uno o más 'commits' en tu repositorio con los archivos utilizados en la solución.
Si quieres agrega otro(s) archivo(s) que tengas con ejemplos de la clase o con algún ejemplo que tú hayas intentado mucho mejor.
Comparte la liga de Github de tu repositorio con la solución. */

const productos = [
    { nombre: 'Camiseta', precio: 20, categoria: 'Ropa' },
    { nombre: 'Pantalón', precio: 30, categoria: 'Ropa' },
    { nombre: 'Zapatos', precio: 50, categoria: 'Accesorios' },
    { nombre: 'Bolso', precio: 15, categoria: 'Accesorios' },
    { nombre: 'Bufanda', precio: 10, categoria: 'Ropa' },
];

const productosFiltrados = productos.filter(producto => producto.precio < 100);
console.log(    productosFiltrados);

const productosOrdenados = productosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));

const nombresProductos = productosOrdenados.map(producto => producto.nombre);
console.log(nombresProductos);

/* 
Si quieres agrega otro(s) archivo(s) que tengas con ejemplos de la clase o con algún ejemplo que tú hayas intentado mucho mejor.
Comparte la liga de Github de tu repositorio con la solución. */

//se agregan ejemplos interesantes de código 

/* console.log('Ejemplo de filter():');
const numeros = [1, 2, 3, 4, 5];
const numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log(numerosPares); // [2, 4]

console.log('Ejemplo de sort():');
const frutas = ['manzana', 'banana', 'kiwi', 'pera'];
frutas.sort();
console.log(frutas); // ['banana', 'kiwi', 'manzana', 'pera']

console.log('Ejemplo de map():');
const numeros = [1, 2, 3, 4, 5];
const       dobles = numeros.map(numero => numero * 2);
console.log(dobles); // [2, 4, 6, 8, 10]

console.log('Ejemplo de reduce():'); */

//se hace lo de arriba pero sin repetir los nombres de variables para que no dé errorr no es puede repetir el nombre "numeros"

console.log('Ejemplo de filter():');
const numeros = [1, 2, 3, 4, 5];
const numerosPares = numeros.filter((numero) => numero % 2 === 0);
console.log(numerosPares); // [2, 4]

console.log('Ejemplo de sort():');
const frutas = ['manzana', 'banana', 'kiwi', 'pera'];
frutas.sort();
console.log(frutas); // ['banana', 'kiwi', 'manzana', 'pera']

console.log('Ejemplo de map():');
const numeros3 = [1, 2, 3, 4, 5];
const dobles = numeros.map((numero) => numero * 2);
console.log(dobles); // [2, 4, 6, 8, 10]

console.log('Ejemplo de reduce():');
