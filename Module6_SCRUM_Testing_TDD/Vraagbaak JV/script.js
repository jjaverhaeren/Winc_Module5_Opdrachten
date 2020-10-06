// randomPersonData
const log = console.log
const buttons = document.getElementsByClassName("button");
const parentOfList = document.getElementById("list");


const listShown = document.getElementById("list");

const clearList = () => {
  while (listShown.firstChild) {
    listShown.removeChild(listShown.firstChild);
  }
};

const regionBtnsBtns = document.getElementById('region-btns-container');

const clearRegionBtns = () => {
  while(regionBtnsBtns.firstChild) {
    regionBtnsBtns.removeChild(regionBtnsBtns.firstChild);
  }
};

const clearInfo = () => {
  const infoH3 = document.getElementById('info');
  infoH3.innerHTML = '';
}


