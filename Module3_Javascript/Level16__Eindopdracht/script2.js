let allColorsAreOut = false;
let bodyColorWhite = true;

//colors:
const color1Rgb = "rgb(0, 107, 219)"; //blue
const color2Rgb = "rgb(193, 226, 221)"; //mint
const color3Rgb = "rgb(244, 190, 200)"; //strawberry
const color4Rgb = "rgb(245, 237, 190)"; //vanilla
const color5Rgb = "rgb(168, 100, 70)"; //cinamon
const color6Rgb = "rgb(211, 189, 175)"; //cafelatte

const body = document.getElementById("body");
const hamburger = document.getElementById("hamburger");
const colorBtns = document.getElementsByClassName("colornav");
const colorBtnsArray = Array.from(colorBtns);

const color1Btn = document.getElementById("color1");
const color2Btn = document.getElementById("color2");
const color3Btn = document.getElementById("color3");
const color4Btn = document.getElementById("color4");
const color5Btn = document.getElementById("color5");
const color6Btn = document.getElementById("color6");

const allColorsOut = () => {
  colorBtnsArray.forEach((colorBtn) => (colorBtn.style.left = "-200px"));
  allColorsAreOut = true;
};

const allColorsIn = () => {
  colorBtnsArray.forEach((colorBtn) => (colorBtn.style.left = "-225px"));
  allColorsAreOut = false;
};

const clickonHamburger = () => {
  if (allColorsAreOut) {
    allColorsIn();
    body.style.backgroundColor = "white";
  } else {
    allColorsOut();
  }
};

hamburger.addEventListener("click", clickonHamburger);

const handleOnChangeEvent = (e) => {
  let target = e.target;

  switch (target.value) {
    case "color1":
      changeBodyColor(color1Rgb);

      break;
    case "color2":
      changeBodyColor(color2Rgb);
      break;
    case "color3":
      changeBodyColor(color3Rgb);
      break;
    case "color4":
      changeBodyColor(color4Rgb);
      break;
    case "color5":
      changeBodyColor(color5Rgb);
      break;
    case "color6":
      changeBodyColor(color6Rgb);
      break;
  }
};

colorBtnsArray.forEach((colorBtn) =>
  colorBtn.addEventListener("click", handleOnChangeEvent)
);

// const onlySelectedColorOut = (color) => {
//   if (color === target.value) {
//     colorBtn.style.left = "-200px";
//   } else {
//     colorBtn.style.left = "-225px";
//   }
// };

changeBodyColor = (color) => {
  body.style.backgroundColor = color;
  bodyColorWhite = false;
  // onlySelectedColorOut();
};

///

const colorOnKey = (event) => {
  if (event.key === "1" && bodyColorWhite) {
    changeBodyColor(color1Rgb);
  } else if (event.key === "2" && bodyColorWhite) {
    changeBodyColor(color2Rgb);
  } else if (event.key === "3" && bodyColorWhite) {
    changeBodyColor(color3Rgb);
  } else if (event.key === "4" && bodyColorWhite) {
    changeBodyColor(color4Rgb);
  } else if (event.key === "5" && bodyColorWhite) {
    changeBodyColor(color5Rgb);
  } else if (event.key === "6" && bodyColorWhite) {
    changeBodyColor(color6Rgb);
  } else {
    body.style.backgroundColor = "white";
    bodyColorWhite = true;
  }
};

document.addEventListener("keydown", colorOnKey);
