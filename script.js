const DomElement = function (
  selector,
  height,
  width,
  bg,
  fontSize,
  position,
  left,
  top,
) {
  this.top = top;
  this.left = left;
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.position = position;
  this.createNewElement = function () {
    let element;
    if (this.selector.startsWith(".")) {
      element = document.createElement("div");
      element.ClassName = this.selector.slice(1);
      element.innerHTML = "div с классом";
    } else if (this.selector.startsWith("#")) {
      element = document.createElement("p");
      element.id = this.selector.slice(1);
      element.innerHTML = "Параграф с id";
    }
    element.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px; position: ${this.position}; top: ${this.top}px; left: ${this.left}px;`;
    // document.body.append(element);
    element.style.color = "white";
    // document.body.append(element);
    return element;
  };
};

const mySquareElement = new DomElement(
  ".block",
  100,
  100,
  "red",
  "16px",
  "absolute",
  "40",
  "40",
);
const square = mySquareElement.createNewElement();

document.addEventListener("DOMContentLoaded", () => {
  document.body.append(square);
});

const moveSquare = function (event, callback) {
  event.preventDefault();
  //   console.log(square.style);
  if (event.key === "ArrowUp") {
    square.style.top = parseInt(square.style.top) - 10 + "px";
  } else if (event.key === "ArrowDown") {
    square.style.top = parseInt(square.style.top) + 10 + "px";
  } else if (event.key === "ArrowLeft") {
    square.style.left = parseInt(square.style.left) - 10 + "px";
  } else if (event.key === "ArrowRight") {
    square.style.left = parseInt(square.style.left) + 10 + "px";
  } else {
    return;
  }
};

document.addEventListener("keydown", moveSquare);
