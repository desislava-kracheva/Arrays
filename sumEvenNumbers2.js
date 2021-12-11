function solveForSecondTime(arr){

    arr = arr.map(Number)
    .filter(x => x % 2 == 0)
    .reduce((a, b) => a + b);
        
    
    console.log(arr);

}

solveForSecondTime(['1','2','3','4','5','6'])