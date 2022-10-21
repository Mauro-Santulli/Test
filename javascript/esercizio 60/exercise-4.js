const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(item => item.id === id);

      if (person) {
        resolve(persons.find(item => item.id === id))
      } else {
        reject(new Error(`La persona con id: ${id} non esiste`))
      }
    }, 1000);
  });
}

function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const job = jobs.find(item => item.id === id);

      if (job) {
        resolve(jobs.find(item => item.id === id))
      } else {
        reject(new Error(`Il lavoro con id: ${id} non esiste`))
      }
    }, 1000);
  });
}

let promisePerson = fetchPersonById(3)
let promiseJob = fetchJobById(2)

Promise.all([promisePerson, promiseJob]).then((values) => {
  console.log(`${values[0].firstName} ${values[0].lastName} ${values[1].jobTitle}`)
});
