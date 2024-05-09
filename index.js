const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes.js");

async function promptUser() {
  const userInput = await inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters:",
      validate: (input) => {
        if (input.trim().length === 0) {
          return "Please enter some text.";
        }
        if (input.length > 3) {
          return "Please enter up to three characters.";
        }
        return true;
      }
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter text color (keyword or hexadecimal number):"
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["circle", "triangle", "square"]
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter shape color (keyword or hexadecimal number):"
    }
  ]);

  let shape;
  switch (userInput.shape) {
    case "triangle":
      shape = new Triangle(userInput.text);
      break;
    case "circle":
      shape = new Circle(userInput.text);
      break;
    case "square":
      shape = new Square(userInput.text);
      break;
    default:
      console.error("Invalid shape selected");
      return;
  }

  const svgMarkup = shape.generateSVG(userInput.shapeColor, userInput.textColor);
  createSVG(svgMarkup);
}

function createSVG(svgMarkup) {
  fs.writeFileSync("logo.svg", svgMarkup);
  console.log("Generated logo.svg");
}

promptUser().catch(err => console.error(err));