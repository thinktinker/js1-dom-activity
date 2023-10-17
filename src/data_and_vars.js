/*
This sample code is used to understand the various data types and scope:
    Strings: a combination of characters or numbers represented as text
    Booleans: any data type that has a true or false value
    Numbers
    Arrays: a single variable used to hold multiple elements
    Objects: a collection of unordered, related data in the form of Key/Value
    Undefined: a variable that has been named but not assigned 
    Null: represents an intentional absence of a value
*/

// 1. Strings: a combination of characters or numbers represented as text
var fullName = "John Doe"
fullName = "Jane" + "Smith"
document.querySelector("#data").innerHTML = fullName

// 2. Booleans: any data type that has a true or false value
var additional_request = false
document.querySelector('#additional_request').innerHTML = additional_request

if(additional_request === true){
    document.querySelector('#additional_request').innerHTML = "Yes"
}else{
    document.querySelector('#additional_request').innerHTML = "No new request"
}

// 3. Numbers
var score = 100
document.querySelector('#score').innerHTML = score


// 4. Arrays: a single variable used to hold multiple elements
var staff = ["Hans", "Nas", "Raley"]
var user1 = staff[0] // Hans
var user2 = staff[1] // Nas
var user3 = staff[2] // Raley

var unorderedList = document.querySelector("#staff")

for (let index = 0; index < staff.length; index++) {
    let listItem = document.createElement("li");
    listItem.innerText = staff[index];
    unorderedList.appendChild(listItem)   
}


// 5. Object: a collection of unordered, related data in the form of Key/Value
const product = {
    id: 1, 
    name: "Macbook Pro", // or a number
    price: 1988.00, // or a string
};

document.querySelector('#product').innerHTML = `<strong>Product:</strong> ${product.name} - <i>$${product.price}/-</i>`


// 6. Undefined: a variable that has been named but not assigned 
var profile = undefined

if(profile === undefined){
    document.querySelector('#profile').innerHTML =  "Please enter profile."
}else
{
    document.querySelector('#profile').innerHTML = profile
}

// 7. Null: represents an intentional absence of a value
var customerName = null

if(customerName === null || customerName === undefined){
    document.querySelector('#customername').innerHTML = "Please enter your name"
    document.getElementById('customername').style.color = "red"
}else{
    document.querySelector('#customername').innerHTML = "Thank you."
    document.getElementById('customername').style.color = "green"
}

// 8. Template Strings: allows you to concatenate variables and strings together in a neat and clean view
var stringInfo = "FSD 2023"

console.log(stringInfo)

var templateStringName = "James Bond"
var templateStringCar = "Aston Martin"

var characterProfile = `Character is ${templateStringName}. He drives a ${templateStringCar}.`

// The commented out example is less readable
// var altCharacterProfile = "Character is " + templateStringName + ". " + "He drives a " + templateStringCar
document.querySelector('.character').innerHTML = characterProfile


// 9. variable scope 

// function and global-scoped variable: flavour
var flavour = "chocolate"

// functions that hold a default value
function showFlavour(flavour = "vanilla"){
    // local scope variable: topping
    let topping = "cherry"
    document.querySelector('.topping').innerHTML = topping
    document.querySelector('.flavour').innerHTML = flavour
}

showFlavour()

topping = "pineapple"
flavour = "mango yuzu"

showFlavour(flavour)