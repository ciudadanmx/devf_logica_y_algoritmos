# ✈️ Planificador de Viajes 🌍

**Autor:** Abraham Urbina Ziat  
**Curso:** Master en Programación FrontEnd asistido por IA  
**Escuela:** dev.f  

## 📌 Descripción  

Este es un **Planificador de Viajes** que permite a los usuarios **registrar destinos y fechas** de viaje, así como **calcular el costo total** según el tipo de transporte y alojamiento seleccionado. En este proyecto, los estudiantes practicarán conceptos fundamentales de **ECMAScript (ES6 y posteriores)**, mejorando una aplicación existente con técnicas modernas de JavaScript.

## 🎯 Objetivo  

✅ Aplicar los conceptos de **ECMAScript (ES6 y posteriores)**.  
✅ Reemplazar funciones tradicionales con **funciones de flecha** ➡️.  
✅ Usar **`let` y `const`** en lugar de `var`.  
✅ Modularizar el código en **diferentes archivos**.  
✅ (Opcional) Extender la funcionalidad agregando **descuentos** o **más destinos**.  

## 🛠️ Funcionalidades  

1. **📌 Registrar Destinos:** Agrega un destino con su fecha y tipo de transporte.  
2. **💰 Calcular Costo:** Calcula el precio del viaje según el destino y transporte elegido.  
3. **🗂️ Mostrar Itinerario:** Lista todos los viajes registrados con detalles.  

## 🔍 Instrucciones para Resolver el Problema  

### 1️⃣ Comprender el flujo del programa 🧠  
- Un usuario **registra destinos** llamando a `registrarDestino(destino, fecha, transporte)`.  
- Luego, se llama a `calcularCosto(destino, transporte)` para obtener el costo total.  
- Finalmente, el usuario **ve su itinerario** con `mostrarItinerario()`.  

### 2️⃣ Mejorar el código con ES6 🚀  
✅ **Funciones de Flecha**: Convertir funciones tradicionales en **arrow functions** `() => {}`.  
✅ **Usar `let` y `const`** en lugar de `var` para mejorar la seguridad del código.  
✅ **Dividir en módulos**: Separar lógica en diferentes archivos (`viajes.js`, `costos.js`, etc.).  

### 3️⃣ Extender la funcionalidad (Opcional) 🎨  
- **🛎️ Agregar más destinos** y tipos de transporte.  
- **🎟️ Aplicar descuentos** según la cantidad de personas en el viaje.  
- **🛫 Agregar costos de hospedaje** dependiendo de la duración del viaje.  

## 💻 Instrucciones para Ejecutar  

### 1️⃣ Ejecutar en Node.js (Consola)  
1. **Clona el repositorio**:  
   ```bash
   git clone https://github.com/ciudadanmx/devf_logica_y_algoritmos.git
Navega al proyecto:
bash
Copiar
Editar
cd proyecto-viajes
Ejecuta el script con Node.js:
bash
Copiar
Editar
node src/viajes.js
2️⃣ Ejecutar en el Navegador
Abre viajes.js en un navegador compatible con ES6+.
La interacción se realizará mediante la consola del navegador (F12 > Console).
📜 Código
Ejemplo de estructura del código en JavaScript (ES6):

js
Copiar
Editar
const viajes = [];

const registrarDestino = (destino, fecha, transporte) => {
    viajes.push({ destino, fecha, transporte });
    console.log(`📍 Destino agregado: ${destino} - 🚆 Transporte: ${transporte} - 📅 Fecha: ${fecha}`);
};

const calcularCosto = (destino, transporte) => {
    const precios = { avion: 500, autobus: 100, tren: 150 };
    return precios[transporte] ? precios[transporte] : 0;
};

const mostrarItinerario = () => {
    viajes.forEach((viaje, index) => {
        console.log(`${index + 1}. 📍 ${viaje.destino} - 🗓️ ${viaje.fecha} - 🚗 ${viaje.transporte}`);
    });
};
📦 Entregables
✔️ Repositorio GitHub con el código fuente.
✔️ Commits documentados con cada mejora aplicada.
✔️ Modularización del código con ES6+.



📌 ¡Listo para viajar! 🛫🌍

Este proyecto no solo mejora una aplicación existente, sino que también te ayuda a fortalecer habilidades clave en JavaScript moderno. 🚀
Si tienes dudas, consulta con tu sensei 🧙‍♂️ o solicita una asesoría.

¡Buena suerte y que tu código fluya como un buen viaje! 🚆✈️🌎