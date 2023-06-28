const form = document.getElementById("form");

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  console.log(e.target);
}
