/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function sumar(a,b) {
    console.log(a+b)
}
sumar(1,2)
const fs1 = (a,b) => console.log(a+b)
fs1(1,5)
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let armix = [45, 87, 2, -33, 90, 56, 3, -78, 14, 11, 39, 65, 81, 22, 47, 73, 29, 88, 50, 6]
function mayf2(arr) {
    let may = arr[0]
    for (let i = 0; i < arr.length -1; i++) {
        if (arr[i] > may) {
            may = arr[i]
        }
    }
    console.log(may)
}
mayf2(armix)
const mayorFlecha2 = (arr) => {
    let may = arr[0]
    for (let i = 0; i < arr.length -1; i++) {
        if (arr[i] > may) {
            may = arr[i]
        }
    }
    console.log(may)
} 
mayorFlecha2(armix)
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let numString = "¡Hola, JavaScript!"
function numStr(string) {
    let vocales = ["a","e","i","o","u"]
    let numVocales = 0
    for (let i = 0; i < string.length; i++) {
        if (vocales.includes(string[i])) {
            numVocales++
        }
    }
    console.log(numVocales)
}
numStr(numString)
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let frutas = ["manzana", "banana", "cereza", "durazno", "uva", "kiwi", "limón", "mango", "naranja", "pera"]
function mayúsculas(arr) {
    let strMayuscula = []
    for (let value of arr) {
        strMayuscula.push(value.toUpperCase())
    }
    return strMayuscula
}
console.log(mayúsculas(frutas))
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
let numeroPrimo = 1
function primo(num) {
    if (num < 2) {
        return false
    }
    for (let i = 2; i < num -1; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
console.log(primo(numeroPrimo))

let prim = (num) => {return num % 2 === 0}
console.log(prim(numeroPrimo))
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
let array1 = ["manzana", "pera", "uva", "durazno", "cereza"];
let array2 = ["mango", "durazno", "cereza", "banana", "kiwi"];
function similares(arr1,arr2) {
    let sim = []
    for (const value1 of arr1) {
        for (const value2 of arr2) {
            if (value1 === value2) {
                sim.push(value1)
            }
        }
    }
    return sim
}
console.log(similares(array1,array2))
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumaPares(arr) {
    let pares = 0
    for (let value of arr) {
        if (value % 2 === 0) {
            pares += value
        }
    }
    return pares
}
console.log(sumaPares(armix))
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function exponencial(arr) {
    let exponenciados = []
    for (let value of arr) {
        exponenciados.push(value**2)
    }
    return exponenciados
}
console.log(exponencial(armix))
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
let parrafo = "El sol brilla intensamente sobre las montañas, y el viento sopla suavemente entre los árboles."
function inversionPalabras(cadena) {
    let invertidoParrafo = ""
    let palabra = ""
    for (let i = cadena.length - 1; i >= 0; i--) {
        if (cadena[i] !== " ") {
            invertidoParrafo = cadena[i] + invertidoParrafo
        } else {
            palabra = palabra + " " + invertidoParrafo
            invertidoParrafo = ""
        }
    }
    palabra = palabra + " " + invertidoParrafo
    return palabra
}
console.log(inversionPalabras(parrafo))
// 10. Crea una función que calcule el factorial de un número dado
let numAFac = 5
function factorial(num) {
    let calculate = 1
    for (let i = 1; i <= num; i++) {
        calculate *= i
    }
    return calculate
}
console.log(factorial(numAFac))