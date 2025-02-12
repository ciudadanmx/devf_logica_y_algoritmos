// Detectar el entorno: Node (sin window) o navegador (con window), si fypeof window es igual a undefinied isNode será verdadero
const isNode = typeof window === 'undefined';
//declara rl para más adelante usarlo para guardar las preguntas cuando la interfase sea node.js
let rl = null;

// Crea la lista de compras vacía
let listaDeCompras = [];

// Función para agregar un producto a la lista
const agregarProducto = (producto) => {
    //verifica que el producto no esté ya repetido en la lista
    if (!listaDeCompras.includes(producto)) {
    //si no está repetido con push lo inserta al final de la lista    
    listaDeCompras.push(producto);
    //muestra en consola el resultado, en el caso de node mediante consola y en el caso del navegador mediante un alert
    if (isNode) {
      console.log(`✅ Producto "${producto}" agregado a la lista.`);
    } else {
      alert(`✅ Producto "${producto}" agregado a la lista.`);
    }
    //si el producto está repetido no lo agrega pero muestra en consola o en alert según la interfase.
  } else {
    if (isNode) {
      console.log(`⚠️ El producto "${producto}" ya está en la lista.`);
    } else {
      alert(`⚠️ El producto "${producto}" ya está en la lista.`);
    }
  }
};

// Función para eliminar un producto de la lista, se pasa la cadena de texto con el nombre del producto como parámetro de la función flecha
const eliminarProducto = (producto) => {
  //se busca y si existe obtiene la posición del producto dentro de la lista 
  const index = listaDeCompras.indexOf(producto);
  //si encuentra la coincidencia con splice retira el elemento con la posición index
  if (index !== -1) {
    listaDeCompras.splice(index, 1);
    //muestra el resultado en la interfase correspondiente.
    if (isNode) {
      console.log(`🗑️   Producto "${producto}" eliminado de la lista.`);
    } else {
      alert(`🗑️   Producto "${producto}" eliminado de la lista.`);
    }
    //si el producto no se encuentra pues no hay nada que eliminar y muestra el resultado en la interfase.
  } else {
    if (isNode) {
      console.log(`❌ El producto "${producto}" no se encuentra en la lista.`);
    } else {
      alert(`❌ El producto "${producto}" no se encuentra en la lista.`);
    }
  }
};

// Función para mostrar la lista de compras
const mostrarLista = () => {
   //verifica que la lista no esté vacía, si está vacía lo muestra en la interfase.
  if (listaDeCompras.length === 0) {
    if (isNode) {
      console.log("🛒 La lista de compras está vacía.");
    } else {
      alert("🛒 La lista de compras está vacía.");
    }
    //si la lista tiene elementos mediante un foreach muestra cada uno de los productos en listaDeCompras por cada uno de sus correspondientes index
  } else {
    if (isNode) {
      console.log('************');
      console.log("📝 Lista de Compras:");
      listaDeCompras.forEach((producto, index) => {
        //muestra la posición del elemento en la lista (index + 1) y a continuación el producto.
        console.log(`${index + 1}. ${producto}`);
      });
      console.log('************');
    //se formatea la lista par apoderla mostrar en un alert, se concatena todo agregando saltos de línea para que cada producto inicie en nueva línea en el alert en el navegador.
    } else {
      let listaStr = "📝 Lista de Compras:\n";
      listaDeCompras.forEach((producto, index) => {
        listaStr += `${index + 1}. ${producto}\n`;
      });
      alert(listaStr);
    }
  }
};

// Función para mostrar el menú (en consola c/ node.js se usa console.log)
const mostrarMenu = () => {
  if (isNode) {
    console.log("\n¿Qué acción deseas realizar?");
    console.log("1. ➕ Agregar un producto");
    console.log("2. ➖ Eliminar un producto");
    console.log("3. 🛒 Mostrar la lista");
    console.log("4. ❌ Salir");
  }
};

// Función principal para gestionar la lista de compras, si es node se usa switch case para evitar ciclos y condicionales anidados, facilitando el manejo con readline
const gestionarLista = () => {
  if (isNode) {
    mostrarMenu();
    rl.question("Selecciona una opción: ", (opcion) => {
      switch (opcion) {
        case '1':
          rl.question("Ingresa el nombre del producto a agregar: ", (producto) => {
            agregarProducto(producto);
            gestionarLista(); // Volvemos a llamar para otra acción
          });
          break;
        case '2':
          rl.question("Ingresa el nombre del producto a eliminar: ", (producto) => {
            eliminarProducto(producto);
            gestionarLista(); // Volvemos a llamar para otra acción
          });
          break;
        case '3':
          mostrarLista();
          gestionarLista();  // Volvemos a llamar para otra acción
          break;
        case '4':
          console.log("👋 Happy Hacking ¡Ziaoo!");
          //se finaliza readline
          rl.close();
          //se libera el prompt terminando la ejecución
          break;
        //opción por defecto que sucede si el usuario ingresa alguna opción que no sea las anteriores  
        default:
          console.log("❌ Opción no válida. Intenta de nuevo.");
          gestionarLista();
          break;
      }
    });
    //gestión del menú cuando la interfase es el navegador, de igual modo se concatena para el alert y se usa el retorno de línea
  } else {
    const opcion = prompt(
      "¿Qué acción deseas realizar?\n" +
      "1. ➕ Agregar un producto\n" +
      "2. ➖ Eliminar un producto\n" +
      "3. 🛒 Mostrar la lista\n" +
      "4. ❌ Salir"
    );
    switch (opcion) {
      case '1': {
          const producto = prompt("Ingresa el nombre del producto a agregar:");
          agregarProducto(producto);
          gestionarLista();
          break;
      }
      case '2': {
          const producto = prompt("Ingresa el nombre del producto a eliminar:");
          eliminarProducto(producto);
          gestionarLista();
          break;
      }
      case '3':
          mostrarLista();
          gestionarLista();
          break;
      case '4':
          alert("👋 Happy Hacking ¡Ziaoo!");
          break;
      default:
          alert("❌ Opción no válida. Intenta de nuevo.");
          gestionarLista();
          break;
    }
  }
};

//Esta parte la hice con Chat GPT porque no podía hacer funcionar readLine y alerts del navegador a la vez, pero tras varios intentos usando la función "razona", al fin lo logró 😁
// En función del entorno, iniciamos la gestión
if (isNode) {
  // En Node, usamos una IIFE asíncrona para poder utilizar await en la importación
  (async () => {
    const readlineModule = await import('readline');
    rl = readlineModule.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    gestionarLista();
  })();
} else {
  // En el navegador, iniciamos directamente
  gestionarLista();
}
//finalmente en ambos casos al final ejecuta la función gestionarLista que a su vez en ciclo cada vez que termina un subciclo se vuelve a iniciar, se llama a sí misma de nuevo, solo que en el caso de node a parte tiene que importar readline pero ahí algo pasaba que se tiene que hacer como módulo acá y en el index.