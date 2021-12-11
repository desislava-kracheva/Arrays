function solveForSecondTime(arr){

let odd = arr.filter(x => x% 2 !== 0)
let sumOdd = 0
let sumEven = 0;
for(let line of odd){
    sumOdd+=line;
}

let even = arr.filter(x => x% 2 ==0);
for(let line of even){

    sumEven +=line;
}


console.log(sumEven - sumOdd);

}

solveForSecondTime([1,2,3,4,5,6])
solveForSecondTime([3,5,7,9])