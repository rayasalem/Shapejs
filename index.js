const shapeSelector = document.getElementById("shapeselector");
const colorSelector = document.getElementById("colorselector");
const generateBtn = document.getElementById("generateBtn");
const clearBtn = document.getElementById("clearBtn");
const shapeContainer = document.getElementById("shapeContainer");

generateBtn.addEventListener("click", function () {
  const selectedShape = shapeSelector.value;
  const selectedColor = colorSelector.value;
  const newShape = document.createElement("div");
  newShape.className = "shape";

  if (selectedShape === "circle") {
    createCircle(newShape);
  } else if (selectedShape === "square") {
    createSquare(newShape);
  }

  if (selectedShape === "triangle") {
     createTriangle(newShape);
    newShape.style.color = selectedColor;
  } else {
    newShape.style.backgroundColor = selectedColor;
  }

  shapeContainer.innerHTML = "";
  shapeContainer.appendChild(newShape);
});
clearBtn.addEventListener("click", function () {
  shapeContainer.innerHTML = "";
});
function createCircle(element) {
  element.style.borderRadius = "50%";
}
function createSquare(element) {
  element.style.width = "100px";
  element.style.height = "100px";
  element.style.borderRadius = "0";
}
function createTriangle(element) {
  element.style.width = "0";
  element.style.height = "0";
  element.style.borderLeft = "50px solid transparent";
  element.style.borderRight = "50px solid transparent";
  element.style.borderBottom = "100px solid";
  element.style.borderRadius = "0";
}



