// block scope global scope, simple understanding of hosting
const nam = 'tom'
if(true){
    const data = 58;
    console.log(data,nam)
}
// console.log(data)

for(const num of [1,2,3,4,5]){
    console.log(num)
}

//function scope or local scope
function doMath(a,b){
    const sum = a + b
    console.log(sum,a,b,nam)
}
// console.log(a,b)

