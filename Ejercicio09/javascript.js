var fraseUsuario = prompt("Introduce una frase o palabra");

// tiene mayusculas
if (fraseUsuario == fraseUsuario.toUpperCase()) {
    alert("Tu sentencia tiene mayúsculas");
}

// tiene minusculas
else if (fraseUsuario == fraseUsuario.toLowerCase()) {
    alert("Tu sentencia tiene minúsculas");
}

// tiene mayus y minus
else {
    alert("Tu sentencia tiene mayúsculas y minúsculas");
}

