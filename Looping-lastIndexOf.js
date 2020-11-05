//Looping - lastIndexOf Assignment
//Function that determines the last index of an item in an array

function lastIndexOf (array, item){
  for (let i = array.length - 1; i >= -1; i--){
    if (array[i] === item){
      return i;
    } 
    }
  for (let i = array.length - 1; i >= -1; i--){
    if (array[i] !== item){
      return -1;
    }
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);