class Account{
    constructor(public id:string, public name1:string,public balance:number){
        
    }
}
class SavingAccount extends Account{
    constructor(public id:string,public name1:string,public balance:number,public interest:number){
        super(id,name1,balance);
        
    }
}

class CurrentAccount extends Account{
    constructor(public id:string,public name1:string,public balance:number,public cash_credit:number){
        super(id,name1,balance);
       
    }
}





   

var s1=new SavingAccount('101',"John",12000,1200);
var s2=new SavingAccount('102',"Jimmy",10000,1100);
var s3=new SavingAccount('103',"Dean",20000,1000);

var c1=new CurrentAccount('104',"David",30000,10000);
var c2=new CurrentAccount('105',"Shane",25000,20000);
var c3=new CurrentAccount('106',"Kane",40000,30000);


var total=0;
function totalBalance(...bankAccount){
    for(let i of bankAccount){
        total+=i.balance;
    }
    return total;
}
console.log(totalBalance(s1,s2,s3,c1,c2,c3));