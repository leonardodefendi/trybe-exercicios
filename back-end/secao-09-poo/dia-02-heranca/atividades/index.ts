import Student from "./Student";

const carolina = new Student('Leonardo Defendi', new Date('1996/01/12'));

carolina.examsGrades = [20, 30, 40, 10];
carolina.assignmentsGrades = [10, 40];
console.log(carolina.enrollment);