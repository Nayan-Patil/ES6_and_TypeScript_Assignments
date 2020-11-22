var number = 1000;
var sum = 0;
function armStrong(i) {
    var temp = i;
    var digits = i.toString().length;
    while (temp > 0) {
        var digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp / 10;
    }
    if (sum == i) {
        return i;
    }
}
function armstrongIterator() {
    var nextIndex = 0;
    return {
        next: function () {
            if (nextIndex <= number) {
                return {
                    value: armStrong[nextIndex++],
                    done: false
                };
            }
            else {
                return {
                    done: true
                };
            }
        }
    };
}
var arm = armstrongIterator();
console.log(arm.next());function *getArmStrong(){
    let num;
    let r;
    let sum;
    let temp;

    for(num=1;num<=2000;num++){
      let digits=num.toString().length;
             temp=num;
             sum = 0;

             while(temp!=0){
                 r=temp % 10;
                 temp=parseInt(temp/10);
                 sum+=r**digits;
             }
             if(sum==num)
                 yield num;
            else if(num>1000)
                yield "Number greater than 1000";


        }

  }



let number=getArmStrong();
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());
