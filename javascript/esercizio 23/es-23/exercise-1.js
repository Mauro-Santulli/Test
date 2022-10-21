const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys

console.log(person);
Object.keys(person).forEach(element=>{
    console.log(`${element}: ${person[element]}`)
})