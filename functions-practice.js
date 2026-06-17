//(Q1) Add Two Numbers
function add(num1,num2){
    return num1+num2
}
console.log(add(10,20))

//(Q2) Find Largest Of Two Numbers
function findlargest(num1,num2){
    return num1>num2?num1:num2
}
console.log(findlargest(10,20))

//(Q3) Find Square of a Number
function square(num){
    return num*num;
}
console.log(square(10))

//(Q4) Check Even Or Odd
function checkevenodd(num){
    return num%2==0?"even":"odd"
}
console.log(checkevenodd(10))

//(Q5) Reverse a String
function reverse(str){
    let string=''
    for(let i=str.length-1;i>=0;i--){
        string=string+str[i]
    }
    return string
}
console.log(reverse('hello'))

//(Q6) Count Vowels in a String
function cvowels(str){
    let count=0
    string=str.toUpperCase()
    for(let i=0;i<str.length;i++){
        if(string[i]=='A' || string[i]=='E' || string[i]=='I' || string[i]=='O' || string[i]=='U'){
            count++
        }
    }
    return count
}
console.log(cvowels('hello'))

//(Q7) Sum Of Array
function sums(values){
    let sum=0
    for(let i=0;i<values.length;i++){
        sum+=values[i]
    }
    return sum
}
console.log(sums([10,20,30]))

//(Q8) Largest Number in Array
function largestarray(values) {
    let largest=values[0]
    for(let i=0;i<values.length;i++){
        if(largest<values[i]){
            largest=values[i]
        }
    }
    return largest  
}    
console.log(largestarray([10,5,-20,15]))

//(Q9) Search Element in Array
function search(values,item){
    let flag=false
    for(let i=0;i<values.length;i++){
        if(values[i]==item){
            flag=true
            break;
        }
    }
    if(flag){
        console.log("item found")
    }else{
        console.log('item not found')
    }
}
search([10,20,30],20)

//(Q10) Factorial Using Function
function Factorial(value){
    let fact=1
    for(let i=1;i<=value;i++){
        fact*=i
    }
    return fact
}
console.log(Factorial(5))