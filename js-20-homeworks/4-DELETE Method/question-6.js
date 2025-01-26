//!DELETE
//?1-The CEO found out your plan of adding your family to the company, so now he want to delete them from company. he need to right a function to delete these people from company.

/** WRITE YOUR CODE BELOW DOWN */
function num() {
  fetch("https://67965eabbedc5d43a6c50d9e.mockapi.io/user/5", {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  });
}
async function name(params) {
  try {
    let num1 = await fetch("https://67965eabbedc5d43a6c50d9e.mockapi.io/user");
    num2 = await num1.json();
    console.log(num2);
  } catch (e) {
    console.log(e);
  }
}
name();
num();

//******************************************************************************** */
//?2-The CEO of company got crazy because of financial problems, so he decided to fire employees with even ID's.
//todo: write a function to delete them.

/** WRITE YOUR CODE BELOW DOWN */

//*End of story :)
let data;
let id = 6;
async function num() {
  await name();
  for (const element of data) {
    if (element.id == id)
      fetch(`https://67965eabbedc5d43a6c50d9e.mockapi.io/user/${id}`, {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });
  }
}

async function name(params) {
  try {
    let num1 = await fetch("https://67965eabbedc5d43a6c50d9e.mockapi.io/user");
    num2 = await num1.json();
    console.log(num2);
    data = num2;
  } catch (e) {
    console.log(e);
  }
}

num();
