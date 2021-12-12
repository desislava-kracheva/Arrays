function solveForSecondTime(arr1,arr2){

    for(let j = 0;j<arr1.length; j++){
        for(let i = 0; i < arr2.length; i++){

            if(arr1[j] === arr2[i]){

                console.log(arr1[j]);
            }
        }
    }

}
solveForSecondTime(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)