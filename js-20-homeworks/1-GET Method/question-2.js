/*
 todo1: use this site -> "https://jsonplaceholder.typicode.com/users"
 todo2: write an async function and fetch the data
 todo3: using try-catch block to handle the error
*/

// ! Answer
async function name(params) {
  try {
    let num1 = await fetch("https://jsonplaceholder.typicode.com/users");
    let num2 = await num1.json();
    console.log(num2);
  } catch (e) {
    console.log(e);
  }
}
name();
