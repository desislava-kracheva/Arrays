function solve(arr){
let sumEven = 0;
let sumOdd = 0;
let difference = 0
for(let i = 0; i < arr.length; i++ ){

if(Number(arr[i]) %2 == 0){

    sumEven+= Number(arr[i]);
}

if(Number(arr[i]) %2 != 0){

    sumOdd += Number(arr[i]);
}
difference = sumEven - sumOdd;

}

console.log(difference);

}

solve([1,2,3,4,5,6] )