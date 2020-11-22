class Account{
    balance: any;
    constructor(id,name,balance){
        this.id=id;
        this.name=name;
        this.balance=balance;
    }
}
class SavingAccount extends Account{
    interest: any;
    constructor(id,name,balance,interest){
        super(id,name,balance);
        this.interest=interest;
    }
}

class CurrentAccount extends Account{
    cash_credit: any;
    constructor(id,name,balance,cash_credit){
        super(id,name,balance);
        this.cash_credit=cash_credit;
    }
}
var s1=new SavingAccount(101,"John",10000,1200);
var s2=new SavingAccount(102,"Jimmy",11000,1100);
var s3=new SavingAccount(103,"Dean",10000,1000);

var c1=new CurrentAccount(101,"John",12000,10000);
var c2=new CurrentAccount(102,"Jimmy",20000,20000);
var c3=new CurrentAccount(103,"Dean",40000,30000);

console.log(s1);
console.log(s2);
console.log(s3);
console.log(c1);
console.log(c2);
console.log(c3);

var total=0;
function totalBalance(...bankAccount){
    for(let i of bankAccount){
        total+=i.balance;
    }
    return total;
}
console.log("Total Balance in account is "+totalBalance(s1,s2,s3,c1,c2,c3));