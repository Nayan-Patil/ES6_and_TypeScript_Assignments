let add1=(a,b)=>{
    return a+b;
}
console.log(add1(2,3));

let userFriends=(username,...arr1)=>{
    console.log(username);
  console.log("List of friends of "+username);
   for(let a of arr1){
     console.log(a);
   }
};
userFriends("Jimmy","John","David","Dean");


let printCapitalNames=(...names)=>{
    console.log("Names in capital letters");
    for(let name of names){
      
        console.log(name.toUpperCase());
    }
};
printCapitalNames("Nayan","Rahul","Rohit","Mukesh","Shubham");