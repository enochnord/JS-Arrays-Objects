// ARRAY PRACTICE PROBLEMS

var food = ["apple", "orange", "chicken", "pork", "fish"];
for(var i = 0; i < food.length; i++) {
    console.log(food[i]);
}
food.forEach(function(foodItems) {
    console.log(foodItems + " is on the food array");
})

function printFood(foods) {
    console.log(foods);
}


// array problem with a for loop
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]
for(num = numbers[0]; num <= numbers.length; num++) {
    if(num % 3 === 0) {
        console.log(num);
    }
}


// array problem with a forEach method
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]
numbers.forEach(function (num) {
    if(num % 3 === 0) {
        console.log(num);
    }
})

// array numbers divisible by 3 problem with a for loop
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]
for(num = numbers[0]; num <= numbers.length; num++) {
    if(num % 3 === 0) {
        console.log(num);
    }
}


// array numbers divisible by 3 problem with a forEach method
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]
numbers.forEach(function (num) {
    if(num % 3 === 0) {
        console.log(num);
    }
});


// function that prints the array argument in reversed order
function printReverse(arr) {
    for(var i = arr.length - 1; i >= 0; i--)
    console.log(arr[i])
}


//  function isUniform
function isUniform(arr) {
    var first = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if(arr[i] !== first) {
            return false;
        }   
    }
    return true;
}


// function sumArray()
function sumArray(arr) {
    var total = 0
    arr.forEach(function(element) {
        total += element ;
    });
    return total;
}


// function isMax()
function isMax(arr) {
    var max = arr[0]
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}


// function isMin()
function isMin(arr) {
    var min = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}


// function isEven()
function isEven(arr) {
    for(i = 0; i < arr.length; i ++) {
        if(arr[i] % 2 !== 0) {
            return arr + " are not all even numbers";
        }
    }
    return arr + " are all even numbers";
}


// additional practice
var nums = [45,65,77,34]
nums.forEach(function(num) {
    console.log(num);
})


function myForEach(arr, func) {
    // loop through array
    for(var i = 0; i< arr.length; i++) {
        //call func for each item in array
         func();   
    }
}

var colors = ["Red", "orange", "yellow"]
myForEach(colors, alert)
function myForEach(arr, func) {
    // loop through array
    for(var i = 0; i< arr.length; i++) {
        //call func for each item in array
         func(arr[i]);   
    }
}


// printing out index 1 of an array inside an object
var person = {
    name: "Erick",
    age: 19,
    city: "Atlanta",
    comments: ["Great, I really liked this.", "I do not like this."]
}
console.log(person.comments[1]);


// printing out the name Malfoy from the nested object with an array
var someObject = {
    friends: [
        {name: "Malfoy"},
        {name: "Crabbe"},
        {name: "Goyle"}
    ],
    color: "baby blue",
    isEvil: true
}
console.log(someObject.friends[0].name);

