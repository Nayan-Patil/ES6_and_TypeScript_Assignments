function *getArmStrong(){
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
