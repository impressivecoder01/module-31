// (advanced) explore about closure
function counter (){
    let count =0;
    function inner(){
        console.log('called')
    }
    return inner
}
const out = counter()
console.log(out())