let student={
    name:"pavan",
    age:21,
    grade:"A"
}
console.log(`Student Details(before updating grade) : `);
for(let key in student){
    console.log(`${key} : ${student[key]}`);
}

function updateGrade(obj,newGrade){
    obj.grade=newGrade;
}


updateGrade(student,"C")

console.log(`Student Details(after updating grade) : `);
for(let key in student){
    console.log(`${key} : ${student[key]}`);
}

// O/P :
// Student Details(before updating grade) : 
// name : pavan
// age : 21
// grade : A
// Student Details(after updating grade) : 
// name : pavan
// age : 21
// grade : C