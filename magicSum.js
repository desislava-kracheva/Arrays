function solve(arr,n){


 for(let i = 0; i< arr.length;i++){

  for(let j = i+ 1; j< arr.length; j++){

    if(arr[i] + arr[j] === n){
      console.log(arr[i] , arr[j]);
    }
  }
 } 
}

solve([14, 20, 60, 13, 7, 19, 8],
  27
  )