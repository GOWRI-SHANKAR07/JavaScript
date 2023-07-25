// creating array
const arr = [10,25,30,45, 'Hello', 'World', 4.5,];

// Multi Dimensional Array
const multiArr = [[1,2,3], ['Hello', 'Sprilte',], [31.5, 23.5, 34.6]];

// accessing array using indexes
console.log(arr[5]);
console.log(multiArr[2][1]);

// modifying array using indexes
console.log(arr[4] = 'Bye');
console.log(arr[1][1] = 'World!');

// push method
arr.push(1)
console.log(arr);
multiArr.push([10,37.8,'Spritle'])
console.log(multiArr);

// pop method
console.log(arr.pop());
console.log(multiArr.pop());
console.log(multiArr[2].pop());

// shift
console.log(arr.shift());
console.log(multiArr.shift());
console.log(multiArr[1].shift());

// unshift
arr.unshift(20.4)
console.log(arr);
multiArr.unshift(100);
console.log(multiArr);

slice
console.log(arr.slice(1,3)); 
console.log(arr);
console.log(multiArr.slice(0,4));

// splice
const array = arr.splice(1,3);
console.log(array);

