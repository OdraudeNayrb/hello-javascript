/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Bryan"
if (nombre == "Bryan") {
    console.log(nombre)
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "Odraude"
let pasword = 123456789
if (user === "Odraude" && pasword === 123456789) {
    console.log("¡Bienvenido!")
} else {
    console.log("Usuario o Contraseña incorrecto")
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let num = 12
if (num > 0){
    console.log("Número positivo")
} else if (num < 0) {
    console.log("Número negativo")
}else {
    console.log("Cero")
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 22
if (edad >= 18) {
    console.log("Puedes votar")
} else {
    console.log("te faltan " + (18 - edad) + " años para votar")
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
const dif = edad < 18 ? "menor" : "adulto"
console.log(dif)
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 43
if (mes === 0) {
    console.log("Enero")
} else if (mes === 1) {
    console.log("Febrero")
} else if (mes === 2) {
    console.log("Marzo")
} else if (mes === 3) {
    console.log("Abril")
} else if (mes === 4) {
    console.log("Mayo")
} else if (mes === 5) {
    console.log("Junio")
} else if (mes === 6) {
    console.log("Julio")
} else if (mes === 7) {
    console.log("Agosto")
} else if (mes === 8) {
    console.log("Septiembre")
} else if (mes === 9) {
    console.log("Ovtubre")
} else if (mes === 10) {
    console.log("Noviembre")        
} else if (mes === 11) {
    console.log("Diciembre")
} else {
    console.log("no existe ese mes")
}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes === 0) {
    console.log("31 dias")
} else if (mes === 1) {
    console.log("28 dias")
} else if (mes === 2) {
    console.log("31 dias")
} else if (mes === 3) {
    console.log("30 dias")
} else if (mes === 4) {
    console.log("31 dias")
} else if (mes === 5) {
    console.log("30 dias")
} else if (mes === 6) {
    console.log("31 dias")
} else if (mes === 7) {
    console.log("31 dias")
} else if (mes === 8) {
    console.log("30 dias")
} else if (mes === 9) {
    console.log("31 dias")
} else if (mes === 10) {
    console.log("30 dias")        
} else if (mes === 11) {
    console.log("31 dias")
} else {
    console.log("no existe ese mes")
}
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let lan = "español"
switch (lan) {
    case "español":
        console.log("Hola")
        break
    case "english":
        console.log("Hello")
        break
    case "português": 
        console.log("Olá")
        break
}
// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch (mes) {
    case 0:
        console.log("Enero")
        break;
    case 1:
        console.log("Febrero")
        break;
    case 2:
        console.log("Marzo")
        break;
    case 3:
        console.log("Abril")
        break;
    case 4:
        console.log("Mayo")
        break;
    case 5:
        console.log("Junio")
        break;
    case 6:
        console.log("Julio")
        break;
    case 7:
        console.log("Agosto")
        break;
    case 8:
        console.log("Septiembre")
        break;
    case 9:
        console.log("Octubre")
        break;
    case 10:
        console.log("Noviembre")
        break;
    case 11:
        console.log("Diciembre")
        break;
    default:
        console.log("no existe ese mes")
}
// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes) {
    case 0:
        console.log("31 dias")
        break;
    case 1:
        console.log("28 dias")
        break;
    case 2:
        console.log("31 dias")
        break;
    case 3:
        console.log("30 dias")
        break;
    case 4:
        console.log("31 dias")
        break;
    case 5:
        console.log("30 dias")
        break;
    case 6:
        console.log("31 dias")
        break;
    case 7:
        console.log("31 dias")
        break;
    case 8:
        console.log("30 dias")
        break;
    case 9:
        console.log("31 dias")
        break;
    case 10:
        console.log("30 dias")
        break;
    case 11:
        console.log("31 dias")
        break;
    default:
        console.log("no existe ese mes")
}