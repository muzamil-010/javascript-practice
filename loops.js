//(Q1) Print 1 to 10
console.log("//print 1 to 10")
for(let i=1;i<=10;i++){
    console.log(i)
}

//(Q2) Print 10 to 1
console.log("//print 10 to 1")
for(let i=10;i>=1;i--){
    console.log(i)
}

//(Q3) Print even numbers
console.log("//print even numbers")
let sn=prompt("enter the starting digit:")
let ln=prompt("enter the last digit:")
for(let i=sn;i<=ln;i++){
    if(i%2==0){
        console.log(i)
    }
}

//(Q4) print odd numbers
console.log("//print odd numbers")
for(let i=sn;i<=ln;i++){
    if(i%2!=0){
        console.log(i)
    }
}

 //(Q5) sum of first n numbers
 console.log("//sum of first n numbers")
 let sum=0
 for(let i=1;i<=ln;i++){
    sum+=i;
 }
 console.log(sum)

 //(Q6) multiplication table
 console.log("//multiplication table")
 let n=prompt("enter the multiplication table value:")
 for(let i=1;i<=12;i++){
    console.log(n ,"*" , i ,"=" , n*i)
 }

 //(Q7) factorial
 console.log("//factorial")
 let f=prompt("enter the value for finding factorial:")
 let fo=1
 for(let i=1;i<=f;i++){
    fo*=i
 }
 console.log(fo)

 //(Q8) count digits in number
 console.log("//count digits in a number")
 let num1=1200
 let count=0
 while(num1>0){
    count++
    num1=Math.floor(num1/10)
 }
 console.log(count)

 //(Q9) reverse a number
 console.log("//reverse a number")
 let num2=1200
 let rev=0
 while(num2>0){
    let digit=num2%10
    rev=rev*10+digit
    num2=Math.floor(num2/10)
 }
 console.log(rev)

//(Q10) pallindrome
console.log("//pallindrome")
let num3=2020
let copy=num3
let rev1=0
while(num3>0){
    let digit1=num3%10
    rev1=rev1*10+digit1
    num3=Math.floor(num3/10)
}
if(rev1 == copy){
    console.log("pallindrome")
}

