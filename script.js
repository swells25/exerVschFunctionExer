//First bullet

function sum(num1, num2){
    return (num1 + num2)
}
 var result = sum(12, 5)
console.log(result)

//Second bullet
function sum_three(num1,num2,num3){
    var maxnum = 0
    if (num1 > maxnum) {
     maxnum = num1;
    }
    if (num2 > maxnum) {
     maxnum = num2
    }
    if (num3 > maxnum) {
     maxnum = num3
    }
    return maxnum;
}
console.log(sum_three(10,32,20));
 
//Thrid bullet
function num(any){
    if(any % 2 === 0) {
        return("Even!!!");
    }   else {
        return("Odd...");
    }
}
console.log(num(6))