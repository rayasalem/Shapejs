const shapeSelector = document.getElementById("shapeselector");
const colorSelector = document.getElementById("colorselector");
const generateBtn = document.getElementById("generateBtn");
const clearBtn = document.getElementById("clearBtn");
const shapeContainer = document.getElementById("shapeContainer");
const textContainer=document.getElementById("text3");

const shapes = {
  circle: {
    create: (element) => {
      element.style.borderRadius = "50%";
    },
    applyColor: (element,colorSelector) => {
      element.style.backgroundcolor=colorSelector;
    }
  },
  square: {
    create: (element) => {
      element.style.width = "100px";
      element.style.height = "100px";
      element.style.borderRadius = "0";
    },
    applyColor: (element,colorSelector) => {
      element.style.backgroundcolor=colorSelector;
    }
  },
  triangle: {
    create: (element) => {
      element.style.width = "0";
      element.style.height = "0";
      element.style.borderLeft = "50px solid transparent";
      element.style.borderRight = "50px solid transparent";
      element.style.borderBottom = "100px solid ";
      element.style.borderRadius = "0";
    },
    applyColor: (element,colorSelector) => {
      element.style.color=colorSelector;
    }
  }
};

generateBtn.addEventListener("click", function () {
  const selectedShape = shapeSelector.value;
  const selectedColor = colorSelector.value;

  const newShape = document.createElement("div");
  newShape.className = "shape";

  shapes[selectedShape].create(newShape);
  shapes[selectedShape].applyColor(newShape, selectedColor);

  shapeContainer.innerHTML = "";
  shapeContainer.appendChild(newShape);
});

clearBtn.addEventListener("click", function () {

shapeContainer.innerHTML = "";

});
