// FUNCTION PRACTICE PROBLEMS

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