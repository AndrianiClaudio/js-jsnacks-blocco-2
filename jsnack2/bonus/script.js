function createDiv() {
    return document.createElement('div');
}
function createButton() {
    return document.createElement('button');
}
function createSpan() {
    return document.createElement('span');
}
function printArray (array) {
    const main_div = createDiv();
    for (let i = 0; i < intArray.length; i += 1) {
        const div = createDiv();
        const span = createSpan();
        if (i % 2 != 0) { //indice posizione dispari
            span.innerHTML = `<strong>elemento posizione ${i}: ${intArray[i]}</strong>`;
        } else {
            span.innerHTML = `elemento posizione ${i}: ${intArray[i]}`;
        }
        div.append(span);
        main_div.append(div);
    }
    return main_div;
}
function sumOddCalc(array) {
    let sum = 0;
    for (let i = 1; i < array.length; i+=2) {
        sum += array[i];
    }
    return sum;
}
function sumEvenCalc(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i+=2) {
        sum += array[i];
    }
    return sum;
}

function printSum(sumEven,sumOdd) {
    
    let sum_div = createDiv();
    sum_div.style.border = '2px solid blue';
    let sum_span = createSpan();
    sum_span.innerHTML = `
    <strong>
        La somma degli elementi (posizione in array dispari) é pari a: ${sumOdd}
    </strong><br>
        La somma degli elementi (posizione in array pari) é pari a: ${sumEven}
    </strong><br>
    `;
    const btn = createButton();
    btn.innerHTML = 'Aggiungi elemento successivo';
    sum_div.append(sum_span);
    sum_div.append(btn);
    btn.addEventListener('click', function () {
        //rimuovi vecchio elenco
        container.removeChild(main_div);
        sum_span.innerHTML = '';
        //somma ultimo con penultimo
        intArray.push(intArray[intArray.length - 2] + intArray[intArray.length - 1]);
        //genero nuovo elenco
        main_div = printArray(intArray);
        let sumOdd = sumOddCalc(intArray);
        let sumEven = sumEvenCalc(intArray);
        sum_span.innerHTML = `
        <strong>
            La somma degli elementi (posizione in array dispari) é pari a: ${sumOdd}
        </strong><br>
            La somma degli elementi (posizione in array pari) é pari a: ${sumEven}
        </strong><br>
        `;
        container.insertBefore(main_div,sum_div);
    });
    return sum_div;
}

const intArray = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
const container = document.querySelector('.container');
const title = document.createElement('h1');
title.innerHTML = 'Jsnack2 - Somma indici dispari'
container.prepend(title);
let main_div = printArray (intArray);
container.append(main_div);

let sumOdd = sumOddCalc(intArray);
let sumEven = sumEvenCalc(intArray);
sum_div = printSum(sumEven,sumOdd);

container.append(sum_div);