function solveForSecondTime(arr) {

    let result = [];
    
    for(let i = 0; i < arr.length; i++){
        let isBigger = true;
    for(let j = i + 1; j < arr.length; j++){
    
        if(arr[i] <= arr[j]){
    
    isBigger = false;
    break;
    
        }
    
    }
    
    if(isBigger){
    
    result.push(arr[i]);
    
    }
    }
    
    console.log(result.join(' '));
    
    
    }
    
solveForSecondTime([27, 19, 42, 2, 13, 45, 48])