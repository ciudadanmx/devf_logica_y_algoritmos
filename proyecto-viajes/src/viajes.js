// viajes.js

// Array para guardar los destinos
const destinos = [];

// Función para registrar un destino de viaje
const registrarDestino = (destino, fecha, transporte) => {
    const nuevoViaje = {
        destino,
        fecha,
        transporte,
        costo: calcularCosto(destino, transporte),
    };

    destinos.push(nuevoViaje);
};

// Función para calcular el costo del viaje
const calcularCosto = (destino, transporte) => {
    let costoBase = 0;

    // Costo base por destino
    const tarifasDestino = {
        Paris: 500,
        Londres: 400,
        "New York": 600,
    };

    costoBase = tarifasDestino[destino] || 300; // Si no está en la lista, costo base de 300

    // Costo adicional por tipo de transporte
    const tarifasTransporte = {
        Avión: 200,
        Tren: 100,
    };

    return costoBase + (tarifasTransporte[transporte] || 50); // Si no está en la lista, costo extra de 50
};

// Función para mostrar el itinerario de los viajes registrados
const mostrarItinerario = () => {
    destinos.forEach(({ destino, fecha, transporte, costo }) => {
        console.log(`Destino: ${destino}`);
        console.log(`Fecha: ${fecha}`);
        console.log(`Transporte: ${transporte}`);
        console.log(`Costo: $${costo}`);
        console.log("---------------------------");
    });
};

// Exportamos las funciones para usarlas en `app.js`
export { registrarDestino, mostrarItinerario };
