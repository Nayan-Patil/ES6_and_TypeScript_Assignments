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
    function Account(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    return Account;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(id, name, balance, interest) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.interest = interest;
        return _this;
    }
    return SavingAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(id, name, balance, cash_credit) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.cash_credit = cash_credit;
        return _this;
    }
    return CurrentAccount;
}(Account));
var s1 = new SavingAccount(101, "John", 10000, 1200);
var s2 = new SavingAccount(102, "Jimmy", 11000, 1100);
var s3 = new SavingAccount(103, "Dean", 10000, 1000);
var c1 = new CurrentAccount(101, "John", 12000, 10000);
var c2 = new CurrentAccount(102, "Jimmy", 20000, 20000);
var c3 = new CurrentAccount(103, "Dean", 40000, 30000);
console.log(s1);
console.log(s2);
console.log(s3);
console.log(c1);
console.log(c2);
console.log(c3);
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
console.log("Total Balance in account is " + totalBalance(s1, s2, s3, c1, c2, c3));
