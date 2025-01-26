//?Now as a CTO of the company , you want to replace a person, so you need to change first name , last name and phone number of user with ID 1.

/**
 * new DATA:
 *  first name: Lufy
 *  last name: monkey. D
 *  phone number: (945) 635-3854
 */

let DATA = {
  firstname: "Lufy",
  lastname: "monkey. D",
  phonenumber: "(945) 635-3854",
};

//!PUT
/** WRITE YOUR CODE BELOW DOWN */

//*To be continue...
function num() {
  fetch("https://67965eabbedc5d43a6c50d9e.mockapi.io/user/1", {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(DATA),
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
