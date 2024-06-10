//Declaro una variable para almacenar una temperatura en grados Celsius
let temperatura_celsius = 30;

//Calculo la temperatura en grados Fahrenheit usando la fórmula F = C * 1.8 + 32
temperatura_fahrenheit = temperatura_celsius * 1.8 + 32;

//Determinamos si la temperatura en Fahrenheit es alta, baja o moderada
if (temperatura_fahrenheit > 85) {
    estado = "alta";
} else if (temperatura_fahrenheit < 32) {
    estado = "baja";
} else {
    estado = "moderada";
}

//Muestro el resultado en la consola
console.log(`La temperatura en grados Fahrenheit es ${temperatura_fahrenheit.toFixed(2)}°F, y es considerada ${estado}.`);