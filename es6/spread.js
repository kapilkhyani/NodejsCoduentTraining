// function sum(x,y,z){
//     return x+y+z;
// }
// const numbers=[1,2,3]
// console.log(sum(...numbers))
// console.log(sum(..."kapi"))


function join(separator, ...values) {
    return values.join(separator);
}
 
// all of the parameters after the first
// are gathered together into `values`
// which is a true `Array`
// output: "one//two//three"
console.log(join('//', 'one', 'two', 'three'));
