const ageCalculator = function (name, yearOfBirth, currentYear){
  const age = currentYear - yearOfBirth;
  return `${name} is ${age} years old.`;  
}

console.log(ageCalculator("Tammy", 1993, 2020));
console.log(ageCalculator("Miranda", 1983, 2015));
