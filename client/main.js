const form = document.querySelector("form");

form.addEventListener("submit", async function (event) {
event.preventDefault();


const formData = new FormData (form);
const formValues = Object.fromEntries(formData);


const response = await fetch("https://guestbook-ky49.onrender.com/joke", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formValues),
  });
  const data = await response.json();
  console.log(data);


});
