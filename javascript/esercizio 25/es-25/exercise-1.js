const person = {
    get getFirstName(){
      return this.firstName;
    },
    set setFirstName(value){
      this.firstName=value;
    },
    get getLastName(){
      return this.lastName;
    },
    set setLastName(value){
      this.lastName=value;
    },
    fullName: function(){
      return `${this.firstName} ${this.lastName}`;
    }
}
let john = Object.create(person);
john.setFirstName="John";
john.setLastName="Doe";
let simon = Object.create(person);
simon.setFirstName="Simon";
simon.setLastName="Collins";
console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins
