const arr = ['giraffe','tiger','lion'];//homogeneous data
const arr2 = [1,2,3,4];//homogeneous data

arr.push('cheetah');
arr2.push(6);

arr.forEach(element=>{
    console.log(element);
});

arr2.forEach(element=>{
    console.log(element);
});

const fruits = ['banana', 'orange'];
fruits.unshift('apple');//will add elements in the begining of the array
console.log(fruits);
//fruits.findIndex(findFruit('apple'));

fruits.findIndex(findFruit);

function findFruit(fruit){
    return fruit=="banana";
}

const ages = [6,2,3,4];
ages.findIndex(checkAge);
ages.sort();//ascending
ages.reverse();//descending after asc in the previous line

function checkAge(age){
    return age>3;
}

const cars = ['BMW','Mercedes'];

const car = {type:"fiat",model:"400",color:"White"}; //name:value pairs
// use this while matching the data to the documents of mongo