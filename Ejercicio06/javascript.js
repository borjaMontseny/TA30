var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',  'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']

var codigoDNI = prompt("Introduce el número de tu DNI:");

parseInt(codigoDNI);

var posicionArray = codigoDNI % 23;

alert("Tu DNI es al completo es: " + codigoDNI + letras[posicionArray]);