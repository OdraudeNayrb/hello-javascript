/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let pri = "Hola "
let segu = "JavaScript"
console.log(pri + segu) 
// 2. Muestra la longitud de una cadena de texto
console.log(segu.length)
// 3. Muestra el primer y último carácter de un string
console.log(segu[0])
console.log(segu[9])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(segu.toUpperCase())
console.log(segu.toLowerCase())
// 5. Crea una cadena de texto en varias líneas
let mensaje = `Esta
es una cadena
de varias lineas`
console.log(mensaje)
// 6. Interpola el valor de una variable en un string
let nombre = `Bryan`
let carrera = `Ingeniería Civil`
console.log(`Hola, mi nombre es ${nombre} estudio la carrera de ${carrera}`)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
let vacios = "Hola JavaScript, soy Bryan"
console.log(vacios)
console.log(vacios.replace(/ /g,"-")) 
//console.log(vacios.replaceAll(" ","-")) 
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(vacios.includes("JavaScript"))
// 9. Comprueba si dos strings son iguales
console.log(segu === vacios)
// 10. Comprueba si dos strings tienen la misma longitud
console.log(segu.length == vacios.length)