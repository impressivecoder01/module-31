// null vs undefined, different ways you will get undefined
/**
 * undefined --> not define
 */

let money;
console.log(money)

function total (a,b){
    console.log('values of parameters',a,b)
    const sum = a+ b;
    console.log('total', sum)
}
// total()
const result = total(5,6)
console.log('value of function called', result)

function total2 (a,b){
    console.log('values of parameters',a,b)
    if(a===undefined || b === undefined){
        return;
    }
    if(a&&b){
        const sum = a+b
        return sum
    }
}
const result2 = total2(1)
console.log('return2 is',result2)

const phone = {
    nam: 'sumsung',
    price : 30000,
}
console.log(phone.a)

const banks = ['sonali', 'rupali', 'jamuna']
console.log(banks[5])
delete banks[1]
console.log(banks)
console.log(banks[1])
console.log(typeof undefined)
console.log(typeof null)