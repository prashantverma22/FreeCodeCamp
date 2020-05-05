//first solution
function largestOfFour(arr) {
  var result = [];
  for(let i=0; i<arr.length; i++){
    var largest = arr[i][0];
    for(let j=1; j<arr[i].length; j++){
      if(arr[i][j] > largest){
        largest = arr[i][j];
      }
    }
   console.log(result[i] = largest);
  }
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//second solution

/*function largestOfFour(arr) {
  var final = [];

  for (let i=0; i<arr.length; i++) {
    var largest = 0;
    for (let j=0; j<arr[i].length; j++) {
      if(arr[i][j] > largest){
        largest = arr[i][j];
      }
    }
    final.push(largest);
  }
  return final;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
*/
