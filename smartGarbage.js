//Objects - Trash to Treasure Assignment
//Function to increase garabge count for waste, recycling, or compost

const smartGarbage = function (trash, bins) {
  if (trash === "waste") {
    bins.waste = bins.waste + 1;
    return bins;
  } else if (trash === "recycling") {
    bins.recycling = bins.recycling + 1;
    return bins;
  } else if (trans === "compost") {
    bins.compost = bins.compost + 1;
    return bins;
  };
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }))