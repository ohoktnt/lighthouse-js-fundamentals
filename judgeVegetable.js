 /* did not work - retry with hint on forum
 const judgeVegetable = function (vegetables, metric) {
  if (metric === "redness") {
    let red = 0;
    let winner = '';
    for(let i = 0; i < vegetables.length; i++){
      if (vegetables[i].redness > red){
        red = vegetables[i].redness;
        winner = vegetables[i].submitter;
      }return winner;
    } 
  } 
  if (metric === "plumpness") {
    let plump = 0;
    let winner = '';
    for (let i = 0; i < vegetables.length; i++) {
      if (vegetables[i].plumpness > plump){
        plump = vegetables[i].plumpness;
        winner = vegetables[i].submitter;
      }return winner;
    } 
  }
}; ** the reason why it did not work: the code needs to take any
metric to compare against, not just redness or plumpness.
*/


//this worked ! but why did the other did not work?
const judgeVegetable = function (vegetables, metric) {
  let highest = 0;
  let position = 0;
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > highest) {
      highest = vegetables[i][metric];
      position = i;
    }
  }
  return vegetables[position].submitter;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness'

console.log(judgeVegetable(vegetables, metric))