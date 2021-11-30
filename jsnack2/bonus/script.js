function createDiv() {
    return document.createElement('div');
}
function createButton() {
    return document.createElement('button');
}
function createSpan() {
    return document.createElement('span');
}

const intArray = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
const container = document.querySelector('.container');
const title = document.createElement('h1');
let main_div = createDiv();
let sum = 0;
title.innerHTML = 'Jsnack2 - Somma indici dispari'
container.prepend(title);
container.append(main_div);
for (let i = 0; i < intArray.length; i += 1) {
    const div = createDiv();
    const span = createSpan();
    //CALCOLO SOMMA
    if( i % 2 != 0){ //indice posizione dispari
        sum += intArray[i];
        span.innerHTML = `<strong>elemento posizione ${i}: ${intArray[i]}</strong>`;
    } else {
        span.innerHTML = `elemento posizione ${i}: ${intArray[i]}`;
    }
    // FINE CALCOLO SOMMA
    div.append(span);
    main_div.append(div);
}
// for (let i = 1; i < intArray.length; i += 2) {
//     const div = createDiv();
//     const span = createSpan();
//     span.innerHTML = `elemento posizione ${i}: ${intArray[i]}`;
//     div.append(span);
//     main_div.append(div);
//     //calcolo somma
//     sum += intArray[i];
// }