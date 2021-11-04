function solve (n,arr){


   let newArr = arr.splice(0,n)
   console.log(newArr.reverse().join(' '));


}
solve(2, [66, 43, 75, 89, 47])