// Judge - 66/100 :(

function solve(arr){

    let newArr = [];
for(let i = 0; i < arr.length; i++){

if(arr[i] > arr[i+1] || arr[i] == arr[arr.length-1]){

    newArr.push(arr[i]);
    
}



}

console.log(newArr.join(' '));

}
solve([27, 19, 42, 2, 13, 45, 48])