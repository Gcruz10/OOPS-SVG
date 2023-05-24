const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle, Svg} = require('./lib/shapes')
inquirer.prompt ([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: function (input) {
        return input.length <= 3;
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color:',
    },
  ])
  .then (answers =>{
    console.log(answers)
    let shape;
    switch(answers.shape){
      case 'circle':
        shape = new Circle(answers.shapeColor)
      break
      case 'triangle':
        shape = new Triangle(answers.shapeColor)
      break
      case 'square':
        shape = new Square(answers.shapeColor)
      break
    }
    const svg = new Svg(answers.text, answers.textColor, shape.render())
    fs.writeFile('./dist/logo.svg',svg.render(),function(err){
      if(err) throw err 
      console.log("File successful!")
    })
  })