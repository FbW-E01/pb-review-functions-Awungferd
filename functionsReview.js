// # Review 5 - Functions

// NOTE! Pay close attention to creating code with good and consistent code style.

// 1. Write a normal function that takes in two numbers and * returns * the sum of those numbers.
function summed(a, b) {
    return a + b

}
console.log(summed(30, 60))


// 2. Write a normal function that takes in a string and * returns * that string capitalized.
function capitalized(string) {
    return string.toUpperCase()

}
console.log(capitalized("we were soldiers of the realm!"))
// 3. Write a normal function that takes in an array and * returns * the last item in that array.
function returnLast(array) {
    return array.slice(3)

}
const array = ["hogs", "swine", "pigs", "sow"]

console.log(returnLast(array))

// 4. Write an arrow function that takes in an array and * returns * the first item in that array.

const people = (arr) => {
    return arr.shift(1)
}

const arrowArr = ["Peter", "Mary", "Lando", "Aurlus", "Li"]
console.log(people(arrowArr))

// 5. Write an arrow function that takes in a string and * returns * the last three characters of that string.
const slicedLastThree = (arr) => {
    return arr.slice(arr.length - 3)
}

const word = "gainsaid"
console.log(slicedLastThree(word))

// 6. Write an arrow function that takes in an array and * returns * the type of the first item in that array.
let someArray =  ["spinning", 200, 669, 235, "choleric","tantrum","cynicism"];
stringType= ()=> { 
    console.log(typeof someArray[0] )
}
stringType()
// 7. Write an arrow function that takes in an array and * returns * true, if all items in that array have the same type.
let someArray =  ["Cao",true, true, true];
let result=arr=>arr.every(e=>e===true)
if (result(someArray)===true) { console.log(true)
    
} else {console.log("Swipe back once more")
}
// 8. Print the`type` of a variable that has a normal function value.
// 9. Print the`type` of a variable that has an arrow function value.
// 10. Write and test a function that takes in two parameters(min and max).That function should return another function that doesn't take in any parameters, but returns a random number between min and max. Effectively your "outer" function is a factory that creates customized random number generator functions.
// 11. In your own words, explain what are side effects and what is a pure function.
// 12. In your own words, explain what is the difference between functions and methods.