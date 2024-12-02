const texto = "Tengo 10"; // Cambia este texto para probar
const numero = "10"; // Número esperado en el texto

if (!texto.includes(numero)) {
    console.error(`¡Error! La frase no contiene el número "${numero}".`);
    process.exit(1); // Salir con un código de error
}

console.log(`La frase contiene el número "${numero}". Test exitoso.`);
