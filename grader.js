var scores = [90, 98, 89, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

function average(grades){
    var total = 0;
    for(var i = 0; i < grades.length; i++){
        total += grades[i];
    }
    var avg = total / grades.length;
    console.log(Math.round(avg));
}

average(scores);
average(scores2);