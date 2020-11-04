const howManyHundreds = function(bottles){
  let container;
  if (bottles % 100 === 0){
    container = bottles / 100
  } else {
    container = Math.floor(bottles / 100);
  }
  return container;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);

// NTS: from Compass: space is required between operators