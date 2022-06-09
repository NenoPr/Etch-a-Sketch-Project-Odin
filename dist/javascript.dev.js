"use strict";

var tempR;
var tempC;
var tempW;
var counterR = 0;
var counterC = 0;
var divColumns;
var divContainer = document.getElementById("container");
var button = document.getElementById("makeGridBtn");

function createGrid() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 64;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 64;
  var xAxis = x;

  while (divContainer.hasChildNodes()) {
    divContainer.removeChild(divContainer.firstChild);
  }

  while (y > 0) {
    tempR = document.createElement("div");
    tempR.setAttribute("id", "divRow-".concat(counterR++));
    tempR.setAttribute("class", "divRow");
    divContainer.appendChild(tempR);

    while (x > 0) {
      tempC = document.createElement("div");
      tempC.setAttribute("id", "divColumn-".concat(counterC++));
      tempC.setAttribute("class", "divColumn");
      tempR.appendChild(tempC);
      x--;
    }

    x = xAxis;
    y--;
  }

  divColumns = document.querySelectorAll(".divColumn");
}

;

function createNewGrid() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  do {
    x > 100 || x < 1 ? x = Number(prompt("Enter x length: ", 1)) : pass;
  } while (x > 100 || x < 1);

  do {
    y > 100 || y < 1 ? y = Number(prompt("Enter y length: ", 1)) : pass;
  } while (y > 100 || y < 1);

  createGrid(x, y);
}

;

function mouseHover(e) {
  if (e.target.attributes.id.textContent[3] == "C") {
    var tempCol = document.getElementById(e.target.attributes.id.textContent);
    var divid = e.target.attributes.id.textContent;
    console.log("id: ", divid);
    var element = document.getElementById(divid);
    console.log("element id", element);
    var style = getComputedStyle(element);
    console.log(style.backgroundColor);
    var colorRGB = style.backgroundColor;
    newColor = colorAddition(colorRGB);
    tempCol.style.cssText = "background-color: ".concat(newColor);
  } else return;
}

function colorAddition(color) {
  var r, g, b;

  if (color.slice(4, 7) > 99) {
    r = color.slice(4, 7);
    g = color.slice(9, 12);
    b = color.slice(14, 17);
  } else {
    r = color.slice(4, 6);
    g = color.slice(8, 10);
    b = color.slice(12, 14);
  }

  r = Math.floor(r - 25.5);
  g = Math.floor(g - 25.5);
  b = Math.floor(b - 25.5);
  console.log(r + " " + g + " " + b);
  console.log(r + g + b);

  if (b <= 21) {
    return "rgb(0, 0, 0)";
  } else {
    return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
  }
}

createGrid();
divColumns.forEach(addEventListener('mouseover', mouseHover));