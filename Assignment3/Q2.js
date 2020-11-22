var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(id, name1, balance) {
        this.id = id;
        this.name1 = name1;
        this.balance = balance;
    }
    return Account;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(id, name1, balance, interest) {
        var _this = _super.call(this, id, name1, balance) || this;
        _this.id = id;
        _this.name1 = name1;
        _this.balance = balance;
        _this.interest = interest;
        return _this;
    }
    return SavingAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(id, name1, balance, cash_credit) {
        var _this = _super.call(this, id, name1, balance) || this;
        _this.id = id;
        _this.name1 = name1;
        _this.balance = balance;
        _this.cash_credit = cash_credit;
        return _this;
    }
    return CurrentAccount;
}(Account));
/* function objectIterator(){
    var count=0;
    return{
        next: function(){
            let bankAcount=Account[count];
            count++;
            if(count<=accountList.length){
                return{
                    value:bankAcount,
                    done:false
                }
            }
            return{done:true}
        }
    }
}*/
var s1 = new SavingAccount('101', "John", 12000, 1200);
var s2 = new SavingAccount('102', "Jimmy", 10000, 1100);
var s3 = new SavingAccount('103', "Dean", 20000, 1000);
var c1 = new CurrentAccount('104', "David", 30000, 10000);
var c2 = new CurrentAccount('105', "Shane", 25000, 20000);
var c3 = new CurrentAccount('106', "Kane", 40000, 30000);
//let bankAccount=[s1,s2,s3,c1,c2,c3];
/* let bankAccountObj=new accountList(bankAccount);
let total=0;
for(let c of bankAccountObj){
    total=total+c.balance();
}
console.log(total);
*/
var total = 0;
function totalBalance() {
    var bankAccount = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        bankAccount[_i] = arguments[_i];
    }
    for (var _a = 0, bankAccount_1 = bankAccount; _a < bankAccount_1.length; _a++) {
        var i = bankAccount_1[_a];
        total += i.balance;
    }
    return total;
}
console.log(totalBalance(s1, s2, s3, c1, c2, c3));
