var names = ['Tom', 'Ivan', 'Jerry'];
var obj = names.map(function (element, index) {
    return "Name: " + element + ", length: " + element.length;
});
console.log(obj);
