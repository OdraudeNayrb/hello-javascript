/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
class humano {
    constructor(nombre,apellido) {
      this.nombre = nombre
      this.apellido = apellido
    }
}
let person = new humano("Bryan","Medina")
// 2. Añade un método a la clase que utilice las propiedades
class human {
    constructor(nombre,apellido) {
      this.nombre = nombre
      this.apellido = apellido
    }

    desplegar() {
        console.log(this.nombre + " " + this.apellido)
    }
}
let person1 = new human("Bryan","Medina")
// 3. Muestra los valores de las propiedades e invoca a la función
console.log(person)
person1.desplegar()
// 4. Añade un método estático a la primera clase
class serViviente {
    constructor(nombre,apellido) {
      this.nombre = nombre
      this.apellido = apellido
    }
    
    static completo(nombre,apellido) {
        console.log(nombre + " " + apellido)
    }

    walk() {
        console.log("caminando")
    }
}
// 5. Haz uso del método estático
serViviente.completo("Bryan","Medina")
// 6. Crea una clase que haga uso de herencia
class elfo extends serViviente {
    vida() {
        console.log("tiene una esperanza de vida de 1000 años")
    }
}
let bosque = new elfo("elfo","mayor")
console.log(bosque)
elfo.completo("elfo","mayor")
bosque.vida()
// 7. Crea una clase que haga uso de getters y setters
class vida {
    #name
    #birth  
    constructor(name,birth,bank){
        this.#name = name
        this.#birth = birth
    } 

    get name() {
        return this.#name
    }

    set birth(birth) {
        this.#birth = birth
    }
}
// 8. Modifica la clase con getters y setters para que use propiedades privadas
let character = new vida("Odrium",21,"841241241")
// 9. Utiliza los get y set y muestra sus valores
console.log(character)
console.log(character.name)
character.birth = 22
// 10. Sobrescribe un método de una clase que utilice herencia 
class enano extends serViviente{
    walk(){
        console.log("sus pasos son cortos")
    }
}
let montañas = new enano("enano","herreeo")
montañas.walk()