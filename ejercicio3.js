// Declaro una variable para un número entero
let numero = 29; // Puedes cambiar este valor para probar otros números

// Función para determinar si un número es primo
function esPrimo(num) {
    // Los números menores o iguales a 1 no son primos
    if (num <= 1) {
        return false;
    }
    // 2 y 3 son números primos
    if (num <= 3) {
        return true;
    }
    // Si el número es divisible por 2 o 3, no es primo
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    // Usamos un bucle para probar la divisibilidad de num por números impares hasta la raíz cuadrada de num
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

// Determino si el número es primo
let resultado = esPrimo(numero);

// Muestro el resultado en la consola
if (resultado) {
    console.log(`${numero} es un número primo.`);
} else {
    console.log(`${numero} no es un número primo.`);
}
