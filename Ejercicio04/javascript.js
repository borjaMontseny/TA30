var valores = [true, 5, false, "hola", "adios", 2];

function compararPalabras(palabra1, palabra2) {
    if (palabra1.length > palabra2.length) {
        console.log(palabra1 + " es mayor que " + palabra2);
    } else {
        console.log(palabra1 + " es menor que " + palabra2);
    }
}

compararPalabras(valores[3], valores[4]);

function booleanito(boolTrue, boolFalse) {
    if (valores[1] == valores[5]) {
        console.log(boolTrue);
    } else if (valores[1] != valores[5]) {
        console.log(boolFalse);
    }
}

booleanito(valores[0], valores[2]);

function calculos(valorA, valorB) {
    var resultadoSuma = valorA + valorB;
    console.log("Resultado de la suma = " + resultadoSuma);

    var resultadoResta = valorA - valorB;
    console.log("Resultado de la resta = " + resultadoResta);

    var resultadoMulti = valorA * valorB;
    console.log("Resultado de la multiplicación = " + resultadoMulti);

    var resultadoDivi = valorA / valorB;
    console.log("Resultado de la división = " + resultadoDivi);

    var resultadoModulo = valorA % valorB;
    console.log("Resultado del módulo = " + resultadoModulo);
}

calculos(valores[1], valores[5]);