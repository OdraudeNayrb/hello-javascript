/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
    //este es un comentario
// 2. Escribe un comentario en varias líneas
    /* este es
    un comentario
    de varias lineas */
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let entero = 2
let cadena = "Esto es un string"
let booleano = true
let undefinedValue
let nullValue = null
let mySymbol = Symbol("un simbolo")
let granEntero = BigInt(1241241786984621986471645136546125461)
let granEntero2 = 12312536876281273612831231231n
// 4. Imprime por consola el valor de todas las variables
console.log(entero)
console.log(cadena)
console.log(booleano)
console.log(undefinedValue)
console.log(nullValue)
console.log(mySymbol)
console.log(granEntero)
console.log(granEntero2)
// 5. Imprime por consola el tipo de todas las variables
console.log(typeof entero)
console.log(typeof cadena)
console.log(typeof booleano)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof mySymbol)
console.log(typeof granEntero)
console.log(typeof granEntero2)
// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
entero = 10
cadena = "Esto es otro string"
booleano = false
undefinedValue
nullValue = null
mySymbol = Symbol("otro simbolo")
granEntero = BigInt(7545324245245246871645136546125461)
granEntero2 = 4231145668785412831231231n
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
entero = "ahora cadena"
cadena = 4
booleano = 1.2
undefinedValue = "string"
nullValue = 3.4
mySymbol = "otro simbolo"
granEntero = 12
granEntero2 = null
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const enteroConst = 10
const cadenaConst = "Esto es otro string"
const booleanoConst = false
const undefinedValueConst 
const nullValueConst = null
const Symbol = Symbol("simbolo")
const granEnteroConstante = BigInt(7545324245245246871645136546125461)
const granEnteroConstante2 = 4231145668785412831231231n
// 9. A continuación, modifica los valores de las constantes
const enteroConst = 1
const cadenaConst = "Este string no puede cambiarse"
const booleanoConst = true
const undefinedValue
const nullValueConst = null
const Symbol = Symbol("simbolo")
const granEnteroConstante = BigInt(75453242452452468716451365461128641)
const granEnteroConstante2 = 127545324245245246871645136546125461n
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
//const undefinedValueConst 
//const nullValueConst
//const Symbol = Symbol("simbolo")
//const enteroConst = 1
//const cadenaConst = "Este string no puede cambiarse"
//const booleanoConst = true
//const undefinedValueConst 
//const nullValueConst
//const Symbol = Symbol("simbolo")
//const granEnteroConstante = BigInt(75453242452452468716451365461128641)
//const granEnteroConstante2 = 127545324245245246871645136546125461n