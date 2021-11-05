function solve(arr, num){
 let temp = '';

 
 for(let i = 0; i < num; i++){

    temp = arr.shift();
    arr.push(temp);

    


}
console.log(arr.join(' '));

}

solve([51, 47, 32, 61, 21], 2)