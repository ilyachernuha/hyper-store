// SWIPER
const carousel = document.getElementById("carousel");
const swiper = document.getElementById("swiper");

carousel.addEventListener("click", (e) => {
  const active = carousel.querySelector(".active");
  active.classList.remove("active");
  const { target } = e;
  const { imageId } = target.dataset;
  swiper.style.transform = `translateX(${-imageId * 750}px)`;
  target.classList.add("active");
});

// FORM
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
