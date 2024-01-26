// array methods -> forEach, map, filter, reduce, some, every, find, find index

// forEach
// forEach -> does not return the value (undefined)
[1, 2, 3].forEach(function(item, index) {
    console.log(item, index) // output -> 1 0 2 1 3 2
})

// map
// map -> returning other array
const three = [1,2,3]
const doubled = three.map(function(item){
    return item * 2
})
console.log(doubled) // output -> [2 4 6]

// filter 
// It's like a map with a test, which only returns true values
const ints = [1,2,3]
const evens = ints.filter((item) =>{
    return item % 2 === 0
})
console.log(evens) // output -> [2]

// reduce
// reduce -> returning unique value (index to index)
const sum = [1,2,3].reduce((result, currentValue) => {
    return result + currentValue
}, 0) // 0 -> initial value
console.log(sum) // output -> 6

// some
// some -> check and test whether at least one element of the array passes the test (true or false)
const hasNegativeNumbers = [1,2,3,-1,4,5].some((item) => {
    return item < 0 // -1
})
console.log(hasNegativeNumbers) // output -> true

// every
// every -> check if all elements pass the test
const allPosititveNumbers = [1,2,-3].every((item) => {
    return item > 0
})
console.log(allPosititveNumbers) // output -> false

// find 
// find -> find the specified array element
const objects = [{ id:'a' }, { id:'b' }, { id:'c' }]
const found = objects.find((item) => {
    return item.id === 'b'
})
console.log(found) // output -> { id: 'b' }

// findIndex -> find the index of the specified element
const objects2 = [{ id:'a' }, { id:'b' }, { id:'c' }]
const foundIndex = objects2.findIndex((item) => {
    return item.id === 'b'
})
console.log(foundIndex) // output -> 1