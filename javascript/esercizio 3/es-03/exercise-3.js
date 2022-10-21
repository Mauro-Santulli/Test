const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
  // ...
  students.push(student)
}

addStudent('Marco');
console.log(students);

// si può aggiungere un elemento ad un array costante 
// perchè la parola chiave const riferito ad un array
// indica che non è possibile fare ulteriori assegnazioni, 
// non che non è possibile modificare gli elementi