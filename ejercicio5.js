// Declaro una variable para el precio inicial del producto
let precioInicial = 120; // Puedes cambiar este valor para probar con diferentes precios

// Variable para almacenar el descuento
let descuento;

// Usamos sentencias if para determinar el descuento
if (precioInicial > 100) {
    descuento = 0.10; // 10% de descuento
} else if (precioInicial >= 50 && precioInicial <= 100) {
    descuento = 0.05; // 5% de descuento
} else {
    descuento = 0.00; // Sin descuento
}

// Calculamos el precio final
let precioFinal = precioInicial * (1 - descuento);

// Muestro el resultado en la consola
console.log(`El precio inicial es $${precioInicial.toFixed(2)}.`);
console.log(`Se aplicó un descuento del ${(descuento * 100).toFixed(0)}%.`);
console.log(`El precio final es $${precioFinal.toFixed(2)}.`);
