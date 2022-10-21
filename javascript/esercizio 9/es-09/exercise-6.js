function getKeys(obj) {
  // ...
  let keys= [];
  for( i in obj){
    keys.push(i);
  }
  
  let keyObj=Object.keys(obj);
  return keys
}



const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);