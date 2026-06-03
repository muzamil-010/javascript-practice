//(Q1) largest number among the array
console.log("(Q1) largest number among the array")
let arr0=[10,5,50,20,15]
let largest=arr0[0]
console.log(arr0)
for(let largenum of arr0){
    if(largenum>largest){
        largest=largenum;
    }
}
console.log(`largest number is ${largest}`)

//(Q2) smallest number among the array
console.log("(Q2) smallest number among the array")
let arr1=[10,5,50,20,15]
let smallest=arr1[0]
console.log(arr1)
for(let smallnum of arr1){
    if(smallnum<smallest){
        smallest=smallnum;
    }
}
console.log(`smallest number is ${smallest}`)

//(Q3) sum of array
console.log('(Q3) sum of array')
let arr2=[10,5,50,20,15]
let sum=0
console.log(arr2)
for(let sumnum of arr2){
    sum+=sumnum;
}
console.log(`sum of array is ${sum}`)

//(Q4) count even numbers from the array
console.log('(Q4) count of even numbers from the array')
let arr3=[0,1,3,5,6,8,10]
let count=0
console.log(arr3)
for(let evennum of arr3){
    if(evennum % 2 == 0){
        count++
    }
}
console.log(`count of even number is ${count}`)


//(Q5) count odd numbers from the array
console.log('(Q5) count of odd numbers from the array')
let arr4=[0,1,3,5,6,8,10]
let count1=0
console.log(arr4)
for(let oddnum of arr4){
    if(oddnum % 2 != 0){
        count1++
    }
}
console.log(`count of odd number is ${count1}`)

//(Q6) reverse an array
console.log('(Q6) reverse an array')
let arr5=[10,20,30,40,50]
let newarr5=[]
console.log('before reversing',arr5)
for(let i=arr5.length-1;i>=0;i--){
    newarr5.push(arr5[i])
}
console.log('after revering',newarr5)

//(Q7) second largest number from the array
console.log('(Q7) second largest number from the array')
let arr6=[-10,-5,-25,-8]
let largestnum
let secondlargest
console.log(arr6)
if(arr6[0]>arr6[1]){
    largestnum=arr6[0]
    secondlargest=arr6[1]
}else{
    largestnum=arr6[1]
    secondlargest=arr6[0]
}
for(let i=2;i<=arr6.length;i++){
    if(arr6[i]>largestnum){
        secondlargest=largestnum
        largestnum=arr6[i]
    }else if(arr6[i]>secondlargest){
        secondlargest=arr6[i]
    }
}
console.log(`second largest num is ${secondlargest}`)