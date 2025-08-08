// Sets (it is iterable)
// store data
// sets also have its own method
//No- index based access
// Order is not guaranteed
// unique items only (no duplicates allowed)

// const numbers=new Set([1,2,5,74,5,7,27]);
// console.log(numbers);
// console.log(numbers[2]);

const array=["item1","item2","item3"];
const numbers=new Set();
numbers.add(array);
numbers.add(2);
numbers.add(1);
console.log(numbers);

if(numbers.has(1)){
    console.log("1 is present");
}else{
    console.log("1 is not present");
}

let length =0;
for(let num of numbers){
    console.log(num);
    length++;
}
console.log("length of the set is ", length);
// use set while you want unique value

const myArray=[1,2,4,8,5,2,1,4,7,9,3];
const newSet=new Set(myArray);
console.log(myArray);
console.log(newSet);