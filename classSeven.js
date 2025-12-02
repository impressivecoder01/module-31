// (advanced) function arguments pass by reference pass by value
const manik = {nam: 'manik', balance :20000};
const bosir = {nam: 'bosir', balance: 50000}
function money(a,b){
    a.balance = 0
    b.balance = b.balance/2
    const total = a.balance + b.balance
    return total
}
console.log(money(manik,bosir))
console.log(manik,bosir)

function add(a,b){
    // console.log(a,b)
    console.log(arguments)
    const params = [...arguments]
    console.log(params)
}
add(88,44,55,4)