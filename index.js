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
    newShape.style.borderRadius = "50%";
  } else if (selectedShape === "square") {
    newShape.style.width = "100px";
    newShape.style.height = "100px";
    newShape.style.borderRadius = "0";
  } else if (selectedShape === "triangle") {
    newShape.style.width="0";
    newShape.style.height="0";
    newShape.style.borderLeft = "50px solid transparent";
    newShape.style.borderRight = "50px solid transparent";
    newShape.style.borderBottom = "100px solid";
    newShape.style.borderRadius = "0";
  }
  if(selectedShape==="triangle"){
    newShape.style.color=selectedColor;
  }
  else{
  newShape.style.backgroundColor = selectedColor;
  }
  shapeContainer.innerHTML = "";
  shapeContainer.appendChild(newShape);
});

clearBtn.addEventListener("click", function () {
  shapeContainer.innerHTML = "";
});
