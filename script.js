const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
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
    element.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px;`;
    document.body.append(element);
    element.style.color = "white";
  };
};

const myClassElement = new DomElement(".block", 200, 200, "blue", "16px");
const myIdElement = new DomElement("#best", 80, 400, "red", 14);
myClassElement.createNewElement();
myIdElement.createNewElement();
console.log(myClassElement);
