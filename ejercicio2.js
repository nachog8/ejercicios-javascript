// Declaro variables para el peso (en kilogramos) y la altura (en metros) de una persona
let peso = 70; // Puedes cambiar este valor para probar con diferentes pesos
let altura = 1.75; // Puedes cambiar este valor para probar con diferentes alturas

// Calculamos el IMC usando la fórmula IMC = peso / (altura ^ 2)
let imc = peso / (altura * altura);

// Usamos una sentencia if para clasificar el IMC
let clasificacion;
if (imc < 18.5) {
    clasificacion = "bajo peso";
} else if (imc >= 18.5 && imc <= 24.9) {
    clasificacion = "normal";
} else if (imc >= 25 && imc <= 29.9) {
    clasificacion = "sobrepeso";
} else {
    clasificacion = "obesidad";
}

// Muestro el resultado en la consola
console.log(`El IMC es ${imc.toFixed(2)} y se clasifica como ${clasificacion}.`);
