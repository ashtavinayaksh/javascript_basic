function sum(a,b,c){
    console.log(a+b+c);
}

var arrVal = [2,13,18];

// Using apply()
// sum.apply(null, arrVal)

console.log(...arrVal)
sum(...arrVal)

// using concat

let ar1=[2,4,5]
let ar2=[3,8,9]

ar1=ar1.concat(ar2)

ar1=[...ar1, ...ar2]
console.log(ar1)