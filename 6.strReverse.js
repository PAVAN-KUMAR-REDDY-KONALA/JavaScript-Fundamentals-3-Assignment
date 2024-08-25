let str="ganesha"
// User defined Function
// function stringReverse(str){
//     let n=str.length,index=n-1,revString=""
//     while(index>=0){
//         revString+=str[index]
//         index--
//     }
//     return revString
// }

// In-built methods
function stringReverse(str){
    return  str.split('').reverse().join('');
}

console.log(`The string ${str} after reverse is : ${stringReverse(str)}`);

//  O/P :
// The string ganesha after reverse is : ahsenag