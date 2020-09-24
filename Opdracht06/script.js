// Deel 1 - Elementen toevoegen aan de DOM.

const big5Btn = document.getElementsByClassName('big-five-button');
const lionBtn = big5Btn[0];
const leopardBtn = big5Btn[1];
const elephantBtn = big5Btn[2];
const rhinoBtn = big5Btn[3];
const buffaloBtn = big5Btn[4];

const lionTxt = lionBtn.innerHTML;
const leopardTxt = leopardBtn.innerHTML;
const elephantTxt = elephantBtn.innerHTML;
const rhinoTxt = rhinoBtn.innerHTML;
const buffaloTxt = buffaloBtn.innerHTML;


const spottedUl = document.getElementById('spotted-animals-list');

//Lion:
const lionInList = document.createElement('li');

const lionInSpottedList = () => {
    spottedUl.appendChild(lionInList);
    lionInList.innerHTML = lionTxt;
}

lionBtn.addEventListener('click', lionInSpottedList);

//Leopard:
const leopardInList = document.createElement('li');

const leopardInSpottedList = () => {
    spottedUl.appendChild(leopardInList);
    leopardInList.innerHTML = leopardTxt;
}

leopardBtn.addEventListener('click', leopardInSpottedList);

//Elephant:
const elephantInList = document.createElement('li');

const elephantInSpottedList = () => {
    spottedUl.appendChild(elephantInList);
    elephantInList.innerHTML = elephantTxt;
}

elephantBtn.addEventListener('click', elephantInSpottedList);

//Rhino:
const rhinoInList = document.createElement('li');

const rhinoInSpottedList = () => {
    spottedUl.appendChild(rhinoInList);
    rhinoInList.innerHTML = rhinoTxt;
}

rhinoBtn.addEventListener('click', rhinoInSpottedList);

//Buffalo:
const buffaloInList = document.createElement('li');

const buffaloInSpottedList = () => {
    spottedUl.appendChild(buffaloInList);
    buffaloInList.innerHTML = buffaloTxt;
}

buffaloBtn.addEventListener('click', buffaloInSpottedList);


//Remove the first.
const removeBtn = document.getElementById('remove-first-item-button');
// const firstAnimalInList = spottedUl.firstElementChild;
const removeFirst = () => {
    spottedUl.removeChild(spottedUl.firstElementChild);
}

removeBtn.addEventListener('click', removeFirst);


//Remove all.
const removeAllBtn = document.getElementById('remove-all-button');
const removeAll = () => {
    while (spottedUl.firstChild) {
        spottedUl.removeChild(spottedUl.firstChild);
    }
};

removeAllBtn.addEventListener('click', removeAll);




