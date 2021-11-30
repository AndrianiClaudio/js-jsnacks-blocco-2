//CODICE PAGINA NON BONUS
//Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.
//PRENDO UNA LISTA DI NOMI
const my_firstNames = ['Claudio', 'Giuseppe', 'Francesca', 'Chiara', 'Elisabetta', 'Thomas', 'Gianfranco', 'Bogdan'];
//PRENDO UNA LISTA DI COGNOMI
const my_surnames = ['Andriani', 'Pater', 'Gatti', 'Passaro', 'Daho', 'De Luca', 'Zola', 'Marian'];

function createButton () {
    return document.createElement('button');
}
function createDiv () {
    return document.createElement('div');
}
function createSpan () {
    return document.createElement('span');
}
//dati nome e cognomi, ottieni nome completo
function getFullNames(firstNames,surnames) {
    const fullnames = [];
    for (let i = 0; i < firstNames.length; i++) {
        fullnames[i] = firstNames[i] + ' ' + surnames[i];
    }
    return fullnames;
}
//data lista di nomi e cognomi, stampa invitati
function stampaLista (names_and_surnames) {
    for (let i = 0; i < names_and_surnames.length; i++) {
        const div = createDiv();
        const span = createSpan();
        div.append(span);
        container.append(div);
        span.append(`Invitato #${i + 1}: ${names_and_surnames[i]}`);
    }
}
const container = document.querySelector('.container');
const title = document.createElement('h1');
title.innerHTML = 'Ecco la tua lista di invitati completa.';
container.prepend(title);
//creo bottone
// for (let i = 0; i < firstName.length; i++) {
//     const div = createDiv();
//     const span = createSpan();
//     div.append(span);
//     container.append(div);
//     span.append(`Invitato #${i + 1}: ${fullname[i]}`);
// }
    
//ottengo cognomi 
const my_fullnames = getFullNames(my_firstNames,my_surnames);
//stampo lista
stampaLista(my_fullnames);
const btn = createButton();
btn.innerHTML = 'vuoi inserire un nuovo nome ed un nuovo cognome?'
container.append(btn);
btn.addEventListener('click',function() {
    console.log('click');
});