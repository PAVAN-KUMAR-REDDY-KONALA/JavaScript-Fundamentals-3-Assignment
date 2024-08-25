let employee={
    id:27,
    name:"ganesh",
    age:30,
    salary:30000,
    city:"hyderabad"
}

function lenOfEmployee(emp){
    return Object.keys(emp).length;

}

console.log(`The number of properties employee has : ${lenOfEmployee(employee)}`);
// O/P :
// The number of properties employee has : 5
