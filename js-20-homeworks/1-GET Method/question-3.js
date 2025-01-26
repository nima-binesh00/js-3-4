/*
 Todo 1: Use this site -> "https://jsonplaceholder.typicode.com/users"
 Todo 2: Make a card with user data
 Todo 3: Each card should contain the name and company name
 Todo 4: In order to use the HTML and CSS, use the <article> tag as a container to append all the cards. For each card, create a <div> to set the innerText inside it.
*/

const article = document.querySelector("article");

// ! Answer
let num2;
async function name(params) {
  try {
    let num1 = await fetch("https://jsonplaceholder.typicode.com/users");
    num2 = await num1.json();
    console.log(num2);
    num();
  } catch (e) {
    console.log(e);
  }
}
name();
function num(params) {
  for (const element of num2) {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const h3 = document.createElement("h3");
    div.style.background = "green";
    h1.innerText = element.name;
    h3.innerText = element.company.name;
    article.append(div);
    div.append(h1);
    div.append(h3);
  }
}
