/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
let objeto = {
    name: "Odrium",
    cantidad: 28,
    color: "negro"
}
// 2. Accede y muestra su valor
console.log(objeto.name)
console.log(objeto["name"])
console.log(objeto.cantidad)
console.log(objeto["cantidad"])
console.log(objeto.color)
console.log(objeto["color"])
// 3. Agrega una nueva propiedad
objeto.cultivo = 28
console.log(objeto)
// 4. Elimina una de las 3 primeras propiedades
delete objeto.color
console.log(objeto)
// 5. Agrega una función e invócala

/*objeto = {
    name: "Odrium",
    cantidad: 28,
    color: "negro",
    multi: function () {
        return 2*3
        }
}*/
objeto.multi = function () {
    return 2*3
    }
console.log(objeto.multi())
// 6. Itera las propiedades del objeto
for (const key in objeto) {
    console.log(key + ": " + objeto[key])
}
// 7. Crea un objeto anidado
let objeto2 = {
    name: "Odrium",
    cantidad: 28,
    color: "negro",
    multi: function () {
        return 2*3
        },
    hobby: {
        first: "Programmar",
        second: "leer"
    }
}
// 8. Accede y muestra el valor de las propiedades anidadas
console.log(objeto2.hobby.first)
console.log(objeto2.hobby.second)
// 9. Comprueba si los dos objetos creados son iguales
console.log(objeto == objeto2)
console.log(objeto === objeto2)
// 10. Comprueba si dos propiedades diferentes son iguales
console.log(objeto.name == objeto2.hobby)
console.log(objeto.color === objeto2.cantidad)