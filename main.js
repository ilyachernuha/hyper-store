const form = document.getElementById("form");

form.addEventListener("submit", handleFormSubmit);

async function handleFormSubmit(e) {
  e.preventDefault();
  const { data } = await axios.post("http://127.0.0.1:3000", form, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(data);
}
