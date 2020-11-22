var Order = {
    id: 101,
    title: "book",
    price: 1200,
    printOrder: function () {
        return Order.id;
        return Order.title;
        return Order.price;
    },
    getPrice: function () {
        return this.price;
    }
};
var copy = Object.assign({}, Order);
console.log(copy);
