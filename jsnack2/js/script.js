// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
// CREAZIONE ARRAY DI NUMERI;
const intArray = [1,1,2,3,5,8,13,21,34,55,89];
// SOMMA ELEMENTI ARRAY IN POSIZIONE DISPARI
let sum = 0;
for(let i = 1;i<intArray.length;i+=2) {
    // if(i%2 != 0) {
    // }
    sum += intArray[i];
}
console.log(sum);