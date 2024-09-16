/* let num = [3,4,5,6,2];
const square = num.map(num => num ** 2);
console.log(square); */

/* function student (score){
    return score >= 90 ? 'A' :
    score >= 80 ? 'B' :
    score >= 70 ? 'C' :
    score >= 60 ? 'D' :
    score >= 50 ? 'E' : 'F' ;
}
console.log(student(45));
console.log(student(85));
console.log(student(100));
console.log(student(60));
 */


/* 
const car = {
    company: 'TATA',
    model: 'Harrier',
    year: 2020
}
function changeyear(newyear){
 car.year = newyear
}

let {model , year} =car;
console.log(`Model:${model},Year:${year}`);

changeyear(2022);
console.log(`updated year: ${car.year}`); */

/* function prime(num){
    if(num <= 1){
        return false
    }

    for(let i=2; i<num;i++){
        if(num%i === 0) return false
    }
    return true;
}

let num1 =  [1,2,3,4,5,6]

let primenum = num1.filter(prime);
console.log(primenum) */

/* map method is use to create a new array by applying a function to every element of array.
ex:
let arr =  [2,3,4,6,7]
let arr1 = arr.map(arr => arr + 1);
*/

/* 
filter method is use to create a new array with all elements that pass
the test implemented by the function 
ex:
let num = [2,3,4,6,5];
let newnum = num.filter( function(n) {
 return n % 2 == 0;
})
console.log(newnum)
*/

/*
reduce method executes a reducer function on each element of the array
resulting in a single output value.
let num = [2,3,4,6,5];
let newnum = num.reduce( function(acc,n) {
 if(n%2==0){
 acc.push(n);
 }
 return acc
},[]);
console.log(newnum)
 */

/* const newJock = async()=>{
    try{
        const responce = await fetch('https://official-joke-api.appspot.com/random_joke')
        const joke = await responce.json();
        console.log(joke)
    }catch(error){
        console.error('error joke',error);
    }
}
newJock(); */

/* const person ={
    name: 'Ankit',
    address: {
        street: '123 sector',
        city: "new york",
    }
}
const phonenumber = person?.contact?.phone;
console.log(phonenumber); */