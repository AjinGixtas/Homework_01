/*
What this does (step by step)

-Create the array with bunch of random number
-Sort the array
-Then split it [2,2,3,5] -> [2,2,3],[5]
               [1,2,3,3,6,7,7,8] -> [1,2,3,3],[6,7,7,8]

-Brute force the solution
*/


function FillArray() {

    // Large array for testing purpose
    let result = []
    for (let i = 0; i < 100; i++) {
        result[i] = Math.round(Math.random() * 80)
    }

    //Sample array
    // let result = [2, 2, 1]


    return result
}

function SplitArray(arr) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            result.push([arr[0]])
            continue
        }

        if (arr[i] != arr[i - 1] + 1 && arr[i] != arr[i - 1]) {
            result.push([arr[i]])
            continue
        }

        tmp = result[result.length - 1]
        tmp.push(arr[i])
        result[result.length - 1] = tmp

    }
    console.log(result)
    return result
}
function CountUniqueCombination(arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        let uniqueElementInArr = new Set(arr[i]).size
        result += arr[i].length * 2 - uniqueElementInArr
    }
    return result
}
function Init() {
    let arr = FillArray()
    //Sort the array by numerical order
    arr.sort(function (a, b) {
        return a - b
    })
    console.log(arr)
    //Split array into consecutive sequence (include duplicate element)
    let arrSplited = SplitArray(arr)
    //This is caculate the result
    let result = CountUniqueCombination(arrSplited)

    console.log(result)
}

function factorialize(num) {
    // Example:
    // 5! = 120
    // 0! = 1
    if (num < 0)
        return -1;

    else if (num == 0)
        return 1;

    else {
        return (num * factorialize(num - 1));
    }
}
Init()