// 4. Write an arrow function that takes in an array and * returns * the first item in that array.

const people = (arr) => {
    return arr.slice(arr.length - 3)
}

const arrowArr = "gainsaid"
console.log(people(arrowArr))


// 6. Write an arrow function that takes in an array and * returns * the type of the first item in that array.
const meanness = (xter) => {
    return typeof (xter.length+1)

}
const behaviour = ["compulsive", "choleric", "tantrum", "cynicism"]
console.log(meanness(behaviour))