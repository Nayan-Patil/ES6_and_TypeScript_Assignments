interface Printable{
    id?: number;
    fname?:string;
    lname?:string;
    radius?:number;
}

let circle: Printable={
    
    radius:10
}
let employee: Printable={
    id: 101,
    fname: "John",
    lname:"Bing"
}



let printAll=function (circle,employee){
    
    
        console.log(circle);
    
    
        console.log(employee);
   
        
    
   
}
printAll(circle,employee);
