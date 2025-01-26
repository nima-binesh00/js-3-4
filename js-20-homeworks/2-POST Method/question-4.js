// To make a request to an endpoint, you can use the website https://mockapi.io/
// To use this website, you need to sign up first.

// !POST
//?1-Imagine you are CTO of a company, and you want to add three people of your family (pull strings :) ) so you have to use 'POST Method' to add these people that are in given array to the MockAPI.
const users = [
  {
    firstName: "Grattan",
    lastName: "Dalton",
  },
  {
    firstName: "William",
    lastName: "Dalton",
  },
  {
    firstName: "Robert",
    lastName: "Dalton",
  },
];

/** WRITE YOUR CODE BELOW DOWN */
// function num() {
//   for (const element of users) {
//     fetch("https://6796550ebedc5d43a6c4f1d2.mockapi.io/user/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(element),
//     });
//   }
// }
async function name(params) {
  try {
    let num1 = await fetch("https://6796550ebedc5d43a6c4f1d2.mockapi.io/user");
    let num2 = await num1.json();
    console.log(num2);
    // num();
  } catch (e) {
    console.log(e);
  }
}
name();

//****************************************************************************************** */
//?2-So your company should have a signup form for the people that saw the Employment Announcement,The signup form should get first name , last name and the phone number to admission inside the company.

/** WRITE YOUR CODE BELOW DOWN */

//*To be continue...
let num88 = document.querySelector("form");
console.log(num88[0]);

function num11(a, b) {
  fetch("https://6796550ebedc5d43a6c4f1d2.mockapi.io/user/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: a,
      lastName: b,
    }),
  });
}
num88.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target[0].value);
  num11(e.target[0].value, e.target[1].value);
});
