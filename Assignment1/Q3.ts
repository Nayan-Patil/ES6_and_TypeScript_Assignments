var Order={
    id: 101,
    title: "book",
    price: 1200,
    printOrder:()=>{
        return Order.id;
     
    },
    getPrice(){
        return this.price;
    }
};
    



let copy=Object.assign({}, Order);
console.log(copy);
console.log(Order.getPrice())
console.log(Order.printOrder())