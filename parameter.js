// Default Parameter

let age = (a, b=56) => {
    // console.log(a-b);
    if(age<30){
        return a*b;
    }
    else{
        return false;
    }
};
// age(83)

console.log(age(78));