const huiswerkmaken = (vak, callback) => {
  setTimeout(() => {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken.`);
    callback();
  }, 1000);
};

const klaarMetHuiswerk = () => {
  console.log(`Kijk Paps/Mams, ik ben klaar met mijn huiswerk!`);
};

huiswerkmaken("wiskund", klaarMetHuiswerk);
