# Proyecto: Estructuras de Datos - Gestión de Lista de Compras

**Autor:** Abraham Urbina Ziat  
**Curso:** Master en Programación FrontEnd asistido por IA  
**Escuela:** dev.f

## Descripción

Este proyecto es una aplicación sencilla para gestionar una lista de compras. Permite a los usuarios agregar, eliminar y ver los productos que han añadido a su lista. Está diseñado para practicar el uso de **estructuras de datos** como arreglos en JavaScript y resolver problemas sencillos del mundo real mediante programación.

## Objetivo

El objetivo principal es permitir que los estudiantes practiquen conceptos básicos de **estructuras de datos** y la manipulación de **arreglos** en JavaScript. La aplicación ofrece una forma intuitiva y visual de interactuar con una lista de compras, gestionada completamente desde el código.

## Características

- **Entorno de Ejecución:** La aplicación puede ejecutarse tanto en **consola** utilizando **Node.js**, como en el **navegador** mediante la función `alert()`.
- **Interfaz Visual:** Se utilizan **íconos** para representar las acciones de agregar, eliminar y ver productos.
- **Sin productos duplicados:** La lista de compras asegura que no se añadan productos repetidos.
- **Interactividad:** Los usuarios pueden interactuar con el sistema mediante un menú que les permite elegir entre agregar, eliminar o mostrar productos en la lista.

## Funcionalidades

1. **➕ Agregar un Producto:** Los usuarios pueden añadir productos a la lista. Si el producto ya está en la lista, no se agrega nuevamente.
2. **➖ Eliminar un Producto:** Los usuarios pueden eliminar productos específicos de la lista.
3. **🛒 Mostrar la Lista:** Los usuarios pueden ver todos los productos de la lista en la consola o en el navegador.

## Instrucciones para Ejecutar

### 1. Ejecutar en Node.js (Consola)

1. Clona este repositorio en tu máquina local.
   ```bash
   git clone https://github.com/tu_usuario/estructura-datos.git
Navega a la carpeta del proyecto.

bash
Copiar
Editar
cd estructura-datos
Ejecuta el archivo app.js con Node.js.

bash
Copiar
Editar
node app.js
Nota: Asegúrate de tener Node.js instalado en tu máquina.

2. Ejecutar en el Navegador
Puedes también abrir app.js en cualquier navegador, y las interacciones se realizarán utilizando alertas en lugar de la consola.

Código
El proyecto utiliza funciones simples de JavaScript para gestionar la lista de compras. A continuación se describen las funciones principales:

agregarProducto(producto): Agrega un producto a la lista si no está duplicado.
eliminarProducto(producto): Elimina un producto de la lista si existe.
mostrarLista(): Muestra todos los productos en la lista con íconos para una mejor visualización.
Ejemplo de Uso en Consola
bash
Copiar
Editar
¿Qué acción deseas realizar?
1. ➕ Agregar un producto
2. ➖ Eliminar un producto
3. 🛒 Mostrar la lista
4. ❌ Salir
Ejemplo de Salida
markdown
Copiar
Editar
📝 Lista de Compras:
1. Leche
2. Pan
3. Huevos
Instrucciones de Resolución del Problema
Para resolver el problema, creamos una lista de compras utilizando un arreglo vacío. Luego, implementamos las siguientes funciones:

agregarProducto(producto): Añade el producto al arreglo si no está ya en la lista.
eliminarProducto(producto): Elimina el producto especificado del arreglo.
mostrarLista(): Muestra todos los productos en la lista en un formato amigable.
Entregables
Un repositorio en GitHub con el código fuente de la aplicación.
Commits que muestren el progreso y las modificaciones realizadas.
El código está organizado y documentado adecuadamente, de acuerdo con los estándares del curso.
Enlaces
GitHub del Proyecto
Conclusión
Este proyecto permite a los estudiantes familiarizarse con el uso de arreglos y la manipulación de datos en JavaScript de una manera práctica y visual. Además, proporciona una base para implementar soluciones más complejas utilizando estructuras de datos más avanzadas.

License
Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles..