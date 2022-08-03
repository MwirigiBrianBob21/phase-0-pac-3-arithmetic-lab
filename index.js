function add (a=1000, b=16){
    
    return(a + b);
}

function subtract(a=21, b=7){
    return(a - b);
}
function multiply(a=16, b=2){
    return(a * b);
}
function divide(a=21, b=3){
    return(a / b);
}
function increment(n){
    n++;
    return n;
}
function decrement(n){
    n--;
    return n;
}
// function makeInt(n){
//     if(parseInt(n="172", 10)){
//     return n;
// }
//     else if(parseInt(n=0, 10)){
//         return n;
//     }
//     else{
//         return 0;
//     }
    
// }
// function makeInt(n){
//     parseInt(2.222, 10);
// }
function makeInt(string){
    return parseInt(string, 10)
   
}
function preserveDecimal(string){
    return parseFloat(string)
}
