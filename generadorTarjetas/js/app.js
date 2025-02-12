//se crea la clase
class Persona {
    constructor(nombre, puesto, empresa, email, telefono) {
        this.nombre = nombre;
        this.puesto = puesto;
        this.empresa = empresa;
        this.email = email;
        this.telefono = telefono;
    }
}

//se crea cada uno de los objetos Persona con sus datos
let ChunLi = new Persona('ChunLi', 'CTO', 'DeepSeek', 'chun@li.chi', '0000000000');
let Sam = new Persona('Sam ControlMan', 'CEO', 'OpenAI', 'sam@ctrl.com', '1122334455');
let Satia = new Persona('Satia Nomas', 'Sustituto de Bill', 'MicroShit', 'satia@micro.com', '6666666666');

//arreglo con los 3 objetos Persona
let contactos = [ChunLi, Sam, Satia];

//función flecha que genera las tarjetas
let generarTarjeta = (contacto) => {
    let datos = [
        contacto.nombre,
        contacto.puesto,
        contacto.empresa,
        contacto.email,
        contacto.telefono
    ];

    //para que se centre definimos un ancho fijo de línea de 28 caracteres
    let anchoLinea = 28;
    //el borde son los asteriscos, tiene 1 al inicio y 1 al final extras a los 28 por los asteriscos iniciales y finales de cada línea
    let borde = "*".repeat(anchoLinea + 2);
    
    //borde de arriba de la tarjeta
    console.log(borde);

    //bucle que itera en cada uno de los datos para centrar la línea y mnostrarla en consola
    datos.forEach(linea => {
        let totalEspacios = anchoLinea - linea.length;
        //calcula la mitad y la mitad con sobrante para distribuir espacios al inicio y final de la línea y centrar
        let espaciosStart = " ".repeat(Math.floor(totalEspacios / 2)); 
        let espaciosEnd = " ".repeat(Math.ceil(totalEspacios / 2));
        //en mis tiempos así centrábamos los títulos en la máquina de escribir lol
        //muestra en consola cada línea de la respectiva tarjeta
        console.log(`*${espaciosStart}${linea}${espaciosEnd}*`);
    });

    //borde de abajo de la tarjeta
    console.log(borde);
    console.log('');
};
//fin de la función

//bucle que itera cada objeto persona del arreglo contactos y ejecuta la función generarTarjeta en c/u
contactos.forEach(generarTarjeta);
