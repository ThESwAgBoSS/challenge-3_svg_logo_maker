class Shape {
  // Constructor method that takes in text
  constructor(text) {
    this.text = text;
  }
}

class Triangle extends Shape {
  generateSVG(shapeColor, textColor) {
    return `<svg width="300" height="200"><polygon points="150,50 250,150 50,150" style="fill:${shapeColor};stroke:black;stroke-width:1" /><text x="10" y="20" fill="${textColor}">${this.text}</text></svg>`;
  }
}

class Circle extends Shape {
  generateSVG(shapeColor, textColor) {
    return `<svg width="300" height="200"><circle cx="150" cy="100" r="50" style="fill:${shapeColor};stroke:black;stroke-width:1" /><text x="10" y="20" fill="${textColor}">${this.text}</text></svg>`;
  }
}

class Square extends Shape {
  generateSVG(shapeColor, textColor) {
    return `<svg width="300" height="200"><rect x="100" y="50" width="100" height="100" style="fill:${shapeColor};stroke:black;stroke-width:1" /><text x="10" y="20" fill="${textColor}">${this.text}</text></svg>`;
  }
}

module.exports = { Triangle, Circle, Square };