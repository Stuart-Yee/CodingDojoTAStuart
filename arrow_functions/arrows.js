// function printThis (val) {
//     console.log(val);
// }

myArr = [1, 2, 3];

// printThis(myArr);

for (var i = 0; i<myArr.length; i++){
    console.log(myArr[i]);
}

console.log("########")

var option1 = myArr.forEach((val) => {console.log(val); return val + 10;});

console.log("And now map");

var option2 = myArr.map((val) => {console.log(val); return "Hello";});

console.log("forEach", option1);
console.log("map", option2);