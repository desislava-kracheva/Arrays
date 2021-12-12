function solveForSecondTime(arr){
let sumModified = 0
    let sumArr = 0;
for(let i= 0;i< arr.length; i++){
sumArr += arr[i];

if(arr[i] % 2 ==0){

    arr[i] += i;
} else {

    arr[i] -= i;
}

}

console.log(arr);
console.log(sumArr);
for(let line of arr){
sumModified += line;
}
console.log(sumModified);


}

solveForSecondTime([5, 15, 23, 56, 35])