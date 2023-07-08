import "./style.css";

import Swiper from "swiper";
import { Navigation, Thumbs, Pagination, Zoom } from "swiper/modules";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/zoom";

import axios from "axios";

const carousel = new Swiper("#carousel", {
  direction: "vertical",
  slidesPerView: 4,
  autoHeight: true,
  modules: [Navigation],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper = new Swiper("#swiper", {
  direction: "horizontal",
  modules: [Pagination, Thumbs, Zoom],
  slidesPerView: 1,
  autoHeight: true,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
  },
  thumbs: {
    swiper: carousel,
  },
});

const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const { data } = await axios.post("/api.php", form, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(data);
});
