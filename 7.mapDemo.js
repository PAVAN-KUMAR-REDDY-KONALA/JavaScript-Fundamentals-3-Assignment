let mp=new Map()

function addMap(map,name,userAge,userEmail){
    let obj={
        age: userAge,
        email: userEmail    
    }
    map.set(name,obj)
}
function updateMap(map,name,userAge,userEmail){
    if(map.has(name)){
        let obj=map.get(name)
        obj.age=userAge
        obj.email=userEmail
    }
    else{
        console.log("user "+name+" data is not found");
    }
}
function deleteMap(map,name){
    if(map.has(name)){
        map.delete(name) 
    }
    else{
        console.log("user "+name+" data is not found");
    }
    
}

addMap(mp,"pavan",20,"pavan@gmail.com")
addMap(mp,"ganesh",15,"ganesh@outlook.com")
addMap(mp,"rakesh",22,"rakesh@email.com")
console.log(`Map after adding a property : `);   
for(let k of mp.entries()){
    console.log(`${k[0]} : age - ${k[1].age} , email - ${k[1].email}`);
}
updateMap(mp,"nitish",19,"nitish@gmail.com")
updateMap(mp,"pavan",21,"newemail@gmail.com")
console.log(`Map after updating a property : `);
for(let k of mp.entries()){
    console.log(`${k[0]} : age - ${k[1].age} , email - ${k[1].email}`);
}
deleteMap(mp,"mahesh")
deleteMap(mp,"rakesh")
console.log(`Map after deleting a property : `);
for(let k of mp.entries()){
    console.log(`${k[0]} : age - ${k[1].age} , email - ${k[1].email}`);
}

// O/P :
// Map after adding a property : 
// pavan : age - 20 , email - pavan@gmail.com
// ganesh : age - 15 , email - ganesh@outlook.com
// rakesh : age - 22 , email - rakesh@email.com
// user nitish data is not found
// Map after updating a property : 
// pavan : age - 21 , email - newemail@gmail.com
// ganesh : age - 15 , email - ganesh@outlook.com
// rakesh : age - 22 , email - rakesh@email.com
// user mahesh data is not found
// Map after deleting a property : 
// pavan : age - 21 , email - newemail@gmail.com
// ganesh : age - 15 , email - ganesh@outlook.com