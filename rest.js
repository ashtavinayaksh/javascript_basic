// es5

let neww = (a,b) =>{
    console.log(a+b)
}

neww(1,21,3,4,5,6)

// es6

let news = (...input) =>{
    console.log(...input);
    let sum = 0;
    for(let i of input){
        sum += i;
    }
    console.log(sum)
}

news(23,24,25,26,27, 20);