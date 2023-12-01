var color = ["#ff3d3d", "blue", "green", "yellow", "purple"];

var colorChange = document.getElementById("change-color");
var button = document.getElementById("button");

let counter = 0;
let newcounter = 0;
let isButtonDown = false;
let clickCount = 0;
var changeColor = function () {
  //   if (counter >= 4) {
  //     counter = 0;
  //   }
  counter = (counter + 1) % color.length;
  colorChange.style.background = color[counter];
};
// for double click event
var loopColor = function () {
  if (newcounter >= 4) {
    newcounter = 0;
  }
  //   newcounter = (newcounter + 1) % color.length;
  colorChange.style.background = color[newcounter];
  newcounter++;
};
// i was trying to attemt a double click event here but i got stuck along the line
button.addEventListener("mousedown", function checkClick() {
  if (clickCount === 2) {
    // isButtonDown = true;
    addEventListener("dbclick", setInterval(loopColor, 2000));
  }
});

button.addEventListener("click", changeColor);

