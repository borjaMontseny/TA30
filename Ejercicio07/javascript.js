let dato = prompt("Escribe un número y le hacemos el factorial:");
parseInt(dato);

let r = 1;

var valores = "";

for (let i = dato; i > 0; i--) {
    r *= i;
    if (i != 1) {
        valores += i + " * ";
    } else {
        valores += i;
    }

}

console.log(valores + " = " + r);