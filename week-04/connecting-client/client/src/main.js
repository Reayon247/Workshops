console.log("hello world");

const peopleForm = document.getElementById("people-form");

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(peopleForm);
  const formValues = Object.fromEntries(formData);

  fetch("http://localhost:8080/newPeople", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
  console.log(formValues);
}

peopleForm.addEventListener("submit", handleSubmit);
