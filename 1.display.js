let car={
    make:"Toyota",
    model:"S.U.V",
    year:2022
}
function display(obj){
    console.log(`The properties of car are :`);
    for(let key in obj){
        console.log(`${key} : ${obj[key]}`);
    }
}

display(car)

// o/p :
// The properties of car are :
// make : Toyota
// model : S.U.V
// year : 2022