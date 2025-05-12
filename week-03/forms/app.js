console.log("Hello World");

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  //   console.log(formData);
  const jsObjectPlease = Object.fromEntries(formData);
  console.log(jsObjectPlease);
});
