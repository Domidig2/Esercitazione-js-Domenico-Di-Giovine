let primo = 10;
let secondo = 15;
let terzo = 30;
let quarto = 50;
let quinto = 6;

let somma = primo + secondo +terzo + quarto + quinto;


let media =somma / 5;


console.log(`la somma dei numeri equivale a  ${somma} e la loro media è ${media}`)


// ESERCIO 2

let a = 2002;
let b =2024;

let eta = b - a;
console.log(eta)
let cento = 100- eta;
console.log(cento)
console.log(`Hai ${eta} e ti mancano ${cento} per arriavre a cento`)


// ESERCIZIO 3
let gatti = 44;
let xfila = 6;

let file = Math.trunc(gatti / xfila );
console.log(`Ci sono  ${file} file di gatti` )

let resto = gatti % xfila;
console.log(`Il resto è ${resto}`)

let serventi =xfila -resto;
console.log(`servono ${serventi} per completare una fila`)
console.log(`Ci sono ${file} ne rimangono ${resto} e per creare una nuova fila ne servono ${serventi}`)