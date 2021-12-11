function solveForSecondTime(n, arr){
    let newArr =[];

    for(let i = 0; i< n; i++){

        newArr.push(arr[i]);

    }

    console.log(newArr.reverse().join(' '));


}

solveForSecondTime(2, [66, 43, 75, 89, 47])
solveForSecondTime(4, [-1, 20, 99, 5])