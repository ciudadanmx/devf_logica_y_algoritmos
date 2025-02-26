// 1. Calificaciones aprobatorias:
//Crea un arreglo llamado calificaciones con las siguientes calificaciones: [60, 85, 92, 48, 75, 50, 98].
//Usa el método filter() para crear un nuevo arreglo llamado aprobados que contenga solo las calificaciones mayores o iguales a 70.


let calificaciones = [60, 85, 92, 48, 75, 50, 98];

let aprobados = calificaciones.map(()=>{calificaciones.filter(calificacion >= 70)});

console.log(`Los alumnos que pasaron fueron: ${aprobados}`);

