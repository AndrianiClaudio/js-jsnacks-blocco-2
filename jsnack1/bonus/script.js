//CODICE PAGINA NON BONUS
//Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.
//PRENDO UNA LISTA DI NOMI
//PRENDO UNA LISTA DI COGNOMI
const firstName = ['Claudio', 'Giuseppe', 'Francesca', 'Chiara', 'Elisabetta', 'Thomas', 'Gianfranco', 'Bogdan'];
const surname = ['Andriani', 'Pater', 'Gatti', 'Passaro', 'Daho', 'De Luca', 'Zola', 'Marian'];
const fullname = []
for (let i = 0; i < firstName.length; i++) {
    fullname[i] = firstName[i] + ' ' + surname[i];
    console.log(`Invitato #${i + 1}: ${fullname[i]}`);
}
//!!!FINE CODICE PAGINA NON BONUS!!!
//Andró a Stampare la mia lista di invitati
const container = document.querySelector('.container');
function createDiv () {
    return document.createElement('div');
}
function createSpan () {
    return document.createElement('span');
}
const title = document.createElement('h1');
title.innerHTML = 'Ecco la tua lista di invitati completa.';
container.prepend(title)
for (let i = 0; i < firstName.length; i++) {
    const div = createDiv();
    const span = createSpan();
    div.append(span);
    container.append(div);
    span.append(`Invitato #${i + 1}: ${fullname[i]}`);
}
