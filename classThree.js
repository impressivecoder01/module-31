// different truthy and falsy values in js
let data;
data = 0;
data = '' //false
data = ' ' // has an white space, it is falsy
data = '0'
data = false
data = true
data = null
data = undefined
data = {}
data = []
data = 0
data = true
console.log(data)
if(data){
    console.log('value truthy')
}
else{
    console.log('value falsy')
}

// if i need to capture the falsy value to go inside if block
//use logical not
if(!data){
    console.log('inside if with a falsy value')
}

// capture all positive value
//capture any value to boolean 
if(!!data === true){
    console.log('only true')
}