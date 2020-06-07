
// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.
//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.

function remove(nameArray, newMember) {
  let idx = nameArray.indexOf(newMember);
  let newArray = nameArray.filter(name => name !== nameArray[idx]);
  //nameArray.splice(idx, 1);
  console.log(nameArray[idx]);
  return newArray;
}

// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.


// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

function sum(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum
}

// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.
function average(numbers) {
  let average = sum(numbers) / numbers.length;
  return average || undefined
}
// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

function minimum(numbers) {
  let minimum = numbers[0]//tells the program to return 1st number
  for (let number of numbers) {//for every number in the array; test if it is less than current minimum
    if (number < minimum) {//when the new number is less than current min, replace it. ex: sports record being replaced and standigs changing. 
      minimum = number
    }
  }
  return minimum
}

// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// let arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.
//let array = [5, 4, 3, 2, 1]///use case
function selectionSort(array) {
  let sortedArray = []//holder for new array we are returning
  let arrayCopy = array.slice(); //to not mess up original data
  for (let i = 1; i <= array.length; i++) {//for 1 up to the lenght of array; i++ means to repeat incrementally like a ticker.
    let lowestNumber = minimum(arrayCopy); //finds the lowest #
    sortedArray.push(lowestNumber); //pushes it to the new array
    let idx = arrayCopy.indexOf(lowestNumber) //finds the index to remove it
    arrayCopy.splice(idx, 1); //remove the identified smallest number
  }
  return sortedArray
}

// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.

function textList{

  return new
}