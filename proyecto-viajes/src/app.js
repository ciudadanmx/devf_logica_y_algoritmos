// app.js
import { registrarDestino, mostrarItinerario } from "./viajes.js";

// Función para iniciar la aplicación
const iniciarApp = () => {
    registrarDestino("Paris", "2024-06-15", "Avión");
    registrarDestino("Londres", "2024-07-01", "Tren");
    registrarDestino("Madrid", "2024-08-10", "Bus"); // Nuevo destino

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
};

// Exportamos la función para ejecutarla en `index.js`
export { iniciarApp };
