// Declaramos tres variables numéricas
let a = 5;
let b = 10;
let c = 3;

// Realizamos y guardar el resultado de las operaciones de suma, resta y multiplicación
let suma = a + b + c;
let resta = a - b - c;
let multiplicacion = a * b * c;

// Usamos una sentencia if para determinar el mayor de los tres resultados
let mayorResultado;

if (suma > resta && suma > multiplicacion) {
    mayorResultado = suma;
} else if (resta > suma && resta > multiplicacion) {
    mayorResultado = resta;
} else {
    mayorResultado = multiplicacion;
}

// Muestro el mayor resultado en la consola
console.log(`El mayor resultado es: ${mayorResultado}`);
