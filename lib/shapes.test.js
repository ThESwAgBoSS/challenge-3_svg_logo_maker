// Import necessary modules or classes
const { Triangle } = require('./shapes.js'); // Assuming Triangle class is defined in a separate file

// Describe the test suite
describe('Triangle rendering', () => {
  // Define the test case
  test('Rendering triangle with blue color', () => {
    // Create a new instance of Triangle
    const shape = new Triangle();
    // Set the color to blue
    set.shapeColor("blue");
    // Expect the rendered output to match the expected SVG string
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

