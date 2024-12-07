/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let animals = ["perro","gato","conejo","loro"]
console.log(animals)
// 2. Añade dos más. Uno al principio y otro al final
animals.unshift("león")
animals.push("lobo")
console.log(animals)
// 3. Elimina el que se encuentra en tercera posición
animals.splice(2,1)
console.log(animals)
// 4. Crea un set que almacene cinco libros
let varSet = new Set(["Cien años de soledad","El Alquimista", "Orgullo y prejuicio","Sapiens:De animales a dioses","El nombre del viento"])
console.log(varSet)
// 5. Añade dos más. Uno de ellos repetido
varSet.add("los pilares de la tierra" , "Cien años de soledad")
console.log(varSet)
// 6. Elimina uno concreto a tu elección
varSet.delete("El Alquimista")
console.log(varSet)
// 7. Crea un mapa que asocie el número del mes a su nombre
let Mape = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])
console.log(Mape)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (Mape.has(5)) {
    console.log("El mes número 5 existe y es el " + Mape.get(5))
} else {
    console.log("El mes número 5 no existe")
}
// 9. Añade al mapa una clave con un array que almacene los meses de verano
let mVerano = ["Diciembre", "Enero", "Febrero"]
Mape.set("Meses de Verano", mVerano)
console.log(Mape)
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let Transform = [1,2,3,4,5,6,7,8,9]
let TransformSet = new Set(Transform)
let TransformMap = new Map([["arr",TransformSet]])
console.log(TransformMap)