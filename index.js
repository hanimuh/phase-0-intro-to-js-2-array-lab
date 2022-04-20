// Write your solution here!
const cats=[]
function beforeEach (){
    cats.length=0;
    cats.push ("Milo", "Otis", "Garfield");
}
beforeEach ('Milo', 'Otis', 'Garfield')
function destructivelyAppendCat(name){
    cats.push (name);
}
destructivelyAppendCat("Ralph")

function destructivelyPrependCat(name){
    cats.unshift(name);
}
destructivelyPrependCat("Bob")

function destructivelyRemoveLastCat(){
    cats.pop();
}
destructivelyRemoveLastCat()

function destructivelyRemoveFirstCat(){
    cats.shift()
}
destructivelyRemoveFirstCat()


function appendCat (name){
    let newArr=[];
    for (let item of cats){
        newArr.push (item);
    }
    newArr.push (name)
    return newArr;
}
appendCat ("Broom")

function prependCat(name){
    let newArr=[];
    newArr.push (name);
    for (let item of cats){
        newArr.push (item);
    }
    return newArr;
}
prependCat("Arnold")

function removeLastCat(){
    let newArr=[];
    for (let item of cats){
        newArr.push (item);
    }
    newArr.pop();
    return newArr;
}
removeLastCat()

function removeFirstCat(){
    let newArr=[];
    for (let item of cats){
        newArr.push (item);
    }
    newArr.shift();
    return newArr;
}
removeFirstCat()


console.log (removeFirstCat())
