function solve(arr){
let sum1 = 0;
let sum2 =0;
for(const el of arr){
sum1+= el;

}

for(let i = 0; i < arr.length; i++){

    let element = arr[i];

    if(element % 2 ==0){
arr[i] += i;

    } else {

        arr[i] -= i;
    }
}


for(let j of arr){

    sum2 += j

}

console.log(arr);
console.log(sum1);
console.log(sum2);






}

solve([5, 15, 23, 56, 35])


// Write a function, which changes the value of odd and even numbers in an array of numbers. 
// •	If the number is even - add to its value its index position
// •	If the number is odd - subtract to its value its index position
