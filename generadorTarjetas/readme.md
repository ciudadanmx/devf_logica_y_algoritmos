** 🎴 Generador de Tarjetas de Presentación

* 📌 Objetivo

Este proyecto tiene como objetivo crear un programa que genere tarjetas de presentación personalizadas utilizando funciones de flecha y template literals en JavaScript.

* 📝 Descripción

El generador de tarjetas permite crear una presentación clara y organizada para contactos, mostrando el nombre, puesto, empresa, correo electrónico y número de teléfono. La tarjeta se formatea de manera que sea legible y profesional.

* 📖 Instrucciones

* 📂 Crear un arreglo de objetos:

Define un arreglo llamado contactos que contenga al menos 3 objetos.

Cada objeto debe representar la información de una persona (nombre, puesto, empresa, correo electrónico, número de teléfono).

* ⚡ Función de flecha para generar la tarjeta:

Crear una función flecha llamada generarTarjeta que reciba un objeto contacto como parámetro.

Utilizar template literals para construir la tarjeta de presentación.

Formatear la tarjeta para que el texto esté centrado y rodeado de asteriscos (*).

* 🖥️ Mostrar las tarjetas:

Utilizar un bucle para recorrer el arreglo contactos.

Para cada contacto, llamar a la función generarTarjeta y mostrar la tarjeta en la consola.

* 💻 Ejemplo de Uso

class Persona {
    constructor(nombre, puesto, empresa, email, telefono) {
        this.nombre = nombre;
        this.puesto = puesto;
        this.empresa = empresa;
        this.email = email;
        this.telefono = telefono;
    }
}

let contactos = [
    new Persona('Juan Pérez', 'Desarrollador', 'Empresa ABC', 'juan@ejemplo.com', '555-123-4567'),
    new Persona('María López', 'Diseñadora', 'Empresa XYZ', 'maria@ejemplo.com', '555-987-6543'),
    new Persona('Carlos Gómez', 'Gerente', 'Empresa 123', 'carlos@ejemplo.com', '555-456-7890')
];

const generarTarjeta = (contacto) => {
    let datos = [contacto.nombre, contacto.puesto, contacto.empresa, contacto.email, contacto.telefono];
    let maxLength = 28;
    let border = '*'.repeat(maxLength + 4);
    console.log(border);
    datos.forEach(line => {
        let totalEspacios = maxLength - line.length;
        let espaciosStart = ' '.repeat(Math.floor(totalEspacios / 2));
        let espaciosEnd = ' '.repeat(Math.ceil(totalEspacios / 2));
        console.log(`*${espaciosStart}${line}${espaciosEnd}*`);
    });
    console.log(border);
    console.log('');
};

contactos.forEach(generarTarjeta);

* 🚀 Tecnologías Utilizadas

* 🟨 JavaScript (ES6)

* 🖥️ Node.js (opcional para ejecutar el código)

* 🛠️ Cómo Ejecutar el Proyecto

* 📥 Clona el repositorio:

git clone https://github.com/tuusuario/generador-tarjetas.git

* 📂 Navega al directorio del proyecto:

cd generador-tarjetas

* ▶️ Ejecuta el script con Node.js: (Opcional)

node index.js

* 🤝 Contribuciones

¡Las contribuciones son bienvenidas! 💡 Por favor, abre un issue o envía un pull request para sugerencias o mejoras.

* 📜 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

* 👤 Autor

* 📌 Creado por Tu Abraham Ayizuz 420 33
