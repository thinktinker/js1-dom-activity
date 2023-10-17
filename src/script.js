const message = 'Hello User' // Used for initialisation

// 1. Using querySelector method to target an id called header

// Notice the hash tag used
// Update id called 'header' with some text
document.querySelector('#header').innerHTML = message

// Notice the full-stop used
// Update class called 'para' with some text
document.querySelector(".para").innerHTML = "User has a question."

// 2. Using getElementById method to target id called header

// Update header with the color red
document.getElementById("header").style.color = 'red'

// For comparison another approach to access an element - based on id
// Using a constant called pageHeader to store the id 'header' object
// Change the style colour of header to green using pageHeader instead
const pageHeader = document.getElementById("header")
pageHeader.style.color = "green"


console.log(message)
