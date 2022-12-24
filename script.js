// Test data
const strArray1 = ["aaa","bbb","ccc","ddd"];
const numArray = [45,7,6,32,5,3,6,3,2,4,6,4,2];
const strArray2 = ["hello","world","I","am","a","JS","developer"];
let resArr = ["lll","mmm"];

// Functions for onclick event
function test1(){
    arrayCopy();
    console.log(resArr); // expected ["bbb","ccc","ddd","lll","mmm"]
    resArr = ["lll","mmm"];
    arrayCopy1();
    console.log(resArr); // expected ["lll","ddd","mmm"]
}
/*function test2(){
    console.log(count(strArray1, "ddd")); // expected 1
    console.log(count(numArray,6)); // expected 3
    console.log(count(numArray,-10)); // expected 0
}*/
function test3(){
    displayOccurrences(strArray1);
    displayOccurrences1(numArray);
}
/*function test4(){
    const res = ulSurround(strArray1);
    console.log(res);
}
function test5(){
    const res = lengthSort(strArray2);
    console.log(res); // expected ["I","a","am","JS","hello","world","developer"]
}*/
// Function for implementation


//function arrayCopy(src,srcPos,dst,dstPos,length)
function arrayCopy(){
    strArray1.splice(0,1);
    let res = strArray1.concat(resArr);
    resArr = res.slice(0,res.length);
}
function arrayCopy1(){
    strArray1.splice(0,2);
    resArr.splice(1,0,...strArray1);
}


/*function count(array, str){
    //TODO implement here
}*/

function displayOccurrences(array){
    let count = {};
    strArray1.filter(function (i){
        if (count[i] != undefined)
            count[i]++;
        else
            count[i] = 1;
    });
    for (let i in count)
        console.log(i + ' -> ' + count[i]);
}
function displayOccurrences1(array){
    let count = {};
    numArray.filter(function (i){
        if (count[i] != undefined)
            count[i]++;
        else
            count[i] = 1;
    });
    for (let i in count)
        console.log(i + ' -> ' + count[i]);
}
/*
function ulSurround(strings){
    //TODO implement here
}
function lengthSort(array){
    //TODO implement here
}*/
