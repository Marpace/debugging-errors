let sum = 0;
function average(list) {
  
    for (let num of list) {
      sum += num;
    }
  
    return sum / list.length;
}
console.log(average([3, 5, 7]));