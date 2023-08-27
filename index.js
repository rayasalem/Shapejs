const shapeSelector = document.getElementById("shapeselector");
const colorSelector = document.getElementById("colorselector");
const generateBtn = document.getElementById("generateBtn");
const clearBtn = document.getElementById("clearBtn");
const shapeContainer = document.getElementById("shapeContainer");

const shape = {
  circle: 'circle',
  square: 'square',
  triangle: 'triangle',
};

const shapeCreators = {
  [shape.circle]: element => {
    element.style.borderRadius = "50%";
  },
  [shape.square]: element => {
    element.style.width = "100px";
    element.style.height = "100px";
    element.style.borderRadius = "0";
  },
  [shape.triangle]: element => {
    element.style.width = "0";
    element.style.height = "0";
    element.style.borderLeft = "50px solid transparent";
    element.style.borderRight = "50px solid transparent";
    element.style.borderBottom = "100px solid ";
    element.style.borderRadius = "0";
  },
};

const applyColor = (element, selectedColor, selectedShape) => {
  if (selectedShape === "triangle") {
    element.style.color = selectedColor;
  } else {
    element.style.backgroundColor = selectedColor;
  }
};


generateBtn.addEventListener("click", () => {
  const selectedShape = shapeSelector.value;
  const selectedColor = colorSelector.value;

  const newShape = document.createElement("div");
  newShape.className = "shape";

  shapeCreators[selectedShape](newShape);
  applyColor(newShape, selectedColor,selectedShape);

  shapeContainer.innerHTML = "";
  shapeContainer.appendChild(newShape);
});

clearBtn.addEventListener("click", () => {
  if (shapeContainer.firstChild.classList.contains("shape")) {
    shapeContainer.innerHTML = "";
  }
});
