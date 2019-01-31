var students = [
    { name: 'David', marks: 80 },
    { name: 'Vinoth', marks: 77 },
    { name: 'Divya', marks: 88 },
    { name: 'Ishitha', marks: 95 },
    { name: 'Thomas', marks: 68 }
]
var sum = 0;
let result = students.map(a => a.marks);
for (var i = 0; i < 5; i++) {
    sum = sum + result[i];
}
var averageMarks = sum / 5;
console.log("average is " + averageMarks);
if (averageMarks >= 90 && averageMarks <= 100) {
    console.log("grade is A");
} else if (averageMarks >= 80 && averageMarks < 90) {
    console.log("grade is B");
} else if (averageMarks >= 70 && averageMarks < 80) {
    console.log("grade is C");
} else if (averageMarks >= 60 && averageMarks < 70) {
    console.log("grade is D");
} else {
    console.log("grade is F");
}

