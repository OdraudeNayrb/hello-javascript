// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i < 21; i++){
    console.log(i)  
}
let i = 1
while (i < 21) {
    console.log(i)
    i++
}

do {
    console.log(i)
    i++
} while (i < 21);

let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
for (let value of num) {
    console.log(value)    
}
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let sumf2 = 0
for (let if2 = 1; if2 <= 100; if2++) {
    sumf2 += if2
}
console.log(sumf2)
let iw2 = 0
let sumw2 = 0
while (iw2 < 100 /*|| iw2 <= 100*/) {
    iw2++
    sumw2 += iw2
    //iw2++
}
console.log(sumw2)
let idw = 0
let sumdw = 0
do {
    idw++
    sumdw += idw
} while (idw < 100);
console.log(sumdw)
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
let sumfo = 0
for (let value of list) {
    sumfo += value 
}
console.log(sumfo)
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let if3 = 1; if3 < 51; if3++) {
    if (if3 % 2 !== 0) {
        continue
    }
    console.log(if3)
}
let iw3 = 0
while (iw3 < 51) {
    iw3++    
    if (iw3 % 2 !== 0) {
        continue
    }
    console.log(iw3)
    }
let idw3 = 0
do {
    idw3++
    if (idw3 % 2 !== 0) {
        continue
    }
    console.log(idw3)
} while (idw3 < 51);
let listfo3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
for (let value of listfo3) {
    if (value % 2 !== 0) {
        continue
    }
    console.log(value)
}
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ["Alejandro", "Beatriz", "Carlos", "Diana", "Eduardo", "Fernanda", "Gabriel", "Hugo", "Isabel", "Javier"]
for (let if4 = 0; if4 < nombres.length; if4++) {
    console.log(nombres[if4])
}
let iw4 = 0
while (iw4 < nombres.length) {
    console.log(nombres[iw4])
    iw4++
}
let idw4 = 0
do {
    console.log(nombres[idw4])
    idw4++
} while (idw4 < nombres.length);
 for (let value of nombres) {
    console.log(value)
 }
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let vocales = ["a","e","i","o","u"]
let string5 = "Hola, JavaScript".toLowerCase()
let numstr = 0
for (let i = 0; i < string5.length; i++) {
    if (vocales.includes(string5[i])) {
        numstr += 1
    } else {
        continue
    }
}
console.log(numstr)
let iw5 = 0
while (iw5 < string5.length) {
    if (vocales.includes(string5[iw5])) {
        numstr += 1
    }
    iw5++
}
console.log(numstr)
let idw5 = 0
do {
    if (vocales.includes(string5[idw5])) {
        numstr += 1
    }
    idw5++
} while (idw5 < string5.length);
console.log(numstr)
for (let value of string5) {
    if (vocales.includes(value)) {
        numstr += 1
    }
}
console.log(numstr)
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let arrnum = [45, 12, 87, 64, 29]
let mul = 1
for (let i = 0; i < arrnum.length; i++) {
    mul *= arrnum[i]
}
console.log(mul)
let iw6 = 0
while (iw6 < arrnum.length) {
    mul *= arrnum[iw6]
    iw6++
}
console.log(mul)
let idw6 = 0
do {
    mul *= arrnum[idw6]
    idw6++
} while (idw6 < arrnum.length);
console.log(mul)
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let i = 1; i < 13; i++) {
    let tabla5 = i * 5
    console.log(tabla5)
}
let iw7 = 1
while (iw7 < 13) {
    let tabla5 = iw7 * 5
    console.log(tabla5)
    iw7++
}
let idw7 = 1
do {
    let tabla5 = idw7 * 5
    console.log(tabla5)
    idw7++
} while (idw7 < 13);
 let xnum = [1,2,3,4,5,6,7,8,9,10,11,12]
 for (const value of xnum) {
    let tabla5 = value * 5
    console.log(tabla5)
 }
// 8. Usa un bucle para invertir una cadena de texto
let strainv = "¡Hola, JavaScript!"
let invstr = ""
for (let if8 = strainv.length -1; if8 >= 0; if8--) {
    invstr += strainv[if8]
}
console.log(invstr)
let iw8 = strainv.length -1
while (iw8 >= 0) {
    invstr += strainv[iw8]
    iw8--
}
console.log(invstr)
let idw8 = strainv.length -1
do {
    invstr += strainv[idw8]
    idw8--
} while (idw8 >= 0);
console.log(invstr)
for (let value of strainv) {
    invstr = value + invstr
}
console.log(invstr)
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let a = 0
let b = 1
console.log(a)
console.log(b)
let fibo = 0
for (let i = 0; i < 8; i++) {
        fibo = a + b
        console.log(fibo)
        a = b
        b = fibo
}
let iw9 = 0
while (iw9 < 8) {
    fibo = a + b
        console.log(fibo)
        a = b
        b = fibo
        iw9++
}
let idw9 = 0
do {
    fibo = a + b
        console.log(fibo)
        a = b
        b = fibo
        idw9++
} while (idw9 < 8);
let rep = [0, 1]
for (const value of rep) {
    if (rep.length < 10) {
        fibo = rep[rep.length -2] + rep[rep.length - 1]
        rep.push(fibo)
    }
}
console.log(rep)
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let armix = [45, 87, 2, -33, 90, 56, 3, -78, 14, 11, 39, 65, 81, 22, 47, 73, 29, 88, 50, 6]
let arpt = []
for (let if10 = 0; if10 < armix.length; if10++) {
    if (armix[if10] > 10) {
        arpt.push(armix[if10])
    }
}
console.log(arpt)
let iw10 = 0
while (iw10 < armix.length) {
    if (armix[iw10] > 10) {
        arpt.push(armix[iw10])
    }
    iw10++
}
console.log(arpt)
let idw10 = 0
do {
    if (armix[idw10] > 10) {
        arpt.push(armix[idw10])
    }
    idw10++
} while (idw10 < armix.length);
console.log(arpt)
for (const value of armix) {
    if (value > 10) {
        arpt.push(value)
    }
}
console.log(arpt)