
const palindromo =  (cadena) => {
let sinEspacios = cadena.replace(/\s+/g, "");
    let punteroIni = 0;
    let punteroFin = cadena.length -1;
    let esNoPalindromo = true;
    

    while(punteroFin > punteroIni){
        let charIni = cadena.charAt(punteroIni);
        let charFin = cadena.charAt(punteroFin);
        if(charIni != charFin) {
            console.log(`La cadena ${cadena} NO es palíndromo`);
            return esNoPalindromo = false;            
        }
        else {
            punteroIni ++;
            punteroFin ++;
        }
        console.log(`La cadena ${cadena} SÍ es palíndromo`);
        return true;
    }

}

palindromo('sis');
