// You've created a new programming language, and now you've decided to add hashmap support to it.Actually you are quite disappointed that in common programming languages it's impossible to add a number to all hashmap keys, or all its values. So you've decided to take matters into your own hands and implement your own hashmap in your new language that has the following operations:

// insert x y - insert an object with key x and value y.
// get x - return the value of an object with key x.
// addToKey x - add x to all keys in map.
// addToValue y - add y to all values in map.
// To test out your new hashmap, you have a list of queries in the form of two arrays: queryTypes contains the names of the methods to be called(eg: insert, get, etc), and queries contains the arguments for those methods(the x and y values).

// Your task is to implement this hashmap, apply the given queries, and to find the sum of all the results for get operations.

//   Example

// For queryType = ["insert", "insert", "addToValue", "addToKey", "get"] and query = [[1, 2], [2, 3], [2], [1], [3]], the output should be hashMap(queryType, query) = 5.

// The hashmap looks like this after each query:

// 1 query: { 1: 2 }
// 2 query: { 1: 2, 2: 3 }
// 3 query: { 1: 4, 2: 5 }
// 4 query: { 2: 4, 3: 5 }
// 5 query: answer is 5
// The result of the last get query for 3 is 5 in the resulting hashmap.

// For queryType = ["insert", "addToValue", "get", "insert", "addToKey", "addToValue", "get"] and query = [[1, 2], [2], [1], [2, 3], [1], [-1], [3]], the output should be hashMap(queryType, query) = 6.

// The hashmap looks like this after each query:

// 1 query: { 1: 2 }
// 2 query: { 1: 4 }
// 3 query: answer is 4
// 4 query: { 1: 4, 2: 3 }
// 5 query: { 2: 4, 3: 3 }
// 6 query: { 2: 3, 3: 2 }
// 7 query: answer is 2
// The sum of the results for all the get queries is equal to 4 + 2 = 6.

// Edit:
// I tried using a second map to clone the incremented keys, and put it back into the first map but it exceeds time limit.

// class HashMap {
//   constructor() {
//     this.map = {};
//     this.cKey = 0;
//     this.cValue = 0;
//   }

//   insert(x, y) {
//     this.map[parseInt(x) - this.cKey] = y - this.cValue;
//   }

//   get(x) {
//     return this.map[parseInt(x) - this.cKey] + this.cValue;
//   }

//   addToKey(n) {
//     this.cKey += n;
//   }

//   addToValue(n) {
//     this.cValue += n;
//   }
// }

// function testHashMap(queryTypes, queries) {
//   let sumOfGet = 0;
//   const map = new HashMap();
//   for (let i = 0; i < queryTypes.length; i++) {
//     const args = queries[i];
//     const queryType = queryTypes[i];

//     switch (queryType) {
//       case 'get':
//         const res = map.get(args[0]);
//         if (res !== undefined && res > 0) {
//           sumOfGet += res;
//         }
//         break;
//       case 'insert':
//         map.insert(args[0], args[1]);
//         break;
//       case 'addToKey':
//         map.addToKey(args[0]);
//         break;
//       case 'addToValue':
//         map.addToValue(args[0]);
//         break;
//     }
//   }


//   return sumOfGet;
// }