import "lazysizes";

import axios from "axios";

import Swiper from "swiper";
import {
  Thumbs,
  Navigation,
  Pagination,
  Mousewheel,
  FreeMode,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./styles/fonts.css";
import "./styles/style.css";

const thumb = new Swiper("#thumb", {
  direction: "vertical",
  slidesPerView: "auto",
  spaceBetween: 18,
  autoHeight: true,
  modules: [Navigation, Mousewheel, FreeMode],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: {
    releaseOnEdges: false,
  },
  freeMode: {
    enabled: true,
  },
});

const swiper = new Swiper("#swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 0,
  autoHeight: true,
  modules: [Thumbs, Pagination],
  thumbs: {
    autoScrollOffset: 7,
    swiper: thumb,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const preventScrollOnThumb = document
  .getElementById("thumb")
  .addEventListener("wheel", (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  });

const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const { data } = await axios.post("/api", form, {
    headers: {
      "Content-Type": "application/json",
    },
  });
});
