// -------------------------------------------------------- Basic running of JS from CLI
// console.log("woof")

// function addition(num1, num2) {
//     return num1 +num2
// }

// console.log(addition(8,3))

// const objTest = {
//     lock: true,
//     game: "Bloodborne",
//     author: "Christian",
//     dog: "Cloud"
// }

// console.log(objTest)

//------------------------------------------------------------ Passing files around and intro to requiring packages
// const fs = require("fs")
// const operation = require("./cat")

// fs.writeFile("README.md", "dogs are cool", (err) => {
//     if(err) throw err;
// })

// console.log(operation(5,3))
// test

//---------------------------------------------------------- Using NPM to install packages and requiring those in our app and utilizing
const inquirer = require("inquirer");
const fs = require("fs")

inquirer.prompt([
    {
        type: "input",
        message: "How are you?",
        name: "feeling"
    },
    {
        type: "input",
        message: "Where are you?",
        name: "location"
    },
    {
        type: "list",
        message: "When are you?",
        name: "time",
        choices: ["morning", "noon", "afternoon", "night"]
    },
]).then(answers => {
    console.log(answers)
    const sentence = `Hello my name is Christian and I am doing ${answers.feeling}. Right now I am located in ${answers.location} and it is around ${answers.time} time.`
    console.log(sentence)
    fs.writeFile("test.html", sentence, (err) => {
        if (err) throw err;
    })
})