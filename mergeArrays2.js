function solveForSecondTime(arr1, arr2) {

    let arr3 = [];
let sum = 0;
for(let i = 0; i < arr1.length; i++){

if(i % 2 == 0){
sum = Number(arr1[i]) + Number(arr2[i]);
}
else {
    sum = arr1[i] + arr2[i]
}

arr3.push(sum);


}

console.log(arr3.join(' - '));
}

solveForSecondTime(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']
)