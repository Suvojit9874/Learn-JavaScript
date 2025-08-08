// function myFunc(number){
//     return function square(power){
//             return number ** power;
//     }
// }

const myFunc = (number)=> (power)=>number**power;
const ans= myFunc(2);
console.log(ans(5));