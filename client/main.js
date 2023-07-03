import "./style.css";

import Swiper from "swiper";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";

import axios from "axios";

const thumb = new Swiper("#thumb", {
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
  modules: [Thumbs],
  autoHeight: true,
  thumbs: {
    swiper: thumb,
  },
});

const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const { data } = await axios.post("http://127.0.0.1:3000", form, {
    headers: {
      "Content-Type": "application/json",
    },
  });
});
