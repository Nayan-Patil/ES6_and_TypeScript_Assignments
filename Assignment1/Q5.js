var add1 = function (a, b) {
    return a + b;
};
console.log(add1(2, 3));
var userFriends = function (username) {
    var arr1 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arr1[_i - 1] = arguments[_i];
    }
    console.log(username);
    console.log("List of friends of " + username);
    for (var _a = 0, arr1_1 = arr1; _a < arr1_1.length; _a++) {
        var a = arr1_1[_a];
        console.log(a);
    }
};
userFriends("Jimmy", "John", "David", "Dean");
var printCapitalNames = function () {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    console.log("Names in capital letters");
    for (var _a = 0, names_1 = names; _a < names_1.length; _a++) {
        var name_1 = names_1[_a];
        console.log(name_1.toUpperCase());
    }
};
printCapitalNames("Nayan", "Rahul", "Rohit", "Mukesh", "Shubham");
