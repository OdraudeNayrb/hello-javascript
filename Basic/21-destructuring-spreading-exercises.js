/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let array = [1,2,3]
let [arr1,arr2] = array
console.log(arr1)
console.log(arr2)
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [arr3,arr4,arr5,arr6 = 0] = array
console.log(arr3)
console.log(arr4)
console.log(arr5)
console.log(arr6)
// 3. Usa desestructuración para extraer dos propiedades de un objeto
let objeto = {
    name: "Odrium",
    cantidad: 28,
    color: "negro"
}
let {name,cantidad,color} = objeto
console.log(color)
console.log(cantidad)
console.log(name)
// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let {name:nombre,cantidad:numero,color:vista} = objeto
console.log(nombre)
console.log(numero)
// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let objeto2 = {
    nam: "Odrium",
    can: 28,
    col: "negro",
    multi: function () {
        return 2*3
        },
    hobby: {
        first: "Programmar",
        second: "leer"
    }
}
let {nam,can,col,multi,hobby:{first,second}} = objeto2
console.log(first)
console.log(second)
// 6. Usa propagación para combinar dos arrays en uno nuevo
let arr1d = [45, 87, 2, -33, 90, 56, 3, -78]
let arr2d = [14, 11, 39, 65, 81, 22, 47, 73, 29, 88, 50, 6]
let arrsp = [...arr1d,...arr2d]
console.log(arrsp)
// 7. Usa propagación para crear una copia de un array
let arrspc = [...arr1d]
console.log(arrspc)
// 8. Usa propagación para combinar dos objetos en uno nuevo
let persona = {
    nombre: "Carlos",
    edad: 30,
    ocupacion: "Ingeniero",
    habilidades: ["programación", "diseño", "análisis"],
    saludar: function() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
    }
};
let vehiculo = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    color: "Blanco",
    encender: function() {
        return "El vehículo está encendido.";
    },
    detalles: {
        combustible: "Gasolina",
        transmision: "Automática"
    }
};
let combinacion = {...persona,...vehiculo}
console.log(combinacion)
// 9. Usa propagación para crear una copia de un objeto
let personaCopia = {...persona}
console.log(personaCopia)
// 10. Combina desestructuración y propagación
let combinacionDesestru = {...objeto,...persona}
let {name:nom,cantidad:numera,color:visua,edad,ocupacion,habilidades:[hab1,hab2,hab3],} = combinacionDesestru
console.log(hab1)