function solveForSecondTime(arr,n){

    for (let i = 0; i< n ; i++){
let k = arr.shift();
arr.push(k)

    }
console.log(arr);
}
solveForSecondTime([51, 47, 32, 61, 21], 2)