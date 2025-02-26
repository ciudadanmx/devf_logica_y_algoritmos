function esNavegador() {
    return typeof window !== "undefined" && typeof window.document !== "undefined";
}

function obtenerListaNumeros() {
    if (esNavegador()) {
        // Código para navegador (prompt y alert)
        let entrada = prompt("Introduce una lista de números separados por comas:");
        if (!entrada) return alert("No ingresaste una lista válida.");

        entrada = entrada.replace(/\s+/g, ""); // Eliminar espacios

        if (/[^0-9,]/.test(entrada)) {
            let caracteresInvalidos = entrada.match(/[^0-9,]/g);
            alert("Caracteres no válidos detectados: " + [...new Set(caracteresInvalidos)].join(", "));
            return;
        }

        let listaNumeros = entrada.split(",").map(Number);
        listaNumeros.sort((a, b) => a - b); // Ordenar lista para el algoritmo de dos punteros

        let sumaEntrada = prompt("Introduce la suma buscada:");
        let sumaBuscada = parseInt(sumaEntrada, 10);

        if (isNaN(sumaBuscada)) return alert("La suma introducida no es un número válido.");

        let leftIndex = 0;
        let rightIndex = listaNumeros.length - 1;
        let valorQueCumple = null;

        while (leftIndex < rightIndex) {
            let sumaActual = listaNumeros[leftIndex] + listaNumeros[rightIndex];

            if (sumaActual === sumaBuscada) {
                valorQueCumple = [listaNumeros[leftIndex], listaNumeros[rightIndex]];
                break;
            } else if (sumaActual < sumaBuscada) {
                leftIndex++;
            } else {
                rightIndex--;
            }
        }

        if (valorQueCumple) {
            alert("Pares que suman la cantidad buscada: " + valorQueCumple.join(", "));
        } else {
            alert("No se encontraron pares que sumen " + sumaBuscada);
        }
    } else {
        // Código para consola (Node.js)
        const readline = require("readline");
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question("Introduce una lista de números separados por comas: ", (entrada) => {
            entrada = entrada.replace(/\s+/g, "");

            if (/[^0-9,]/.test(entrada)) {
                let caracteresInvalidos = entrada.match(/[^0-9,]/g);
                console.log("Caracteres no válidos detectados:", [...new Set(caracteresInvalidos)].join(", "));
                rl.close();
                return;
            }

            let listaNumeros = entrada.split(",").map(Number);
            listaNumeros.sort((a, b) => a - b);

            rl.question("Introduce la suma buscada: ", (sumaEntrada) => {
                let sumaBuscada = parseInt(sumaEntrada, 10);

                if (isNaN(sumaBuscada)) {
                    console.log("La suma introducida no es un número válido.");
                    rl.close();
                    return;
                }

                let leftIndex = 0;
                let rightIndex = listaNumeros.length - 1;
                let valorQueCumple = null;

                while (leftIndex < rightIndex) {
                    let sumaActual = listaNumeros[leftIndex] + listaNumeros[rightIndex];

                    if (sumaActual === sumaBuscada) {
                        valorQueCumple = [listaNumeros[leftIndex], listaNumeros[rightIndex]];
                        break;
                    } else if (sumaActual < sumaBuscada) {
                        leftIndex++;
                    } else {
                        rightIndex--;
                    }
                }

                if (valorQueCumple) {
                    console.log("Pares que suman la cantidad buscada:", valorQueCumple);
                } else {
                    console.log("No se encontraron pares que sumen", sumaBuscada);
                }

                rl.close();
            });
        });
    }
}

// Llamar a la función
obtenerListaNumeros();
