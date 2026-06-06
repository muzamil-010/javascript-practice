//(Q1) search element from an array
console.log("(Q1 search element from an array")
let arr=[10,2,20,5,30]
let value=prompt("enter the value to be searched")
let found=false
for(let val of arr){
    if(value==val){
        found=true;
        break;
    }
}
if(found==true){
    console.log(`${value} found `)
}
else{
    console.log(`${value} not found`)
}

//(Q2) frequency count
console.log("(Q2) frequency count")
let arr1=[10,20,10,1,2,4,10]
let value1=prompt("enter the value to check the frequency")
let count=0
for(let vals of arr1){
    if(value1==vals){
        count++
    }
}
console.log(`${value1} found ${count} times`)

//(Q3) remove duplicates
console.log("(Q3)remove duplicates")
let arr3=[10,10,20,30,20,30,15,15]
console.log("array values:",arr3)
let arr3cpy=[]
for(value2 of arr3){
    let exist=false
    for(value3 of arr3cpy){
        if(value2==value3){
            exist=true;
            break;
        }
        else{
            exist=false
        }
    }if(exist==false){
        arr3cpy.push(value2)
    }
}
console.log("after removal:",arr3cpy)