//(Q1) Count spaces in a string
const str="i love javascript"
let count=0
for(let letter of str){
    if(letter==' '){
        count++
    }
}
console.log(count)

//(Q2) String Pallindrome Check
const str1="madam"
let copy=''
for(let i=str1.length-1;i>=0;i--){
    copy=copy+str1[i]
}
if(str1==copy){
    console.log("pallindrome")
}else{
    console.log("not pallindrome")
}

//(Q3) Character Frequency
char='a'
str2="banana"
let count1=0
for(let i=0;i<str2.length;i++){
    if(str2[i]==char){
        count1++
    }
}
console.log(`in ${str2} ${count1} times ${char}`)

//(Q4) Reverse a sentence
let sentence="hello world ok"
let result=''
let currentword=''
for(let i=0;i<sentence.length;i++){
    if(sentence[i]!==' '){
        currentword=currentword+sentence[i]
    }else{
        for(let j=currentword.length-1;j>=0;j--){
           result=result+currentword[j]
        }
        result=result+' '
        currentword=''
    }
}
for(let k=currentword.length-1;k>=0;k--){
        result=result+currentword[k]
} 
        
console.log(result)

//(Q5) Find the longest words
let sentence1="I Love Js "
let result1=''
let longestword=''
for(let i1=0;i1<sentence1.length;i1++){
    if(sentence1[i1]!==' '){
        longestword=longestword+sentence1[i1]
    }else if(longestword.length>result1.length){
        result1=longestword
        longestword=''
    }
}
if(longestword.length>result1.length){
    result1=longestword
}
console.log(result1)