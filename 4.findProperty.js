let student={
    id:37,
    name:"pavan",
    age:21
}
function searchProperty(obj,property){
    return Object.hasOwn(obj,property)
}

let prop="city"
if(searchProperty(student,prop))    console.log(`The ${prop} is present in the object`);
else    console.log(`The ${prop} is not present in the object`);
 
//  O/P :
// The city is not present in the object