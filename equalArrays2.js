function solveForSecondTime(arr1,arr2){
let sum = 0;
let isEqual = true;
for(let i =0; i< arr1.length; i++){

    if(arr1[i] !== arr2[i]){

        console.log(`Arrays are not identical. Found difference at ${i} index`);
        isEqual= false
        return;

    }
    sum+=Number(arr1[i]);
    
}
if(isEqual == true){
console.log(`Arrays are identical. Sum: ${sum}`);  
}
}

solveForSecondTime(['10','20','30'], ['10','20','30'])
solveForSecondTime(['1','2','3','4','5'], ['1','2','4','4','5'])