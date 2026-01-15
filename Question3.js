/*
const students = [
    { name: "John", grades: [85, 90, 92, 88] },
    { name: "Jane", grades: [95, 92, 88, 94] },
    { name: "Bob", grades: [70, 75, 72, 78] },
    { name: "Alice", grades: [100, 95, 98, 99] },
    { name: "Charlie", grades: [60, 65, 62, 68] }
];
Implement these functions:

calculateAverage(students) - Calculate each student's average grade
getTopPerformer(students) - Find student with the highest average
getPassingStudents(students) - Return students with average >= 75
hasFailingGrade(students) - Check if any student has any grade below 60
Requirements:

Use map(), reduce(), filter(), find(), some() appropriately
Each function should be separate and reusable
Include test cases showing each function works correctly
*/


const calculateAverage = (students) =>{
    return students.map(student=>({"Name": student.name , "Average" : (student.grades.reduce((acc,n)=>acc+n, 0))/student.grades.length}))
}

const students = [
    { name: "John", grades: [85, 90, 92, 88] },
    { name: "Jane", grades: [95, 92, 88, 94] },
    { name: "Bob", grades: [70, 75, 72, 78] },
    { name: "Alice", grades: [100, 95, 98, 99] },
    { name: "Charlie", grades: [60, 65, 54, 68] }
];

const average = calculateAverage(students);
console.log(average);


const getPassingStudents = (students)=>{
    const average = students.map(student=>({"Name": student.name , "Average" : (student.grades.reduce((acc,n)=>acc+n, 0))/student.grades.length}))
    return average.filter(avg=>avg.Average>75);
}

console.log(getPassingStudents(students));

const hasFailingGrade = (students)=>{
    return students.find(student=>student.grades.some(grade=>grade<60));
}

console.log(hasFailingGrade(students));

const getTopPerformer = (students)=>{
    const average = students.map(student=>({"Name": student.name , "Average" : (student.grades.reduce((acc,n)=>acc+n, 0))/student.grades.length}))
    return average.reduce((best, curr) =>curr.Average > best.Average ? curr : best);
}

console.log(getTopPerformer(students));

