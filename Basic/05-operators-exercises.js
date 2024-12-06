/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let x = 1
let y = 2
let suma = x + y
let resta = x - y
let multiplicación = x * y
let división = x / y
let modulo = x % y
let exponente = x ** y
let incremento = x++
let decremento = y--
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let n =5
let sum = n += 1
let res = n -= 1
let mul = n *= 2
let div = n /= 2
let mod = n %= 5
let exp = n **= 2
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(x > y)
console.log(x >= y)
console.log(x != y)
console.log(x !== y)
console.log(x = true)
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(x < y)
console.log(x != y)
console.log(x === y)
console.log(x == "cadena")
console.log(x === "1")
// 5. Utiliza el operador lógico and
console.log(1 > 3 && 3 < 5)
// 6. Utiliza el operador lógico or
console.log(1 > 3 || 3 < 5)
// 7. Combina ambos operadores lógicos
console.log(1 > 3 || 3 < 5 && 3 < 5)
// 8. Añade alguna negación
console.log(!(1 > 2) )
// 9. Utiliza el operador ternario
const tern = false
tern ? console.log("es verdadero") : console.log("es falso")
// 10. Combina operadores aritméticos, de comparáción y lógicas
let q = 2
let w = 7
let comb = ((((q+w)**3)/12)%2) === 0
comb ? console.log("primo") : console.log("no es primo")