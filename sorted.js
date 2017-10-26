// create a sort function
// takes 2 parameters, the first is a callback function, the second is the array to sort
// executes the callback function on each pair of items in the array
// if it returns a negative number, then it means that the first parameter must come after the second
// if it returns a 0, then it means that the numbers don't need to be placed in any particular order
// if it returns a positive number, then it means that the first parameter must come before the second
// returns a new array

// [2, 6, 3, 4, 10, 1]


// [0] [1] [2] [3] [4] [5]
function sorted(a, array) {
    const newArray = array.slice();

    for(let index1 = 0; index1 < array.length; index1++) {
        
        for (let index2 = 0; index2 < array.length; index2++) {
            
            // compare two numbers in the array using `a`, the callback function
            const comparisonResult = a(newArray[index1], newArray[index2]);

            // if the result from the callback function is negative,
            // then change the array so that the first number comes after the second

            if (comparisonResult < 0) {
                // Check to see if the first number is after the second in the array
                if (index1 < index2) {
                    //? then switch the numbers so that the first number comes first!
                    let switchVar = newArray[index1];
                    let switchVar2 = newArray[index2];

                    newArray[index1] = switchVar2;
                    newArray[index2] = switchVar;
                }

                // if the result from the callback function is positive,
                // then change the array so that the first number comes before the second
            } else if (comparisonResult > 0) {
                if (index1 > index2) {
                    let switchVar = newArray[index1];
                    let switchVar2 = newArray[index2];

                    newArray[index1] = switchVar2;
                    newArray[index2] = switchVar;
                }
            }
        }
    }
    return newArray;
}

// the callback function takes two parameters, both are numbers
// it must return a negative number, 0, or a positive number
// Functional Definition: return a negative number if param1 < param2, 0 if equal, positive if param1 > param2

function callback(num1, num2) {
    if(num1 < num2) {
        return -5;
    } else if (num1 === num2) {
        return 0;
    } else if (num1 > num2) {
        return 5;
    }
}

let array = [1, 6, 2, 14, -4, 8, -7, 3];

console.log(sorted(callback, array).reverse());
