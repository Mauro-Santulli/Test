class Person {
  // ...
  constructor(firstName,lastName,age){
    this.firstName=firstName
    this.lastName=lastName
    this.age=age
  }

  get name(){
    return this.firstName
  }
  set name(fName){
    this.firstName=fName
  }
  get surname(){
    return this.lastName
  }
  set surname(lName){
    this.lastName=lName
  }
  get name(){
    return this.firstName
  }
  set eta(eta){
    this.age=eta
  }

  fullName(){
    return `Ciao, sono ${this.firstName} ${this.lastName} ed ho ${this.age} anni`
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName());

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName());