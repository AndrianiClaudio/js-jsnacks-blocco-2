//CODICE PAGINA NON BONUS
//Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.
//PRENDO UNA LISTA DI NOMI
let my_firstNames = ['Claudio', 'Giuseppe', 'Francesca', 'Chiara', 'Elisabetta', 'Thomas', 'Gianfranco', 'Bogdan'];
//PRENDO UNA LISTA DI COGNOMI
let my_surnames = ['Andriani', 'Pater', 'Gatti', 'Passaro', 'Daho', 'De Luca', 'Zola', 'Marian'];

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
    let fullnames = [];
    for (let i = 0; i < firstNames.length; i++) {
        fullnames[i] = firstNames[i] + ' ' + surnames[i];
    }
    return fullnames;
}
//data lista di nomi e cognomi, stampa invitati
function stampaLista (names_and_surnames) {
    const main_div = createDiv();
    for (let i = 0; i < names_and_surnames.length; i++) {
        const div = createDiv();
        const span = createSpan();
        div.append(span);
        span.append(`Invitato #${i + 1}: ${names_and_surnames[i]}`);
        main_div.append(div);
    }
    return main_div;
}
const container = document.querySelector('.container');
const title = document.createElement('h1');
title.innerHTML = 'Ecco la tua lista di invitati completa.';
//ottengo nomi completi
let my_fullnames = getFullNames(my_firstNames,my_surnames);
const btn = createButton();
btn.innerHTML = 'vuoi inserire un nuovo nome ed un nuovo cognome?'
container.prepend(title);
let main_div = stampaLista(my_fullnames);
main_div.classList.add('main-div');
container.append(main_div);
container.append(btn);
btn.addEventListener('click',function() {
    btn.disabled = true;
    const new_div = createDiv();
    // new_div.classList.add('new-input-container');
    const inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.placeholder = 'inserisci il nuovo nome';
    inputName.size = inputName.placeholder.length;
    const inputSurname = document.createElement('input');
    inputSurname.type = 'text';
    inputSurname.placeholder = 'inserisci il nuovo cognome';
    inputSurname.size = inputSurname.placeholder.length;
    const new_btn = createButton();
    new_btn.innerHTML = 'Ricarica lista con nuovo invitato';
    new_div.append(inputName,inputSurname,new_btn);
    container.append(new_div);
    const error_div = createDiv();
    new_btn.addEventListener('click',function() {
        if (inputName.value != '' && inputSurname.value != '') {
            error_div.innerHTML = '';
            my_firstNames.push(inputName.value);
            my_surnames.push(inputSurname.value);
            my_fullnames = getFullNames(my_firstNames,my_surnames);
            container.removeChild(main_div);
            container.removeChild(new_div);
            main_div = stampaLista(my_fullnames);
            container.insertBefore(main_div,btn);
            btn.disabled = false;
        } else {
            error_div.classList.add('error')
            error_div.innerHTML = 'Errore! Inserisci sia il nome che il cognome e poi clicca su Ricarica lista con nuovo intato'
            new_div.append(error_div);
        }
    });
});