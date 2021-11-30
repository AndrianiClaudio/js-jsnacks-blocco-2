//Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//PRENDO UNA LISTA DI NOMI
const firstName = ['Claudio', 'Giuseppe', 'Francesca', 'Chiara', 'Elisabetta', 'Thomas', 'Gianfranco', 'Bogdan'];
//PRENDO UNA LISTA DI COGNOMI
const surname = ['Andriani','Pater','Gatti','Passaro','Daho','De Luca','Zola','Marian'];
//si presume le lunghezze degli array saranno uguali
const length = firstName.length;
const fullname = []
// GENERO UNA FALSA LISTA DI INVITATI
for(let i=0;i<length;i++) {
    fullname[i]=firstName[i] + ' ' + surname[i];
    console.log(`Invitato #${i + 1}: ${fullname[i]}`);
}
for (let i = 0; i < fullname.length; i++) {
    console.log(fullname[getRndInteger(0,firstName.length -1)]);
}