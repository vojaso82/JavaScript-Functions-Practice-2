
Define a function, name it however you prefer respecting the good naming conventions, that will do the same as we did earlier - loop through the array and print the type of each element of the array in the console.

Define a function getCredentials() that will receive the following object as argument and print the following result:

const someArr = [
  'max',
  34,
  true,
  { name: 'sandra', student: true },
  ['javascript', 'mongodb', 'react']
];
 
function printTypes(){
  someArr.forEach(element => console.log(typeof(element)))
}
//console.log(someArr);

printTypes()


let user = {
  username: 'ironhacker',
  password: '123iron345'
};

function getCredentials(object){
  
  console.log(`Username is: ${object.username} and the password is ${object.password}`)
}

getCredentials(user)

let property = {
  owner: {
    firstName: 'John',
    lastName: 'Doe',
    age: 44
  },
  isForSale: false,
  sqrm: 120,
  address: {
    street: 'Happy St',
    number: 123,
    city: 'Miami',
    state: 'FL',
    country: 'US'
  },
  amenities: ['pool', 'tennis court', 'private parking', 'yard']
};

function checkProperty(object){
  if (object.isForSale){
  console.log(`The owner ${object.owner.firstName} ${object.owner.lastName} put the home for sale. The propery has  ${object.amenities.length} amenities`)
  } else {
    console.log(`The home in ${object.address.street} no ${object.address.number} is not for Sale `)
  }
}

checkProperty(property)