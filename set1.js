'use strict';

const yearOfBirth = function(age) {
  if(typeof age === 'number') {
    if(age < 0) {
      throw new Error('Age can not be negative');
    } else {
      return 2018 - age;
    }
  } else {
    throw new Error('Age is not a number');
  }
};

const whoAmI = function(name, age) {
  let yob = yearOfBirth(age);
  if (name === undefined || age === undefined)
    throw new Error('Arguments not defined');
  console.log(`Hi, my name is ${name} and I'm ${age} years old`);
  console.log(`I was born in ${yob}`);
};


try { 
  whoAmI('chris', 40);
}
catch(error) {
  console.log(error.message);
}