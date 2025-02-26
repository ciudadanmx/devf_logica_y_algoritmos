function calcularComplejidad() {
    let n = parseInt(document.getElementById("n").value);
    let exponente = parseInt(document.getElementById("exponente").value);
    let resultado = "";

    if (exponente === 0) {
        resultado = "O(1) → Complejidad Constante ⚡";
    } else if (exponente === 1) {
        resultado = "O(n) → Complejidad Lineal 📈";
    } else if (exponente === 2) {
        resultado = "O(n²) → Complejidad Cuadrática 🐌";
    } else if (exponente > 2) {
        resultado = `O(n^${exponente}) → Complejidad Exponencial 🚨`;
    } else {
        resultado = "O(log n) → Complejidad Logarítmica 🔍";
    }

    document.getElementById("resultado").innerText = resultado;
}
